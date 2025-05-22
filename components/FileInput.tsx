import React from "react";
import Image from "next/image";

const FileInput = ({
  id,
  label,
  accept,
  file,
  inputRef,
  onChange,
  previewUrl,
  onReset,
  type,
}: FileInputProps) => {
  return (
    <section className="file-input">
      <label htmlFor={id}>{label}</label>
      <input
        type="file"
        id={id}
        accept={accept}
        ref={inputRef}
        onChange={onChange}
        hidden
      />
      {!previewUrl ? (
        <figure onClick={() => inputRef.current?.click()}>
          <Image
            src="/assets/icons/upload.svg"
            alt="upload"
            width={24}
            height={24}
          />
          <p>Click to upload your {id}</p>
        </figure>
      ) : (
        <div>
          {type === "video" ? (
            <video src={previewUrl} controls />
          ) : (
            <Image src={previewUrl} alt="preview" fill />
          )}
          <button type="button" onClick={onReset}>
            <Image
              src="/assets/icons/close.svg"
              alt="close"
              width={16}
              height={16}
            />
            <p>{file?.name}</p>
          </button>
        </div>
      )}
    </section>
  );
};

export default FileInput;
