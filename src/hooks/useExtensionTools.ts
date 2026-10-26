import { useState } from "react";
import { downloadService } from "../services/downloadService";
import { useTranslation } from "react-i18next";

const MAX_EXTENSION_TOOL_FILE_BYTES = 100 * 1024 * 1024;

export function useExtensionTools() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [newExtension, setNewExtension] = useState("");
  const { t } = useTranslation();

  const handleValidFile = (file: File) => {
    if (file.size <= 0) {
      alert(t("extensionTools.invalidFile"));
      return;
    }
    if (file.size > MAX_EXTENSION_TOOL_FILE_BYTES) {
      alert(t("extensionTools.fileTooLarge"));
      return;
    }
    setSelectedFile(file);
    const lastDot = file.name.lastIndexOf('.');
    // A leading dot alone (for example, .bashrc) is part of the filename,
    // not a file extension. Keep the extension field empty in that case.
    if (lastDot > 0 && lastDot < file.name.length - 1) {
      setNewExtension(file.name.slice(lastDot + 1));
    } else {
      setNewExtension("");
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      handleValidFile(e.target.files[0]);
    }
    // Clearing the control allows choosing the same file again after an error or change.
    e.target.value = "";
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

    const ext = newExtension.replace(/^\./, "");
    if (!/^[a-z0-9]{1,12}$/i.test(ext)) {
      alert(t("extensionTools.invalidExtension"));
      return;
    }
    if (selectedFile.size > MAX_EXTENSION_TOOL_FILE_BYTES) {
      alert(t("extensionTools.fileTooLarge"));
      return;
    }

    try {
      const arrayBuffer = await selectedFile.arrayBuffer();
      const blob = new Blob([arrayBuffer], { type: "application/octet-stream" });
      
      const lastDot = selectedFile.name.lastIndexOf('.');
      const baseName = lastDot > 0 ? selectedFile.name.slice(0, lastDot) : selectedFile.name;
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
