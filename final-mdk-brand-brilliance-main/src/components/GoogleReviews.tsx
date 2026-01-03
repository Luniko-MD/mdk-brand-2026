import { CheckCircle, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const GoogleReviews = () => {
  // YOU CAN EDIT THESE REVIEWS WITH YOUR REAL ONES
  const reviews = [
    {
      name: "Sarah Jenkins",
      date: "2 weeks ago",
      rating: 5,
      text: "MDK Fast Print saved the day! I needed business cards for a conference the next morning, and they delivered. The quality was outstanding.",
      initial: "S"
    },
    {
      name: "Michael Peterson",
      date: "1 month ago",
      rating: 5,
      text: "Incredible web design services. They built our beautiful website site from scratch and our sales have doubled. Highly recommend the team!",
      initial: "M"
    },
    {
      name: "David Abrahams",
      date: "3 months ago",
      rating: 5,
      text: "Best printing service in Cape Town. Professional, friendly, and the DTF transfers are top quality. Will definitely be back.",
      initial: "D"
    }
  ];

  return (
    <section className="section-padding bg-muted/30">
      <div className="container-mdk">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <img 
              src="/images/google-logo.png" 
              alt="Google" 
              className="h-8 w-auto"
            />
            <span className="text-xl font-medium text-muted-foreground">Reviews</span>
          </div>
          <h2 className="heading-section mb-4">What Our Clients Say</h2>
          <p className="text-muted-foreground">
            We are proud of the relationships we build. Here is feedback from our satisfied clients.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <Card key={index} className="border-none shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-lg">
                    {review.initial}
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm">{review.name}</h3>
                    <p className="text-xs text-muted-foreground">{review.date}</p>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  "{review.text}"
                </p>

                <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
                  <CheckCircle className="w-3 h-3 text-green-500" />
                  <span>Verified Client</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GoogleReviews;