import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Award, Users, Building2, Heart } from 'lucide-react';
import medicalTeam from '@/assets/medical-team.jpg';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Compassionate Care',
      description: 'We treat every patient with empathy, dignity, and respect.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for the highest standards in medical care and service.',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We work together as a team to provide comprehensive care.',
    },
    {
      icon: Building2,
      title: 'Innovation',
      description: 'We embrace new technologies and methods to improve patient outcomes.',
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
              About EnatCare Medical Institute
            </h1>
            <p className="text-xl max-w-2xl">
              20+ years of medical excellence serving our community with
              compassion and innovation
            </p>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-playfair text-4xl font-bold text-foreground mb-6">
                  Our Story
                </h2>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Founded in 2003, EnatCare Medical Institute began with a
                  simple mission: to provide world-class healthcare services
                  with compassion and excellence. Over the past two decades,
                  we've grown from a small clinic to a comprehensive medical
                  facility serving over 50,000 patients annually.
                </p>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Our commitment to innovation and patient-centered care has
                  earned us numerous accreditations, including JCI certification
                  and ISO standards. We've invested heavily in state-of-the-art
                  technology and continue to recruit the finest medical
                  professionals in their respective fields.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Today, EnatCare Medical Institute stands as a beacon of hope
                  and healing in our community, offering 15 specialized
                  departments and a team of over 200 dedicated healthcare
                  professionals.
                </p>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-card-hover">
                <img
                  src={medicalTeam}
                  alt="Kereyu Medical Institute Team"
                  className="w-full h-[500px] object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-playfair text-4xl font-bold text-foreground mb-4">
                Our Core Values
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="text-center p-6 bg-background rounded-xl border border-border"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-space text-xl font-semibold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-playfair text-4xl font-bold text-foreground mb-4">
                Our Achievements
              </h2>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="font-playfair text-5xl font-bold text-primary mb-2">
                  50K+
                </div>
                <div className="text-muted-foreground">Patients Treated</div>
              </div>
              <div className="text-center">
                <div className="font-playfair text-5xl font-bold text-secondary mb-2">
                  200+
                </div>
                <div className="text-muted-foreground">Medical Staff</div>
              </div>
              <div className="text-center">
                <div className="font-playfair text-5xl font-bold text-accent mb-2">
                  15
                </div>
                <div className="text-muted-foreground">Departments</div>
              </div>
              <div className="text-center">
                <div className="font-playfair text-5xl font-bold text-muted mb-2">
                  95%
                </div>
                <div className="text-muted-foreground">
                  Patient Satisfaction
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
