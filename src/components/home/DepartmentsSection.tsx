import { Link } from 'react-router-dom';
import { Heart, Baby, Bone, Brain, Stethoscope, Activity, Syringe, Users, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function DepartmentsSection() {
  const departments = [
    {
      icon: Heart,
      name: 'Cardiology',
      description: 'Expert heart care and cardiovascular treatment',
      available247: true,
      slug: 'cardiology',
    },
    {
      icon: Baby,
      name: 'Pediatrics',
      description: 'Specialized care for children and adolescents',
      available247: true,
      slug: 'pediatrics',
    },
    {
      icon: Bone,
      name: 'Orthopedics',
      description: 'Advanced bone and joint treatment',
      available247: false,
      slug: 'orthopedics',
    },
    {
      icon: Brain,
      name: 'Neurology',
      description: 'Comprehensive neurological care',
      available247: true,
      slug: 'neurology',
    },
    {
      icon: Activity,
      name: 'Oncology',
      description: 'Cancer treatment and support',
      available247: false,
      slug: 'oncology',
    },
    {
      icon: Zap,
      name: 'Emergency Medicine',
      description: 'Immediate critical care services',
      available247: true,
      slug: 'emergency',
    },
    {
      icon: Syringe,
      name: 'Surgery',
      description: 'Advanced surgical procedures',
      available247: true,
      slug: 'surgery',
    },
    {
      icon: Baby,
      name: 'Maternity',
      description: 'Complete maternal and newborn care',
      available247: true,
      slug: 'maternity',
    },
    {
      icon: Stethoscope,
      name: 'Radiology',
      description: 'Advanced imaging and diagnostics',
      available247: true,
      slug: 'radiology',
    },
  ];

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Departments
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive healthcare services across 15 specialized departments
          </p>
        </div>

        {/* Departments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {departments.map((dept, index) => (
            <Link
              key={dept.slug}
              to={`/departments/${dept.slug}`}
              className="group relative bg-background rounded-xl p-6 border border-border hover:shadow-card-hover transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 50}ms` }}
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

        {/* View All Button */}
        <div className="text-center">
          <Button size="lg" variant="outline" asChild>
            <Link to="/departments">View All Departments</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
