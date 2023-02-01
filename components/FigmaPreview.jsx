"use client";

import clsx from "clsx";
import { useState } from "react";
import { Interfaces } from "doodle-icons";

export default function FigmaPreview({ src }) {
  const [loading, setLoading] = useState(true);
  const id = src.split(/\//).pop();

  function loaded() {
    setLoading(false);
  }

  return (
    <div
      className={clsx(
        "relative mb-10 bg-black lg:mb-20",
        "border-4 border-black",
        "shadow-solid"
      )}
    >
      {loading && (
        <div
          className={clsx(
            "absolute inset-0",
            "flex flex-col items-center justify-center gap-6 lg:gap-10",
            "text-brand"
          )}
        >
          <Interfaces.Zap
            className="z-10 w-10 animate-pulse lg:w-40"
            fill="currentColor"
          />
          <span className="text-2xl lg:text-4xl">Loading Figma Preview</span>
        </div>
      )}
      <iframe
        width="100%"
        src={`https://www.figma.com/embed?embed_host=codedesign&hub_file_id=${id}&community_viewer=true`}
        allowFullScreen
        className="aspect-[16/8]"
        onLoad={loaded}
      />
    </div>
  );
}
