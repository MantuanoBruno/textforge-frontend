"use client";

import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { motion } from "framer-motion";
import { Upload, FileText } from "lucide-react";
import { GlowButton } from "@/components/ui/GlowButton";
import { ForgeSparks } from "@/components/animations/ForgeSparks";

interface UploadDropzoneProps {
  onUpload: (file: File) => void;
  isUploading?: boolean;
}

export function UploadDropzone({ onUpload, isUploading }: UploadDropzoneProps) {
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const file = acceptedFiles[0];

      if (!file) return;

      onUpload(file);
    },
    [onUpload]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: false,
    accept: {
      "text/plain": [".txt"],
      "application/pdf": [".pdf"],
      "application/msword": [".doc"],
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
        [".docx"],
      "image/*": [".png", ".jpg", ".jpeg", ".webp"],
    },
  });

  return (
    <section className="relative mx-auto mt-10 max-w-4xl px-6">
      <motion.div
        initial={false}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <div
          {...getRootProps()}
          className={`group relative cursor-pointer overflow-hidden rounded-3xl border border-dashed p-14 text-center transition-all duration-500 backdrop-blur-sm
            ${
              isDragActive
                ? "border-amber-500 bg-amber-500/5"
                : "border-zinc-800 bg-zinc-900/40 hover:border-zinc-700"
            }
          `}
        >
          <input {...getInputProps()} />

          {/* Glow */}
          <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-gradient-to-br from-amber-500/5 to-transparent " />

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center">
            {/* Icon */}
            <div className="relative mb-6">
              <motion.div
                animate={
                  isUploading
                    ? {
                        scale: [1, 1.04, 0.97, 1],
                      }
                    : {}
                }
                transition={{
                  duration: 0.35,
                }}
                className=" rounded-2xl border border-zinc-700 bg-zinc-800/80 p-5 shadow-2xl  "
              >
                {isDragActive || isUploading ? (
                  <FileText className="text-amber-500" size={34} />
                ) : (
                  <Upload className="text-zinc-400" size={34} />
                )}
              </motion.div>

              <ForgeSparks active={!!isUploading} />
            </div>

            {/* Title */}
            <h2 className="text-2xl font-semibold tracking-tight text-zinc-100">
              Drop the raw material
            </h2>

            {/* Subtitle */}
            <p className=" mt-3 text-xs uppercase tracking-[0.35em] text-zinc-500 ">
              TXT • PDF • DOCX • JPG • WEBP
            </p>

            {/* CTA */}
            <GlowButton className="mt-8">Select Document</GlowButton>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
