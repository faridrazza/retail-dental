import Navigation from "@/components/navigation"
import SmileBrightHero from "@/components/smileBright-hero"
import AboutSection from "@/components/about-section"
import ServicesGrid from "@/components/services-grid"
import DentalTeam from "@/components/dental-team"
import PatientTestimonials from "@/components/patient-testimonials"
import CTASection from "@/components/cta-section"
import Footer from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <SmileBrightHero />
        <AboutSection />
        <ServicesGrid />
        <DentalTeam />
        <PatientTestimonials />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
