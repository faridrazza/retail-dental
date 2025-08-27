import { Button } from "@/components/ui/button"
import { Calendar, Phone, Shield, Award, Users, Clock } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-background via-card to-secondary/20 py-12 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="space-y-3">
              <h1 className="text-3xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight text-balance">
                Your Smile is Our <span className="text-primary">Priority</span>
              </h1>
              <p className="text-base lg:text-lg text-muted-foreground leading-relaxed text-pretty">
                Experience exceptional dental care with our team of experienced professionals. We provide comprehensive
                dental services in a comfortable, modern environment using the latest technology.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button size="lg" className="flex items-center gap-2 text-base px-6 py-4">
                <Calendar className="h-4 w-4" />
                Book Appointment
              </Button>
              <Button variant="outline" size="lg" className="flex items-center gap-2 text-base px-6 py-4 bg-transparent">
                <Phone className="h-4 w-4" />
                Call (555) 123-4567
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6">
              <div className="text-center space-y-2">
                <div className="mx-auto w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <Shield className="h-5 w-5 text-primary" />
                </div>
                <p className="text-xs font-medium text-foreground">Safe & Sterile</p>
              </div>
              <div className="text-center space-y-2">
                <div className="mx-auto w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <Award className="h-5 w-5 text-primary" />
                </div>
                <p className="text-xs font-medium text-foreground">Award Winning</p>
              </div>
              <div className="text-center space-y-2">
                <div className="mx-auto w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <p className="text-xs font-medium text-foreground">Expert Team</p>
              </div>
              <div className="text-center space-y-2">
                <div className="mx-auto w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <p className="text-xs font-medium text-foreground">Flexible Hours</p>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/modern-dental-office-with-friendly-dentist-and-pat.png"
                alt="Modern dental office with friendly dentist and patient"
                className="w-full h-[400px] lg:h-[500px] xl:h-[550px] object-cover"
              />
              {/* Floating Card */}
              <div className="absolute bottom-4 left-4 right-4 bg-background/95 backdrop-blur rounded-xl p-4 shadow-lg border border-border">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-foreground text-sm">Next Available</p>
                    <p className="text-xs text-muted-foreground">Today at 2:30 PM</p>
                  </div>
                  <Button size="sm" className="text-xs px-3 py-1">Book Now</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
