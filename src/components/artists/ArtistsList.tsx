
import { Button } from "@/components/ui/button";
import ArtistCard from "@/components/ArtistCard";

interface Artist {
  id: string;
  name: string;
  location: string;
  imageUrl: string;
  specialties: string[];
  rating: number;
}

interface ArtistsListProps {
  artists: Artist[];
  onResetFilters: () => void;
}

const ArtistsList = ({ artists, onResetFilters }: ArtistsListProps) => {
  return (
    <>
      <div className="mb-6">
        <p className="text-sm text-gray-600">Showing {artists.length} artists</p>
      </div>

      {artists.length > 0 ? (
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {artists.map((artist) => (
            <ArtistCard key={artist.id} {...artist} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center rounded-lg bg-white py-16">
          <p className="text-lg font-medium text-gray-800">
            No artists found matching your criteria
          </p>
          <p className="mt-1 text-gray-500">
            Try adjusting your filters to see more results
          </p>
          <Button onClick={onResetFilters} variant="outline" className="mt-4">
            Reset filters
          </Button>
        </div>
      )}
    </>
  );
};

export default ArtistsList;
