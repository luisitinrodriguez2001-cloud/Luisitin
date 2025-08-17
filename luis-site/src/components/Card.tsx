import { useState } from "react";
import type { ReactNode } from "react";
import Image from "next/image";

interface CardProps {
  imageSrc?: string;
  icon?: ReactNode;
  title: string;
  summary: ReactNode;
  detail: ReactNode;
}

export default function Card({ imageSrc, icon, title, summary, detail }: CardProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white rounded shadow p-6">
      <div className="flex items-center mb-2">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt=""
            width={48}
            height={48}
            className="w-12 h-12 mr-4 object-cover"
            loading="lazy"
          />
        ) : icon ? (
          <div className="w-12 h-12 mr-4 flex items-center justify-center">{icon}</div>
        ) : null}
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <div className="text-sm text-gray-600 mb-2">{summary}</div>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="text-primary underline text-sm"
        aria-expanded={open}
      >
        {open ? "Hide details" : "View details"}
      </button>
      {open && <div className="mt-2 text-sm">{detail}</div>}
    </div>
  );
}
