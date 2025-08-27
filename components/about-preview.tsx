import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Shield, Sparkles, ArrowRight } from "lucide-react"

export default function AboutPreview() {
  return (
    <section className="py-20 bg-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div>
            <Badge variant="secondary" className="mb-4">
              <Heart className="w-4 h-4 mr-2" />
              About Our Clinic
            </Badge>

            <h2 className="text-4xl md:text-5xl font-bold text-balance mb-6">
              Where Luxury Meets
              <span className="text-[#5686E7]"> Exceptional Care</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-8 text-pretty">
              For over 25 years, we've been transforming smiles and lives with our commitment to excellence,
              cutting-edge technology, and personalized approach to dental care. Our award-winning team combines
              artistry with science to deliver results that exceed expectations.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-[#5686E7] rounded-full"></div>
                <span className="text-foreground">Board-certified specialists with advanced training</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-[#5686E7] rounded-full"></div>
                <span className="text-foreground">State-of-the-art technology and techniques</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-[#5686E7] rounded-full"></div>
                <span className="text-foreground">Personalized treatment plans for every patient</span>
              </div>
            </div>

            <Button size="lg" className="group bg-[#5686E7] hover:bg-[#3d5db3]">
              Learn More About Us
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Right content - Feature cards */}
          <div className="grid gap-6">
            <Card className="p-6 hover:shadow-lg transition-shadow border-l-4 border-l-[#5686E7]">
              <CardContent className="p-0">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#5686E7]/10 rounded-lg flex items-center justify-center">
                    <Shield className="w-6 h-6 text-[#5686E7]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Safety First</h3>
                    <p className="text-muted-foreground">
                      Highest standards of sterilization and safety protocols to ensure your wellbeing.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow border-l-4 border-l-[#5686E7]">
              <CardContent className="p-0">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#5686E7]/10 rounded-lg flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-[#5686E7]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Advanced Technology</h3>
                    <p className="text-muted-foreground">
                      Latest dental innovations including 3D imaging, laser therapy, and digital impressions.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow border-l-4 border-l-[#5686E7]">
              <CardContent className="p-0">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#5686E7]/10 rounded-lg flex items-center justify-center">
                    <Heart className="w-6 h-6 text-[#5686E7]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Personalized Care</h3>
                    <p className="text-muted-foreground">
                      Every treatment plan is tailored to your unique needs, goals, and lifestyle.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
