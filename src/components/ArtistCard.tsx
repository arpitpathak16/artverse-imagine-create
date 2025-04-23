
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "./ui/card";
import { MapPin } from "lucide-react";
import { Badge } from "./ui/badge";

interface ArtistCardProps {
  id: string;
  name: string;
  location: string;
  imageUrl: string;
  specialties: string[];
  rating: number;
}

const ArtistCard = ({
  id,
  name,
  location,
  imageUrl,
  specialties,
  rating,
}: ArtistCardProps) => {
  return (
    <Link to={`/artists/${id}`}>
      <Card className="art-card h-full transition-all hover:-translate-y-1">
        <div className="relative h-64 overflow-hidden">
          <img
            src={imageUrl}
            alt={`${name}'s artwork`}
            className="h-full w-full object-cover"
          />
        </div>
        <CardContent className="p-4">
          <h3 className="text-lg font-semibold">{name}</h3>
          <div className="mt-1 flex items-center text-sm text-muted-foreground">
            <MapPin className="mr-1 h-4 w-4" />
            {location}
          </div>
          <div className="mt-3 flex flex-wrap gap-1">
            {specialties.slice(0, 3).map((specialty, index) => (
              <Badge key={index} variant="outline" className="bg-artverse-cream">
                {specialty}
              </Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="border-t px-4 py-2">
          <div className="flex items-center">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg
                  key={i}
                  className={`h-4 w-4 ${
                    i < Math.floor(rating)
                      ? "text-artverse-gold"
                      : "text-gray-300"
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="ml-1 text-sm text-gray-600">
              {rating.toFixed(1)}
            </span>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default ArtistCard;
