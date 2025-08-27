'use client'

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Phone, Mail, MapPin, Clock, Calendar, MessageSquare, Car, CreditCard } from "lucide-react"
import { useLanguage } from "@/components/theme-provider"

export default function ContactPage() {
  const { language } = useLanguage()
  const t = (en: string, ar: string) => (language === "ar" ? ar : en)

  const contactInfo = [
    {
      icon: Phone,
      title: t("Phone", "الهاتف"),
      details: ["(555) 123-4567", t("Emergency: (555) 123-4568", "الطوارئ: (555) 123-4568")],
      action: t("Call Now", "اتصل الآن"),
    },
    {
      icon: Mail,
      title: t("Email", "البريد"),
      details: ["info@dentalcare.com", "appointments@dentalcare.com"],
      action: t("Send Email", "أرسل بريدًا"),
    },
    {
      icon: MapPin,
      title: t("Address", "العنوان"),
      details: ["123 Dental Street", "Suite 100, City, ST 12345"],
      action: t("Get Directions", "احصل على الاتجاهات"),
    },
    {
      icon: Clock,
      title: t("Hours", "الساعات"),
      details: [t("Mon-Fri: 8:00 AM - 6:00 PM", "الاثنين-الجمعة: 8:00 ص - 6:00 م"), t("Sat: 9:00 AM - 3:00 PM", "السبت: 9:00 ص - 3:00 م")],
      action: t("View Schedule", "عرض الجدول"),
    },
  ]

  const officeFeatures = [
    { icon: Car, title: t("Free Parking", "مواقف مجانية"), description: t("Convenient parking available for all patients", "مواقف مريحة متاحة للجميع") },
    { icon: CreditCard, title: t("Insurance Accepted", "نقبل التأمين"), description: t("We accept most major dental insurance plans", "نقبل معظم خطط التأمين") },
    { icon: Calendar, title: t("Flexible Scheduling", "مواعيد مرنة"), description: t("Evening and weekend appointments available", "متاح مواعيد مسائية وعطلات") },
    { icon: MessageSquare, title: t("Online Booking", "حجز عبر الإنترنت"), description: t("Schedule appointments 24/7 through our website", "احجز المواعيد 24/7 عبر موقعنا") },
  ]

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-100">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground text-balance">{t("Contact DentalCare", "اتصل بدنتال كير")}</h1>
              <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
                {t(
                  "Ready to schedule your appointment or have questions about our services? We're here to help and look forward to hearing from you.",
                  "هل أنت مستعد لحجز موعدك أو لديك أسئلة حول خدماتنا؟ نحن هنا للمساعدة ونتطلع لسماعك."
                )}
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {contactInfo.map((info, index) => (
                <Card key={index} className="text-center border-border/50 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 space-y-4">
                    <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                      <info.icon className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">{info.title}</h3>
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-sm text-muted-foreground">
                          {detail}
                        </p>
                      ))}
                    </div>
                    <Button variant="outline" size="sm" className="w-full bg-transparent">
                      {info.action}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form & Map */}
        <section className="py-20 bg-blue-50/50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="border-border/50">
                <CardHeader>
                  <CardTitle className="text-2xl">{t("Send Us a Message", "أرسل لنا رسالة")}</CardTitle>
                  <CardDescription>{t("Fill out the form below and we'll get back to you within 24 hours.", "املأ النموذج أدناه وسنعود إليك خلال 24 ساعة.")}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">{t("First Name", "الاسم الأول")}</Label>
                      <Input id="firstName" placeholder={t("John", "محمد")} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">{t("Last Name", "اسم العائلة")}</Label>
                      <Input id="lastName" placeholder={t("Doe", "أحمد")} />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">{t("Email", "البريد الإلكتروني")}</Label>
                    <Input id="email" type="email" placeholder="john@example.com" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">{t("Phone Number", "رقم الهاتف")}</Label>
                    <Input id="phone" type="tel" placeholder="(555) 123-4567" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service">{t("Service Interested In", "الخدمة المطلوبة")}</Label>
                    <select
                      id="service"
                      className="w-full px-3 py-2 border border-input bg-background rounded-md text-sm"
                    >
                      <option value="">{t("Select a service", "اختر خدمة")}</option>
                      <option value="general">{t("General Dentistry", "الأسنان العام")}</option>
                      <option value="cosmetic">{t("Cosmetic Dentistry", "تجميل الأسنان")}</option>
                      <option value="orthodontics">{t("Orthodontics", "تقويم الأسنان")}</option>
                      <option value="surgery">{t("Oral Surgery", "جراحة فم")}</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">{t("Message", "الرسالة")}</Label>
                    <Textarea id="message" placeholder={t("Tell us about your dental needs or questions...", "أخبرنا عن احتياجاتك أو أسئلتك...")} rows={4} />
                  </div>

                  <Button size="lg" className="w-full">
                    {t("Send Message", "أرسل الرسالة")}
                  </Button>
                </CardContent>
              </Card>

              {/* Map & Office Info */}
              <div className="space-y-6">
                {/* Map Placeholder */}
                <Card className="border-border/50">
                  <CardContent className="p-0">
                    <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                      <div className="text-center space-y-2">
                        <MapPin className="h-12 w-12 text-primary mx-auto" />
                        <p className="text-muted-foreground">{t("Interactive Map", "خريطة تفاعلية")}</p>
                        <p className="text-sm text-muted-foreground">123 Dental Street, Suite 100</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Office Features */}
                <Card className="border-border/50">
                  <CardHeader>
                    <CardTitle>{t("Why Choose Our Office?", "لماذا تختار عيادتنا؟")}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {officeFeatures.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <feature.icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground">{feature.title}</h4>
                          <p className="text-sm text-muted-foreground">{feature.description}</p>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Emergency Contact */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <Card className="max-w-4xl mx-auto border-primary/20 bg-primary/5">
              <CardContent className="p-8 text-center space-y-6">
                <div className="mx-auto w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
                  <Phone className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-2">{t("Dental Emergency?", "حالة طارئة؟")}</h2>
                  <p className="text-muted-foreground mb-4">
                    {t("Don't wait - call our emergency hotline for immediate assistance.", "لا تنتظر - اتصل بخط الطوارئ لدينا للمساعدة الفورية.")}
                  </p>
                  <p className="text-3xl font-bold text-primary mb-4">(555) 123-4568</p>
                  <p className="text-sm text-muted-foreground">{t("Available 24/7 for dental emergencies", "متاح 24/7 لحالات طوارئ الأسنان")}</p>
                </div>
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  {t("Call Emergency Line", "اتصل بخط الطوارئ")}
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
