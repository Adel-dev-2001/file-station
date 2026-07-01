import React from "react";
import { FileCog, Save, AlertTriangle, File as FileIcon } from "lucide-react";
import { Button } from "../components/ui/Button";
import { Card, CardContent } from "../components/ui/Card";
import { useTranslation } from "react-i18next";
import { useExtensionTools } from "../hooks/useExtensionTools";

export default function ExtensionTools() {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.dir() === 'rtl';

  const {
    selectedFile,
    setSelectedFile,
    newExtension,
    setNewExtension,
    handleFileChange,
    handleDragOver,
    handleDrop,
    modifyExtension,
  } = useExtensionTools();

  return (
    <div className="max-w-4xl mx-auto w-full space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="text-center space-y-3">
        <div className="w-16 h-16 bg-orange-500/10 text-orange-500 rounded-2xl flex items-center justify-center mx-auto hover:scale-110 transition-transform">
          <FileCog className="w-8 h-8" />
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">{t("extensionTools.title")}</h1>
        <p className="text-gray-600 dark:text-gray-400">{t("extensionTools.desc")}</p>
      </div>

      <div className="bg-blue-500/10 border border-blue-500/20 text-blue-400 p-4 rounded-xl flex items-start gap-3">
        <AlertTriangle className="w-5 h-5 shrink-0 mt-0.5 text-blue-500" />
        <div className="text-sm leading-relaxed text-blue-300">
          <strong className="text-blue-500">{t("extensionTools.noteTitle")}</strong> {t("extensionTools.noteDesc")}
        </div>
      </div>

      {!selectedFile ? (
        <label 
          htmlFor="ext-upload"
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed border-gray-200 dark:border-gray-700 bg-white dark:bg-[#16181D] rounded-3xl hover:border-orange-500 transition-colors cursor-pointer group"
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6 text-center px-4">
            <FileIcon className="w-12 h-12 text-gray-500 mb-4 group-hover:text-orange-500 transition-colors" />
            <p className="mb-2 text-lg font-semibold text-gray-700 dark:text-gray-300">{t("extensionTools.dropzoneTitle")}</p>
            <span className="mt-4 inline-flex items-center justify-center rounded-lg border border-gray-200 dark:border-white/10 bg-transparent px-8 py-2.5 text-sm font-medium text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-white/10 transition-colors">
              {t("extensionTools.browse")}
            </span>
          </div>
          <input 
            id="ext-upload"
            type="file" 
            className="hidden" 
            onChange={handleFileChange} 
          />
        </label>
      ) : (
        <Card>
          <CardContent className="pt-6 space-y-6">
            <div className="flex items-center gap-4 bg-gray-100 dark:bg-white/5 p-6 rounded-2xl border border-gray-200 dark:border-white/5">
              <div className="w-14 h-14 bg-orange-500/10 text-orange-500 rounded-xl flex items-center justify-center shrink-0">
                 <FileCog className="w-7 h-7" />
              </div>
              <div className="flex-1 overflow-hidden">
                <div className="font-mono font-semibold text-gray-700 dark:text-gray-300 truncate text-lg" dir="ltr">{selectedFile.name}</div>
                <div className="text-sm text-gray-500 mt-1">{(selectedFile.size / 1024).toFixed(1)} KB</div>
              </div>
              <Button onClick={() => setSelectedFile(null)} variant="ghost" className="text-gray-500 hover:text-red-500">
                {t("extensionTools.changeFile")}
              </Button>
            </div>

            <div className="space-y-3">
               <label className="block text-sm font-semibold text-gray-600 dark:text-gray-400">{t("extensionTools.newExtension")}</label>
               <div className="flex bg-white dark:bg-[#16181D] border border-gray-200 dark:border-white/10 rounded-xl overflow-hidden focus-within:ring-2 focus-within:ring-orange-500 focus-within:border-orange-500 transition-shadow">
                 <div className="bg-white dark:bg-[#0F1115] text-gray-500 font-bold px-4 flex items-center justify-center border-gray-200 dark:border-white/10 font-mono" style={{ borderRightWidth: isRtl ? '0' : '1px', borderLeftWidth: isRtl ? '1px' : '0' }}>
                   .
                 </div>
                 <input 
                   type="text" 
                   value={newExtension}
                   onChange={(e) => setNewExtension(e.target.value.toLowerCase().replace(/[^a-z0-9]/g, ''))}
                   placeholder={t("extensionTools.example")}
                   className="flex-1 px-4 py-3 outline-none font-mono text-lg text-gray-900 dark:text-white bg-transparent"
                   dir="ltr"
                 />
               </div>
            </div>

            <Button 
                onClick={() => modifyExtension(t("extensionTools.error"))} 
                disabled={!newExtension}
                className="w-full h-14 bg-orange-600 hover:bg-orange-700 text-gray-900 dark:text-white text-base font-bold border-0"
              >
                <Save className={`w-5 h-5 ${isRtl ? 'ml-2' : 'mr-2'}`} /> {t("extensionTools.saveBtn")}
             </Button>

          </CardContent>
        </Card>
      )}
    </div>
  );
}
