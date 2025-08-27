import { Users, DollarSign } from "lucide-react"

export default function AboutSection() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image with stats */}
          <div className="relative">
            <div className="bg-gradient-to-br from-[#5686E7]/10 to-[#5686E7]/20 rounded-3xl p-8 relative overflow-hidden">
              <img
                src="/happy-young-woman-pointing-to-her-perfect-white-te.png"
                alt="Happy patient pointing to her smile"
                className="w-full h-auto rounded-2xl"
              />

              {/* Stats overlays */}
              <div className="absolute top-4 right-4 bg-white rounded-2xl p-4 shadow-lg">
                <div className="text-3xl font-bold text-[#5686E7]">10k+</div>
                <div className="text-sm text-gray-600">Patients Treated</div>
              </div>

              <div className="absolute bottom-4 left-4 bg-white rounded-2xl p-4 shadow-lg">
                <div className="text-3xl font-bold text-[#5686E7]">50+</div>
                <div className="text-sm text-gray-600">Dental Care Plans</div>
              </div>
            </div>

            {/* Bottom text */}
            <div className="mt-4 text-center">
              <p className="text-gray-600">Committed to restoring smiles</p>
              <p className="text-gray-600">and improving lives every day.</p>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-8">
            {/* Header */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[#5686E7] rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                </div>
                <span className="text-gray-500 text-sm font-medium">About</span>
              </div>

              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Why <span className="text-[#5686E7]">SmileBright</span> Dental?
              </h2>

              <p className="text-gray-600 text-lg">
                We believe that a healthy smile is a confident smile. Our team of experienced dentists and caring staff.
              </p>
            </div>

            {/* Feature cards */}
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-[#5686E7]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-[#5686E7]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Experienced cosmetic</h3>
                  <p className="text-gray-600">
                    Spacious, clean, and designed for your comfort, our treatment rooms are equipped with the latest
                    dental technology.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-[#5686E7]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <DollarSign className="w-6 h-6 text-[#5686E7]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Affordable pricing</h3>
                  <p className="text-gray-600">
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
