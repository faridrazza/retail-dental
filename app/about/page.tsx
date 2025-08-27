import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { GraduationCap, Award, Users, Heart, Calendar } from "lucide-react"

export default function AboutPage() {
  const team = [
    {
      name: "Dr. Sarah Smith",
      title: "Lead Dentist & Founder",
      education: "DDS from Harvard School of Dental Medicine",
      experience: "15+ years",
      specialties: ["General Dentistry", "Cosmetic Procedures"],
      image: "/professional-female-dentist-smiling-in-white-coat.png",
    },
    {
      name: "Dr. Michael Johnson",
      title: "Orthodontist",
      education: "DDS, MS Orthodontics from UCLA",
      experience: "12+ years",
      specialties: ["Braces", "Clear Aligners", "Bite Correction"],
      image: "/professional-male-orthodontist-in-dental-office.png",
    },
    {
      name: "Dr. Emily Chen",
      title: "Oral Surgeon",
      education: "DDS, MD from Johns Hopkins",
      experience: "10+ years",
      specialties: ["Dental Implants", "Wisdom Teeth", "Oral Surgery"],
      image: "/professional-female-oral-surgeon-in-scrubs.png",
    },
  ]

  const values = [
    {
      icon: Heart,
      title: "Patient-Centered Care",
      description: "Every decision we make is focused on what's best for our patients' health and comfort.",
    },
    {
      icon: Award,
      title: "Excellence in Treatment",
      description: "We maintain the highest standards of dental care using the latest technology and techniques.",
    },
    {
      icon: Users,
      title: "Experienced Team",
      description: "Our team of dental professionals brings decades of combined experience and expertise.",
    },
    {
      icon: GraduationCap,
      title: "Continuous Learning",
      description: "We stay current with the latest advances in dental medicine through ongoing education.",
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
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground text-balance">About DentalCare Clinic</h1>
              <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
                For over 15 years, we've been dedicated to providing exceptional dental care to our community. Our
                mission is to help every patient achieve optimal oral health in a comfortable, welcoming environment.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-foreground">Our Story</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    DentalCare Clinic was founded in 2009 with a simple vision: to provide comprehensive, compassionate
                    dental care that puts patients first. What started as a small practice has grown into a full-service
                    dental clinic serving thousands of patients.
                  </p>
                  <p>
                    We believe that everyone deserves access to quality dental care. That's why we've invested in the
                    latest technology, continuing education for our staff, and creating a warm, welcoming environment
                    where patients feel comfortable and cared for.
                  </p>
                  <p>
                    Today, we're proud to be one of the most trusted dental practices in the area, with a team of
                    experienced professionals who are passionate about helping patients achieve their best smiles.
                  </p>
                </div>
              </div>
              <div className="relative">
                <img
                  src="/modern-dental-clinic.png"
                  alt="Modern dental clinic interior"
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
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Our Values</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                These core values guide everything we do and shape the experience we provide to every patient who walks
                through our doors.
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
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Meet Our Team</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                Our experienced team of dental professionals is committed to providing you with the highest quality care
                in a comfortable, friendly environment.
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
                        <strong>Education:</strong> {member.education}
                      </p>
                      <p>
                        <strong>Experience:</strong> {member.experience}
                      </p>
                      <p>
                        <strong>Specialties:</strong> {member.specialties.join(", ")}
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
              <h2 className="text-3xl font-bold text-foreground">Ready to Experience the Difference?</h2>
              <p className="text-lg text-muted-foreground">
                Join thousands of satisfied patients who trust DentalCare for their oral health needs.
              </p>
              <Button size="lg" className="flex items-center gap-2 mx-auto">
                <Calendar className="h-5 w-5" />
                Schedule Your Appointment
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
