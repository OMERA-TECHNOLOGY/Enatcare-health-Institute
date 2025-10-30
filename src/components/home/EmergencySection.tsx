import { Phone, Clock, MapPin, Ambulance } from 'lucide-react';
import { Button } from '@/components/ui/button';
import emergencyImage from '@/assets/emergency-entrance.jpg';

export function EmergencySection() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={emergencyImage}
          alt="Emergency Services at Kereyu Medical Institute"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 to-secondary/80" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4">
        <div className="max-w-2xl">
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <Ambulance className="h-5 w-5 text-white animate-pulse-glow" />
            <span className="text-white font-semibold">24/7 Emergency Services</span>
          </div>

          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-4">
            Emergency Care When You Need It Most
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Our emergency department is equipped to handle all critical situations with immediate, expert care available around the clock.
          </p>

          {/* Emergency Info Cards */}
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <Clock className="h-10 w-10 text-white mb-3" />
              <h3 className="font-space text-lg font-semibold text-white mb-2">
                Open 24/7
              </h3>
              <p className="text-white/80 text-sm">
                Round-the-clock emergency services with no appointment needed
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <MapPin className="h-10 w-10 text-white mb-3" />
              <h3 className="font-space text-lg font-semibold text-white mb-2">
                Easy Access
              </h3>
              <p className="text-white/80 text-sm">
                Dedicated emergency entrance with free parking available
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              asChild
              className="bg-white text-secondary hover:bg-white/90 text-lg h-14 px-8"
            >
              <a href="tel:911">
                <Phone className="mr-2 h-5 w-5" />
                Call Emergency: 911
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-2 border-white text-white bg-white/10 hover:bg-white hover:text-secondary backdrop-blur-sm text-lg h-14 px-8"
            >
              <a href="tel:+1234567890">
                <Phone className="mr-2 h-5 w-5" />
                Non-Emergency Line
              </a>
            </Button>
          </div>

          {/* Current Wait Time */}
          <div className="mt-8 inline-flex items-center space-x-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-lg border border-white/20">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-white/90 text-sm">Current Wait Time:</span>
            </div>
            <span className="text-white font-semibold text-lg">~15 minutes</span>
          </div>
        </div>
      </div>
    </section>
  );
}
