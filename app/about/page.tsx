'use client'

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { GraduationCap, Award, Users, Heart, Calendar } from "lucide-react"
import { useLanguage } from "@/components/theme-provider"

export default function AboutPage() {
  const { language } = useLanguage()
  const t = (en: string, ar: string) => (language === "ar" ? ar : en)

  const team = [
    {
      name: "Dr. Sarah Smith",
      title: t("Lead Dentist & Founder", "الطبيبة الرئيسية والمؤسسة"),
      education: t("DDS from Harvard School of Dental Medicine", "دكتوراه من كلية هارفارد لطب الأسنان"),
      experience: t("15+ years", "أكثر من 15 سنة"),
      specialties: [t("General Dentistry", "الأسنان العام"), t("Cosmetic Procedures", "إجراءات تجميلية")],
      image: "/professional-female-dentist-smiling-in-white-coat.png",
    },
    {
      name: "Dr. Michael Johnson",
      title: t("Orthodontist", "أخصائي تقويم الأسنان"),
      education: t("DDS, MS Orthodontics from UCLA", "دكتوراه وماجستير تقويم الأسنان من UCLA"),
      experience: t("12+ years", "أكثر من 12 سنة"),
      specialties: [t("Braces", "تقويم"), t("Clear Aligners", "تقويم شفاف"), t("Bite Correction", "تصحيح العضة")],
      image: "/professional-male-orthodontist-in-dental-office.png",
    },
    {
      name: "Dr. Emily Chen",
      title: t("Oral Surgeon", "جرّاحة فم"),
      education: t("DDS, MD from Johns Hopkins", "دكتوراه وطب من جامعة جونز هوبكنز"),
      experience: t("10+ years", "أكثر من 10 سنوات"),
      specialties: [t("Dental Implants", "زرعات"), t("Wisdom Teeth", "أضراس العقل"), t("Oral Surgery", "جراحة فم")],
      image: "/professional-female-oral-surgeon-in-scrubs.png",
    },
  ]

  const values = [
    {
      icon: Heart,
      title: t("Patient-Centered Care", "رعاية محورها المريض"),
      description: t("Every decision we make is focused on what's best for our patients' health and comfort.", "كل قرار نتخذه يركز على صحة وراحة مرضانا."),
    },
    {
      icon: Award,
      title: t("Excellence in Treatment", "التميز في العلاج"),
      description: t("We maintain the highest standards of dental care using the latest technology and techniques.", "نحافظ على أعلى معايير رعاية الأسنان باستخدام أحدث التقنيات."),
    },
    {
      icon: Users,
      title: t("Experienced Team", "فريق ذو خبرة"),
      description: t("Our team of dental professionals brings decades of combined experience and expertise.", "يتمتع فريقنا بخبرات طويلة ومتنوعة في طب الأسنان."),
    },
    {
      icon: GraduationCap,
      title: t("Continuous Learning", "تعلم مستمر"),
      description: t("We stay current with the latest advances in dental medicine through ongoing education.", "نواكب أحدث التطورات من خلال التعليم المستمر."),
    },
  ]

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-100">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground text-balance">{t("About DentalCare Clinic", "نبذة عن عيادة دنتال كير")}</h1>
              <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
                {t(
                  "For over 15 years, we've been dedicated to providing exceptional dental care to our community. Our mission is to help every patient achieve optimal oral health in a comfortable, welcoming environment.",
                  "على مدار أكثر من 15 عامًا، كرّسنا جهودنا لتقديم رعاية أسنان متميزة لمجتمعنا. هدفنا مساعدة كل مريض على تحقيق صحة فموية مثالية في بيئة مريحة ومرحبة."
                )}
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-foreground">{t("Our Story", "قصتنا")}</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    {t(
                      "DentalCare Clinic was founded in 2009 with a simple vision: to provide comprehensive, compassionate dental care that puts patients first. What started as a small practice has grown into a full-service dental clinic serving thousands of patients.",
                      "تأسست عيادة دنتال كير عام 2009 برؤية بسيطة: تقديم رعاية أسنان شاملة وإنسانية تضع المريض أولاً. ما بدأ كمركز صغير أصبح اليوم عيادة متكاملة تخدم آلاف المرضى."
                    )}
                  </p>
                  <p>
                    {t(
                      "We believe that everyone deserves access to quality dental care. That's why we've invested in the latest technology, continuing education for our staff, and creating a warm, welcoming environment where patients feel comfortable and cared for.",
                      "نؤمن بأن الجميع يستحق رعاية أسنان عالية الجودة، لذلك استثمرنا في أحدث التقنيات والتعليم المستمر لفريقنا وخلق بيئة دافئة ومرحبة يشعر فيها المرضى بالراحة."
                    )}
                  </p>
                  <p>
                    {t(
                      "Today, we're proud to be one of the most trusted dental practices in the area, with a team of experienced professionals who are passionate about helping patients achieve their best smiles.",
                      "اليوم نفخر بكوننا من أكثر مراكز الأسنان موثوقية في المنطقة، مع فريق محترف شغوف بمساعدة المرضى على الوصول لأفضل ابتسامة."
                    )}
                  </p>
                </div>
              </div>
              <div className="relative">
                <img
                  src="/modern-dental-clinic.png"
                  alt={t("Modern dental clinic interior", "ديكور عيادة أسنان حديثة")}
                  className="rounded-2xl shadow-lg w-full h-[500px] object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-20 bg-blue-50/50">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">{t("Our Values", "قيمنا")}</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                {t(
                  "These core values guide everything we do and shape the experience we provide to every patient who walks through our doors.",
                  "توجّه هذه القيم الأساسية كل ما نقوم به وتشكل التجربة التي نقدمها لكل مريض يزورنا."
                )}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <Card key={index} className="text-center border-border/50 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 space-y-4">
                    <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                      <value.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground">{value.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Meet Our Team */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">{t("Meet Our Team", "تعرف على فريقنا")}</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                {t(
                  "Our experienced team of dental professionals is committed to providing you with the highest quality care in a comfortable, friendly environment.",
                  "فريقنا ذو الخبرة ملتزم بتقديم أعلى مستويات الرعاية لك في بيئة مريحة وودية."
                )}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <Card key={index} className="overflow-hidden border-border/50 hover:shadow-lg transition-shadow">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6 space-y-4">
                    <div>
                      <h3 className="font-bold text-lg text-foreground">{member.name}</h3>
                      <p className="text-primary font-medium">{member.title}</p>
                    </div>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p>
                        <strong>{t("Education:", "التعليم:")}</strong> {member.education}
                      </p>
                      <p>
                        <strong>{t("Experience:", "الخبرة:")}</strong> {member.experience}
                      </p>
                      <p>
                        <strong>{t("Specialties:", "التخصصات:")}</strong> {member.specialties.join(", ")}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-50">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-2xl mx-auto space-y-6">
              <h2 className="text-3xl font-bold text-foreground">{t("Ready to Experience the Difference?", "هل أنت مستعد لتجربة الفرق؟")}</h2>
              <p className="text-lg text-muted-foreground">
                {t(
                  "Join thousands of satisfied patients who trust DentalCare for their oral health needs.",
                  "انضم إلى آلاف المرضى الراضين الذين يثقون بدنتال كير لتلبية احتياجاتهم الصحية الفموية."
                )}
              </p>
              <Button size="lg" className="flex items-center gap-2 mx-auto">
                <Calendar className="h-5 w-5" />
                {t("Schedule Your Appointment", "احجز موعدك")}
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
