import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FilterSection from "@/components/artists/FilterSection";
import ArtistsList from "@/components/artists/ArtistsList";
import ServicesSection from "@/components/artists/ServicesSection";

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

  const handleResetFilters = () => {
    setSearchTerm("");
    setSelectedLocation("");
    setSelectedSpecialty("");
    setFilteredArtists(artistsData);
  };

  return (
    <div className="min-h-screen bg-artverse-light">
      <Navbar />

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
        <FilterSection
          searchTerm={searchTerm}
          selectedLocation={selectedLocation}
          selectedSpecialty={selectedSpecialty}
          onSearchChange={setSearchTerm}
          onLocationChange={setSelectedLocation}
          onSpecialtyChange={setSelectedSpecialty}
          onFilterApply={handleFilter}
        />

        <ArtistsList 
          artists={filteredArtists}
          onResetFilters={handleResetFilters}
        />

        <ServicesSection />
      </div>

      <Footer />
    </div>
  );
};

export default Artists;
