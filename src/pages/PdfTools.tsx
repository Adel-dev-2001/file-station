import React from "react";
import { UploadCloud, Layers, Trash2, ArrowDown, Download, AlertTriangle } from "lucide-react";
import { Button } from "../components/ui/Button";
import { Card, CardContent } from "../components/ui/Card";
import { useTranslation } from "react-i18next";
import { usePdfMerger } from "../hooks/usePdfMerger";

export default function PdfTools() {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.dir() === 'rtl';

  const {
    files,
    isProcessing,
    fileInputRef,
    handleFileChange,
    handleDragOver,
    handleDrop,
    removeFile,
    moveUp,
    mergeAndDownload,
  } = usePdfMerger();

  return (
    <div className="max-w-4xl mx-auto w-full space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="text-center space-y-3">
        <div className="w-16 h-16 bg-blue-500/10 text-blue-500 rounded-2xl flex items-center justify-center mx-auto transition-transform hover:scale-110">
          <Layers className="w-8 h-8" />
        </div>
        <h1 className="text-xl md:text-3xl font-bold tracking-tight text-gray-900 dark:text-white">{t("pdfTools.title")}</h1>
        <p className="text-gray-600 dark:text-gray-400 max-w-sm mx-auto">{t("pdfTools.desc")}</p>
      </div>

      <label 
        htmlFor="pdf-upload"
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        className="flex flex-col items-center justify-center w-full h-48 border-2 border-dashed border-gray-200 dark:border-gray-700 bg-white dark:bg-[#16181D] rounded-3xl hover:border-blue-500 transition-colors cursor-pointer group"
      >
        <div className="flex flex-col items-center justify-center pt-5 pb-6 text-center px-4">
          <UploadCloud className="w-10 h-10 text-gray-500 mb-3 group-hover:text-blue-500 transition-colors" />
          <p className="mb-2 text-lg font-semibold text-gray-700 dark:text-gray-300">{t("pdfTools.dropzoneTitle")}</p>
          <span className="mt-2 inline-flex items-center justify-center rounded-lg border border-gray-200 dark:border-white/10 bg-transparent px-8 py-2.5 text-sm font-medium text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-white/10 transition-colors">
            {t("pdfTools.browse")}
          </span>
        </div>
        <input 
          id="pdf-upload"
          ref={fileInputRef}
          type="file" 
          className="hidden" 
          accept="application/pdf" 
          multiple
          onChange={handleFileChange} 
        />
      </label>

      {files.length > 0 && (
        <Card>
          <CardContent className="pt-6 space-y-4">
            <h3 className="font-bold text-lg border-b border-gray-200 dark:border-white/5 pb-2 text-gray-900 dark:text-white">{t("pdfTools.selectedFiles")} ({files.length})</h3>
            
            <div className="space-y-3 max-h-96 overflow-y-auto pr-2">
              {files.map((file, index) => (
                <div key={file.id} className="flex items-center gap-4 bg-gray-100 dark:bg-white/5 p-4 rounded-xl border border-gray-200 dark:border-white/5 group">
                  <div className="flex flex-col gap-1">
                    <button 
                      onClick={() => moveUp(index)} 
                      disabled={index === 0}
                      className={`p-1 rounded bg-white/10 border border-gray-200 dark:border-white/5 text-gray-600 dark:text-gray-400 hover:text-blue-500 hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed ${!isRtl ? 'rotate-180' : ''}`}
                      title={t("pdfTools.moveUp")}
                    >
                      <ArrowDown className="w-4 h-4 rotate-180" />
                    </button>
                    <button 
                      onClick={() => moveUp(index + 1)} 
                      disabled={index === files.length - 1}
                      className={`p-1 rounded bg-white/10 border border-gray-200 dark:border-white/5 text-gray-600 dark:text-gray-400 hover:text-blue-500 hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed ${!isRtl ? 'rotate-180' : ''}`}
                      title={t("pdfTools.moveDown")}
                    >
                      <ArrowDown className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="w-10 h-10 bg-rose-500/20 text-rose-500 rounded flex items-center justify-center shrink-0 font-bold text-xs font-mono">
                    PDF
                  </div>

                  <div className="flex-1 truncate font-mono text-sm leading-tight text-gray-700 dark:text-gray-300" dir="ltr">
                    {file.file.name}
                  </div>

                  <div className="text-xs text-gray-500 font-semibold w-16 text-right">
                    {(file.file.size / 1024 / 1024).toFixed(2)} MB
                  </div>

                  <button 
                    onClick={() => removeFile(file.id)}
                    className="p-2 text-gray-500 hover:text-red-500 hover:bg-red-500/10 rounded-lg transition-colors"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              ))}
            </div>

            {files.length < 2 && (
              <div className="bg-amber-500/10 text-amber-500 p-4 rounded-xl flex items-center gap-3 text-sm font-semibold border border-amber-500/20">
                <AlertTriangle className="w-5 h-5 shrink-0" />
                {t("pdfTools.minFiles")}
              </div>
            )}

            <Button 
              onClick={() => mergeAndDownload(t("pdfTools.error"))} 
              disabled={files.length < 2 || isProcessing} 
              size="lg" 
              className="w-full mt-6 text-lg"
            >
              {isProcessing ? (
                <span className="animate-pulse">{t("pdfTools.merging")}</span>
              ) : (
                <>
                  <Download className={`w-5 h-5 ${isRtl ? 'ml-2' : 'mr-2'}`} />
                  {t("pdfTools.mergeBtn")}
                </>
              )}
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
