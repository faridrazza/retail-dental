import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function CTASection() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="bg-gradient-to-r from-[#5686E7]/10 to-white rounded-3xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="relative">
              <Image
                src="/professional-female-doctor-with-clipboard-smiling.png"
                alt="Professional Doctor"
                width={400}
                height={500}
                className="rounded-2xl object-cover"
              />
            </div>

            <div className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-4xl font-bold text-gray-900">
                  Get Started on <span className="text-[#5686E7]">Your Smile</span> Journey
                </h2>
                <p className="text-gray-600 text-lg">
                  Spacious, clean, and designed for your comfort, our treatment rooms are equipped with the latest
                  dental technology.
                </p>
              </div>

              <Button className="bg-[#5686E7] hover:bg-[#3d5db3] text-white px-8 py-3 rounded-lg text-lg">
                Book Appointment
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
