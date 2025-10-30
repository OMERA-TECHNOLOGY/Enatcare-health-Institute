import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Star, Calendar, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Doctors = () => {
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
    {
      id: '5',
      name: 'Dr. Lisa Anderson',
      specialty: 'Oncology',
      experience: '14 years',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop',
    },
    {
      id: '6',
      name: 'Dr. David Kim',
      specialty: 'Surgery',
      experience: '20 years',
      rating: 5.0,
      image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&h=400&fit=crop',
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
              Our Medical Specialists
            </h1>
            <p className="text-xl max-w-2xl">
              Board-certified physicians with years of experience dedicated to providing exceptional patient care
            </p>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="py-8 bg-card border-b border-border">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search by name, specialty..."
                  className="pl-10"
                />
              </div>
              <Button variant="outline">Filter by Department</Button>
              <Button variant="outline">Sort by Rating</Button>
            </div>
          </div>
        </section>

        {/* Doctors Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {doctors.map((doctor) => (
                <div
                  key={doctor.id}
                  className="group bg-card rounded-xl overflow-hidden border border-border hover:shadow-card-hover transition-all duration-300"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={doctor.image}
                      alt={`${doctor.name} - ${doctor.specialty} Specialist`}
                      className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-accent text-accent" />
                      <span className="text-sm font-semibold">{doctor.rating}</span>
                    </div>
                  </div>
                  <div className="p-6">
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
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Doctors;
