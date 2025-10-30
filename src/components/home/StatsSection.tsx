import { useEffect, useRef, useState } from 'react';
import { Users, Award, Building2, Heart } from 'lucide-react';

export function StatsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    {
      icon: Users,
      value: '50,000+',
      label: 'Patients Treated',
      color: 'text-primary',
    },
    {
      icon: Award,
      value: '200+',
      label: 'Medical Staff',
      color: 'text-secondary',
    },
    {
      icon: Building2,
      value: '15',
      label: 'Specialized Departments',
      color: 'text-accent',
    },
    {
      icon: Heart,
      value: '20+',
      label: 'Years of Excellence',
      color: 'text-muted',
    },
  ];

  return (
    <section ref={sectionRef} className="py-16 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`text-center ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex justify-center mb-4">
                <div className={`p-4 rounded-full bg-${stat.color}/10`}>
                  <stat.icon className={`h-8 w-8 ${stat.color}`} />
                </div>
              </div>
              <div className="font-playfair text-4xl font-bold text-foreground mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
