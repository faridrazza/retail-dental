import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      rating: 5,
      text: "Dr. Smith and the entire team at DentalCare are amazing! They made me feel comfortable during my root canal procedure, and the results exceeded my expectations.",
      treatment: "Root Canal Treatment",
    },
    {
      name: "Michael Chen",
      rating: 5,
      text: "I've been coming here for 3 years now. The staff is professional, the office is modern and clean, and they always work with my schedule. Highly recommend!",
      treatment: "General Dentistry",
    },
    {
      name: "Emily Rodriguez",
      rating: 5,
      text: "The teeth whitening treatment was fantastic! My smile looks incredible now. The process was quick and painless. Thank you, DentalCare team!",
      treatment: "Cosmetic Dentistry",
    },
    {
      name: "David Thompson",
      rating: 5,
      text: "As someone who was terrified of dentists, the team here made me feel at ease. They explained everything clearly and the treatment was virtually painless.",
      treatment: "Dental Anxiety Care",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">What Our Patients Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Don't just take our word for it. Here's what our satisfied patients have to say about their experience at
            DentalCare.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-border/50 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="space-y-4">
                  {/* Rating */}
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-muted-foreground text-sm leading-relaxed">"{testimonial.text}"</p>

                  {/* Patient Info */}
                  <div className="border-t border-border pt-4">
                    <p className="font-semibold text-foreground text-sm">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.treatment}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-8 text-muted-foreground">
            <div className="text-center">
              <p className="text-2xl font-bold text-primary">500+</p>
              <p className="text-sm">Happy Patients</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-primary">15+</p>
              <p className="text-sm">Years Experience</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-primary">4.9</p>
              <p className="text-sm">Average Rating</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
