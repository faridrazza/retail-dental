"use client"

import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import { useLanguage } from "@/components/theme-provider"

export default function PatientTestimonials() {
  const [activeIndex, setActiveIndex] = useState(0)
  const { language } = useLanguage()
  const t = (en: string, ar: string) => (language === "ar" ? ar : en)

  const images = [
    {
      src: "/happy-female-patient-smiling-showing-perfect-teeth.png",
      alt: t("Happy Patient 1", "مريضة سعيدة 1")
    },
    {
      src: "/professional-woman-smiling-headshot.png", 
      alt: t("Happy Patient 2", "مريضة سعيدة 2")
    }
  ]

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % images.length)
  }

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className={`space-y-6 ${language === 'ar' ? 'pr-2' : ''}`}>
            <div className="space-y-4">
              <div className="text-sm text-gray-600 mb-2">{t("Testimonials", "آراء العملاء")}</div>
              <h2 className="text-4xl font-bold text-gray-900">
                {t("See Why Patients ", "لماذا يثق المرضى بنا ")}
                <span className="text-[#5686E7]">{t("Trust Us", "ثق بنا")}</span>
              </h2>

              <div className="space-y-4 mt-8">
                <p className="text-lg text-gray-700 leading-relaxed">
                  {t(
                    "\"Absolutely the best dental experience I've ever had. The staff is friendly, the environment is comfortable, and Dr. Carter did an amazing job with my smile transformation. Highly recommended!\"",
                    "\"أفضل تجربة أسنان مررت بها. الطاقم ودود والبيئة مريحة، والدكتور قام بعمل رائع في تجميل ابتسامتي. أنصح بها بشدة!\""
                  )}
                </p>

                <div className="text-sm text-gray-600">— {t("Sarah M.", "سارة م.")}</div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex text-orange-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                    <span className="text-sm font-semibold text-gray-900">5.0/5.0</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button 
                      onClick={handlePrev}
                      className="w-8 h-8 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:bg-gray-50"
                    >
                      <ChevronLeft className="h-4 w-4 text-gray-600" />
                    </button>
                    <button 
                      onClick={handleNext}
                      className="w-8 h-8 bg-[#5686E7] border border-[#5686E7] rounded-full flex items-center justify-center hover:bg-[#3d5db3]"
                    >
                      <ChevronRight className="h-4 w-4 text-white" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gray-50 rounded-2xl p-6 flex gap-4 h-80 overflow-hidden">
              {/* First Image - Large when active, smaller when not */}
              <div className={`transition-all duration-500 ease-in-out ${
                activeIndex === 0 ? 'flex-1' : 'w-40'
              }`}>
                <Image
                  src={images[0].src}
                  alt={images[0].alt}
                  width={200}
                  height={250}
                  className={`rounded-xl object-cover transition-all duration-500 ${
                    activeIndex === 0 ? 'h-full w-full' : 'h-full w-full'
                  }`}
                />
              </div>
              
              {/* Second Image - Large when active, smaller but visible when not */}
              <div className={`transition-all duration-500 ease-in-out ${
                activeIndex === 1 ? 'flex-1' : 'w-40'
              }`}>
                <Image
                  src={images[1].src}
                  alt={images[1].alt}
                  width={200}
                  height={250}
                  className={`rounded-xl object-cover transition-all duration-500 ${
                    activeIndex === 1 ? 'h-full w-full' : 'h-full w-full'
                  }`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
