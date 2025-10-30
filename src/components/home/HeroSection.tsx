import { ArrowRight, Calendar, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-hospital.jpg';

export function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Kereyu Medical Institute - Modern Healthcare Facility"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="font-playfair text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in-up">
              Excellence in Healthcare,
              <span className="block text-accent">Compassion in Healing</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 animate-fade-in-up">
              20+ years of medical innovation with 50+ specialists providing world-class care across 15 specialized departments.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in-up">
              <Button
                size="lg"
                asChild
                className="bg-secondary hover:bg-secondary/90 text-white text-lg h-14 px-8"
              >
                <Link to="/appointment">
                  <Calendar className="mr-2 h-5 w-5" />
                  Book Appointment Now
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-2 border-white text-white bg-white/10 hover:bg-white hover:text-primary backdrop-blur-sm text-lg h-14 px-8"
              >
                <Link to="/departments">
                  Explore Departments
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>

            {/* Quick Stats Bar */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 animate-fade-in-up">
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20">
                <div className="flex items-center space-x-3">
                  <Phone className="h-8 w-8 text-secondary" />
                  <div>
                    <p className="text-sm text-white/80">24/7 Emergency</p>
                    <p className="text-lg font-semibold text-white">Available Now</p>
                  </div>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20">
                <div className="flex items-center space-x-3">
                  <Calendar className="h-8 w-8 text-accent" />
                  <div>
                    <p className="text-sm text-white/80">Patient Satisfaction</p>
                    <p className="text-lg font-semibold text-white">95% Rating</p>
                  </div>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-8 w-8 text-primary" />
                  <div>
                    <p className="text-sm text-white/80">Specialists</p>
                    <p className="text-lg font-semibold text-white">50+ Doctors</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
