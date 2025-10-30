import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { useState } from 'react';
import { Calendar, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Appointment = () => {
  const [step, setStep] = useState(1);

  return (
    <div className="min-h-screen w-full">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-hero text-white py-20">
          <div className="container mx-auto px-4">
            <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-4">
              Book an Appointment
            </h1>
            <p className="text-xl max-w-2xl">
              Schedule your visit with our expert medical team in just a few simple steps
            </p>
          </div>
        </section>

        {/* Appointment Form */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            {/* Progress Indicator */}
            <div className="mb-12">
              <div className="flex items-center justify-between">
                {[1, 2, 3].map((num) => (
                  <div key={num} className="flex items-center flex-1">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                        step >= num
                          ? 'bg-primary text-white'
                          : 'bg-muted text-muted-foreground'
                      }`}
                    >
                      {step > num ? <CheckCircle2 className="h-6 w-6" /> : num}
                    </div>
                    {num < 3 && (
                      <div
                        className={`flex-1 h-1 mx-2 ${
                          step > num ? 'bg-primary' : 'bg-muted'
                        }`}
                      />
                    )}
                  </div>
                ))}
              </div>
              <div className="flex justify-between mt-2">
                <span className="text-sm text-muted-foreground">Department</span>
                <span className="text-sm text-muted-foreground">Date & Time</span>
                <span className="text-sm text-muted-foreground">Your Details</span>
              </div>
            </div>

            {/* Form Content */}
            <div className="bg-card rounded-2xl p-8 border border-border shadow-card">
              {step === 1 && (
                <div>
                  <h2 className="font-playfair text-2xl font-bold text-foreground mb-6">
                    Select Department
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {['Cardiology', 'Pediatrics', 'Orthopedics', 'Neurology', 'Oncology', 'Surgery'].map(
                      (dept) => (
                        <button
                          key={dept}
                          className="p-4 border-2 border-border rounded-lg hover:border-primary hover:bg-primary/5 transition-all text-left"
                        >
                          <span className="font-medium text-foreground">{dept}</span>
                        </button>
                      )
                    )}
                  </div>
                  <Button
                    size="lg"
                    className="w-full mt-8 bg-primary hover:bg-primary/90"
                    onClick={() => setStep(2)}
                  >
                    Continue
                  </Button>
                </div>
              )}

              {step === 2 && (
                <div>
                  <h2 className="font-playfair text-2xl font-bold text-foreground mb-6">
                    Choose Date & Time
                  </h2>
                  <div className="space-y-4">
                    <Input type="date" className="w-full" />
                    <div className="grid grid-cols-3 gap-3">
                      {['9:00 AM', '10:00 AM', '11:00 AM', '2:00 PM', '3:00 PM', '4:00 PM'].map(
                        (time) => (
                          <button
                            key={time}
                            className="p-3 border-2 border-border rounded-lg hover:border-primary hover:bg-primary/5 transition-all"
                          >
                            {time}
                          </button>
                        )
                      )}
                    </div>
                  </div>
                  <div className="flex gap-4 mt-8">
                    <Button
                      size="lg"
                      variant="outline"
                      className="flex-1"
                      onClick={() => setStep(1)}
                    >
                      Back
                    </Button>
                    <Button
                      size="lg"
                      className="flex-1 bg-primary hover:bg-primary/90"
                      onClick={() => setStep(3)}
                    >
                      Continue
                    </Button>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div>
                  <h2 className="font-playfair text-2xl font-bold text-foreground mb-6">
                    Your Information
                  </h2>
                  <form className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <Input type="text" placeholder="First Name *" required />
                      <Input type="text" placeholder="Last Name *" required />
                    </div>
                    <Input type="email" placeholder="Email Address *" required />
                    <Input type="tel" placeholder="Phone Number *" required />
                    <Input type="date" placeholder="Date of Birth" />
                    <Textarea
                      placeholder="Reason for Visit / Additional Notes"
                      rows={4}
                    />
                    <div className="flex gap-4 mt-6">
                      <Button
                        size="lg"
                        variant="outline"
                        className="flex-1"
                        onClick={() => setStep(2)}
                      >
                        Back
                      </Button>
                      <Button
                        type="submit"
                        size="lg"
                        className="flex-1 bg-secondary hover:bg-secondary/90"
                      >
                        <Calendar className="mr-2 h-5 w-5" />
                        Confirm Appointment
                      </Button>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Appointment;
