'use client';

import clsx from 'clsx';
import { useState } from 'react';
import { Interfaces } from 'doodle-icons';

export default function FigmaPreview({ src }) {
  const [loading, setLoading] = useState(true);
  const id = src.split(/\//).pop();

  function loaded() {
    setLoading(false);
  }

  return (
    <div
      className={clsx(
        'bg-black relative mb-20',
        'border-4 border-black',
        'shadow-solid'
      )}>
      {loading && (
        <div
          className={clsx(
            'absolute inset-0',
            'flex flex-col justify-center items-center gap-10',
            'text-brand'
          )}>
          <Interfaces.Zap
            width={80}
            className="z-10 animate-pulse"
            fill="currentColor"
          />
          <span className="text-4xl">Loading Figma Preview</span>
        </div>
      )}
      <iframe
        width="100%"
        src={`https://www.figma.com/embed?embed_host=codedesign&hub_file_id=${id}&community_viewer=true`}
        allowfullscreen
        className="aspect-[16/8]"
        onLoad={loaded}
      />
    </div>
  );
}
