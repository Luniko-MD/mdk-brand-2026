import { MessageCircle, User } from "lucide-react";
import { useState, useEffect } from "react";

const WhatsAppButton = () => {
  const [showGreeting, setShowGreeting] = useState(false);
  const [hasShownInitial, setHasShownInitial] = useState(false);
  
  const whatsappNumber = "27691623990";
  const message = encodeURIComponent("Hi! I'm interested in MDK Brand services. Can you help me?");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  // Show greeting after 3 seconds on first load
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowGreeting(true);
      setHasShownInitial(true);
    }, 3000);
    
    return () => clearTimeout(timer);
  }, []);

  // Auto-hide greeting after 8 seconds
  useEffect(() => {
    if (showGreeting && hasShownInitial) {
      const hideTimer = setTimeout(() => {
        setShowGreeting(false);
      }, 8000);
      return () => clearTimeout(hideTimer);
    }
  }, [showGreeting, hasShownInitial]);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-end gap-3">
      {/* Greeting Speech Bubble */}
      <div 
        className={`transition-all duration-500 transform ${
          showGreeting 
            ? 'opacity-100 translate-x-0 scale-100' 
            : 'opacity-0 translate-x-4 scale-95 pointer-events-none'
        }`}
      >
        <div className="bg-background border border-border shadow-xl rounded-2xl rounded-br-sm p-4 max-w-[200px] relative">
          {/* Animated Avatar */}
          <div className="flex items-start gap-3">
            <div className="relative flex-shrink-0">
              <div className="w-10 h-10 bg-gradient-to-br from-mdk-green to-mdk-green/70 rounded-full flex items-center justify-center animate-bounce-gentle">
                <User className="w-5 h-5 text-primary-foreground" />
              </div>
              {/* Online indicator */}
              <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-mdk-green rounded-full border-2 border-background animate-pulse" />
            </div>
            <div className="flex-1">
              <p className="text-xs font-semibold text-foreground">MDK Support</p>
              <p className="text-xs text-muted-foreground mt-0.5">Online now</p>
            </div>
          </div>
          
          {/* Message */}
          <div className="mt-3 space-y-2">
            <p className="text-sm text-foreground leading-relaxed">
              👋 Hi there! Need help with printing or web services?
            </p>
            <p className="text-sm text-muted-foreground">
              Chat with us on WhatsApp for instant support!
            </p>
          </div>
          
          {/* Arrow pointing to button */}
          <div className="absolute -right-2 bottom-3 text-mdk-green animate-bounce-horizontal">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
              <path d="M0 6L8 0V4H12V8H8V12L0 6Z" />
            </svg>
          </div>
        </div>
      </div>

      {/* WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative"
        aria-label="Chat on WhatsApp"
        onMouseEnter={() => setShowGreeting(true)}
        onMouseLeave={() => hasShownInitial && setShowGreeting(false)}
      >
        <div className="relative">
          {/* Outer glow ring */}
          <div className="absolute inset-0 bg-mdk-green rounded-full animate-ping opacity-20" />
          <div className="absolute -inset-1 bg-mdk-green/30 rounded-full animate-pulse" />
          
          {/* Main Button */}
          <div className="relative flex items-center justify-center w-16 h-16 bg-gradient-to-br from-mdk-green to-mdk-green/80 rounded-full shadow-lg shadow-mdk-green/30 hover:shadow-xl hover:shadow-mdk-green/40 transition-all duration-300 hover:scale-110 group-hover:rotate-6">
            <MessageCircle className="w-8 h-8 text-primary-foreground transition-transform duration-300 group-hover:scale-110" />
          </div>

          {/* Notification badge */}
          <div className="absolute -top-1 -right-1 w-5 h-5 bg-destructive rounded-full flex items-center justify-center animate-bounce-gentle">
            <span className="text-xs font-bold text-destructive-foreground">1</span>
          </div>
        </div>
      </a>
    </div>
  );
};

export default WhatsAppButton;
