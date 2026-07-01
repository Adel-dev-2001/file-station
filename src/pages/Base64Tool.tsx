import React from 'react';
import { useTranslation } from 'react-i18next';
import { Binary, ArrowRightLeft, Copy, CheckCircle2 } from 'lucide-react';
import { Card, CardContent } from '../components/ui/Card';
import { useBase64 } from '../hooks/useBase64';

export default function Base64Tool() {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.dir() === 'rtl';

  const {
    mode,
    setMode,
    input,
    setInput,
    isCopied,
    copy,
    getOutput,
    toggleMode,
  } = useBase64();

  const { value: output, isError: error } = getOutput(t("base64Tool.errorDecode"));

  return (
    <div className="w-full max-w-4xl mx-auto space-y-8 animate-in mt-8 md:mt-12 mb-20 text-gray-900 dark:text-white">
      <div className="text-center space-y-4 mb-10">
        <div className="w-16 h-16 bg-cyan-500/10 text-cyan-500 rounded-2xl flex items-center justify-center mx-auto hover:scale-110 transition-transform">
          <Binary className="w-8 h-8" />
        </div>
        <h1 className="text-3xl font-bold tracking-tight">{t("base64Tool.title")}</h1>
        <p className="text-gray-600 dark:text-gray-400">{t("base64Tool.desc")}</p>
      </div>

      <div className="flex justify-center mb-8">
        <div className="bg-gray-100 dark:bg-white/5 p-1 rounded-xl flex border border-gray-200 dark:border-white/10">
          <button 
            onClick={() => setMode('encode')}
            className={`px-6 py-2 rounded-lg font-bold transition-colors ${mode === 'encode' ? 'bg-cyan-500 text-gray-900 dark:text-white shadow-lg' : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:text-white'}`}
          >
            {t("base64Tool.modeEncode")}
          </button>
          <button 
            onClick={() => setMode('decode')}
            className={`px-6 py-2 rounded-lg font-bold transition-colors ${mode === 'decode' ? 'bg-cyan-500 text-gray-900 dark:text-white shadow-lg' : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:text-white'}`}
          >
            {t("base64Tool.modeDecode")}
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-[1fr,auto,1fr] gap-4 md:gap-6 items-center">
        <Card className="h-full border-gray-200 dark:border-white/10 bg-black/20">
          <CardContent className="pt-6 relative h-full flex flex-col">
            <label className="block text-sm font-bold text-gray-600 dark:text-gray-400 mb-3">{t("base64Tool.inputLabel")}</label>
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={t("base64Tool.inputPlaceholderText")}
              className="w-full flex-1 min-h-[200px] bg-transparent border-0 text-gray-900 dark:text-white focus:ring-0 outline-none resize-none font-mono text-sm sm:text-base p-0"
              dir="auto"
              spellCheck={false}
            />
          </CardContent>
        </Card>

        <div className="flex justify-center py-4 md:py-0">
          <button 
            onClick={toggleMode}
            className="w-12 h-12 rounded-full bg-gray-100 dark:bg-white/5 hover:bg-gray-100 dark:hover:bg-white/10 border border-gray-200 dark:border-white/10 flex items-center justify-center text-cyan-400 transition-colors shadow-lg"
          >
            <ArrowRightLeft className="w-5 h-5" />
          </button>
        </div>

        <Card className={`h-full border-gray-200 dark:border-white/10 ${error ? 'bg-red-500/5 border-red-500/30' : 'bg-white dark:bg-[#16181D]'}`}>
          <CardContent className="pt-6 relative h-full flex flex-col">
            <div className="flex justify-between items-center mb-3">
              <label className="block text-sm font-bold text-gray-600 dark:text-gray-400">{t("base64Tool.outputLabel")}</label>
              {output && !error && (
                <button 
                  onClick={() => copy(output)}
                  className="text-gray-600 dark:text-gray-400 hover:text-cyan-400 flex items-center text-xs font-semibold"
                >
                  {isCopied ? <CheckCircle2 className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                  <span className={isRtl ? 'mr-1' : 'ml-1'}>{isCopied ? t("base64Tool.copied") : t("base64Tool.copyBtn")}</span>
                </button>
              )}
            </div>
            
            <div className={`flex-1 min-h-[200px] font-mono whitespace-pre-wrap break-all ${error ? 'text-red-400' : 'text-gray-700 dark:text-gray-300'}`} dir="ltr">
              {output || <span className="text-gray-600 italic font-sans">{t("base64Tool.outputPlaceholder")}</span>}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
