import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      name: 'Primary Care Services',
      description: 'Comprehensive healthcare for all ages including preventive care, health screenings, and chronic disease management.',
      features: ['Annual Check-ups', 'Vaccinations', 'Health Screenings', 'Chronic Disease Management'],
    },
    {
      name: 'Diagnostic Imaging',
      description: 'Advanced imaging technology for accurate diagnosis including MRI, CT scans, X-rays, and ultrasound.',
      features: ['MRI Scans', 'CT Imaging', 'Digital X-rays', '3D/4D Ultrasound'],
    },
    {
      name: 'Laboratory Services',
      description: 'Full-service laboratory with rapid testing capabilities and comprehensive diagnostic services.',
      features: ['Blood Tests', 'Pathology', 'Microbiology', 'Rapid Testing'],
    },
    {
      name: 'Surgical Services',
      description: 'State-of-the-art operating rooms with experienced surgical teams for various procedures.',
      features: ['General Surgery', 'Minimally Invasive', 'Outpatient Procedures', 'Emergency Surgery'],
    },
    {
      name: 'Rehabilitation Services',
      description: 'Comprehensive rehabilitation programs to help patients recover and regain independence.',
      features: ['Physical Therapy', 'Occupational Therapy', 'Speech Therapy', 'Sports Medicine'],
    },
    {
      name: 'Emergency Services',
      description: '24/7 emergency care with trauma-certified physicians and advanced life support capabilities.',
      features: ['24/7 Availability', 'Trauma Care', 'Critical Care', 'Fast-Track Services'],
    },
  ];

  return (
    <div className="min-h-screen w-full">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-hero text-white py-20">
          <div className="container mx-auto px-4">
            <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-4">
              Our Services
            </h1>
            <p className="text-xl max-w-2xl">
              Comprehensive healthcare services designed to meet all your medical needs with excellence and compassion
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service) => (
                <div
                  key={service.name}
                  className="bg-card rounded-xl p-8 border border-border hover:shadow-card-hover transition-all duration-300"
                >
                  <h3 className="font-playfair text-2xl font-bold text-foreground mb-3">
                    {service.name}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center space-x-2">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
