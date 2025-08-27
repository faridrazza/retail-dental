import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import AppointmentBooking from "@/components/appointment-booking"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, Shield, Calendar, Phone } from "lucide-react"

export default function AppointmentsPage() {
  const benefits = [
    {
      icon: Clock,
      title: "Quick & Easy",
      description: "Book your appointment in just 3 simple steps",
    },
    {
      icon: Shield,
      title: "Secure Booking",
      description: "Your personal information is protected and secure",
    },
    {
      icon: Calendar,
      title: "Flexible Scheduling",
      description: "Choose from available times that work for you",
    },
    {
      icon: Phone,
      title: "Instant Confirmation",
      description: "Receive immediate confirmation via email and SMS",
    },
  ]

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-background via-card to-secondary/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground text-balance">Book Your Appointment</h1>
              <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
                Schedule your dental appointment online 24/7. Choose your preferred service, date, and time - it's
                quick, easy, and secure.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <Card key={index} className="text-center border-border/50">
                  <CardContent className="p-6 space-y-3">
                    <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <benefit.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Booking Form */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <AppointmentBooking />
          </div>
        </section>

        {/* Contact Alternative */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <Card className="max-w-2xl mx-auto text-center border-border/50">
              <CardContent className="p-8 space-y-6">
                <h2 className="text-2xl font-bold text-foreground">Prefer to Call?</h2>
                <p className="text-muted-foreground">
                  Our friendly staff is ready to help you schedule your appointment over the phone.
                </p>
                <div className="space-y-2">
                  <p className="text-2xl font-bold text-primary">(555) 123-4567</p>
                  <p className="text-sm text-muted-foreground">
                    Monday - Friday: 8:00 AM - 6:00 PM
                    <br />
                    Saturday: 9:00 AM - 3:00 PM
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
