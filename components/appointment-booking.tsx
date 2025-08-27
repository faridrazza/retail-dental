"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Calendar, Clock, User, Phone, Mail, CheckCircle } from "lucide-react"

export default function AppointmentBooking() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    service: "",
    date: "",
    time: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    notes: "",
  })

  const services = [
    { id: "cleaning", name: "Dental Cleaning", duration: "60 min", price: "$150" },
    { id: "checkup", name: "General Checkup", duration: "45 min", price: "$120" },
    { id: "whitening", name: "Teeth Whitening", duration: "90 min", price: "$400" },
    { id: "filling", name: "Dental Filling", duration: "60 min", price: "$200" },
    { id: "consultation", name: "Consultation", duration: "30 min", price: "$100" },
  ]

  const timeSlots = ["9:00 AM", "10:00 AM", "11:00 AM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"]

  const handleNext = () => {
    if (step < 3) setStep(step + 1)
  }

  const handleBack = () => {
    if (step > 1) setStep(step - 1)
  }

  const handleSubmit = () => {
    // Handle form submission
    setStep(4) // Show confirmation
  }

  if (step === 4) {
    return (
      <Card className="max-w-2xl mx-auto border-primary/20 bg-primary/5">
        <CardContent className="p-8 text-center space-y-6">
          <div className="mx-auto w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
            <CheckCircle className="h-8 w-8 text-primary" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-2">Appointment Confirmed!</h2>
            <p className="text-muted-foreground mb-4">
              Thank you for booking with DentalCare. We've sent a confirmation email with all the details.
            </p>
            <div className="bg-background rounded-lg p-4 text-left space-y-2">
              <p>
                <strong>Service:</strong> {services.find((s) => s.id === formData.service)?.name}
              </p>
              <p>
                <strong>Date:</strong> {formData.date}
              </p>
              <p>
                <strong>Time:</strong> {formData.time}
              </p>
              <p>
                <strong>Patient:</strong> {formData.firstName} {formData.lastName}
              </p>
            </div>
          </div>
          <Button size="lg" onClick={() => setStep(1)}>
            Book Another Appointment
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calendar className="h-5 w-5 text-primary" />
          Book Your Appointment
        </CardTitle>
        <CardDescription>
          Step {step} of 3 - {step === 1 ? "Select Service & Date" : step === 2 ? "Choose Time" : "Your Information"}
        </CardDescription>
        <div className="flex space-x-2 mt-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className={`h-2 flex-1 rounded-full ${i <= step ? "bg-primary" : "bg-muted"}`} />
          ))}
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {step === 1 && (
          <div className="space-y-6">
            <div>
              <Label className="text-base font-semibold">Select Service</Label>
              <div className="grid grid-cols-1 gap-3 mt-3">
                {services.map((service) => (
                  <div
                    key={service.id}
                    className={`p-4 border rounded-lg cursor-pointer transition-all ${
                      formData.service === service.id
                        ? "border-primary bg-primary/5"
                        : "border-border hover:border-primary/50"
                    }`}
                    onClick={() => setFormData({ ...formData, service: service.id })}
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="font-medium text-foreground">{service.name}</h4>
                        <p className="text-sm text-muted-foreground">{service.duration}</p>
                      </div>
                      <span className="font-semibold text-primary">{service.price}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <Label htmlFor="date" className="text-base font-semibold">
                Preferred Date
              </Label>
              <Input
                id="date"
                type="date"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className="mt-2"
                min={new Date().toISOString().split("T")[0]}
              />
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6">
            <div>
              <Label className="text-base font-semibold flex items-center gap-2">
                <Clock className="h-4 w-4" />
                Available Times for {formData.date}
              </Label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-3">
                {timeSlots.map((time) => (
                  <Button
                    key={time}
                    variant={formData.time === time ? "default" : "outline"}
                    className="h-12"
                    onClick={() => setFormData({ ...formData, time })}
                  >
                    {time}
                  </Button>
                ))}
              </div>
            </div>

            <div className="bg-muted/50 rounded-lg p-4">
              <h4 className="font-semibold text-foreground mb-2">Appointment Summary</h4>
              <div className="space-y-1 text-sm text-muted-foreground">
                <p>
                  <strong>Service:</strong> {services.find((s) => s.id === formData.service)?.name}
                </p>
                <p>
                  <strong>Date:</strong> {formData.date}
                </p>
                <p>
                  <strong>Duration:</strong> {services.find((s) => s.id === formData.service)?.duration}
                </p>
                <p>
                  <strong>Price:</strong> {services.find((s) => s.id === formData.service)?.price}
                </p>
              </div>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-6">
            <div>
              <Label className="text-base font-semibold flex items-center gap-2">
                <User className="h-4 w-4" />
                Patient Information
              </Label>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  placeholder="John"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  id="lastName"
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  placeholder="Doe"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                Email
              </Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="john@example.com"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                Phone Number
              </Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="(555) 123-4567"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="notes">Additional Notes (Optional)</Label>
              <Textarea
                id="notes"
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                placeholder="Any specific concerns or requests..."
                rows={3}
              />
            </div>
          </div>
        )}

        <div className="flex justify-between pt-6">
          <Button variant="outline" onClick={handleBack} disabled={step === 1}>
            Back
          </Button>
          <Button
            onClick={step === 3 ? handleSubmit : handleNext}
            disabled={
              (step === 1 && (!formData.service || !formData.date)) ||
              (step === 2 && !formData.time) ||
              (step === 3 && (!formData.firstName || !formData.lastName || !formData.email || !formData.phone))
            }
          >
            {step === 3 ? "Confirm Appointment" : "Next"}
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
