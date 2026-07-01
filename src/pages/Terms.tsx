import React from 'react';
import { useTranslation } from 'react-i18next';
import { Scale } from 'lucide-react';
import { Card, CardContent } from '../components/ui/Card';

export default function Terms() {
  const { t } = useTranslation();

  return (
    <div className="w-full max-w-3xl mx-auto space-y-8 animate-in mt-8 md:mt-12">
      <div className="text-center space-y-4 mb-10">
        <div className="w-16 h-16 bg-blue-500/10 text-blue-500 rounded-2xl flex items-center justify-center mx-auto hover:scale-110 transition-transform">
          <Scale className="w-8 h-8" />
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">{t("terms.title")}</h1>
        <p className="text-gray-600 dark:text-gray-400">{t("terms.lastUpdated")}</p>
      </div>

      <Card>
        <CardContent className="pt-6 space-y-8 text-gray-700 dark:text-gray-300 leading-relaxed text-sm md:text-base">
          <p>{t("terms.p1")}</p>
          
          <div className="space-y-3">
            <h2 className="text-gray-900 dark:text-white text-xl font-bold tracking-tight">{t("terms.h1")}</h2>
            <p>{t("terms.p2")}</p>
          </div>

          <div className="space-y-3">
            <h2 className="text-gray-900 dark:text-white text-xl font-bold tracking-tight">{t("terms.h2")}</h2>
            <p>{t("terms.p3")}</p>
          </div>

          <div className="space-y-3">
            <h2 className="text-gray-900 dark:text-white text-xl font-bold tracking-tight">{t("terms.h3")}</h2>
            <p>{t("terms.p4")}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
