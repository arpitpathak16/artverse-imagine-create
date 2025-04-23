
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-artverse-light">
      <Navbar />

      {/* Hero banner */}
      <div className="bg-artverse-deepPurple py-10 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-3xl font-bold sm:text-4xl">
            About ArtVerse
          </h1>
          <p className="mt-2 max-w-2xl text-gray-100">
            Where imagination meets artistry through the power of human creativity and AI collaboration.
          </p>
        </div>
      </div>

      <div className="page-container">
        {/* Mission Section */}
        <section className="mb-16">
          <div className="rounded-lg bg-white p-8 shadow-sm">
            <h2 className="section-title mb-6">Our Mission</h2>
            <p className="mb-6 text-lg">
              ArtVerse is a digital platform that connects users with local 
              artists, enabling the purchase and commissioning of diverse art forms—including 
              paintings, sculptures, and cultural crafts—and empowers users to bring their 
              imagined scenarios to life through artist interpretations and AI-generated previews.
            </p>
            <p className="mb-6">
              We believe that art should be accessible, imaginative, and 
              deeply connected to local cultures. Our mission is to bridge the gap 
              between technology and traditional artistry, creating a space where 
              creative visions can flourish through collaborations between AI 
              technology and skilled human artists.
            </p>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="rounded-lg bg-artverse-cream p-6 text-center">
                <h3 className="mb-3 text-xl font-semibold text-artverse-deepPurple">
                  Support Local Artists
                </h3>
                <p>
                  We provide local artists with digital tools to showcase their talent and connect with a wider audience.
                </p>
              </div>
              <div className="rounded-lg bg-artverse-cream p-6 text-center">
                <h3 className="mb-3 text-xl font-semibold text-artverse-deepPurple">
                  Inspire Creativity
                </h3>
                <p>
                  We empower people to visualize their ideas even if they lack drawing skills themselves.
                </p>
              </div>
              <div className="rounded-lg bg-artverse-cream p-6 text-center">
                <h3 className="mb-3 text-xl font-semibold text-artverse-deepPurple">
                  Bridge Technology & Tradition
                </h3>
                <p>
                  We blend AI capabilities with human artistic expression to create something truly unique.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="mb-16">
          <h2 className="section-title mb-6">How ArtVerse Works</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <img
                src="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5"
                alt="Artist working on a painting"
                className="rounded-lg shadow-md"
              />
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-artverse-purple">
                  1. Discover Local Artists
                </h3>
                <p className="mt-2">
                  Browse profiles of verified local artists filtered by location, medium, and style. See their portfolios and read reviews from previous clients.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-artverse-purple">
                  2. Express Your Vision
                </h3>
                <p className="mt-2">
                  Describe your artistic vision in words, and our AI will generate a visual preview to help you refine your concept.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-artverse-purple">
                  3. Connect with Artists
                </h3>
                <p className="mt-2">
                  Choose an artist whose style resonates with your vision and collaborate directly to bring your idea to life.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-artverse-purple">
                  4. Secure Commission Process
                </h3>
                <p className="mt-2">
                  Set your budget and timeline, enjoy progress updates, and release payment only when you're satisfied with the final artwork.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-16">
          <h2 className="section-title mb-6">Our Team</h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
            <div className="text-center">
              <div className="mx-auto mb-4 h-32 w-32 overflow-hidden rounded-full">
                <img
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2"
                  alt="Team member"
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold">Anjali Patel</h3>
              <p className="text-sm text-gray-600">Founder & CEO</p>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-4 h-32 w-32 overflow-hidden rounded-full">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
                  alt="Team member"
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold">Rohan Mehta</h3>
              <p className="text-sm text-gray-600">AI Engineer</p>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-4 h-32 w-32 overflow-hidden rounded-full">
                <img
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956"
                  alt="Team member"
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold">Divya Sharma</h3>
              <p className="text-sm text-gray-600">Artist Relations</p>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-4 h-32 w-32 overflow-hidden rounded-full">
                <img
                  src="https://images.unsplash.com/photo-1531384441138-2736e62e0919"
                  alt="Team member"
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold">Vikram Singh</h3>
              <p className="text-sm text-gray-600">UX/UI Designer</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section>
          <div className="rounded-lg bg-gradient-to-r from-artverse-purple to-artverse-deepPurple p-8 text-center text-white">
            <h2 className="text-3xl font-bold">Ready to Join the ArtVerse?</h2>
            <p className="mx-auto mt-4 max-w-2xl">
              Whether you're an artist looking to showcase your work or an art enthusiast seeking unique pieces, ArtVerse has something for you.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                className="bg-white text-artverse-deepPurple hover:bg-artverse-cream"
                asChild
              >
                <Link to="/artists">Find Artists</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-artverse-deepPurple"
                asChild
              >
                <Link to="/commission">Start a Commission</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default About;
