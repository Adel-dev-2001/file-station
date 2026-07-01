import React from "react";
import { UploadCloud, Download, Image as ImageIcon, Trash2, Settings, AlertCircle } from "lucide-react";
import { Button } from "../components/ui/Button";
import { Card, CardContent } from "../components/ui/Card";
import { useTranslation } from "react-i18next";
import { useImageConverter } from "../hooks/useImageConverter";
import { OutputFormat } from "../types/image";

export default function ImageConverter() {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.dir() === 'rtl';

  const {
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
  } = useImageConverter();

  return (
    <div className="max-w-4xl mx-auto w-full space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="text-center space-y-3">
        <div className="w-16 h-16 bg-emerald-500/10 text-emerald-500 rounded-2xl flex items-center justify-center mx-auto hover:scale-110 transition-transform">
          <ImageIcon className="w-8 h-8" />
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">{t("imageConverter.title")}</h1>
        <p className="text-gray-600 dark:text-gray-400">{t("imageConverter.desc")}</p>
      </div>

      {!selectedFile ? (
        <label 
          htmlFor="image-upload"
          onDragOver={handleDragOver}
          onDrop={(e) => handleDrop(e, t("imageConverter.invalidFile"))}
          className="flex flex-col items-center justify-center w-full h-80 border-2 border-dashed border-gray-200 dark:border-gray-700 bg-white dark:bg-[#16181D] rounded-3xl hover:border-emerald-500 transition-colors cursor-pointer group"
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6 text-center px-4">
            <UploadCloud className="w-12 h-12 text-gray-500 mb-4 group-hover:text-emerald-500 transition-colors" />
            <p className="mb-2 text-lg font-semibold text-gray-700 dark:text-gray-300">{t("imageConverter.dropzoneTitle")}</p>
            <p className="text-sm text-gray-500 mb-6">{t("imageConverter.dropzoneSub")}</p>
            <span className="inline-flex items-center justify-center rounded-lg border border-gray-200 dark:border-white/10 bg-transparent px-8 py-2.5 text-sm font-medium text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-white/10 transition-colors">
              {t("imageConverter.browse")}
            </span>
          </div>
          <input 
            id="image-upload"
            ref={fileInputRef}
            type="file" 
            className="hidden" 
            accept="image/*" 
            onChange={(e) => handleFileChange(e, t("imageConverter.invalidFile"))} 
          />
        </label>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <Card>
            <CardContent className="pt-6 flex flex-col items-center">
              <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-white dark:bg-[#0F1115] mb-4 border border-gray-200 dark:border-white/5 flex items-center justify-center">
                <img 
                  src={selectedFile.previewUrl} 
                  alt="Preview" 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div className="w-full flex justify-between items-center bg-gray-100 dark:bg-white/5 p-4 rounded-lg border border-gray-200 dark:border-white/5">
                <div className="truncate flex-1 font-mono text-sm text-gray-700 dark:text-gray-300" dir="ltr">{selectedFile.file.name}</div>
                <div className="text-sm text-gray-500 font-semibold mr-4">{(selectedFile.file.size / 1024).toFixed(1)} KB</div>
              </div>
              <Button onClick={removeFile} variant="danger" className="w-full mt-4">
                <Trash2 className={`w-4 h-4 ${isRtl ? 'ml-2' : 'mr-2'}`} /> {t("imageConverter.remove")}
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6 space-y-6">
              <div>
                <h3 className="font-bold text-lg mb-4 flex items-center text-gray-900 dark:text-white">
                  <Settings className={`w-5 h-5 ${isRtl ? 'ml-2' : 'mr-2'} text-gray-500`} /> 
                  {t("imageConverter.settings")}
                </h3>
                
                <label className="block text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">{t("imageConverter.outputFormat")}</label>
                <div className="grid grid-cols-3 gap-3 mb-6">
                  {(["image/png", "image/jpeg", "image/webp"] as OutputFormat[]).map((format) => {
                    const label = format.split("/")[1].toUpperCase();
                    return (
                      <button
                        key={format}
                        onClick={() => setOutputFormat(format)}
                        className={`py-3 px-2 text-center rounded-lg border font-bold transition-all ${
                          outputFormat === format 
                            ? "bg-emerald-500/10 border-emerald-500 text-emerald-500 ring-1 ring-emerald-500" 
                            : "bg-transparent border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/5"
                        }`}
                      >
                        {label}
                      </button>
                    );
                  })}
                </div>
                
                {outputFormat !== "image/png" && (
                  <div className="space-y-4 bg-gray-100 dark:bg-white/5 p-4 rounded-xl border border-gray-200 dark:border-white/5">
                    <div className="flex justify-between">
                      <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">{t("imageConverter.quality")}</label>
                      <span className="text-sm font-bold text-emerald-500">{quality}%</span>
                    </div>
                    <input 
                      type="range" 
                      min="10" 
                      max="100" 
                      step="5"
                      value={quality} 
                      onChange={(e) => setQuality(Number(e.target.value))}
                      className="w-full accent-emerald-500 cursor-pointer h-2 bg-white/10 rounded-lg appearance-none"
                    />
                    <p className="text-xs text-gray-500 flex items-center">
                      <AlertCircle className={`w-3 h-3 ${isRtl ? 'ml-1' : 'mr-1'}`} />
                      {t("imageConverter.qualityInfo")}
                    </p>
                  </div>
                )}
              </div>

              <hr className="border-gray-200 dark:border-white/5" />
              
              <Button 
                onClick={() => convert(t("imageConverter.canvasError"))} 
                disabled={isConverting} 
                size="lg" 
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-gray-900 dark:text-white border-0"
              >
                {isConverting ? (
                  <span className="animate-pulse">{t("imageConverter.converting")}</span>
                ) : (
                  <>
                    <Download className={`w-5 h-5 ${isRtl ? 'ml-2' : 'mr-2'}`} />
                    {t("imageConverter.convertBtn")}
                  </>
                )}
              </Button>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
