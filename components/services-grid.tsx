import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function ServicesGrid() {
  const services = [
    {
      title: "General Dentistry",
      description: "Cleanings, checkups, fillings, and preventive care",
      image: "/dentist-examining-patient-teeth-general-dentistry.png",
    },
    {
      title: "Cosmetic Dentistry",
      description: "Teeth whitening, veneers, smile makeovers",
      image: "/cosmetic-dentistry-teeth-whitening-procedure.png",
    },
    {
      title: "Orthodontics",
      description: "Braces, clear aligners, bite correction",
      image: "/orthodontics-braces-dental-treatment-happy-patient.png",
    },
  ]

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <div className="text-sm text-gray-600 mb-2">Expert</div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Dental <span className="text-[#5686E7]">Services</span>
          </h2>
          <Button className="bg-[#5686E7] hover:bg-[#3d5db3] text-white px-6 py-2 rounded-full">More Services</Button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <Image
                src={service.image || "/placeholder.svg"}
                alt={service.title}
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-sm text-gray-600">
            Need A Service Not Listed? <span className="text-[#5686E7] font-medium">Contact Us Today</span> For
            Personalized Solutions!
          </p>
        </div>
      </div>
    </section>
  )
}
