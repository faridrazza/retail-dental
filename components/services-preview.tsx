import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Smile, Sparkles, Braces, Scissors, ArrowRight } from "lucide-react"

export default function ServicesPreview() {
  const services = [
    {
      icon: Smile,
      title: "General Dentistry",
      description: "Comprehensive oral health care including cleanings, fillings, and preventive treatments.",
      features: ["Regular Cleanings", "Cavity Fillings", "Root Canals", "Extractions"],
    },
    {
      icon: Sparkles,
      title: "Cosmetic Dentistry",
      description: "Transform your smile with our advanced cosmetic dental procedures.",
      features: ["Teeth Whitening", "Veneers", "Bonding", "Smile Makeovers"],
    },
    {
      icon: Braces,
      title: "Orthodontics",
      description: "Straighten your teeth with traditional braces or modern clear aligners.",
      features: ["Traditional Braces", "Clear Aligners", "Retainers", "Bite Correction"],
    },
    {
      icon: Scissors,
      title: "Oral Surgery",
      description: "Specialized surgical procedures performed with precision and care.",
      features: ["Wisdom Teeth", "Dental Implants", "Bone Grafting", "Gum Surgery"],
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">
            Our Dental <span className="text-[#5686E7]">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            From routine cleanings to complex procedures, we offer a full range of dental services to keep your smile
            healthy and beautiful.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-[#5686E7]/20"
            >
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-[#5686E7]/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-[#5686E7]/20 transition-colors">
                  <service.icon className="h-8 w-8 text-[#5686E7]" />
                </div>
                <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-[#5686E7] rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="flex items-center gap-2 mx-auto bg-[#5686E7] hover:bg-[#3d5db3]">
            View All Services
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
