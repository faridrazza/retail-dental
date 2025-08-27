"use client"

import { Button } from "@/components/ui/button"
import { Calendar, MapPin, User, Search } from "lucide-react"
import Image from "next/image"
import { useLanguage } from "@/components/theme-provider"

export default function SmileBrightHero() {
  const { language } = useLanguage()
  const t = (en: string, ar: string) => (language === "ar" ? ar : en)
  const dirClass = language === "ar" ? "text-right" : "text-left"

  return (
    <section className="bg-white pt-4 pb-0 px-0">
      {/* Hero Main Content */}
      <div className="container mx-auto max-w-7xl px-4 md:px-6 pt-3 md:pt-4 pb-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-4 md:gap-0">
          {/* Left Content */}
          <div className={`space-y-4 md:space-y-5 pl-4 md:pl-16 -mt-2 md:-mt-8 ${dirClass}`} style={{maxWidth: '540px'}}>
            <h1 className="font-bold text-gray-900 leading-tight text-[28px] sm:text-[32px] md:text-[38px] tracking-[-0.02em] text-center md:text-left md:!text-inherit">
              {t("Your Comfort, Our", "راحتك أولاً، نحن")}<br />
              <span className="text-[#5686E7]">{t("Priority One Smile", "نضع ابتسامتك في المقام الأول")}</span><br />
              <span>{t("at a Time", "في كل خطوة")}</span>
            </h1>
            <p className="text-gray-600 text-[14px] sm:text-[15px] md:text-[16px] leading-[1.6] mt-2 md:mt-2 mb-2 md:mb-2">
              {t(
                "At our clinic, we believe that every smile tells a story. That's why we are committed to providing personalized, gentle dental care that makes you feel relaxed and confident.",
                "في عيادتنا نؤمن أن كل ابتسامة تحكي قصة. لذلك نلتزم بتقديم رعاية أسنان شخصية ولطيفة تجعلك تشعر بالراحة والثقة."
              )}
            </p>
            <div className="flex flex-row gap-3 mt-1 items-center">
              <Button className="bg-[#5686E7] hover:bg-[#3d5db3] text-white px-6 py-2 rounded-full text-sm font-semibold shadow-none">
                {t("Book Now", "احجز الآن")}
              </Button>
              <button className="bg-white border border-gray-200 text-gray-800 px-6 py-2 rounded-full text-sm font-semibold hover:bg-gray-100 transition-colors">
                {t("Learn More", "اعرف المزيد")}
              </button>
            </div>
          </div>
          {/* Right Content */}
          <div className="relative w-full flex justify-start">
            <div className="relative w-full max-w-md md:max-w-lg rounded-2xl overflow-hidden shadow-xl">
              {/* 24/7 Assistance Badge */}
              <div className="absolute top-3 md:top-4 left-3 md:left-4 bg-white/90 px-3 py-1.5 md:px-4 md:py-2 rounded-full flex items-center gap-2 shadow text-[#5686E7] font-medium text-[10px] md:text-xs z-10">
                <span className="inline-block w-2 h-2 bg-[#5686E7] rounded-full"></span>
                {t("24/7 Assistance Available", "مساعدة على مدار الساعة")}
              </div>
              
              <Image
                src="/cheerful-doctor-making-notes-looking-away.jpg"
                alt={t("Cheerful doctor making notes and looking away", "طبيب مبتسم يدون الملاحظات")}
                width={500}
                height={450}
                className="w-full h-[320px] sm:h-[360px] md:h-[450px] object-cover rounded-2xl"
                priority
              />
              
              {/* Text badge inside image */}
              <div className="absolute bottom-3 md:bottom-4 left-12 md:left-16 z-20">
                <div className="bg-white rounded-full px-3 py-1.5 shadow flex items-center gap-2 border border-gray-100 text-[10px] md:text-xs">
                  <span className="text-gray-900 font-semibold">{t("Trusted By", "موثوق من")}</span>
                  <span className="text-gray-600">{t("Happy Customers", "عملاء سعداء")}</span>
                </div>
              </div>
            </div>
            
            {/* Avatars outside image container */}
            <div className="absolute bottom-3 md:bottom-4 -left-8 md:-left-16 z-20 flex items-center">
              <div className="flex -space-x-2">
                <Image src="/professional-woman-smiling-headshot.png" alt={t("Customer", "عميل")} width={28} height={28} className="rounded-full border-2 border-white" />
                <Image src="/professional-man-smiling-headshot.png" alt={t("Customer", "عميل")} width={28} height={28} className="rounded-full border-2 border-white" />
                <Image src="/professional-woman-smiling-headshot-diverse.png" alt={t("Customer", "عميل")} width={28} height={28} className="rounded-full border-2 border-white" />
                <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-[#5686E7] border-2 border-white flex items-center justify-center">
                  <span className="text-white text-[10px] md:text-xs font-semibold">1.5k</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Search Box - clean horizontal bar at bottom */}
        <div className="relative z-20 mt-6 md:mt-8 mb-0">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-3 md:p-4 flex flex-col md:flex-row items-center gap-3 md:gap-0 md:space-x-3 w-full max-w-4xl mx-auto">
            <div className="relative w-full md:w-1/4">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <select className="w-full pl-9 pr-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#5686E7] focus:border-transparent appearance-none bg-white text-gray-700 text-sm">
                <option>{t("Dates", "التاريخ")}</option>
                <option>{t("Today", "اليوم")}</option>
                <option>{t("Tomorrow", "غدًا")}</option>
                <option>{t("This Week", "هذا الأسبوع")}</option>
              </select>
            </div>
            <div className="relative w-full md:w-1/4">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <select className="w-full pl-9 pr-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#5686E7] focus:border-transparent appearance-none bg-white text-gray-700 text-sm">
                <option>{t("Specialist", "الأخصائي")}</option>
                <option>{t("General Dentist", "طبيب أسنان عام")}</option>
                <option>{t("Orthodontist", "تقويم الأسنان")}</option>
                <option>{t("Oral Surgeon", "جراح فم")}</option>
              </select>
            </div>
            <div className="relative w-full md:w-1/4">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <select className="w-full pl-9 pr-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#5686E7] focus:border-transparent appearance-none bg-white text-gray-700 text-sm">
                <option>{t("Location", "الموقع")}</option>
                <option>{t("Downtown Clinic", "العيادة الرئيسية")}</option>
                <option>{t("Uptown Branch", "فرع المدينة")}</option>
                <option>{t("Suburban Office", "فرع الضواحي")}</option>
              </select>
            </div>
            <Button className="bg-[#5686E7] hover:bg-[#3d5db3] text-white py-2 px-6 rounded-full flex items-center justify-center gap-2 font-semibold text-sm shadow-none w-full md:w-auto mt-2 md:mt-0">
              <Search className="h-4 w-4" />
              {t("Search", "بحث")}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
