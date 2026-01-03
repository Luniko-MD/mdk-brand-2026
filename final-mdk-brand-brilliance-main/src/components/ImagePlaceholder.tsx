import { ImageIcon, Printer, Globe, Palette, Camera } from "lucide-react";
import { cn } from "@/lib/utils";

interface ImagePlaceholderProps {
  type?: "default" | "print" | "web" | "design" | "portfolio";
  className?: string;
  aspectRatio?: "square" | "video" | "wide" | "portrait";
  label?: string;
}

const ImagePlaceholder = ({ 
  type = "default", 
  className, 
  aspectRatio = "video",
  label 
}: ImagePlaceholderProps) => {
  const icons = {
    default: ImageIcon,
    print: Printer,
    web: Globe,
    design: Palette,
    portfolio: Camera,
  };

  const gradients = {
    default: "from-muted via-secondary to-muted",
    print: "from-primary/10 via-primary/5 to-muted",
    web: "from-primary/15 via-accent/10 to-muted",
    design: "from-mdk-orange/10 via-primary/5 to-muted",
    portfolio: "from-primary/20 via-muted to-secondary",
  };

  const aspectRatios = {
    square: "aspect-square",
    video: "aspect-video",
    wide: "aspect-[21/9]",
    portrait: "aspect-[3/4]",
  };

  const Icon = icons[type];

  return (
    <div 
      className={cn(
        "relative overflow-hidden rounded-lg bg-gradient-to-br flex items-center justify-center",
        gradients[type],
        aspectRatios[aspectRatio],
        className
      )}
    >
      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />
      
      <div className="flex flex-col items-center gap-3 text-muted-foreground">
        <Icon className="w-12 h-12 opacity-40" />
        {label && (
          <span className="text-sm font-medium opacity-60">{label}</span>
        )}
      </div>
    </div>
  );
};

export default ImagePlaceholder;
