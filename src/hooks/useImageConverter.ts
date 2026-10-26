import { useState, useRef, useEffect } from "react";
import { UploadedFile, OutputFormat } from "../types/image";
import { imageService } from "../services/imageService";
import { downloadService } from "../services/downloadService";

const MAX_IMAGE_FILE_BYTES = 20 * 1024 * 1024;
const ALLOWED_IMAGE_TYPES = new Set([
  "image/jpeg", "image/png", "image/webp", "image/gif", "image/bmp",
]);

export function useImageConverter() {
  const [selectedFile, setSelectedFile] = useState<UploadedFile | null>(null);
  const [outputFormat, setOutputFormat] = useState<OutputFormat>("image/png");
  const [quality, setQuality] = useState(90);
  const [isConverting, setIsConverting] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const previewUrl = selectedFile?.previewUrl;
    return () => {
      if (previewUrl) URL.revokeObjectURL(previewUrl);
    };
  }, [selectedFile?.previewUrl]);

  const handleValidFile = (file: File, invalidFileErrorText: string, tooLargeErrorText: string) => {
    const extension = file.name.split(".").pop()?.toLowerCase();
    const supportedByExtension = new Set(["jpg", "jpeg", "png", "webp", "gif", "bmp"]).has(extension || "");
    const supportedByType = ALLOWED_IMAGE_TYPES.has(file.type);

    if (file.size <= 0 || (!supportedByType && !(file.type === "" && supportedByExtension))) {
      alert(invalidFileErrorText);
      return;
    }
    if (file.size > MAX_IMAGE_FILE_BYTES) {
      alert(tooLargeErrorText);
      return;
    }

    const previewUrl = URL.createObjectURL(file);
    setSelectedFile({ file, previewUrl });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, invalidFileErrorText: string, tooLargeErrorText: string) => {
    if (e.target.files && e.target.files.length > 0) {
      handleValidFile(e.target.files[0], invalidFileErrorText, tooLargeErrorText);
    }
    e.target.value = "";
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: React.DragEvent, invalidFileErrorText: string, tooLargeErrorText: string) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleValidFile(e.dataTransfer.files[0], invalidFileErrorText, tooLargeErrorText);
    }
  };

  const removeFile = () => {
    setSelectedFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const convert = async (canvasErrorText: string) => {
    if (!selectedFile) return;
    setIsConverting(true);
    try {
      const blob = await imageService.convertImage(selectedFile.previewUrl, outputFormat, quality);
      const baseName = selectedFile.file.name.replace(/\.[^/.]+$/, "");
      const ext = outputFormat === "image/jpeg" ? "jpg" : outputFormat === "image/png" ? "png" : "webp";
      downloadService.downloadBlob(blob, `${baseName}_converted.${ext}`);
    } catch (error) {
      console.error(error);
      alert(canvasErrorText);
    } finally {
      setIsConverting(false);
    }
  };

  return {
    selectedFile,
    outputFormat,
    setOutputFormat,
    quality,
    setQuality,
    isConverting,
    fileInputRef,
    handleFileChange,
    handleDragOver,
    handleDrop,
    removeFile,
    convert,
  };
}
