import { useState } from "react";
import { downloadService } from "../services/downloadService";

export function useExtensionTools() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [newExtension, setNewExtension] = useState("");

  const handleValidFile = (file: File) => {
    setSelectedFile(file);
    const parts = file.name.split('.');
    if (parts.length > 1) {
      setNewExtension(parts[parts.length - 1]);
    } else {
      setNewExtension("");
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      handleValidFile(e.target.files[0]);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleValidFile(e.dataTransfer.files[0]);
    }
  };

  const modifyExtension = async (errorText: string) => {
    if (!selectedFile || !newExtension) return;

    try {
      const arrayBuffer = await selectedFile.arrayBuffer();
      const blob = new Blob([arrayBuffer], { type: "application/octet-stream" });
      
      const baseName = selectedFile.name.replace(/\.[^/.]+$/, "");
      const ext = newExtension.replace(/^\./, ""); // Strip leading dot if user typed it
      
      downloadService.downloadBlob(blob, `${baseName}.${ext}`);
    } catch (error) {
      console.error(error);
      alert(errorText);
    }
  };

  return {
    selectedFile,
    setSelectedFile,
    newExtension,
    setNewExtension,
    handleFileChange,
    handleDragOver,
    handleDrop,
    modifyExtension,
  };
}
