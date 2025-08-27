import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, Award, Users, Calendar } from "lucide-react"

export default function PremiumHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-card via-background to-muted"></div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary/10 rounded-full blur-xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Trust badges */}
        <div className="flex justify-center gap-4 mb-8">
          <Badge variant="secondary" className="px-4 py-2 text-sm font-medium">
            <Award className="w-4 h-4 mr-2" />
            Award Winning
          </Badge>
          <Badge variant="outline" className="px-4 py-2 text-sm font-medium">
            <Users className="w-4 h-4 mr-2" />
            10,000+ Happy Patients
          </Badge>
        </div>

        {/* Main heading */}
        <h1 className="text-5xl md:text-7xl font-bold text-balance mb-6 bg-gradient-to-r from-foreground via-primary to-secondary bg-clip-text text-transparent">
          Premium Dental Care
          <span className="block text-4xl md:text-6xl mt-2">That Transforms Lives</span>
        </h1>

        {/* Subheading */}
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8 text-pretty">
          Experience luxury dentistry with cutting-edge technology, personalized care, and exceptional results in our
          state-of-the-art clinic.
        </p>

        {/* Star rating */}
        <div className="flex justify-center items-center gap-2 mb-8">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-primary text-primary" />
            ))}
          </div>
          <span className="text-lg font-semibold">4.9/5</span>
          <span className="text-muted-foreground">(2,847 reviews)</span>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button
            size="lg"
            className="px-8 py-4 text-lg font-semibold bg-primary hover:bg-primary/90 transform hover:scale-105 transition-all duration-200"
          >
            <Calendar className="w-5 h-5 mr-2" />
            Book Premium Consultation
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="px-8 py-4 text-lg font-semibold hover:bg-card transform hover:scale-105 transition-all duration-200 bg-transparent"
          >
            Virtual Tour
          </Button>
        </div>

        {/* Key stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">25+</div>
            <div className="text-sm text-muted-foreground">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">50k+</div>
            <div className="text-sm text-muted-foreground">Procedures Done</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">98%</div>
            <div className="text-sm text-muted-foreground">Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">24/7</div>
            <div className="text-sm text-muted-foreground">Emergency Care</div>
          </div>
        </div>
      </div>
    </section>
  )
}
