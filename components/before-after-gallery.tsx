import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Camera } from "lucide-react"

export default function BeforeAfterGallery() {
  const transformations = [
    {
      title: "Smile Makeover",
      description: "Complete cosmetic transformation with veneers and whitening",
      category: "Cosmetic Dentistry",
    },
    {
      title: "Orthodontic Treatment",
      description: "Invisalign treatment for perfectly aligned teeth",
      category: "Orthodontics",
    },
    {
      title: "Dental Implants",
      description: "Full mouth restoration with premium implants",
      category: "Restorative",
    },
    {
      title: "Teeth Whitening",
      description: "Professional whitening for a brighter, confident smile",
      category: "Cosmetic Dentistry",
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            <Camera className="w-4 h-4 mr-2" />
            Transformation Gallery
          </Badge>

          <h2 className="text-4xl md:text-5xl font-bold text-balance mb-6">
            Real Results from
            <span className="text-primary"> Real Patients</span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            See the incredible transformations we've achieved for our patients. Each smile tells a story of renewed
            confidence and improved quality of life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {transformations.map((item, index) => (
            <Card key={index} className="group overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative">
                {/* Placeholder for before/after images */}
                <div className="aspect-square bg-gradient-to-br from-card to-muted flex items-center justify-center">
                  <div className="text-center">
                    <Camera className="w-12 h-12 text-muted-foreground mx-auto mb-2" />
                    <div className="text-sm text-muted-foreground">Before & After</div>
                  </div>
                </div>

                {/* Category badge */}
                <Badge className="absolute top-3 left-3 bg-primary/90 text-primary-foreground">{item.category}</Badge>
              </div>

              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="group">
              View Full Gallery
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
