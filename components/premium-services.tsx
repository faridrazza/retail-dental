"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Smile, Crown, Zap, Shield, Heart, Star, ArrowRight } from "lucide-react"
import { useLanguage } from "@/components/theme-provider"

export default function PremiumServices() {
  const { language } = useLanguage()
  const t = (en: string, ar: string) => (language === "ar" ? ar : en)

  const services = [
    {
      icon: Smile,
      title: t("Cosmetic Dentistry", "طب تجميل الأسنان"),
      description: t("Transform your smile with veneers, whitening, and aesthetic treatments", "حوّل ابتسامتك بعدسات وتبييض وعلاجات تجميلية"),
      features: [t("Porcelain Veneers", "عدسات خزفية"), t("Professional Whitening", "تبييض احترافي"), t("Smile Design", "تصميم ابتسامة")],
      color: "primary" as const,
      popular: true,
    },
    {
      icon: Crown,
      title: t("Restorative Care", "علاجات ترميمية"),
      description: t("Restore function and beauty with crowns, bridges, and implants", "استعد الوظيفة والجمال بالتيجان والجسور والزرعات"),
      features: [t("Dental Implants", "زرعات أسنان"), t("Crowns & Bridges", "تيجان وجسور"), t("Full Mouth Restoration", "ترميم شامل")],
      color: "secondary" as const,
    },
    {
      icon: Shield,
      title: t("Preventive Care", "رعاية وقائية"),
      description: t("Maintain optimal oral health with regular cleanings and checkups", "حافظ على صحة الفم بالتنظيف والفحوصات الدورية"),
      features: [t("Regular Cleanings", "تنظيف دوري"), t("Oral Exams", "فحوصات فموية"), t("Preventive Treatments", "علاجات وقائية")],
      color: "primary" as const,
    },
    {
      icon: Zap,
      title: t("Emergency Care", "طوارئ"),
      description: t("24/7 emergency dental services for urgent dental needs", "خدمات طوارئ أسنان 24/7 للحالات العاجلة"),
      features: [t("24/7 Availability", "متاح 24/7"), t("Pain Relief", "تسكين الألم"), t("Urgent Repairs", "إصلاحات عاجلة")],
      color: "secondary" as const,
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            <Heart className="w-4 h-4 mr-2" />
            {t("Our Services", "خدماتنا")}
          </Badge>

          <h2 className="text-4xl md:text-5xl font-bold text-balance mb-6">
            {t("Comprehensive Dental Care", "رعاية أسنان شاملة")}
            <span className="text-primary"> {t("Tailored to You", "مصممة لك")}</span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            {t(
              "From routine cleanings to complete smile makeovers, we offer a full range of premium dental services designed to meet your unique needs and exceed your expectations.",
              "من التنظيف الروتيني إلى تجميل الابتسامة، نقدم مجموعة كاملة من الخدمات المتميزة لتلبية احتياجاتك وتجاوز توقعاتك."
            )}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`group relative overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 ${service.color === 'primary' ? 'border-primary/20' : 'border-secondary/20'}`}
            >
              {service.popular && (
                <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
                  <Star className="w-3 h-3 mr-1" />
                  {t("Popular", "شائع")}
                </Badge>
              )}

              <CardContent className="p-8">
                <div
                  className={`w-16 h-16 mb-6 rounded-2xl flex items-center justify-center ${service.color === 'primary' ? 'bg-primary/10' : 'bg-secondary/10'} group-hover:scale-110 transition-transform`}
                >
                  <service.icon
                    className={`w-8 h-8 ${service.color === 'primary' ? 'text-primary' : 'text-secondary'}`}
                  />
                </div>

                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">{service.description}</p>

                <div className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm">
                      <div
                        className={`w-1.5 h-1.5 rounded-full ${service.color === 'primary' ? 'bg-primary' : 'bg-secondary'}`}
                      ></div>
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button variant="ghost" className="w-full group/btn justify-between p-0 h-auto">
                  <span>{t("Learn More", "اعرف المزيد")}</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <Button size="lg" className="px-8">
            {t("View All Services", "عرض كل الخدمات")}
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  )
}
