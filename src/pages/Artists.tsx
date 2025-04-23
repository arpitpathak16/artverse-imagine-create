
import { useState } from "react";
import { Filter, Search, MapPin, ChevronDown } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ArtistCard from "@/components/ArtistCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Mock data
const artistsData = [
  {
    id: "1",
    name: "Priya Sharma",
    location: "Jaipur, Rajasthan",
    imageUrl: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99",
    specialties: ["Oil Painting", "Folk Art", "Miniature"],
    rating: 4.9,
  },
  {
    id: "2",
    name: "Arun Patel",
    location: "Varanasi, UP",
    imageUrl: "https://images.unsplash.com/photo-1578926375605-eaf7559b1458",
    specialties: ["Sculpture", "Metal Work", "Contemporary"],
    rating: 4.7,
  },
  {
    id: "3",
    name: "Maya Reddy",
    location: "Mysore, Karnataka",
    imageUrl: "https://images.unsplash.com/photo-1569172122301-bc5008bc09c5",
    specialties: ["Fabric Art", "Tribal", "Mixed Media"],
    rating: 4.8,
  },
  {
    id: "4",
    name: "Rahul Verma",
    location: "Delhi, NCR",
    imageUrl: "https://images.unsplash.com/photo-1577219501738-77eb2a55a3a0",
    specialties: ["Digital Art", "Illustration", "Graphic Design"],
    rating: 4.6,
  },
  {
    id: "5",
    name: "Ananya Gupta",
    location: "Kolkata, West Bengal",
    imageUrl: "https://images.unsplash.com/photo-1613312232067-d7a2d9f1d3c9",
    specialties: ["Watercolor", "Portraits", "Landscapes"],
    rating: 4.9,
  },
  {
    id: "6",
    name: "Vikram Singh",
    location: "Jodhpur, Rajasthan",
    imageUrl: "https://images.unsplash.com/photo-1587855049254-351f4e422ec5",
    specialties: ["Miniature Painting", "Traditional", "Royal Art"],
    rating: 5.0,
  },
];

const Artists = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredArtists, setFilteredArtists] = useState(artistsData);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedSpecialty, setSelectedSpecialty] = useState("");

  // Function to handle filtering
  const handleFilter = () => {
    let filtered = artistsData;

    if (searchTerm) {
      filtered = filtered.filter(
        (artist) =>
          artist.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          artist.location.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedLocation) {
      filtered = filtered.filter((artist) =>
        artist.location.includes(selectedLocation)
      );
    }

    if (selectedSpecialty) {
      filtered = filtered.filter((artist) =>
        artist.specialties.includes(selectedSpecialty)
      );
    }

    setFilteredArtists(filtered);
  };

  return (
    <div className="min-h-screen bg-artverse-light">
      <Navbar />

      {/* Hero banner */}
      <div className="bg-artverse-purple py-10 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-3xl font-bold sm:text-4xl">
            Discover Local Artists
          </h1>
          <p className="mt-2 max-w-2xl text-gray-100">
            Find and connect with talented artists in your area for commissions
            or to purchase their existing work.
          </p>
        </div>
      </div>

      <div className="page-container">
        {/* Filter section */}
        <div className="mb-8 rounded-lg bg-white p-4 shadow-sm sm:p-6">
          <div className="mb-6 flex items-center">
            <Filter className="mr-2 h-5 w-5 text-artverse-purple" />
            <h2 className="font-medium text-gray-800">Filter Artists</h2>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <div>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search by name or location"
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            <div>
              <Select
                value={selectedLocation}
                onValueChange={setSelectedLocation}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Filter by location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All locations</SelectItem>
                  <SelectItem value="Jaipur">Jaipur</SelectItem>
                  <SelectItem value="Varanasi">Varanasi</SelectItem>
                  <SelectItem value="Mysore">Mysore</SelectItem>
                  <SelectItem value="Delhi">Delhi</SelectItem>
                  <SelectItem value="Kolkata">Kolkata</SelectItem>
                  <SelectItem value="Jodhpur">Jodhpur</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Select
                value={selectedSpecialty}
                onValueChange={setSelectedSpecialty}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Filter by specialty" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All specialties</SelectItem>
                  <SelectItem value="Oil Painting">Oil Painting</SelectItem>
                  <SelectItem value="Watercolor">Watercolor</SelectItem>
                  <SelectItem value="Sculpture">Sculpture</SelectItem>
                  <SelectItem value="Digital Art">Digital Art</SelectItem>
                  <SelectItem value="Folk Art">Folk Art</SelectItem>
                  <SelectItem value="Miniature">Miniature</SelectItem>
                  <SelectItem value="Fabric Art">Fabric Art</SelectItem>
                  <SelectItem value="Tribal">Tribal</SelectItem>
                  <SelectItem value="Mixed Media">Mixed Media</SelectItem>
                  <SelectItem value="Portraits">Portraits</SelectItem>
                </SelectContent>
              </Select>
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

        {/* Results count */}
        <div className="mb-6">
          <p className="text-sm text-gray-600">
            Showing {filteredArtists.length} artists
          </p>
        </div>

        {/* Artists grid */}
        {filteredArtists.length > 0 ? (
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredArtists.map((artist) => (
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
            <Button
              onClick={() => {
                setSearchTerm("");
                setSelectedLocation("");
                setSelectedSpecialty("");
                setFilteredArtists(artistsData);
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

export default Artists;
