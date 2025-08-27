import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, Calendar, MapPin, Clock, ArrowRight } from "lucide-react"

export default function ContactCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            <Phone className="w-4 h-4 mr-2" />
            Get In Touch
          </Badge>

          <h2 className="text-4xl md:text-5xl font-bold text-balance mb-6">
            Ready to Transform
            <span className="text-primary"> Your Smile?</span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty mb-8">
            Take the first step towards your perfect smile. Schedule your consultation today and discover how we can
            help you achieve the smile of your dreams.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Cards */}
          <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <Phone className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Call Us</h3>
              <p className="text-muted-foreground mb-4">Speak with our friendly team</p>
              <div className="text-lg font-semibold text-primary">(555) 123-4567</div>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-secondary/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <Calendar className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Book Online</h3>
              <p className="text-muted-foreground mb-4">Schedule 24/7 online</p>
              <Button variant="outline" className="w-full bg-transparent">
                Book Appointment
              </Button>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <MapPin className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Visit Us</h3>
              <p className="text-muted-foreground mb-4">
                123 Dental Street
                <br />
                City, State 12345
              </p>
              <Button variant="outline" className="w-full bg-transparent">
                Get Directions
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Main CTA */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="px-8 py-4 text-lg group">
              <Calendar className="w-5 h-5 mr-2" />
              Schedule Free Consultation
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-4 text-lg bg-transparent">
              <Phone className="w-5 h-5 mr-2" />
              Call Now: (555) 123-4567
            </Button>
          </div>
        </div>

        {/* Hours */}
        <Card className="mt-12 max-w-2xl mx-auto">
          <CardContent className="p-8">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Clock className="w-5 h-5 text-primary" />
              <h3 className="text-xl font-semibold">Office Hours</h3>
            </div>
            <div className="grid sm:grid-cols-2 gap-4 text-center">
              <div>
                <div className="font-medium">Monday - Friday</div>
                <div className="text-muted-foreground">8:00 AM - 6:00 PM</div>
              </div>
              <div>
                <div className="font-medium">Saturday</div>
                <div className="text-muted-foreground">9:00 AM - 3:00 PM</div>
              </div>
            </div>
            <div className="text-center mt-4 pt-4 border-t">
              <Badge variant="secondary">24/7 Emergency Care Available</Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
