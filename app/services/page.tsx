import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Smile, Sparkles, Braces, Scissors, Shield, Baby, Zap, Calendar, CheckCircle } from "lucide-react"

export default function ServicesPage() {
  const services = [
    {
      icon: Smile,
      title: "General Dentistry",
      description: "Comprehensive oral health care for the whole family",
      price: "Starting at $150",
      duration: "30-60 minutes",
      treatments: [
        "Regular Cleanings & Exams",
        "Cavity Fillings",
        "Root Canal Therapy",
        "Tooth Extractions",
        "Gum Disease Treatment",
        "Oral Cancer Screening",
      ],
      image: "/dental-cleaning-procedure-in-modern-clinic.png",
    },
    {
      icon: Sparkles,
      title: "Cosmetic Dentistry",
      description: "Transform your smile with our advanced cosmetic procedures",
      price: "Starting at $300",
      duration: "60-120 minutes",
      treatments: [
        "Professional Teeth Whitening",
        "Porcelain Veneers",
        "Dental Bonding",
        "Smile Makeovers",
        "Gum Contouring",
        "Tooth Reshaping",
      ],
      image: "/teeth-whitening-procedure-with-before-and-after-re.png",
    },
    {
      icon: Braces,
      title: "Orthodontics",
      description: "Straighten your teeth with modern orthodontic solutions",
      price: "Starting at $3,000",
      duration: "12-24 months",
      treatments: [
        "Traditional Metal Braces",
        "Clear Ceramic Braces",
        "Invisalign Clear Aligners",
        "Retainers",
        "Bite Correction",
        "Early Intervention",
      ],
      image: "/orthodontist-fitting-clear-aligners-on-patient.png",
    },
    {
      icon: Scissors,
      title: "Oral Surgery",
      description: "Specialized surgical procedures with precision and care",
      price: "Starting at $500",
      duration: "30-90 minutes",
      treatments: [
        "Wisdom Tooth Removal",
        "Dental Implants",
        "Bone Grafting",
        "Gum Surgery",
        "Tooth Extractions",
        "Jaw Surgery Consultation",
      ],
      image: "/oral-surgeon-performing-dental-implant-procedure.png",
    },
    {
      icon: Shield,
      title: "Preventive Care",
      description: "Protect your oral health with preventive treatments",
      price: "Starting at $100",
      duration: "30-45 minutes",
      treatments: [
        "Dental Sealants",
        "Fluoride Treatments",
        "Night Guards",
        "Sports Mouthguards",
        "Oral Hygiene Education",
        "Dietary Counseling",
      ],
      image: "/dental-hygienist-applying-fluoride-treatment.png",
    },
    {
      icon: Baby,
      title: "Pediatric Dentistry",
      description: "Gentle dental care designed specifically for children",
      price: "Starting at $120",
      duration: "30-45 minutes",
      treatments: [
        "Children's Cleanings",
        "Cavity Prevention",
        "Pediatric Fillings",
        "Space Maintainers",
        "Habit Counseling",
        "Emergency Care",
      ],
      image: "/pediatric-dentist-examining-child-patient-in-color.png",
    },
  ]

  const emergencyServices = [
    "Severe Tooth Pain",
    "Dental Trauma",
    "Lost Fillings/Crowns",
    "Broken Teeth",
    "Swollen Gums",
    "Dental Infections",
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
                Comprehensive Dental Services
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
                From routine cleanings to complex procedures, we offer a complete range of dental services to meet all
                your oral health needs in one convenient location.
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
                          {service.treatments.slice(0, 4).map((treatment, treatmentIndex) => (
                            <div key={treatmentIndex} className="flex items-center gap-2">
                              <CheckCircle className="h-3 w-3 text-primary" />
                              <span className="text-xs text-muted-foreground">{treatment}</span>
                            </div>
                          ))}
                          {service.treatments.length > 4 && (
                            <p className="text-xs text-muted-foreground">
                              +{service.treatments.length - 4} more services
                            </p>
                          )}
                        </div>
                        <Button size="sm" className="w-full mt-4">
                          <Calendar className="h-4 w-4 mr-2" />
                          Book Consultation
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
                  <h2 className="text-3xl font-bold text-foreground">Emergency Dental Care</h2>
                </div>
                <p className="text-lg text-muted-foreground text-pretty">
                  Dental emergencies can happen at any time. We offer same-day emergency appointments to address urgent
                  dental issues quickly and effectively.
                </p>
              </div>

              <Card className="border-border/50">
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="font-semibold text-foreground mb-4">We Treat:</h3>
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
                        <h4 className="font-semibold text-foreground mb-2">Emergency Hotline</h4>
                        <p className="text-2xl font-bold text-primary">(555) 123-4567</p>
                        <p className="text-sm text-muted-foreground">Available 24/7 for emergencies</p>
                      </div>
                      <Button size="lg" className="w-full">
                        Call Emergency Line
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
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Advanced Technology</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                We use the latest dental technology to provide more accurate diagnoses, comfortable treatments, and
                better outcomes for our patients.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center border-border/50">
                <CardContent className="p-6 space-y-4">
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <Shield className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground">Digital X-Rays</h3>
                  <p className="text-sm text-muted-foreground">
                    90% less radiation than traditional X-rays with instant results
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center border-border/50">
                <CardContent className="p-6 space-y-4">
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <Zap className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground">Laser Dentistry</h3>
                  <p className="text-sm text-muted-foreground">
                    Minimally invasive treatments with faster healing times
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center border-border/50">
                <CardContent className="p-6 space-y-4">
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <Smile className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground">3D Imaging</h3>
                  <p className="text-sm text-muted-foreground">Detailed 3D scans for precise treatment planning</p>
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
