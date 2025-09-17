// Entry point: prepare interactive timeline and info tooltips once the DOM is ready.
document.addEventListener('DOMContentLoaded', () => {
  initTimeline();
  initTooltips();
});

/**
 * Initialize the horizontal timeline with keyboard support, scroll snapping,
 * and previous/next controls. The component remains swipeable for touch users
 * while preserving accessibility for keyboard navigation.
 */
function initTimeline() {
  const track = document.querySelector('.timeline-track');
  if (!track) return;

  const cards = Array.from(track.querySelectorAll('.timeline-card'));
  const controls = Array.from(document.querySelectorAll('.timeline-control'));
  if (!cards.length) return;

  let activeIndex = 0;
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  const clampIndex = (value) => Math.max(0, Math.min(value, cards.length - 1));

  const updateAria = () => {
    cards.forEach((card, idx) => {
      if (idx === activeIndex) {
        card.setAttribute('aria-current', 'true');
        card.classList.add('is-active');
      } else {
        card.setAttribute('aria-current', 'false');
        card.classList.remove('is-active');
      }
    });

    controls.forEach((control) => {
      const direction = control.dataset.direction;
      if (direction === 'prev') {
        control.disabled = activeIndex === 0;
      } else if (direction === 'next') {
        control.disabled = activeIndex === cards.length - 1;
      }
    });
  };

  const scrollToIndex = (index) => {
    activeIndex = clampIndex(index);
    const targetCard = cards[activeIndex];
    if (!targetCard) return;

    const behavior = reduceMotion.matches ? 'auto' : 'smooth';
    targetCard.scrollIntoView({ behavior, block: 'nearest', inline: 'center' });
    if (typeof targetCard.focus === 'function') {
      targetCard.focus({ preventScroll: true });
    }
    updateAria();
  };

  controls.forEach((control) => {
    control.addEventListener('click', () => {
      const delta = control.dataset.direction === 'next' ? 1 : -1;
      scrollToIndex(activeIndex + delta);
    });
  });

  cards.forEach((card, idx) => {
    card.addEventListener('focus', () => {
      activeIndex = idx;
      updateAria();
    });

    card.addEventListener('keydown', (event) => {
      if (event.key === 'ArrowRight') {
        event.preventDefault();
        scrollToIndex(idx + 1);
      } else if (event.key === 'ArrowLeft') {
        event.preventDefault();
        scrollToIndex(idx - 1);
      } else if (event.key === 'Home') {
        event.preventDefault();
        scrollToIndex(0);
      } else if (event.key === 'End') {
        event.preventDefault();
        scrollToIndex(cards.length - 1);
      }
    });
  });

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.55) {
            const index = cards.indexOf(entry.target);
            if (index !== -1) {
              activeIndex = index;
              updateAria();
            }
          }
        });
      },
      { root: track, threshold: 0.55 }
    );

    cards.forEach((card) => observer.observe(card));
  }

  updateAria();
}

/**
 * Initialize tooltip toggles for contextual info icons. Tooltips are positioned
 * dynamically to remain inside the viewport, close on blur or Escape, and are
 * safe for touch interactions.
 */
function initTooltips() {
  const triggers = Array.from(document.querySelectorAll('.info-trigger'));
  if (!triggers.length) return;

  let openButton = null;

  const getTooltip = (button) => {
    const id = button.getAttribute('data-tooltip-target');
    return id ? document.getElementById(id) : null;
  };

  const closeTooltip = (button) => {
    if (!button) return;
    const tooltip = getTooltip(button);
    if (!tooltip) return;

    tooltip.hidden = true;
    tooltip.removeAttribute('data-visible');
    tooltip.removeAttribute('data-position');
    button.setAttribute('aria-expanded', 'false');
    button.removeAttribute('aria-describedby');
    if (openButton === button) {
      openButton = null;
    }
  };

  const positionTooltip = (button, tooltip) => {
    const padding = 12;
    const rect = button.getBoundingClientRect();
    const tipRect = tooltip.getBoundingClientRect();
    let top = rect.bottom + 10;
    let position = 'bottom';

    if (top + tipRect.height + padding > window.innerHeight) {
      top = rect.top - tipRect.height - 10;
      position = 'top';
    }

    let left = rect.left + rect.width / 2 - tipRect.width / 2;
    if (left < padding) {
      left = padding;
    }
    if (left + tipRect.width + padding > window.innerWidth) {
      left = window.innerWidth - tipRect.width - padding;
    }

    tooltip.style.left = `${Math.round(left)}px`;
    tooltip.style.top = `${Math.round(Math.max(top, padding))}px`;
    tooltip.setAttribute('data-position', position);
  };

  const openTooltip = (button) => {
    const tooltip = getTooltip(button);
    if (!tooltip) return;

    if (openButton && openButton !== button) {
      closeTooltip(openButton);
    }

    tooltip.hidden = false;
    tooltip.setAttribute('data-visible', 'true');
    button.setAttribute('aria-expanded', 'true');
    button.setAttribute('aria-describedby', tooltip.id);
    openButton = button;

    // Position on the next frame to ensure measurements use the visible tooltip.
    requestAnimationFrame(() => {
      positionTooltip(button, tooltip);
    });
  };

  const toggleTooltip = (event) => {
    event.stopPropagation();
    const button = event.currentTarget;
    const tooltip = getTooltip(button);
    if (!tooltip) return;

    const willOpen = tooltip.hidden;
    if (willOpen) {
      openTooltip(button);
    } else {
      closeTooltip(button);
    }
  };

  triggers.forEach((button) => {
    button.addEventListener('click', toggleTooltip);
    button.addEventListener('pointerdown', (event) => event.stopPropagation());
    button.addEventListener('keydown', (event) => event.stopPropagation());
    button.addEventListener('blur', () => {
      setTimeout(() => {
        if (document.activeElement !== button) {
          closeTooltip(button);
        }
      }, 80);
    });
  });

  document.addEventListener(
    'pointerdown',
    (event) => {
      if (!openButton) return;
      const tooltip = getTooltip(openButton);
      if (!tooltip) return;
      const isButton = openButton.contains(event.target);
      const isTooltip = tooltip.contains(event.target);
      if (!isButton && !isTooltip) {
        closeTooltip(openButton);
      }
    },
    true
  );

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && openButton) {
      closeTooltip(openButton);
      openButton.focus({ preventScroll: true });
    }
  });

  const repositionOpenTooltip = () => {
    if (!openButton) return;
    const tooltip = getTooltip(openButton);
    if (!tooltip || tooltip.hidden) return;
    positionTooltip(openButton, tooltip);
  };

  window.addEventListener('resize', repositionOpenTooltip);
  document.addEventListener('scroll', repositionOpenTooltip, true);
}
