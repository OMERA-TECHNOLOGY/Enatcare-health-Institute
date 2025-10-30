import { Star, Quote } from 'lucide-react';

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Jennifer Anderson",
      treatment: "Cardiology Treatment",
      rating: 5,
      text: "The care I received at EnatCare Medical Institute was exceptional. Dr. Johnson and her team were professional, compassionate, and truly invested in my recovery. I cannot thank them enough.",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop",
    },
    {
      name: "Robert Thompson",
      treatment: "Orthopedic Surgery",
      rating: 5,
      text: "After my knee surgery, the rehabilitation team helped me get back on my feet faster than I imagined. The facilities are world-class and the staff is incredibly supportive.",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop",
    },
    {
      name: "Maria Garcia",
      treatment: "Maternity Care",
      rating: 5,
      text: "From prenatal care to delivery, every step was handled with utmost care and professionalism. The maternity ward staff made me feel safe and comfortable throughout my entire journey.",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
    },
  ];

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
            Patient Stories
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real experiences from our patients who trusted us with their care
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="bg-background rounded-xl p-8 border border-border hover:shadow-card-hover transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <Quote className="h-10 w-10 text-primary/20 mb-4" />
              
              {/* Rating */}
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Patient Info */}
              <div className="flex items-center space-x-4 pt-6 border-t border-border">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.treatment}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
