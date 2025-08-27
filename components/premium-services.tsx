import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Smile, Crown, Zap, Shield, Heart, Star, ArrowRight } from "lucide-react"

export default function PremiumServices() {
  const services = [
    {
      icon: Smile,
      title: "Cosmetic Dentistry",
      description: "Transform your smile with veneers, whitening, and aesthetic treatments",
      features: ["Porcelain Veneers", "Professional Whitening", "Smile Design"],
      color: "primary",
      popular: true,
    },
    {
      icon: Crown,
      title: "Restorative Care",
      description: "Restore function and beauty with crowns, bridges, and implants",
      features: ["Dental Implants", "Crowns & Bridges", "Full Mouth Restoration"],
      color: "secondary",
    },
    {
      icon: Shield,
      title: "Preventive Care",
      description: "Maintain optimal oral health with regular cleanings and checkups",
      features: ["Regular Cleanings", "Oral Exams", "Preventive Treatments"],
      color: "primary",
    },
    {
      icon: Zap,
      title: "Emergency Care",
      description: "24/7 emergency dental services for urgent dental needs",
      features: ["24/7 Availability", "Pain Relief", "Urgent Repairs"],
      color: "secondary",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            <Heart className="w-4 h-4 mr-2" />
            Our Services
          </Badge>

          <h2 className="text-4xl md:text-5xl font-bold text-balance mb-6">
            Comprehensive Dental Care
            <span className="text-primary"> Tailored to You</span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            From routine cleanings to complete smile makeovers, we offer a full range of premium dental services
            designed to meet your unique needs and exceed your expectations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`group relative overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 ${service.color === "primary" ? "border-primary/20" : "border-secondary/20"}`}
            >
              {service.popular && (
                <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
                  <Star className="w-3 h-3 mr-1" />
                  Popular
                </Badge>
              )}

              <CardContent className="p-8">
                <div
                  className={`w-16 h-16 mb-6 rounded-2xl flex items-center justify-center ${service.color === "primary" ? "bg-primary/10" : "bg-secondary/10"} group-hover:scale-110 transition-transform`}
                >
                  <service.icon
                    className={`w-8 h-8 ${service.color === "primary" ? "text-primary" : "text-secondary"}`}
                  />
                </div>

                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">{service.description}</p>

                <div className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm">
                      <div
                        className={`w-1.5 h-1.5 rounded-full ${service.color === "primary" ? "bg-primary" : "bg-secondary"}`}
                      ></div>
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button variant="ghost" className="w-full group/btn justify-between p-0 h-auto">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <Button size="lg" className="px-8">
            View All Services
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  )
}
