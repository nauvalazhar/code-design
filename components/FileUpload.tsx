'use client';

import { Button } from 'components/Button';
import { Files } from 'doodle-icons';
import Image from 'next/image';
import { type ElementType, type SVGProps, useRef, useState } from 'react';

type FileUploadProps = {
  name: string;
  icon?: ElementType<SVGProps<SVGSVGElement>>;
  defaultValue?: string;
};

const FileUpload = ({
  name,
  icon: Icon = Files.File,
  defaultValue,
}: FileUploadProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [showInput, setShowInput] = useState(defaultValue ? false : true);
  const [oldFile, setOldFile] = useState(defaultValue);

  function handleClick() {
    setShowInput(true);

    setTimeout(() => {
      inputRef.current?.click();
    }, 0);
  }

  function handleChange(e) {
    const file = e.target.files[0];

    if (file) {
      setFile(file);
      setPreview(URL.createObjectURL(file));
    }
  }

  return (
    <div>
      {showInput ? (
        <input
          type="file"
          ref={inputRef}
          onChange={handleChange}
          className="invisible absolute"
          accept="image/png,image/webp"
          name={name}
        />
      ) : (
        <input type="hidden" name={name} value={defaultValue} />
      )}
      {oldFile && <input type="hidden" name={`${name}_old`} value={oldFile} />}

      <Button size="sm" variant="secondary" type="button" onClick={handleClick}>
        <Icon className="w-8" />
        Choose File
      </Button>

      {preview && (
        <img
          src={preview}
          alt="Preview"
          className="mt-4 w-64 border-2 border-black"
        />
      )}

      {defaultValue && !preview && (
        <div className="mt-4 relative size-64">
          <Image
            src={defaultValue}
            alt="Preview"
            className="border-2 border-black object-cover"
            fill
          />
        </div>
      )}
    </div>
  );
};

export default FileUpload;
