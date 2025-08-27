"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/theme-provider"

export default function CTASection() {
  const { language } = useLanguage()
  const t = (en: string, ar: string) => (language === "ar" ? ar : en)

  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="bg-gradient-to-r from-[#5686E7]/10 to-white rounded-3xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="relative">
              <Image
                src="/professional-female-doctor-with-clipboard-smiling.png"
                alt={t("Professional Doctor", "طبيبة محترفة")}
                width={400}
                height={500}
                className="rounded-2xl object-cover"
              />
            </div>

            <div className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-4xl font-bold text-gray-900">
                  {t("Get Started on ", "ابدأ ")}
                  <span className="text-[#5686E7]">{t("Your Smile", "ابتسامتك")}</span>
                  {t(" Journey", " الآن")}
                </h2>
                <p className="text-gray-600 text-lg">
                  {t(
                    "Spacious, clean, and designed for your comfort, our treatment rooms are equipped with the latest dental technology.",
                    "غرف العلاج لدينا فسيحة ونظيفة ومصممة لراحتك ومجهزة بأحدث تقنيات طب الأسنان."
                  )}
                </p>
              </div>

              <Button className="bg-[#5686E7] hover:bg-[#3d5db3] text-white px-8 py-3 rounded-lg text-lg">
                {t("Book Appointment", "احجز موعداً")}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
