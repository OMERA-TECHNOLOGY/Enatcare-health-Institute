import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import medicalTeam from '@/assets/medical-team.jpg';

export function AboutSection() {
  const highlights = [
    'State-of-the-art medical technology',
    'Board-certified specialist physicians',
    'Personalized patient-centered care',
    'JCI accredited healthcare facility',
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative animate-fade-in">
            <div className="rounded-2xl overflow-hidden shadow-card-hover">
              <img
                src={medicalTeam}
                alt="Kereyu Medical Institute Team of Expert Doctors"
                className="w-full h-[500px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-secondary text-white p-6 rounded-xl shadow-lg">
              <div className="text-4xl font-playfair font-bold">20+</div>
              <div className="text-sm">Years of Excellence</div>
            </div>
          </div>

          {/* Content Side */}
          <div className="animate-fade-in-up">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
              Welcome to EnatCare Medical Institute
            </h2>
            <p className="text-xl text-primary font-semibold mb-6">
              Excellence in Healthcare, Compassion in Healing
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              For over two decades, EnatCare Medical Institute has been at the
              forefront of healthcare innovation, combining cutting-edge medical
              technology with compassionate patient care. Our team of 200+
              dedicated professionals works tirelessly to provide exceptional
              healthcare services across 15 specialized departments.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              We believe in treating not just the illness, but the whole person.
              Our patient-centered approach ensures that every individual
              receives personalized care tailored to their unique needs and
              circumstances.
            </p>

            {/* Highlights */}
            <div className="space-y-3 mb-8">
              {highlights.map((highlight) => (
                <div key={highlight} className="flex items-center space-x-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{highlight}</span>
                </div>
              ))}
            </div>

            <Button
              size="lg"
              asChild
              className="bg-primary hover:bg-primary/90"
            >
              <Link to="/about">
                Learn More About Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
