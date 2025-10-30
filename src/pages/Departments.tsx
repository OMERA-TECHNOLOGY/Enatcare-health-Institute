import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Heart, Baby, Bone, Brain, Activity, Zap, Syringe, Users, Stethoscope } from 'lucide-react';
import { Link } from 'react-router-dom';

const Departments = () => {
  const departments = [
    {
      icon: Heart,
      name: 'Cardiology',
      description: 'Expert heart care and cardiovascular treatment with state-of-the-art facilities',
      available247: true,
      slug: 'cardiology',
    },
    {
      icon: Baby,
      name: 'Pediatrics',
      description: 'Specialized care for children and adolescents from birth to 18 years',
      available247: true,
      slug: 'pediatrics',
    },
    {
      icon: Bone,
      name: 'Orthopedics',
      description: 'Advanced bone, joint, and musculoskeletal treatment',
      available247: false,
      slug: 'orthopedics',
    },
    {
      icon: Brain,
      name: 'Neurology',
      description: 'Comprehensive neurological care and brain health services',
      available247: true,
      slug: 'neurology',
    },
    {
      icon: Activity,
      name: 'Oncology',
      description: 'Comprehensive cancer treatment and support services',
      available247: false,
      slug: 'oncology',
    },
    {
      icon: Zap,
      name: 'Emergency Medicine',
      description: 'Immediate critical care services available 24/7',
      available247: true,
      slug: 'emergency',
    },
    {
      icon: Syringe,
      name: 'Surgery',
      description: 'Advanced surgical procedures with experienced surgical teams',
      available247: true,
      slug: 'surgery',
    },
    {
      icon: Users,
      name: 'Maternity',
      description: 'Complete maternal and newborn care with modern birthing suites',
      available247: true,
      slug: 'maternity',
    },
    {
      icon: Stethoscope,
      name: 'Radiology',
      description: 'Advanced imaging and diagnostic services',
      available247: true,
      slug: 'radiology',
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
              Our Departments
            </h1>
            <p className="text-xl max-w-2xl">
              Comprehensive healthcare services across 15 specialized departments with expert physicians and modern facilities
            </p>
          </div>
        </section>

        {/* Departments Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {departments.map((dept) => (
                <Link
                  key={dept.slug}
                  to={`/departments/${dept.slug}`}
                  className="group relative bg-card rounded-xl p-6 border border-border hover:shadow-card-hover transition-all duration-300"
                >
                  {dept.available247 && (
                    <span className="absolute top-4 right-4 text-xs bg-secondary/10 text-secondary px-2 py-1 rounded-full font-medium">
                      24/7
                    </span>
                  )}
                  <div className="mb-4">
                    <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <dept.icon className="h-7 w-7 text-primary group-hover:text-white" />
                    </div>
                  </div>
                  <h3 className="font-space text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {dept.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {dept.description}
                  </p>
                  <div className="flex items-center text-primary font-medium text-sm group-hover:gap-2 transition-all">
                    Explore Department
                    <span className="inline-block group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Departments;
