import { Link } from 'react-router-dom';
import { Star, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function DoctorsSection() {
  const doctors = [
    {
      id: '1',
      name: 'Dr. Sarah Johnson',
      specialty: 'Cardiology',
      experience: '15 years',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop',
    },
    {
      id: '2',
      name: 'Dr. Michael Chen',
      specialty: 'Neurology',
      experience: '12 years',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop',
    },
    {
      id: '3',
      name: 'Dr. Emily Williams',
      specialty: 'Pediatrics',
      experience: '10 years',
      rating: 5.0,
      image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop',
    },
    {
      id: '4',
      name: 'Dr. James Martinez',
      specialty: 'Orthopedics',
      experience: '18 years',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=400&fit=crop',
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
            Meet Our Specialists
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Board-certified physicians dedicated to your health and well-being
          </p>
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {doctors.map((doctor, index) => (
            <div
              key={doctor.id}
              className="group bg-card rounded-xl overflow-hidden border border-border hover:shadow-card-hover transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={doctor.image}
                  alt={`${doctor.name} - ${doctor.specialty} Specialist`}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full flex items-center space-x-1">
                  <Star className="h-4 w-4 fill-accent text-accent" />
                  <span className="text-sm font-semibold">{doctor.rating}</span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-playfair text-xl font-semibold text-foreground mb-1">
                  {doctor.name}
                </h3>
                <p className="text-primary font-medium mb-2">{doctor.specialty}</p>
                <p className="text-sm text-muted-foreground mb-4">
                  {doctor.experience} experience
                </p>
                <div className="flex gap-2">
                  <Button size="sm" asChild className="flex-1">
                    <Link to={`/doctors/${doctor.id}`}>View Profile</Link>
                  </Button>
                  <Button size="sm" variant="outline" asChild className="flex-1">
                    <Link to="/appointment">
                      <Calendar className="h-4 w-4 mr-1" />
                      Book
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button size="lg" asChild className="bg-primary hover:bg-primary/90">
            <Link to="/doctors">View All Doctors</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
