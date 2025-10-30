import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { HeroSection } from '@/components/home/HeroSection';
import { StatsSection } from '@/components/home/StatsSection';
import { AboutSection } from '@/components/home/AboutSection';
import { DepartmentsSection } from '@/components/home/DepartmentsSection';
import { DoctorsSection } from '@/components/home/DoctorsSection';
import { EmergencySection } from '@/components/home/EmergencySection';
import { TestimonialsSection } from '@/components/home/TestimonialsSection';
import { ContactSection } from '@/components/home/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen w-full">
      <Header />
      <main>
        <HeroSection />
        <StatsSection />
        <AboutSection />
        <DepartmentsSection />
        <DoctorsSection />
        <EmergencySection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
