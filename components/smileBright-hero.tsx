"use client"

import { Button } from "@/components/ui/button"
import { Calendar, MapPin, User, Search } from "lucide-react"
import Image from "next/image"

export default function SmileBrightHero() {
  return (
    <section className="bg-white pt-4 pb-0 px-0">
      {/* Hero Main Content */}
      <div className="container mx-auto max-w-7xl px-6 pt-4 pb-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-0 lg:gap-0">
          {/* Left Content */}
          <div className="space-y-5 pl-12 md:pl-16 -mt-8" style={{maxWidth: '540px'}}>
            <h1 className="font-bold text-gray-900 leading-tight" style={{ fontSize: '38px', lineHeight: '1.13', letterSpacing: '-0.02em' }}>
              Your Comfort, Our<br />
              <span className="text-[#5686E7]">Priority One Smile</span><br />
              <span>at a Time</span>
            </h1>
            <p className="text-gray-600" style={{ fontSize: '16px', lineHeight: '1.6', marginTop: '8px', marginBottom: '8px' }}>
              At our clinic, we believe that every smile tells a story. That's why we are committed to providing personalized, gentle dental care that makes you feel relaxed and confident.
            </p>
            <div className="flex flex-row gap-3 mt-1 items-center">
              <Button className="bg-[#5686E7] hover:bg-[#3d5db3] text-white px-6 py-2 rounded-full text-sm font-semibold shadow-none">
                Book Now
              </Button>
              <button className="bg-white border border-gray-200 text-gray-800 px-6 py-2 rounded-full text-sm font-semibold hover:bg-gray-100 transition-colors">
                Learn More
              </button>
            </div>
          </div>
          {/* Right Content */}
          <div className="relative w-full flex justify-start">
            <div className="relative w-full max-w-lg rounded-2xl overflow-hidden shadow-xl">
              {/* 24/7 Assistance Badge */}
              <div className="absolute top-4 left-4 bg-white/90 px-4 py-2 rounded-full flex items-center gap-2 shadow text-[#5686E7] font-medium text-xs z-10">
                <span className="inline-block w-2 h-2 bg-[#5686E7] rounded-full"></span>
                24/7 Assistance Available
              </div>
              
              <Image
                src="/cheerful-doctor-making-notes-looking-away.jpg"
                alt="Cheerful doctor making notes and looking away"
                width={500}
                height={450}
                className="w-full h-[400px] md:h-[450px] object-cover rounded-2xl"
                priority
              />
              
              {/* Text badge inside image */}
              <div className="absolute bottom-4 left-16 z-20">
                <div className="bg-white rounded-full px-3 py-1.5 shadow flex items-center gap-2 border border-gray-100">
                  <span className="text-gray-900 font-semibold text-xs">Trusted By</span>
                  <span className="text-gray-600 text-xs">Happy Customers</span>
                </div>
              </div>
            </div>
            
            {/* Avatars outside image container */}
            <div className="absolute bottom-4 -left-16 z-20 flex items-center">
              <div className="flex -space-x-2">
                <Image src="/professional-woman-smiling-headshot.png" alt="Customer" width={32} height={32} className="rounded-full border-2 border-white" />
                <Image src="/professional-man-smiling-headshot.png" alt="Customer" width={32} height={32} className="rounded-full border-2 border-white" />
                <Image src="/professional-woman-smiling-headshot-diverse.png" alt="Customer" width={32} height={32} className="rounded-full border-2 border-white" />
                <div className="w-8 h-8 rounded-full bg-[#5686E7] border-2 border-white flex items-center justify-center">
                  <span className="text-white text-xs font-semibold">1.5k</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Search Box - clean horizontal bar at bottom */}
        <div className="relative z-20 mt-8 mb-0">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-4 flex flex-col md:flex-row items-center gap-3 md:gap-0 md:space-x-3 w-full max-w-4xl mx-auto">
            <div className="relative w-full md:w-1/4">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <select className="w-full pl-9 pr-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#5686E7] focus:border-transparent appearance-none bg-white text-gray-700 text-sm">
                <option>Dates</option>
                <option>Today</option>
                <option>Tomorrow</option>
                <option>This Week</option>
              </select>
            </div>
            <div className="relative w-full md:w-1/4">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <select className="w-full pl-9 pr-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#5686E7] focus:border-transparent appearance-none bg-white text-gray-700 text-sm">
                <option>Specialist</option>
                <option>General Dentist</option>
                <option>Orthodontist</option>
                <option>Oral Surgeon</option>
              </select>
            </div>
            <div className="relative w-full md:w-1/4">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <select className="w-full pl-9 pr-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#5686E7] focus:border-transparent appearance-none bg-white text-gray-700 text-sm">
                <option>Location</option>
                <option>Downtown Clinic</option>
                <option>Uptown Branch</option>
                <option>Suburban Office</option>
              </select>
            </div>
            <Button className="bg-[#5686E7] hover:bg-[#3d5db3] text-white py-2 px-6 rounded-full flex items-center justify-center gap-2 font-semibold text-sm shadow-none w-full md:w-auto mt-2 md:mt-0">
              <Search className="h-4 w-4" />
              Search
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
