import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Zap, Eye, Cpu, Microscope } from "lucide-react"

export default function TechnologyShowcase() {
  const technologies = [
    {
      icon: Zap,
      title: "Laser Dentistry",
      description: "Precise, painless procedures with faster healing times",
      color: "text-primary",
    },
    {
      icon: Eye,
      title: "3D Imaging",
      description: "Advanced diagnostics for accurate treatment planning",
      color: "text-secondary",
    },
    {
      icon: Cpu,
      title: "Digital Impressions",
      description: "Comfortable, accurate impressions without messy materials",
      color: "text-primary",
    },
    {
      icon: Microscope,
      title: "Microscopic Precision",
      description: "Enhanced visibility for superior treatment outcomes",
      color: "text-secondary",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            <Zap className="w-4 h-4 mr-2" />
            Advanced Technology
          </Badge>

          <h2 className="text-4xl md:text-5xl font-bold text-balance mb-6">
            Cutting-Edge Technology for
            <span className="text-primary"> Superior Results</span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            We invest in the latest dental technologies to provide you with the most comfortable, efficient, and
            effective treatments available in modern dentistry.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {technologies.map((tech, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-card/50"
            >
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <tech.icon className={`w-8 h-8 ${tech.color}`} />
                </div>

                <h3 className="text-xl font-semibold mb-3">{tech.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{tech.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 rounded-full text-primary font-medium">
            <Zap className="w-5 h-5" />
            Experience the difference technology makes
          </div>
        </div>
      </div>
    </section>
  )
}
