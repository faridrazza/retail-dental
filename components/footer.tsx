"use client"

import Link from "next/link"
import { Facebook, Twitter, Linkedin, Instagram, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useLanguage } from "@/components/theme-provider"

export default function Footer() {
  const { language } = useLanguage()
  const t = (en: string, ar: string) => (language === "ar" ? ar : en)

  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Contact Info */}
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 text-sm mb-2">{t("Location", "الموقع")}</h4>
                <p className="text-gray-600 text-sm">6391 Elgin St. Celina, Delaware 10299</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 text-sm mb-2">{t("E-mail", "البريد الإلكتروني")}</h4>
                <p className="text-gray-600 text-sm">hello@gmail.com</p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 text-sm mb-2">{t("Phone", "الهاتف")}</h4>
                <p className="text-gray-600 text-sm">(406) 555-0120 Ext</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 text-sm mb-2">{t("Open Time", "مواعيد العمل")}</h4>
                <p className="text-gray-600 text-sm">08:00am - 05:00pm</p>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gray-900">{t("Bright News & Special Offers", "أحدث الأخبار والعروض الخاصة")}</h3>
            <div className="flex gap-2">
              <Input placeholder={t("Enter your E-mail", "أدخل بريدك الإلكتروني")} className="flex-1 border-gray-200" />
              <Button size="icon" className="bg-[#5686E7] hover:bg-[#3d5db3]">
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-900">{t("General", "عام")}</h4>
            <div className="space-y-2">
              <Link href="/" className="block text-gray-600 hover:text-[#5686E7] text-sm">
                {t("Home", "الرئيسية")}
              </Link>
              <Link href="/about" className="block text-gray-600 hover:text-[#5686E7] text-sm">
                {t("About Us", "من نحن")}
              </Link>
              <Link href="/services" className="block text-gray-600 hover:text-[#5686E7] text-sm">
                {t("Services", "الخدمات")}
              </Link>
              <Link href="/testimonials" className="block text-gray-600 hover:text-[#5686E7] text-sm">
                {t("Testimonials", "آراء العملاء")}
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-gray-900">{t("About", "حول")}</h4>
            <div className="space-y-2">
              <Link href="/blog" className="block text-gray-600 hover:text-[#5686E7] text-sm">
                {t("Blog", "المدونة")}
              </Link>
              <Link href="/careers" className="block text-gray-600 hover:text-[#5686E7] text-sm">
                {t("Careers", "الوظائف")}
              </Link>
              <Link href="/culture" className="block text-gray-600 hover:text-[#5686E7] text-sm">
                {t("Culture", "الثقافة")}
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-gray-900">{t("Resource", "المصادر")}</h4>
            <div className="space-y-2">
              <Link href="/free-content" className="block text-gray-600 hover:text-[#5686E7] text-sm">
                {t("Free Content", "محتوى مجاني")}
              </Link>
              <Link href="/tutorials" className="block text-gray-600 hover:text-[#5686E7] text-sm">
                {t("Tutorials", "شروحات")}
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-gray-900">{t("Social", "التواصل")}</h4>
            <div className="flex space-x-3">
              <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-[#5686E7] hover:text-white cursor-pointer transition-colors">
                <Facebook className="h-4 w-4" />
              </div>
              <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-[#5686E7] hover:text-white cursor-pointer transition-colors">
                <Twitter className="h-4 w-4" />
              </div>
              <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-[#5686E7] hover:text-white cursor-pointer transition-colors">
                <Linkedin className="h-4 w-4" />
              </div>
              <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-[#5686E7] hover:text-white cursor-pointer transition-colors">
                <Instagram className="h-4 w-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
