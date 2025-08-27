import { Users, DollarSign } from "lucide-react"
import Image from "next/image"

export default function WhyChooseUs() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Image and Stats */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <Image
                  src="/happy-female-patient-pointing-to-her-perfect-smile.png"
                  alt="Happy Patient"
                  width={250}
                  height={300}
                  className="rounded-2xl"
                />
                <div className="bg-blue-50 p-6 rounded-2xl text-center">
                  <div className="text-3xl font-bold text-blue-600">50+</div>
                  <div className="text-sm text-gray-600 mt-1">Dental Care Plans</div>
                  <div className="text-xs text-gray-500 mt-2">
                    Committed to restoring smiles and improving lives every day.
                  </div>
                </div>
              </div>
              <div className="pt-8">
                <div className="bg-blue-600 text-white p-6 rounded-2xl text-center mb-4">
                  <div className="text-3xl font-bold">10k+</div>
                  <div className="text-sm mt-1">Patients Treated</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span>About</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900">
                Why <span className="text-blue-600">SmileBright</span> Dental?
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We believe that a healthy smile is a confident smile. Our team of experienced dentists and caring staff.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Experienced cosmetic</h3>
                  <p className="text-gray-600 text-sm">
                    Spacious, clean, and designed for your comfort, our treatment rooms are equipped with the latest
                    dental technology.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <DollarSign className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Affordable pricing</h3>
                  <p className="text-gray-600 text-sm">
                    Spacious, clean, and designed for your comfort, our treatment rooms are equipped with the latest
                    dental technology.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
