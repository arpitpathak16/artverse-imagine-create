
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "./ui/card";

interface ArtworkCardProps {
  id: string;
  title: string;
  artistName: string;
  imageUrl: string;
  price: number;
  category: string;
}

const ArtworkCard = ({
  id,
  title,
  artistName,
  imageUrl,
  price,
  category,
}: ArtworkCardProps) => {
  return (
    <Link to={`/store/${id}`}>
      <Card className="art-card h-full overflow-hidden transition-all hover:-translate-y-1">
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
          />
          <div className="absolute right-2 top-2">
            <span className="rounded-full bg-white/90 px-2 py-1 text-xs font-medium shadow-sm">
              {category}
            </span>
          </div>
        </div>
        <CardContent className="p-4">
          <h3 className="text-lg font-medium leading-tight">{title}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{artistName}</p>
        </CardContent>
        <CardFooter className="border-t px-4 py-3">
          <p className="font-medium text-artverse-deepPurple">
            ₹{price.toLocaleString()}
          </p>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default ArtworkCard;
