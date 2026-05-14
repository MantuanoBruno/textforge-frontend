"use client";

import { useCallback } from "react";

import { useDropzone } from "react-dropzone";

import { Upload, Camera, Hammer } from "lucide-react";

import { ForgeSparks } from "@/components/animations/forge-sparks";

type UploadZoneProps = {
  onFileSelect: (file: File) => void;
  loading: boolean;
};

export function UploadZone({ onFileSelect, loading }: UploadZoneProps) {
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      if (!acceptedFiles.length) return;

      onFileSelect(acceptedFiles[0]);
    },
    [onFileSelect]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,

    multiple: false,

    accept: {
      "text/plain": [".txt"],

      "application/pdf": [".pdf"],

      "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
        [".docx"],

      "image/*": [".png", ".jpg", ".jpeg", ".webp"],
    },
  });

  return (
    <div
      {...getRootProps()}
      className={`
        relative
        cursor-pointer
        rounded-2xl
        border-2
        border-dashed
        transition-all
        duration-500
        p-12
        text-center
      
        ${
          loading
            ? "animate-[pulse_1.5s_ease-in-out_infinite] shadow-[0_0_40px_rgba(251,191,36,0.08)]"
            : ""
        }
      
        ${
          isDragActive
            ? "border-amber-500 bg-amber-500/5"
            : "border-zinc-800 hover:border-zinc-700 bg-zinc-900/30"
        }
      `}
    >
      <ForgeSparks active={loading} />

      <input {...getInputProps()} />

      <div
        className="
          flex
          justify-center
          mb-6
        "
      >
        <div
          className="
            p-4
            rounded-xl
            bg-zinc-800
            border
            border-zinc-700
            shadow-2xl
          "
        >
          {loading ? (
            <Hammer
              className="
      text-amber-500
      animate-pulse
    "
            />
          ) : (
            <Upload
              className="
      text-zinc-400
    "
            />
          )}
        </div>
      </div>

      <h3
        className="
          text-xl
          font-medium
          mb-2
        "
      >
        Drop the raw material
      </h3>

      <p
        className="
          text-zinc-500
          text-sm
          mb-6
          uppercase
          tracking-widest
        "
      >
        TXT • PDF • DOCX • JPG • WEBP
      </p>

      {loading && (
        <p
          className="
      text-amber-500
      text-sm
      animate-pulse
      mt-4
      tracking-widest
      uppercase
    "
        >
          Forging analysis...
        </p>
      )}

      <div
        className="
          flex
          items-center
          justify-center
          gap-4
        "
      >
        <button
          className="
            hidden
            sm:flex
            items-center
            gap-2
            px-4
            py-2
            bg-zinc-100
            text-black
            rounded-lg
            font-medium
            text-sm
            hover:bg-white
            transition-colors
          "
        >
          Browse Files
        </button>

        <label
          className="
            flex
            sm:hidden
            items-center
            gap-2
            px-4
            py-2
            bg-zinc-800
            text-zinc-100
            rounded-lg
            font-medium
            text-sm
            cursor-pointer
          "
        >
          <Camera size={18} />
          Take Photo
          <input
            type="file"
            accept="image/*"
            capture="environment"
            className="hidden"
            onChange={(e) => {
              const file = e.target.files?.[0];

              if (file) {
                onFileSelect(file);
              }
            }}
          />
        </label>
      </div>
    </div>
  );
}
