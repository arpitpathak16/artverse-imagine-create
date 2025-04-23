
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ArtServiceProps {
  title: string;
  description: string;
  priceRange: string;
  duration: string;
  tags: string[];
  imageUrl: string;
}

const ArtServiceCard = ({ title, description, priceRange, duration, tags, imageUrl }: ArtServiceProps) => {
  return (
    <Card className="overflow-hidden transition-all hover:-translate-y-1">
      <div className="relative h-48">
        <img
          src={imageUrl}
          alt={title}
          className="h-full w-full object-cover"
        />
      </div>
      <CardContent className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="mt-2 text-sm text-gray-600">{description}</p>
        <div className="mt-3 flex items-center justify-between text-sm">
          <span className="font-medium text-artverse-purple">{priceRange}</span>
          <span className="text-gray-500">{duration}</span>
        </div>
        <div className="mt-3 flex flex-wrap gap-1">
          {tags.map((tag, index) => (
            <Badge key={index} variant="outline" className="bg-artverse-cream">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ArtServiceCard;
