
import ArtServiceCard from "@/components/ArtServiceCard";

const servicesData = [
  {
    title: "Live Event Sketching",
    description: "Quick portrait sketches at events, weddings, or corporate gatherings",
    priceRange: "₹5,000 - ₹15,000",
    duration: "4-6 hours",
    tags: ["Live Art", "Events", "Portraits", "Quick Sketch"],
    imageUrl: "https://images.unsplash.com/photo-1579783901586-d88db74b4fe4",
  },
  {
    title: "Portrait Commission",
    description: "Detailed custom portraits in various mediums (oil, acrylic, digital)",
    priceRange: "₹8,000 - ₹25,000",
    duration: "1-2 weeks",
    tags: ["Portrait", "Custom", "Traditional", "Digital"],
    imageUrl: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99",
  },
  {
    title: "Wedding Photography Art",
    description: "Transform your wedding photos into unique artistic interpretations",
    priceRange: "₹20,000 - ₹50,000",
    duration: "2-3 weeks",
    tags: ["Wedding", "Mixed Media", "Photography", "Custom"],
    imageUrl: "https://images.unsplash.com/photo-1578926375605-eaf7559b1458",
  },
  {
    title: "Caricature Art",
    description: "Fun and expressive caricatures for events or personal use",
    priceRange: "₹3,000 - ₹8,000",
    duration: "1-2 hours",
    tags: ["Caricature", "Events", "Fun", "Quick Art"],
    imageUrl: "https://images.unsplash.com/photo-1613312232067-d7a2d9f1d3c9",
  },
];

const ServicesSection = () => {
  return (
    <div className="mt-16">
      <div className="mb-8">
        <h2 className="font-serif text-3xl font-bold">Art Services</h2>
        <p className="mt-2 text-gray-600">
          Discover various art services offered by our talented artists
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {servicesData.map((service, index) => (
          <ArtServiceCard key={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
