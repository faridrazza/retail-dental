import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Quote, Users } from "lucide-react"

export default function EnhancedTestimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Marketing Executive",
      content:
        "The team at this clinic transformed my smile completely. The attention to detail and personalized care exceeded all my expectations. I finally have the confidence to smile freely!",
      rating: 5,
      treatment: "Smile Makeover",
    },
    {
      name: "Michael Chen",
      role: "Business Owner",
      content:
        "Professional, comfortable, and results that speak for themselves. The technology they use is incredible, and the staff made me feel at ease throughout the entire process.",
      rating: 5,
      treatment: "Dental Implants",
    },
    {
      name: "Emily Rodriguez",
      role: "Teacher",
      content:
        "I was nervous about dental work, but this clinic changed everything. The gentle approach and clear communication made all the difference. Highly recommend to anyone!",
      rating: 5,
      treatment: "Orthodontics",
    },
    {
      name: "David Thompson",
      role: "Engineer",
      content:
        "Outstanding service from consultation to completion. The results exceeded my expectations, and the entire experience was comfortable and professional.",
      rating: 5,
      treatment: "Cosmetic Dentistry",
    },
  ]

  return (
    <section className="py-20 bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            <Users className="w-4 h-4 mr-2" />
            Patient Stories
          </Badge>

          <h2 className="text-4xl md:text-5xl font-bold text-balance mb-6">
            What Our Patients
            <span className="text-primary"> Say About Us</span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            Don't just take our word for it. Read what our satisfied patients have to say about their experience and the
            life-changing results they've achieved.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary"></div>

              <CardContent className="p-8">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>

                <Quote className="w-8 h-8 text-primary/20 mb-4" />

                <p className="text-muted-foreground mb-6 leading-relaxed text-sm">"{testimonial.content}"</p>

                <div className="border-t pt-4">
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  <Badge variant="outline" className="mt-2 text-xs">
                    {testimonial.treatment}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-primary mb-2">4.9/5</div>
            <div className="text-sm text-muted-foreground">Average Rating</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">2,847</div>
            <div className="text-sm text-muted-foreground">Reviews</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">98%</div>
            <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">15k+</div>
            <div className="text-sm text-muted-foreground">Happy Patients</div>
          </div>
        </div>
      </div>
    </section>
  )
}
