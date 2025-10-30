import { useParams, Link } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, Baby, Bone, Brain, Activity, Zap, Syringe, Users, Stethoscope, Clock, Award, Shield, ArrowLeft } from 'lucide-react';

const DepartmentDetail = () => {
  const { slug } = useParams<{ slug: string }>();

  const departmentData: Record<string, {
    icon: any;
    name: string;
    description: string;
    available247: boolean;
    overview: string;
    stats: { label: string; value: string }[];
    treatments: string[];
    specialists: { name: string; credentials: string; experience: string }[];
    facilities: string[];
  }> = {
    cardiology: {
      icon: Heart,
      name: 'Cardiology',
      description: 'Expert heart care and cardiovascular treatment with state-of-the-art facilities',
      available247: true,
      overview: 'Our Cardiology Department provides comprehensive cardiovascular care with advanced diagnostic and treatment facilities. We specialize in prevention, diagnosis, and treatment of heart diseases, utilizing cutting-edge technology and evidence-based practices.',
      stats: [
        { label: 'Success Rate', value: '96%' },
        { label: 'Annual Procedures', value: '2,500+' },
        { label: 'Specialists', value: '12' },
        { label: 'ICU Beds', value: '24' },
      ],
      treatments: [
        'Coronary Angiography',
        'Cardiac Catheterization',
        'Pacemaker Implantation',
        'Echocardiography',
        'Stress Testing',
        'Holter Monitoring',
        'Cardiac Rehabilitation',
        'Heart Failure Management',
      ],
      specialists: [
        { name: 'Dr. Sarah Mitchell', credentials: 'MD, FACC', experience: '15 years' },
        { name: 'Dr. James Chen', credentials: 'MD, PhD', experience: '12 years' },
        { name: 'Dr. Emily Rodriguez', credentials: 'MD, FACC', experience: '10 years' },
      ],
      facilities: [
        'Advanced Cardiac Catheterization Lab',
        '24/7 Emergency Cardiac Care',
        'Dedicated Cardiac ICU',
        'Non-invasive Cardiology Lab',
      ],
    },
    pediatrics: {
      icon: Baby,
      name: 'Pediatrics',
      description: 'Specialized care for children and adolescents from birth to 18 years',
      available247: true,
      overview: 'Our Pediatrics Department offers comprehensive healthcare for infants, children, and adolescents. We provide preventive care, treatment of acute and chronic conditions, and developmental monitoring in a child-friendly environment.',
      stats: [
        { label: 'Patient Satisfaction', value: '98%' },
        { label: 'Annual Visits', value: '15,000+' },
        { label: 'Pediatricians', value: '18' },
        { label: 'NICU Beds', value: '16' },
      ],
      treatments: [
        'Well-Child Checkups',
        'Immunizations',
        'Developmental Assessments',
        'Childhood Infections',
        'Asthma Management',
        'Allergy Testing',
        'Growth Monitoring',
        'Behavioral Counseling',
      ],
      specialists: [
        { name: 'Dr. Lisa Thompson', credentials: 'MD, FAAP', experience: '14 years' },
        { name: 'Dr. Michael Park', credentials: 'MD, Pediatrics', experience: '11 years' },
        { name: 'Dr. Rachel Green', credentials: 'MD, FAAP', experience: '9 years' },
      ],
      facilities: [
        'Child-Friendly Examination Rooms',
        'Pediatric Emergency Unit',
        'Neonatal Intensive Care Unit (NICU)',
        'Play Therapy Room',
      ],
    },
    orthopedics: {
      icon: Bone,
      name: 'Orthopedics',
      description: 'Advanced bone, joint, and musculoskeletal treatment',
      available247: false,
      overview: 'The Orthopedics Department specializes in the diagnosis and treatment of musculoskeletal conditions. From sports injuries to joint replacements, our team provides personalized care using minimally invasive techniques when possible.',
      stats: [
        { label: 'Joint Replacements', value: '500+/year' },
        { label: 'Arthroscopic Procedures', value: '800+/year' },
        { label: 'Orthopedic Surgeons', value: '10' },
        { label: 'Recovery Rate', value: '94%' },
      ],
      treatments: [
        'Joint Replacement Surgery',
        'Arthroscopic Surgery',
        'Sports Medicine',
        'Fracture Care',
        'Spine Surgery',
        'Hand Surgery',
        'Foot & Ankle Surgery',
        'Physical Therapy',
      ],
      specialists: [
        { name: 'Dr. Robert Anderson', credentials: 'MD, FAAOS', experience: '18 years' },
        { name: 'Dr. Jennifer Lee', credentials: 'MD, Orthopedic Surgery', experience: '13 years' },
        { name: 'Dr. David Martinez', credentials: 'MD, Sports Medicine', experience: '11 years' },
      ],
      facilities: [
        'Advanced Orthopedic Operating Theaters',
        'Digital X-ray and MRI',
        'Physical Therapy Center',
        'Sports Medicine Clinic',
      ],
    },
    neurology: {
      icon: Brain,
      name: 'Neurology',
      description: 'Comprehensive neurological care and brain health services',
      available247: true,
      overview: 'Our Neurology Department provides expert care for disorders of the brain, spine, and nervous system. We offer comprehensive diagnostic services and advanced treatment options for neurological conditions.',
      stats: [
        { label: 'Patient Recovery', value: '92%' },
        { label: 'Annual Consultations', value: '8,000+' },
        { label: 'Neurologists', value: '14' },
        { label: 'Stroke Response Time', value: '<15 min' },
      ],
      treatments: [
        'Stroke Care',
        'Epilepsy Management',
        'Movement Disorders',
        'Headache & Migraine Treatment',
        'Multiple Sclerosis Care',
        'Neuromuscular Disorders',
        'Memory Disorders',
        'Sleep Disorders',
      ],
      specialists: [
        { name: 'Dr. Patricia Williams', credentials: 'MD, PhD, FAAN', experience: '16 years' },
        { name: 'Dr. Thomas Brown', credentials: 'MD, Neurology', experience: '14 years' },
        { name: 'Dr. Maria Garcia', credentials: 'MD, FAAN', experience: '12 years' },
      ],
      facilities: [
        'Advanced Neuroimaging Center',
        'Stroke Unit',
        'Epilepsy Monitoring Unit',
        'Sleep Laboratory',
      ],
    },
    oncology: {
      icon: Activity,
      name: 'Oncology',
      description: 'Comprehensive cancer treatment and support services',
      available247: false,
      overview: 'The Oncology Department provides multidisciplinary cancer care, from diagnosis through treatment and survivorship. Our team of specialists works together to create personalized treatment plans for each patient.',
      stats: [
        { label: 'Treatment Success', value: '88%' },
        { label: 'Annual Patients', value: '3,500+' },
        { label: 'Oncologists', value: '16' },
        { label: 'Clinical Trials', value: '25+' },
      ],
      treatments: [
        'Chemotherapy',
        'Radiation Therapy',
        'Immunotherapy',
        'Targeted Therapy',
        'Surgical Oncology',
        'Hormone Therapy',
        'Bone Marrow Transplant',
        'Palliative Care',
      ],
      specialists: [
        { name: 'Dr. Richard Taylor', credentials: 'MD, FACP, Oncology', experience: '20 years' },
        { name: 'Dr. Susan White', credentials: 'MD, PhD', experience: '17 years' },
        { name: 'Dr. Daniel Kim', credentials: 'MD, Hematology-Oncology', experience: '13 years' },
      ],
      facilities: [
        'Chemotherapy Infusion Center',
        'Radiation Therapy Suite',
        'Cancer Diagnostic Laboratory',
        'Patient Support Center',
      ],
    },
    emergency: {
      icon: Zap,
      name: 'Emergency Medicine',
      description: 'Immediate critical care services available 24/7',
      available247: true,
      overview: 'Our Emergency Department provides immediate, expert care for life-threatening conditions and serious injuries. Available 24/7, our team is equipped to handle any medical emergency with rapid response times.',
      stats: [
        { label: 'Average Wait Time', value: '12 min' },
        { label: 'Annual Visits', value: '45,000+' },
        { label: 'ER Physicians', value: '24' },
        { label: 'Trauma Level', value: 'Level I' },
      ],
      treatments: [
        'Trauma Care',
        'Cardiac Emergencies',
        'Stroke Treatment',
        'Respiratory Emergencies',
        'Poisoning & Overdose',
        'Burns & Injuries',
        'Pediatric Emergencies',
        'Critical Care',
      ],
      specialists: [
        { name: 'Dr. Mark Johnson', credentials: 'MD, FACEP', experience: '16 years' },
        { name: 'Dr. Laura Davis', credentials: 'MD, Emergency Medicine', experience: '14 years' },
        { name: 'Dr. Kevin Wilson', credentials: 'MD, FACEP', experience: '12 years' },
      ],
      facilities: [
        '24/7 Emergency Department',
        'Trauma Resuscitation Bays',
        'Advanced Life Support Ambulances',
        'Helipad for Air Ambulance',
      ],
    },
    surgery: {
      icon: Syringe,
      name: 'Surgery',
      description: 'Advanced surgical procedures with experienced surgical teams',
      available247: true,
      overview: 'Our Surgery Department offers comprehensive surgical services using advanced minimally invasive techniques. Our experienced surgical team is committed to excellent outcomes and patient safety.',
      stats: [
        { label: 'Annual Surgeries', value: '6,000+' },
        { label: 'Success Rate', value: '97%' },
        { label: 'Surgeons', value: '22' },
        { label: 'Operating Rooms', value: '12' },
      ],
      treatments: [
        'General Surgery',
        'Laparoscopic Surgery',
        'Robotic Surgery',
        'Vascular Surgery',
        'Thoracic Surgery',
        'Colorectal Surgery',
        'Bariatric Surgery',
        'Transplant Surgery',
      ],
      specialists: [
        { name: 'Dr. Christopher Moore', credentials: 'MD, FACS', experience: '19 years' },
        { name: 'Dr. Amanda Clark', credentials: 'MD, General Surgery', experience: '15 years' },
        { name: 'Dr. Jonathan Lee', credentials: 'MD, FACS', experience: '13 years' },
      ],
      facilities: [
        'State-of-the-art Operating Theaters',
        'Robotic Surgery System',
        'Surgical ICU',
        'Post-Anesthesia Care Unit',
      ],
    },
    maternity: {
      icon: Users,
      name: 'Maternity',
      description: 'Complete maternal and newborn care with modern birthing suites',
      available247: true,
      overview: 'Our Maternity Department provides comprehensive care for expectant mothers and newborns. From prenatal care through delivery and postpartum support, we ensure a safe and comfortable experience.',
      stats: [
        { label: 'Births per Year', value: '2,800+' },
        { label: 'C-Section Rate', value: '24%' },
        { label: 'OB/GYNs', value: '15' },
        { label: 'Patient Satisfaction', value: '99%' },
      ],
      treatments: [
        'Prenatal Care',
        'High-Risk Pregnancy',
        'Natural Birth',
        'Cesarean Delivery',
        'Labor & Delivery',
        'Postpartum Care',
        'Breastfeeding Support',
        'Newborn Care',
      ],
      specialists: [
        { name: 'Dr. Elizabeth Turner', credentials: 'MD, OB/GYN', experience: '17 years' },
        { name: 'Dr. Michelle Harris', credentials: 'MD, Maternal-Fetal Medicine', experience: '14 years' },
        { name: 'Dr. Jessica Martin', credentials: 'MD, OB/GYN', experience: '11 years' },
      ],
      facilities: [
        'Private Birthing Suites',
        'Neonatal Intensive Care Unit',
        'Prenatal Diagnostic Center',
        'Lactation Support Center',
      ],
    },
    radiology: {
      icon: Stethoscope,
      name: 'Radiology',
      description: 'Advanced imaging and diagnostic services',
      available247: true,
      overview: 'Our Radiology Department offers comprehensive diagnostic imaging services using the latest technology. Our expert radiologists provide accurate diagnoses to support effective treatment planning.',
      stats: [
        { label: 'Scans per Year', value: '35,000+' },
        { label: 'Report Turnaround', value: '<24 hrs' },
        { label: 'Radiologists', value: '18' },
        { label: 'Imaging Modalities', value: '12' },
      ],
      treatments: [
        'X-Ray',
        'CT Scan',
        'MRI',
        'Ultrasound',
        'Mammography',
        'Nuclear Medicine',
        'PET Scan',
        'Interventional Radiology',
      ],
      specialists: [
        { name: 'Dr. Andrew Robinson', credentials: 'MD, Radiology', experience: '16 years' },
        { name: 'Dr. Nicole Adams', credentials: 'MD, PhD, Radiology', experience: '14 years' },
        { name: 'Dr. Steven Phillips', credentials: 'MD, Interventional Radiology', experience: '12 years' },
      ],
      facilities: [
        '3T MRI Scanner',
        '256-Slice CT Scanner',
        'Digital X-Ray Systems',
        'Interventional Radiology Suite',
      ],
    },
  };

  const department = slug ? departmentData[slug] : null;

  if (!department) {
    return (
      <div className="min-h-screen w-full">
        <Header />
        <main className="pt-20">
          <div className="container mx-auto px-4 py-20 text-center">
            <h1 className="text-4xl font-bold mb-4">Department Not Found</h1>
            <p className="text-muted-foreground mb-8">The department you're looking for doesn't exist.</p>
            <Button asChild>
              <Link to="/departments">View All Departments</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const Icon = department.icon;

  return (
    <div className="min-h-screen w-full">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-hero text-white py-20">
          <div className="container mx-auto px-4">
            <Link to="/departments" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Departments
            </Link>
            <div className="flex items-start gap-6">
              <div className="w-20 h-20 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
                <Icon className="h-10 w-10 text-white" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <h1 className="font-playfair text-5xl md:text-6xl font-bold">
                    {department.name}
                  </h1>
                  {department.available247 && (
                    <span className="text-sm bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full font-medium">
                      24/7 Available
                    </span>
                  )}
                </div>
                <p className="text-xl text-white/90 max-w-3xl mb-6">
                  {department.description}
                </p>
                <Button size="lg" className="bg-secondary hover:bg-secondary/90">
                  Book Consultation
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-card border-b border-border">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {department.stats.map((stat, index) => (
                <div key={index} className="text-center animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3 mb-12">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="treatments">Treatments</TabsTrigger>
                <TabsTrigger value="specialists">Our Specialists</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-8 animate-fade-in">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Shield className="h-5 w-5 text-primary" />
                      Department Overview
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {department.overview}
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Award className="h-5 w-5 text-primary" />
                      Our Facilities
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="grid md:grid-cols-2 gap-4">
                      {department.facilities.map((facility, index) => (
                        <li key={index} className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                          <span className="text-muted-foreground">{facility}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="treatments" className="animate-fade-in">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Stethoscope className="h-5 w-5 text-primary" />
                      Available Treatments & Procedures
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {department.treatments.map((treatment, index) => (
                        <div
                          key={index}
                          className="p-4 rounded-lg border border-border hover:border-primary transition-colors hover:shadow-card-hover group"
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-primary group-hover:scale-150 transition-transform" />
                            <span className="text-foreground font-medium">{treatment}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="specialists" className="animate-fade-in">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {department.specialists.map((specialist, index) => (
                    <Card key={index} className="hover:shadow-card-hover transition-shadow">
                      <CardContent className="pt-6">
                        <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                          <span className="text-3xl font-bold text-primary">
                            {specialist.name.split(' ')[1][0]}
                          </span>
                        </div>
                        <h3 className="font-space text-xl font-semibold text-center mb-2">
                          {specialist.name}
                        </h3>
                        <p className="text-sm text-muted-foreground text-center mb-1">
                          {specialist.credentials}
                        </p>
                        <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-4">
                          <Clock className="h-4 w-4" />
                          {specialist.experience} experience
                        </div>
                        <Button variant="outline" className="w-full" asChild>
                          <Link to="/appointment">Book Appointment</Link>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-hero text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
              Schedule a consultation with our {department.name} specialists today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90" asChild>
                <Link to="/appointment">Book Appointment</Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/20" asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default DepartmentDetail;