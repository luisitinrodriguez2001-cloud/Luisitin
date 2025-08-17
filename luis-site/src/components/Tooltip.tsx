import { useId, useState, cloneElement } from "react";
import type { ReactElement, ReactNode, MouseEvent, FocusEvent } from "react";

interface TooltipProps {
  content: ReactNode;
  children: ReactElement;
}

export default function Tooltip({ content, children }: TooltipProps) {
  const [visible, setVisible] = useState(false);
  const id = useId();
  const childProps = children.props as {
    onMouseEnter?: (e: MouseEvent<HTMLElement>) => void;
    onMouseLeave?: (e: MouseEvent<HTMLElement>) => void;
    onFocus?: (e: FocusEvent<HTMLElement>) => void;
    onBlur?: (e: FocusEvent<HTMLElement>) => void;
  };

  const trigger = cloneElement(
    children,
    {
      "aria-describedby": id,
      onMouseEnter: (e: MouseEvent<HTMLElement>) => {
        childProps.onMouseEnter?.(e);
        setVisible(true);
      },
      onMouseLeave: (e: MouseEvent<HTMLElement>) => {
        childProps.onMouseLeave?.(e);
        setVisible(false);
      },
      onFocus: (e: FocusEvent<HTMLElement>) => {
        childProps.onFocus?.(e);
        setVisible(true);
      },
      onBlur: (e: FocusEvent<HTMLElement>) => {
        childProps.onBlur?.(e);
        setVisible(false);
      },
    } as unknown as React.HTMLAttributes<HTMLElement>
  );

  return (
    <span className="relative inline-block">
      {trigger}
      <span
        id={id}
        role="tooltip"
        className={`absolute left-1/2 -translate-x-1/2 mt-2 whitespace-nowrap bg-gray-800 text-white text-xs rounded px-2 py-1 transition-opacity ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      >
        {content}
      </span>
    </span>
  );
}
