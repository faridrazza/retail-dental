"use client"

import Image from "next/image"
import { useLanguage } from "@/components/theme-provider"

export default function DentalTeam() {
  const { language } = useLanguage()
  const t = (en: string, ar: string) => (language === "ar" ? ar : en)

  const teamMembers = [
    {
      name: "Katrina Kiehn",
      title: t("7 years of Experience", "خبرة 7 سنوات"),
      image: "/professional-female-dentist-smiling-in-dental-scru.png",
    },
    {
      name: "James Rodriguez",
      title: t("8 years of Experience", "خبرة 8 سنوات"),
      image: "/professional-male-dentist-in-dental-coat-smiling.png",
    },
    {
      name: "James Rodriguez",
      title: t("6 years of Experience", "خبرة 6 سنوات"),
      image: "/young-male-dentist-professional-headshot-smiling.png",
    },
    {
      name: "James Rodriguez",
      title: t("8 years of Experience", "خبرة 8 سنوات"),
      image: "/male-dentist-with-beard-professional-dental-portra.png",
    },
    {
      name: "Katrina Kiehn",
      title: t("5 years of Experience", "خبرة 5 سنوات"),
      image: "/female-dental-hygienist-professional-portrait-smil.png",
    },
    {
      name: "Katrina Kiehn",
      title: t("4 years of Experience", "خبرة 4 سنوات"),
      image: "/male-dentist-professional-headshot-in-dental-scrub.png",
    },
  ]

  return (
    <section className="py-16 px-4 bg-white">
      <div className={`container mx-auto ${language === 'ar' ? 'pr-2' : ''}`}>
        <div className="text-center mb-12">
          <div className="text-sm text-gray-600 mb-2">{t("Team", "الفريق")}</div>
          <h2 className="text-4xl font-bold text-gray-900">
            {t("Our Skilled ", "فريقنا ")}
            <span className="text-[#5686E7]">{t("Dental Team", "المهاري في طب الأسنان")}</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center">
              <div className="relative mb-4">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  width={250}
                  height={250}
                  className="w-full h-40 md:h-48 lg:h-56 object-cover rounded-2xl"
                />
              </div>
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{member.name}</h3>
              <p className="text-gray-600 text-xs">{member.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
