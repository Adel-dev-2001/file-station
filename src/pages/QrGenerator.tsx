import React, { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { QrCode, Download, Settings } from 'lucide-react';
import { QRCodeCanvas } from 'qrcode.react';
import { Card, CardContent } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { downloadService } from '../services/downloadService';

export default function QrGenerator() {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.dir() === 'rtl';

  const [text, setText] = useState('https://filestation.example.com');
  const [fgColor, setFgColor] = useState('#ffffff');
  const [bgColor, setBgColor] = useState('#16181D'); // matches default app background
  const [size, setSize] = useState(256);
  
  const qrRef = useRef<HTMLDivElement>(null);

  const downloadQR = () => {
    const canvas = qrRef.current?.querySelector('canvas');
    if (canvas) {
      downloadService.downloadCanvas(canvas, 'qrcode.png');
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-8 animate-in mt-8 md:mt-12 mb-20 text-gray-900 dark:text-white">
      <div className="text-center space-y-4 mb-10">
        <div className="w-16 h-16 bg-pink-500/10 text-pink-500 rounded-2xl flex items-center justify-center mx-auto hover:scale-110 transition-transform">
          <QrCode className="w-8 h-8" />
        </div>
        <h1 className="text-3xl font-bold tracking-tight">{t("qrGenerator.title")}</h1>
        <p className="text-gray-600 dark:text-gray-400">{t("qrGenerator.desc")}</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-start">
        <Card className="h-full">
          <CardContent className="pt-6 space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">{t("qrGenerator.inputPlaceholder")}</label>
              <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder={t("qrGenerator.inputPlaceholder")}
                className="w-full bg-white dark:bg-[#16181D] border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:ring-2 focus:ring-pink-500 focus:border-pink-500 outline-none transition-shadow min-h-[120px] resize-y"
                dir="auto"
              />
            </div>

            <div className="space-y-4 bg-gray-100 dark:bg-white/5 p-4 rounded-xl border border-gray-200 dark:border-white/5">
              <h3 className="font-bold text-lg mb-4 flex items-center">
                <Settings className={`w-5 h-5 ${isRtl ? 'ml-2' : 'mr-2'} text-gray-500`} /> 
                {t("imageConverter.settings")}
              </h3>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">{t("qrGenerator.color")}</label>
                  <div className="flex items-center gap-2">
                    <input 
                      type="color" 
                      value={fgColor} 
                      onChange={(e) => setFgColor(e.target.value)}
                      className="w-8 h-8 rounded cursor-pointer border-0 p-0 bg-transparent"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">{t("qrGenerator.bgColor")}</label>
                  <div className="flex items-center gap-2">
                    <input 
                      type="color" 
                      value={bgColor} 
                      onChange={(e) => setBgColor(e.target.value)}
                      className="w-8 h-8 rounded cursor-pointer border-0 p-0 bg-transparent"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">{t("qrGenerator.size")}</label>
                    <span className="text-sm font-bold text-pink-500">{size}px</span>
                  </div>
                  <input 
                    type="range" 
                    min="128" 
                    max="512" 
                    step="8"
                    value={size} 
                    onChange={(e) => setSize(Number(e.target.value))}
                    className="w-full accent-pink-500 cursor-pointer h-2 bg-white/10 rounded-lg appearance-none"
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="h-full flex flex-col items-center justify-center border-dashed border-2 border-gray-200 dark:border-white/10 bg-black/20">
          <CardContent className="pt-6 w-full flex flex-col items-center justify-center flex-1 space-y-8">
            <div 
              ref={qrRef} 
              className="p-4 bg-gray-100 dark:bg-white/5 rounded-2xl flex items-center justify-center overflow-hidden"
              style={{ backgroundColor: bgColor }}
            >
              <QRCodeCanvas 
                value={text || " "} 
                size={Math.min(size, 300)} 
                fgColor={fgColor}
                bgColor={bgColor}
                level="H"
                includeMargin={false}
              />
            </div>

            <Button 
              onClick={downloadQR} 
              disabled={!text}
              className="w-full max-w-xs bg-pink-600 hover:bg-pink-700 text-gray-900 dark:text-white font-bold h-12"
            >
              <Download className={`w-5 h-5 ${isRtl ? 'ml-2' : 'mr-2'}`} />
              {t("qrGenerator.download")}
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
