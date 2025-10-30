import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export function ContactSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
              Get in Touch
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Have questions? We're here to help. Reach out to us through any of
              the following channels.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-space font-semibold text-foreground mb-1">
                    Visit Us
                  </h3>
                  <p className="text-muted-foreground">
                    123 Medical Center Drive
                    <br />
                    Healthcare City, HC 12345
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-space font-semibold text-foreground mb-1">
                    Call Us
                  </h3>
                  <p className="text-muted-foreground">
                    General: +1 (234) 567-890
                    <br />
                    Emergency: 911
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-space font-semibold text-foreground mb-1">
                    Email Us
                  </h3>
                  <p className="text-muted-foreground">
                    info@EnatCare.com
                    <br />
                    appointments@EnatCare.com
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-muted/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="h-6 w-6 text-muted" />
                </div>
                <div>
                  <h3 className="font-space font-semibold text-foreground mb-1">
                    Hours
                  </h3>
                  <p className="text-muted-foreground">
                    Mon-Fri: 8:00 AM - 8:00 PM
                    <br />
                    Sat-Sun: 9:00 AM - 5:00 PM
                    <br />
                    Emergency: 24/7
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card rounded-2xl p-8 border border-border shadow-card">
            <h3 className="font-playfair text-2xl font-bold text-foreground mb-6">
              Send Us a Message
            </h3>
            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Input
                    type="text"
                    placeholder="Your Name"
                    className="w-full"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Email Address"
                    className="w-full"
                  />
                </div>
              </div>
              <div>
                <Input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full"
                />
              </div>
              <div>
                <Input type="text" placeholder="Subject" className="w-full" />
              </div>
              <div>
                <Textarea
                  placeholder="Your Message"
                  rows={5}
                  className="w-full"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full bg-primary hover:bg-primary/90"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
