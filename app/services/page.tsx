'use client'

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Smile, Sparkles, Braces, Scissors, Shield, Baby, Zap, Calendar, CheckCircle } from "lucide-react"
import { useLanguage } from "@/components/theme-provider"

export default function ServicesPage() {
  const { language } = useLanguage()
  const t = (en: string, ar: string) => (language === "ar" ? ar : en)

  const services = [
    {
      icon: Smile,
      title: t("General Dentistry", "الأسنان العام"),
      description: t("Comprehensive oral health care for the whole family", "رعاية فموية شاملة للعائلة"),
      price: t("Starting at $150", "ابتداءً من 150$"),
      duration: t("30-60 minutes", "30-60 دقيقة"),
      treatments: [
        t("Regular Cleanings & Exams", "تنظيف وفحوصات دورية"),
        t("Cavity Fillings", "حشوات"),
        t("Root Canal Therapy", "علاج عصب"),
        t("Tooth Extractions", "خلع الأسنان"),
        t("Gum Disease Treatment", "علاج اللثة"),
        t("Oral Cancer Screening", "فحص سرطان الفم"),
      ],
      image: "/dental-cleaning-procedure-in-modern-clinic.png",
    },
    {
      icon: Sparkles,
      title: t("Cosmetic Dentistry", "تجميل الأسنان"),
      description: t("Transform your smile with our advanced cosmetic procedures", "حوّل ابتسامتك بإجراءات تجميلية متقدمة"),
      price: t("Starting at $300", "ابتداءً من 300$"),
      duration: t("60-120 minutes", "60-120 دقيقة"),
      treatments: [
        t("Professional Teeth Whitening", "تبييض احترافي"),
        t("Porcelain Veneers", "عدسات خزفية"),
        t("Dental Bonding", "ترابط تجميلي"),
        t("Smile Makeovers", "تجميل ابتسامة"),
        t("Gum Contouring", "تجميل اللثة"),
        t("Tooth Reshaping", "إعادة تشكيل الأسنان"),
      ],
      image: "/teeth-whitening-procedure-with-before-and-after-re.png",
    },
    {
      icon: Braces,
      title: t("Orthodontics", "تقويم الأسنان"),
      description: t("Straighten your teeth with modern orthodontic solutions", "قوّم أسنانك بحلول حديثة"),
      price: t("Starting at $3,000", "ابتداءً من 3000$"),
      duration: t("12-24 months", "12-24 شهرًا"),
      treatments: [
        t("Traditional Metal Braces", "تقويم معدني"),
        t("Clear Ceramic Braces", "تقويم خزفي شفاف"),
        t("Invisalign Clear Aligners", "تقويم شفاف"),
        t("Retainers", "مثبتات"),
        t("Bite Correction", "تصحيح العضة"),
        t("Early Intervention", "تدخل مبكر"),
      ],
      image: "/orthodontist-fitting-clear-aligners-on-patient.png",
    },
    {
      icon: Scissors,
      title: t("Oral Surgery", "جراحة فم"),
      description: t("Specialized surgical procedures with precision and care", "إجراءات جراحية متخصصة بدقة وعناية"),
      price: t("Starting at $500", "ابتداءً من 500$"),
      duration: t("30-90 minutes", "30-90 دقيقة"),
      treatments: [
        t("Wisdom Tooth Removal", "خلع ضرس العقل"),
        t("Dental Implants", "زرعات"),
        t("Bone Grafting", "ترقيع عظمي"),
        t("Gum Surgery", "جراحة لثة"),
        t("Tooth Extractions", "خلع الأسنان"),
        t("Jaw Surgery Consultation", "استشارة جراحة فك"),
      ],
      image: "/oral-surgeon-performing-dental-implant-procedure.png",
    },
    {
      icon: Shield,
      title: t("Preventive Care", "رعاية وقائية"),
      description: t("Protect your oral health with preventive treatments", "احمِ صحتك الفموية بالعلاجات الوقائية"),
      price: t("Starting at $100", "ابتداءً من 100$"),
      duration: t("30-45 minutes", "30-45 دقيقة"),
      treatments: [
        t("Dental Sealants", "سدادات أسنان"),
        t("Fluoride Treatments", "علاجات الفلورايد"),
        t("Night Guards", "واقيات ليلية"),
        t("Sports Mouthguards", "واقيات رياضية"),
        t("Oral Hygiene Education", "تثقيف نظافة الفم"),
        t("Dietary Counseling", "استشارات غذائية"),
      ],
      image: "/dental-hygienist-applying-fluoride-treatment.png",
    },
    {
      icon: Baby,
      title: t("Pediatric Dentistry", "أسنان الأطفال"),
      description: t("Gentle dental care designed specifically for children", "رعاية لطيفة للأطفال"),
      price: t("Starting at $120", "ابتداءً من 120$"),
      duration: t("30-45 minutes", "30-45 دقيقة"),
      treatments: [
        t("Children's Cleanings", "تنظيف للأطفال"),
        t("Cavity Prevention", "منع التسوس"),
        t("Pediatric Fillings", "حشوات للأطفال"),
        t("Space Maintainers", "حافظات مسافة"),
        t("Habit Counseling", "إرشاد العادات"),
        t("Emergency Care", "رعاية طارئة"),
      ],
      image: "/pediatric-dentist-examining-child-patient-in-color.png",
    },
  ]

  const emergencyServices = [
    t("Severe Tooth Pain", "ألم شديد في الأسنان"),
    t("Dental Trauma", "إصابة سنية"),
    t("Lost Fillings/Crowns", "فقدان حشوات/تيجان"),
    t("Broken Teeth", "أسنان مكسورة"),
    t("Swollen Gums", "تورم اللثة"),
    t("Dental Infections", "التهابات سنية"),
  ]

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-100">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground text-balance">
                {t("Comprehensive Dental Services", "خدمات أسنان شاملة")}
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
                {t(
                  "From routine cleanings to complex procedures, we offer a complete range of dental services to meet all your oral health needs in one convenient location.",
                  "بدءًا من التنظيف الروتيني وحتى الإجراءات المعقدة، نقدم مجموعة كاملة من خدمات الأسنان لتلبية جميع احتياجاتك في مكان واحد."
                )}
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <Card
                  key={index}
                  className="overflow-hidden border-border/50 hover:shadow-lg transition-all duration-300"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="aspect-video md:aspect-square overflow-hidden">
                      <img
                        src={service.image || "/placeholder.svg"}
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6 space-y-4">
                      <CardHeader className="p-0">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                            <service.icon className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <CardTitle className="text-lg">{service.title}</CardTitle>
                            <div className="flex gap-2 mt-1">
                              <Badge variant="secondary" className="text-xs">
                                {service.price}
                              </Badge>
                              <Badge variant="outline" className="text-xs">
                                {service.duration}
                              </Badge>
                            </div>
                          </div>
                        </div>
                        <CardDescription className="text-sm">{service.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="p-0">
                        <div className="space-y-2">
                          {service.treatments.slice(0, 4).map((treat, treatmentIndex) => (
                            <div key={treatmentIndex} className="flex items-center gap-2">
                              <CheckCircle className="h-3 w-3 text-primary" />
                              <span className="text-xs text-muted-foreground">{treat}</span>
                            </div>
                          ))}
                          {service.treatments.length > 4 && (
                            <p className="text-xs text-muted-foreground">
                              +{service.treatments.length - 4} {t("more services", "خدمات إضافية")}
                            </p>
                          )}
                        </div>
                        <Button size="sm" className="w-full mt-4">
                          <Calendar className="h-4 w-4 mr-2" />
                          {t("Book Consultation", "احجز استشارة")}
                        </Button>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Emergency Services */}
        <section className="py-20 bg-blue-50/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center space-y-4 mb-12">
                <div className="flex items-center justify-center gap-2">
                  <Zap className="h-6 w-6 text-primary" />
                  <h2 className="text-3xl font-bold text-foreground">{t("Emergency Dental Care", "رعاية أسنان طارئة")}</h2>
                </div>
                <p className="text-lg text-muted-foreground text-pretty">
                  {t(
                    "Dental emergencies can happen at any time. We offer same-day emergency appointments to address urgent dental issues quickly and effectively.",
                    "قد تحدث حالات طوارئ الأسنان في أي وقت. نقدم مواعيد طارئة في نفس اليوم لمعالجة الحالات بسرعة وفعالية."
                  )}
                </p>
              </div>

              <Card className="border-border/50">
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="font-semibold text-foreground mb-4">{t("We Treat:", "نعالج:")}</h3>
                      <div className="grid grid-cols-1 gap-2">
                        {emergencyServices.map((service, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-primary" />
                            <span className="text-muted-foreground">{service}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="bg-primary/5 rounded-lg p-4">
                        <h4 className="font-semibold text-foreground mb-2">{t("Emergency Hotline", "الخط الساخن للطوارئ")}</h4>
                        <p className="text-2xl font-bold text-primary">(555) 123-4567</p>
                        <p className="text-sm text-muted-foreground">{t("Available 24/7 for emergencies", "متاح 24/7 للحالات الطارئة")}</p>
                      </div>
                      <Button size="lg" className="w-full">
                        {t("Call Emergency Line", "اتصل بخط الطوارئ")}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Technology Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">{t("Advanced Technology", "تقنيات متقدمة")}</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                {t(
                  "We use the latest dental technology to provide more accurate diagnoses, comfortable treatments, and better outcomes for our patients.",
                  "نستخدم أحدث تقنيات الأسنان لتقديم تشخيصات أدق وعلاجات أكثر راحة ونتائج أفضل لمرضانا."
                )}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center border-border/50">
                <CardContent className="p-6 space-y-4">
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <Shield className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground">{t("Digital X-Rays", "أشعة سينية رقمية")}</h3>
                  <p className="text-sm text-muted-foreground">
                    {t("90% less radiation than traditional X-rays with instant results", "إشعاع أقل بنسبة 90% من الأشعة التقليدية ونتائج فورية")}
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center border-border/50">
                <CardContent className="p-6 space-y-4">
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <Zap className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground">{t("Laser Dentistry", "طب أسنان بالليزر")}</h3>
                  <p className="text-sm text-muted-foreground">
                    {t("Minimally invasive treatments with faster healing times", "علاجات طفيفة التوغل مع وقت شفاء أسرع")}
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center border-border/50">
                <CardContent className="p-6 space-y-4">
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <Smile className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground">{t("3D Imaging", "تصوير ثلاثي الأبعاد")}</h3>
                  <p className="text-sm text-muted-foreground">{t("Detailed 3D scans for precise treatment planning", "صور ثلاثية مفصلة لتخطيط علاجي دقيق")}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
