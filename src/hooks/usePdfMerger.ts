import { useState, useRef } from "react";
import { UploadedPDF } from "../types/pdf";
import { pdfService } from "../services/pdfService";
import { downloadService } from "../services/downloadService";

export function usePdfMerger() {
  const [files, setFiles] = useState<UploadedPDF[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const isValidPdf = (file: File) => {
    return file.type === "application/pdf" || file.name.toLowerCase().endsWith('.pdf');
  };

  const addFiles = (selectedFiles: FileList | null) => {
    if (selectedFiles && selectedFiles.length > 0) {
      const newFiles = Array.from(selectedFiles)
        .filter(isValidPdf)
        .map((file: File) => ({
          id: Math.random().toString(36).substring(2, 9),
          file
        }));
      setFiles(prev => [...prev, ...newFiles]);
    }
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    addFiles(e.target.files);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.dataTransfer && e.dataTransfer.files) {
      addFiles(e.dataTransfer.files);
    }
  };

  const removeFile = (id: string) => {
    setFiles(prev => prev.filter(f => f.id !== id));
  };

  const moveUp = (index: number) => {
    if (index === 0) return;
    setFiles(prev => {
      const newFiles = [...prev];
      const temp = newFiles[index - 1];
      newFiles[index - 1] = newFiles[index];
      newFiles[index] = temp;
      return newFiles;
    });
  };

  const mergeAndDownload = async (onErrorText: string) => {
    if (files.length < 2) return;
    setIsProcessing(true);
    try {
      const rawFiles = files.map(f => f.file);
      const pdfBytes = await pdfService.mergePdfs(rawFiles);
      const blob = new Blob([pdfBytes], { type: "application/pdf" });
      downloadService.downloadBlob(blob, `merged_${new Date().getTime()}.pdf`);
    } catch (error) {
      console.error(error);
      alert(onErrorText);
    } finally {
      setIsProcessing(false);
    }
  };

  return {
    files,
    isProcessing,
    fileInputRef,
    handleFileChange,
    handleDragOver,
    handleDrop,
    removeFile,
    moveUp,
    mergeAndDownload,
  };
}
