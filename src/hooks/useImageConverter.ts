import { useState, useRef } from "react";
import { UploadedFile, OutputFormat } from "../types/image";
import { imageService } from "../services/imageService";
import { downloadService } from "../services/downloadService";

export function useImageConverter() {
  const [selectedFile, setSelectedFile] = useState<UploadedFile | null>(null);
  const [outputFormat, setOutputFormat] = useState<OutputFormat>("image/png");
  const [quality, setQuality] = useState(90);
  const [isConverting, setIsConverting] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleValidFile = (file: File, invalidFileErrorText: string) => {
    if (file.type.startsWith("image/") || /\.(jpg|jpeg|png|webp|gif|bmp|svg)$/i.test(file.name)) {
      const previewUrl = URL.createObjectURL(file);
      setSelectedFile({ file, previewUrl });
    } else {
      alert(invalidFileErrorText);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, invalidFileErrorText: string) => {
    if (e.target.files && e.target.files.length > 0) {
      handleValidFile(e.target.files[0], invalidFileErrorText);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: React.DragEvent, invalidFileErrorText: string) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleValidFile(e.dataTransfer.files[0], invalidFileErrorText);
    }
  };

  const removeFile = () => {
    if (selectedFile) {
      URL.revokeObjectURL(selectedFile.previewUrl);
    }
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
