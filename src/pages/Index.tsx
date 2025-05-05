import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Image, Palette, User } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ArtistCard from "@/components/ArtistCard";
import ArtworkCard from "@/components/ArtworkCard";

// Mock data
const featuredArtists = [{
  id: "1",
  name: "Priya Sharma",
  location: "Jaipur, Rajasthan",
  imageUrl: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99",
  specialties: ["Oil Painting", "Folk Art", "Miniature"],
  rating: 4.9
}, {
  id: "2",
  name: "Arun Patel",
  location: "Varanasi, UP",
  imageUrl: "https://images.unsplash.com/photo-1578926375605-eaf7559b1458",
  specialties: ["Sculpture", "Metal Work", "Contemporary"],
  rating: 4.7
}, {
  id: "3",
  name: "Maya Reddy",
  location: "Mysore, Karnataka",
  imageUrl: "https://images.unsplash.com/photo-1569172122301-bc5008bc09c5",
  specialties: ["Fabric Art", "Tribal", "Mixed Media"],
  rating: 4.8
}];
const featuredArtworks = [{
  id: "1",
  title: "Sunset Over the Ganges",
  artistName: "Arun Patel",
  imageUrl: "https://images.unsplash.com/photo-1578321272176-b7bbc0679853",
  price: 12500,
  category: "Oil Painting"
}, {
  id: "2",
  title: "Delhi Market Scene",
  artistName: "Priya Sharma",
  imageUrl: "https://images.unsplash.com/photo-1582657118090-af35eefc4e48",
  price: 8900,
  category: "Watercolor"
}, {
  id: "3",
  title: "Dancing Deities",
  artistName: "Maya Reddy",
  imageUrl: "https://images.unsplash.com/photo-1569172122301-bc5008bc09c5",
  price: 15700,
  category: "Sculpture"
}, {
  id: "4",
  title: "Monsoon Dreams",
  artistName: "Vikram Singh",
  imageUrl: "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9",
  price: 9500,
  category: "Mixed Media"
}];
const Index = () => {
  return <div className="min-h-screen bg-artverse-light">
      <Navbar />
      
      {/* Hero Section */}
      <section className="hero-gradient text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
            <div className="space-y-6">
              <h1 className="font-serif text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
                Where Imagination Meets Artistry
              </h1>
              <p className="max-w-md text-lg text-gray-100">
                Connect with local artists, commission unique pieces, and bring your creative visions to life through both AI and human art.
              </p>
              <div className="flex flex-wrap gap-4 bg-[#817f6e]/0">
                <Button size="lg" className="bg-artverse-terracotta text-white hover:bg-artverse-terracotta/90" asChild>
                  <Link to="/commission">Commission Art</Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-artverse-deepPurple" asChild>
                  <Link to="/store">Browse Art</Link>
                </Button>
              </div>
            </div>
            <div className="relative hidden md:block">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="overflow-hidden rounded-lg">
                    <img src="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5" alt="Art piece" className="h-40 w-full object-cover" />
                  </div>
                  <div className="overflow-hidden rounded-lg">
                    <img src="https://images.unsplash.com/photo-1569172122301-bc5008bc09c5" alt="Art piece" className="h-56 w-full object-cover" />
                  </div>
                </div>
                <div className="mt-8 space-y-4">
                  <div className="overflow-hidden rounded-lg">
                    <img src="https://images.unsplash.com/photo-1578301978693-85fa9c0320b9" alt="Art piece" className="h-56 w-full object-cover" />
                  </div>
                  <div className="overflow-hidden rounded-lg">
                    <img src="https://images.unsplash.com/photo-1560421683-6856ea585c78" alt="Art piece" className="h-40 w-full object-cover" />
                  </div>
                </div>
              </div>
              <div className="absolute -right-4 -bottom-4 h-24 w-24 rounded-full bg-artverse-gold"></div>
              <div className="absolute -left-4 -top-4 h-16 w-16 rounded-full bg-artverse-terracotta"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="section-title">Why Choose ArtVerse?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              A seamless blend of technology and human creativity to support local artists and bring your ideas to life.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
            {/* Feature 1 */}
            <div className="flex flex-col items-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-artverse-purple/10 text-artverse-purple">
                <User className="h-8 w-8" />
              </div>
              <h3 className="mt-6 text-xl font-semibold">Local Artist Marketplace</h3>
              <p className="mt-2 text-muted-foreground">
                Discover and support talented local artists, filtered by geography, medium, and style.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-artverse-purple/10 text-artverse-purple">
                <Image className="h-8 w-8" />
              </div>
              <h3 className="mt-6 text-xl font-semibold">AI-Powered Previews</h3>
              <p className="mt-2 text-muted-foreground">
                Instantly visualize your ideas with AI, then commission a human artist to bring it to life.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col items-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-artverse-purple/10 text-artverse-purple">
                <Palette className="h-8 w-8" />
              </div>
              <h3 className="mt-6 text-xl font-semibold">Curated Collections</h3>
              <p className="mt-2 text-muted-foreground">
                Browse handpicked collections like "Tribal Tales," "Miniature Sculptures," and "Folk Fusion."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Artists Section */}
      <section className="bg-artverse-cream py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex items-baseline justify-between">
            <h2 className="section-title">Featured Artists</h2>
            <Link to="/artists" className="flex items-center text-sm font-medium text-artverse-purple hover:text-artverse-deepPurple">
              View all
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {featuredArtists.map(artist => <ArtistCard key={artist.id} {...artist} />)}
          </div>
        </div>
      </section>

      {/* Artwork Showcase Section */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex items-baseline justify-between">
            <h2 className="section-title">Featured Artworks</h2>
            <Link to="/store" className="flex items-center text-sm font-medium text-artverse-purple hover:text-artverse-deepPurple">
              Browse store
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredArtworks.map(artwork => <ArtworkCard key={artwork.id} {...artwork} />)}
          </div>
        </div>
      </section>

      {/* Commission CTA Section */}
      <section className="relative overflow-hidden py-16 text-white">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-artverse-deepPurple/90"></div>
          <img src="https://images.unsplash.com/photo-1616530834117-9247af32dc3f" alt="Art background" className="h-full w-full object-cover" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-serif text-3xl font-bold sm:text-4xl">
              From Imagination to Reality
            </h2>
            <p className="mt-4 text-lg text-gray-200">
              Describe your vision, get an AI preview, and collaborate with artists to bring it to life.
            </p>
            <Button size="lg" className="mt-8 bg-artverse-terracotta text-white hover:bg-artverse-terracotta/90" asChild>
              <Link to="/commission">Start a Commission</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default Index;