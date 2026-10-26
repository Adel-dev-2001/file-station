import { useState, useRef } from "react";
import { UploadedPDF } from "../types/pdf";
import { pdfService } from "../services/pdfService";
import { downloadService } from "../services/downloadService";
import { useTranslation } from "react-i18next";

const MAX_PDF_COUNT = 20;
const MAX_PDF_FILE_BYTES = 50 * 1024 * 1024;
const MAX_TOTAL_PDF_BYTES = 100 * 1024 * 1024;

export function usePdfMerger() {
  const [files, setFiles] = useState<UploadedPDF[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [validationError, setValidationError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { t } = useTranslation();

  const isValidPdf = (file: File) => {
    return file.type === "application/pdf" || file.name.toLowerCase().endsWith('.pdf');
  };

  const addFiles = (selectedFiles: FileList | null) => {
    const warnings: string[] = [];
    const accepted: UploadedPDF[] = [];
    let totalBytes = files.reduce((sum, item) => sum + item.file.size, 0);

    for (const file of Array.from(selectedFiles || [])) {
      if (!isValidPdf(file)) {
        warnings.push(t("pdfTools.invalidType"));
        continue;
      }
      if (file.size <= 0 || file.size > MAX_PDF_FILE_BYTES) {
        warnings.push(t("pdfTools.fileTooLarge"));
        continue;
      }
      if (files.length + accepted.length >= MAX_PDF_COUNT) {
        warnings.push(t("pdfTools.tooManyFiles"));
        break;
      }
      if (totalBytes + file.size > MAX_TOTAL_PDF_BYTES) {
        warnings.push(t("pdfTools.totalTooLarge"));
        continue;
      }

      accepted.push({
        id: crypto.randomUUID(),
        file,
      });
      totalBytes += file.size;
    }

    if (accepted.length > 0) setFiles(prev => [...prev, ...accepted]);
    setValidationError(warnings.length > 0 ? [...new Set(warnings)].join(" ") : null);
    if (fileInputRef.current) fileInputRef.current.value = "";
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
    validationError,
    fileInputRef,
    handleFileChange,
    handleDragOver,
    handleDrop,
    removeFile,
    moveUp,
    mergeAndDownload,
  };
}
