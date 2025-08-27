"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useLanguage } from "@/components/theme-provider"

export default function ServicesGrid() {
  const { language } = useLanguage()
  const t = (en: string, ar: string) => (language === "ar" ? ar : en)

  const services = [
    {
      title: t("General Dentistry", "طب الأسنان العام"),
      description: t("Cleanings, checkups, fillings, and preventive care", "تنظيف وفحوصات وحشوات ورعاية وقائية"),
      image: "/dentist-examining-patient-teeth-general-dentistry.png",
    },
    {
      title: t("Cosmetic Dentistry", "طب تجميل الأسنان"),
      description: t("Teeth whitening, veneers, smile makeovers", "تبييض الأسنان وعدسات وتجميل الابتسامة"),
      image: "/cosmetic-dentistry-teeth-whitening-procedure.png",
    },
    {
      title: t("Orthodontics", "تقويم الأسنان"),
      description: t("Braces, clear aligners, bite correction", "تقويم معدني وشفاف وتصحيح العضة"),
      image: "/orthodontics-braces-dental-treatment-happy-patient.png",
    },
  ]

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className={`container mx-auto ${language === 'ar' ? 'pr-2' : ''}`}>
        <div className="text-center mb-12">
          <div className="text-sm text-gray-600 mb-2">{t("Expert", "خبراء")}</div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t("Our Dental ", "خدمات ")}
            <span className="text-[#5686E7]">{t("Services", "الأسنان")}</span>
          </h2>
          <Button className="bg-[#5686E7] hover:bg-[#3d5db3] text-white px-6 py-2 rounded-full">{t("More Services", "المزيد من الخدمات")}</Button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <Image
                src={service.image || "/placeholder.svg"}
                alt={service.title}
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-sm text-gray-600">
            {t("Need A Service Not Listed? ", "هل تحتاج خدمة غير مذكورة؟ ")}
            <span className="text-[#5686E7] font-medium">{t("Contact Us Today", "تواصل معنا اليوم")}</span>
            {t(" For Personalized Solutions!", " لحلول مخصصة!")}
          </p>
        </div>
      </div>
    </section>
  )
}
