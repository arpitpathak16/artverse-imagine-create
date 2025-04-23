
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import ArticleCard from "@/components/ArticleCard";
import CommunityGroup from "@/components/CommunityGroup";
import { Link } from "react-router-dom";
import { Article, Group, User } from "lucide-react";

// Mock data for initial display
const articles = [
  {
    id: "1",
    title: "Finding Inspiration in Local Art Galleries",
    author: "Priya Sharma",
    date: "2025-04-20",
    summary: "Exploring the hidden gems of local art scenes and how they shape our community.",
    imageUrl: "https://images.unsplash.com/photo-1577720580479-7d839d829c73",
    readTime: "5 min",
  },
  {
    id: "2",
    title: "Art Workshops That Bring People Together",
    author: "Arun Patel",
    date: "2025-04-18",
    summary: "How community art workshops are creating lasting bonds in our neighborhood.",
    imageUrl: "https://images.unsplash.com/photo-1559034750-cdab70a66b8e",
    readTime: "4 min",
  },
];

const communities = [
  {
    id: "1",
    name: "Art Enthusiasts Mumbai",
    members: 234,
    description: "A group for art lovers to discuss and appreciate local art in Mumbai.",
    imageUrl: "https://images.unsplash.com/photo-1577720580479-7d839d829c73",
  },
  {
    id: "2",
    name: "Delhi Craft Circle",
    members: 189,
    description: "Celebrating traditional and contemporary crafts in Delhi NCR.",
    imageUrl: "https://images.unsplash.com/photo-1559034750-cdab70a66b8e",
  },
];

const Community = () => {
  return (
    <div className="min-h-screen bg-artverse-light">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-artverse-deepPurple text-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-serif text-4xl font-bold sm:text-5xl">
              Art Community Hub
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-lg text-gray-100">
              Share your journey, connect with fellow art enthusiasts, and discover local art communities.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Button
                size="lg"
                className="bg-artverse-terracotta hover:bg-artverse-terracotta/90"
                asChild
              >
                <Link to="/community/write">Write Article</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-artverse-deepPurple"
                asChild
              >
                <Link to="/community/groups">Find Groups</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="bg-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h2 className="font-serif text-3xl font-bold">Featured Articles</h2>
              <p className="mt-2 text-gray-600">Stories from our community</p>
            </div>
            <Button variant="ghost" className="text-artverse-purple" asChild>
              <Link to="/community/articles">
                View all articles <Article className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </div>
      </section>

      {/* Communities Section */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h2 className="font-serif text-3xl font-bold">Local Communities</h2>
              <p className="mt-2 text-gray-600">Connect with art enthusiasts near you</p>
            </div>
            <Button variant="ghost" className="text-artverse-purple" asChild>
              <Link to="/community/groups">
                View all groups <Group className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {communities.map((community) => (
              <CommunityGroup key={community.id} community={community} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Community;
