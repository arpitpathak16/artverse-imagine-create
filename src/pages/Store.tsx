
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ArtworkCard from "@/components/ArtworkCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Filter, Search, Grid3x3, LayoutGrid } from "lucide-react";

// Mock data
const artworksData = [
  {
    id: "1",
    title: "Sunset Over the Ganges",
    artistName: "Arun Patel",
    imageUrl: "https://images.unsplash.com/photo-1578321272176-b7bbc0679853",
    price: 12500,
    category: "Oil Painting",
  },
  {
    id: "2",
    title: "Delhi Market Scene",
    artistName: "Priya Sharma",
    imageUrl: "https://images.unsplash.com/photo-1582657118090-af35eefc4e48",
    price: 8900,
    category: "Watercolor",
  },
  {
    id: "3",
    title: "Dancing Deities",
    artistName: "Maya Reddy",
    imageUrl: "https://images.unsplash.com/photo-1569172122301-bc5008bc09c5",
    price: 15700,
    category: "Sculpture",
  },
  {
    id: "4",
    title: "Monsoon Dreams",
    artistName: "Vikram Singh",
    imageUrl: "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9",
    price: 9500,
    category: "Mixed Media",
  },
  {
    id: "5",
    title: "Urban Jungle",
    artistName: "Rahul Verma",
    imageUrl: "https://images.unsplash.com/photo-1547891654-e66ed7ebb968",
    price: 14000,
    category: "Digital Art",
  },
  {
    id: "6",
    title: "Rajasthani Heritage",
    artistName: "Priya Sharma",
    imageUrl: "https://images.unsplash.com/photo-1579762715118-a6f1d4b934f1",
    price: 18500,
    category: "Folk Art",
  },
  {
    id: "7",
    title: "Cosmic Meditation",
    artistName: "Maya Reddy",
    imageUrl: "https://images.unsplash.com/photo-1579783901586-d88db74b4fe4",
    price: 12000,
    category: "Acrylic",
  },
  {
    id: "8",
    title: "City Lights",
    artistName: "Ananya Gupta",
    imageUrl: "https://images.unsplash.com/photo-1579783928621-7a13d66a62b1",
    price: 7500,
    category: "Digital Art",
  },
];

// Featured collections
const collections = [
  {
    id: "tribal-tales",
    name: "Tribal Tales",
    description: "Traditional tribal art from across India",
    imageUrl: "https://images.unsplash.com/photo-1569172122301-bc5008bc09c5",
  },
  {
    id: "miniature-sculptures",
    name: "Miniature Sculptures",
    description: "Intricate and detailed small sculptures",
    imageUrl: "https://images.unsplash.com/photo-1578926375605-eaf7559b1458",
  },
  {
    id: "folk-fusion",
    name: "Folk Fusion",
    description: "Modern interpretations of traditional folk art",
    imageUrl: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5",
  },
];

const Store = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredArtworks, setFilteredArtworks] = useState(artworksData);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [priceRange, setPriceRange] = useState([0, 20000]);
  const [gridView, setGridView] = useState(true);

  // Function to handle filtering
  const handleFilter = () => {
    let filtered = artworksData;

    if (searchTerm) {
      filtered = filtered.filter(
        (artwork) =>
          artwork.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          artwork.artistName.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedCategory) {
      filtered = filtered.filter(
        (artwork) => artwork.category === selectedCategory
      );
    }

    filtered = filtered.filter(
      (artwork) =>
        artwork.price >= priceRange[0] && artwork.price <= priceRange[1]
    );

    setFilteredArtworks(filtered);
  };

  return (
    <div className="min-h-screen bg-artverse-light">
      <Navbar />

      {/* Hero banner */}
      <div className="bg-artverse-deepPurple py-10 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-3xl font-bold sm:text-4xl">
            Art Store
          </h1>
          <p className="mt-2 max-w-2xl text-gray-100">
            Browse and purchase unique artworks directly from local artists.
          </p>
        </div>
      </div>

      <div className="page-container">
        {/* Featured Collections */}
        <section className="mb-12">
          <h2 className="subsection-title mb-6">Curated Collections</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {collections.map((collection) => (
              <div
                key={collection.id}
                className="group relative h-48 overflow-hidden rounded-lg"
              >
                <img
                  src={collection.imageUrl}
                  alt={collection.name}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-xl font-bold">{collection.name}</h3>
                    <p className="mt-1 text-sm text-gray-200">
                      {collection.description}
                    </p>
                    <Button
                      variant="link"
                      className="mt-1 p-0 text-white hover:text-artverse-terracotta"
                    >
                      Explore Collection
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Filter section */}
        <div className="mb-8 rounded-lg bg-white p-4 shadow-sm sm:p-6">
          <div className="mb-6 flex items-center">
            <Filter className="mr-2 h-5 w-5 text-artverse-purple" />
            <h2 className="font-medium text-gray-800">Filter Artwork</h2>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <div>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search by title or artist"
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            <div>
              <Select
                value={selectedCategory}
                onValueChange={setSelectedCategory}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Art category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">All categories</SelectItem>
                  <SelectItem value="Oil Painting">Oil Painting</SelectItem>
                  <SelectItem value="Watercolor">Watercolor</SelectItem>
                  <SelectItem value="Acrylic">Acrylic</SelectItem>
                  <SelectItem value="Digital Art">Digital Art</SelectItem>
                  <SelectItem value="Sculpture">Sculpture</SelectItem>
                  <SelectItem value="Mixed Media">Mixed Media</SelectItem>
                  <SelectItem value="Folk Art">Folk Art</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center justify-between gap-4">
              <span className="w-12 text-sm text-gray-500">
                ₹{priceRange[0].toLocaleString()}
              </span>
              <Slider
                defaultValue={[0, 20000]}
                max={20000}
                step={1000}
                value={priceRange}
                onValueChange={setPriceRange}
                className="w-full"
              />
              <span className="w-14 text-sm text-gray-500">
                ₹{priceRange[1].toLocaleString()}
              </span>
            </div>
          </div>

          <div className="mt-4 flex justify-end">
            <Button
              onClick={handleFilter}
              className="bg-artverse-purple text-white hover:bg-artverse-deepPurple"
            >
              Apply Filters
            </Button>
          </div>
        </div>

        {/* Results header */}
        <div className="mb-6 flex flex-wrap items-center justify-between">
          <p className="text-sm text-gray-600">
            Showing {filteredArtworks.length} artworks
          </p>

          <div className="flex items-center space-x-2">
            <Button
              variant={gridView ? "default" : "outline"}
              size="icon"
              onClick={() => setGridView(true)}
              className={
                gridView ? "bg-artverse-purple hover:bg-artverse-deepPurple" : ""
              }
            >
              <Grid3x3 className="h-4 w-4" />
            </Button>
            <Button
              variant={!gridView ? "default" : "outline"}
              size="icon"
              onClick={() => setGridView(false)}
              className={
                !gridView ? "bg-artverse-purple hover:bg-artverse-deepPurple" : ""
              }
            >
              <LayoutGrid className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Artwork grid */}
        {filteredArtworks.length > 0 ? (
          <div
            className={`grid gap-6 ${
              gridView
                ? "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4"
                : "grid-cols-1 sm:grid-cols-2"
            }`}
          >
            {filteredArtworks.map((artwork) => (
              <ArtworkCard key={artwork.id} {...artwork} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center rounded-lg bg-white py-16">
            <p className="text-lg font-medium text-gray-800">
              No artworks found matching your criteria
            </p>
            <p className="mt-1 text-gray-500">
              Try adjusting your filters to see more results
            </p>
            <Button
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("");
                setPriceRange([0, 20000]);
                setFilteredArtworks(artworksData);
              }}
              variant="outline"
              className="mt-4"
            >
              Reset filters
            </Button>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Store;
