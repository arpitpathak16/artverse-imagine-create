
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

const Commission = () => {
  const [prompt, setPrompt] = useState("");
  const [aiImage, setAiImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const generateAI = () => {
    if (!prompt) return;
    
    setLoading(true);
    
    // Simulate AI generation with timeout
    setTimeout(() => {
      // Sample AI-generated images
      const sampleImages = [
        "https://images.unsplash.com/photo-1579783901586-d88db74b4fe4",
        "https://images.unsplash.com/photo-1547333590-47fae5f58d21",
        "https://images.unsplash.com/photo-1547891654-e66ed7ebb968",
        "https://images.unsplash.com/photo-1578321272003-6ddf7d26a67d"
      ];
      
      const randomImage = sampleImages[Math.floor(Math.random() * sampleImages.length)];
      setAiImage(randomImage);
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-artverse-light">
      <Navbar />

      {/* Hero banner */}
      <div className="bg-gradient-to-r from-artverse-purple to-artverse-deepPurple py-10 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-3xl font-bold sm:text-4xl">
            Commission Custom Art
          </h1>
          <p className="mt-2 max-w-2xl text-gray-100">
            Describe your vision, get an AI preview, then collaborate with real
            artists to bring it to life.
          </p>
        </div>
      </div>

      <div className="page-container">
        <div className="mb-12">
          <div className="rounded-lg bg-white p-6 shadow-sm">
            <h2 className="subsection-title mb-6">How It Works</h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="flex flex-col items-center text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-artverse-cream text-xl font-bold text-artverse-deepPurple">
                  1
                </div>
                <h3 className="mt-4 text-lg font-medium">Describe Your Vision</h3>
                <p className="mt-2 text-gray-500">
                  Provide a detailed description of the artwork you want created
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-artverse-cream text-xl font-bold text-artverse-deepPurple">
                  2
                </div>
                <h3 className="mt-4 text-lg font-medium">Get AI Preview</h3>
                <p className="mt-2 text-gray-500">
                  See an instant AI visualization of your description
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-artverse-cream text-xl font-bold text-artverse-deepPurple">
                  3
                </div>
                <h3 className="mt-4 text-lg font-medium">Choose an Artist</h3>
                <p className="mt-2 text-gray-500">
                  Select a local artist to create a unique interpretation
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          <div>
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h2 className="subsection-title mb-6">Describe Your Vision</h2>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="prompt">Your Description</Label>
                  <Textarea
                    id="prompt"
                    placeholder="Describe the artwork you envision (e.g., 'A tiger meditating under a moonlit tree by a peaceful lake')"
                    className="h-32"
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                  />
                </div>

                <div>
                  <Label htmlFor="artType">Art Type</Label>
                  <Select>
                    <SelectTrigger id="artType">
                      <SelectValue placeholder="Select art type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="painting">Painting</SelectItem>
                      <SelectItem value="digital">Digital Art</SelectItem>
                      <SelectItem value="sculpture">Sculpture</SelectItem>
                      <SelectItem value="illustration">Illustration</SelectItem>
                      <SelectItem value="mixedMedia">Mixed Media</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="style">Art Style</Label>
                  <Select>
                    <SelectTrigger id="style">
                      <SelectValue placeholder="Select style" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="realistic">Realistic</SelectItem>
                      <SelectItem value="abstract">Abstract</SelectItem>
                      <SelectItem value="impressionist">Impressionist</SelectItem>
                      <SelectItem value="folk">Folk Art</SelectItem>
                      <SelectItem value="minimalist">Minimalist</SelectItem>
                      <SelectItem value="tribal">Tribal</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button
                  className="w-full bg-artverse-purple hover:bg-artverse-deepPurple"
                  onClick={generateAI}
                  disabled={!prompt || loading}
                >
                  {loading ? "Generating Preview..." : "Generate AI Preview"}
                </Button>
              </div>
            </div>
          </div>

          <div>
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h2 className="subsection-title mb-6">AI Preview</h2>
              
              {aiImage ? (
                <div className="space-y-6">
                  <div className="overflow-hidden rounded-lg">
                    <img
                      src={aiImage}
                      alt="AI-generated preview"
                      className="w-full"
                    />
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">
                      Ready to commission a human artist?
                    </h3>
                    
                    <Tabs defaultValue="budget" className="w-full">
                      <TabsList className="grid w-full grid-cols-3">
                        <TabsTrigger value="budget">Budget</TabsTrigger>
                        <TabsTrigger value="size">Size</TabsTrigger>
                        <TabsTrigger value="timeline">Timeline</TabsTrigger>
                      </TabsList>
                      <TabsContent value="budget">
                        <Card>
                          <CardContent className="pt-6">
                            <div className="space-y-4">
                              <Label htmlFor="budget">Budget Range (₹)</Label>
                              <Select>
                                <SelectTrigger id="budget">
                                  <SelectValue placeholder="Select budget" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="1000-5000">₹1,000 - ₹5,000</SelectItem>
                                  <SelectItem value="5000-10000">₹5,000 - ₹10,000</SelectItem>
                                  <SelectItem value="10000-20000">₹10,000 - ₹20,000</SelectItem>
                                  <SelectItem value="20000+">₹20,000+</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                          </CardContent>
                        </Card>
                      </TabsContent>
                      <TabsContent value="size">
                        <Card>
                          <CardContent className="pt-6">
                            <div className="space-y-4">
                              <Label htmlFor="size">Artwork Size</Label>
                              <Select>
                                <SelectTrigger id="size">
                                  <SelectValue placeholder="Select size" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="small">Small (up to 30cm)</SelectItem>
                                  <SelectItem value="medium">Medium (30-60cm)</SelectItem>
                                  <SelectItem value="large">Large (60-100cm)</SelectItem>
                                  <SelectItem value="xlarge">Extra Large (100cm+)</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                          </CardContent>
                        </Card>
                      </TabsContent>
                      <TabsContent value="timeline">
                        <Card>
                          <CardContent className="pt-6">
                            <div className="space-y-4">
                              <Label htmlFor="timeline">Timeline</Label>
                              <Select>
                                <SelectTrigger id="timeline">
                                  <SelectValue placeholder="Select timeline" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="1-2weeks">1-2 weeks</SelectItem>
                                  <SelectItem value="2-4weeks">2-4 weeks</SelectItem>
                                  <SelectItem value="1-2months">1-2 months</SelectItem>
                                  <SelectItem value="flexible">Flexible</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                          </CardContent>
                        </Card>
                      </TabsContent>
                    </Tabs>
                    
                    <Button className="w-full bg-artverse-terracotta hover:bg-artverse-terracotta/90">
                      Find Artists For This Commission
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="flex h-64 flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300">
                  <p className="text-gray-500">
                    {loading
                      ? "Generating your preview..."
                      : "Your AI preview will appear here"}
                  </p>
                  <p className="mt-2 text-sm text-gray-400">
                    {loading
                      ? "This usually takes a few seconds"
                      : "Describe your vision and click 'Generate AI Preview'"}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {aiImage && (
          <div className="mt-12 rounded-lg bg-white p-6 shadow-sm">
            <h2 className="subsection-title mb-6">Recommended Artists</h2>
            <p className="mb-6 text-gray-600">
              Based on your artwork description, we recommend these artists who
              specialize in similar styles and subjects
            </p>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {/* Artist 1 */}
              <div className="flex rounded-lg border p-4 transition hover:border-artverse-purple">
                <img
                  src="https://images.unsplash.com/photo-1580060839134-75a5edca2e99"
                  alt="Priya Sharma"
                  className="mr-4 h-16 w-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-medium">Priya Sharma</h3>
                  <p className="text-sm text-gray-500">Oil Painting, Folk Art</p>
                  <Button
                    variant="link"
                    className="p-0 text-artverse-purple hover:text-artverse-deepPurple"
                  >
                    View Profile
                  </Button>
                </div>
              </div>

              {/* Artist 2 */}
              <div className="flex rounded-lg border p-4 transition hover:border-artverse-purple">
                <img
                  src="https://images.unsplash.com/photo-1577219501738-77eb2a55a3a0"
                  alt="Rahul Verma"
                  className="mr-4 h-16 w-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-medium">Rahul Verma</h3>
                  <p className="text-sm text-gray-500">
                    Digital Art, Illustration
                  </p>
                  <Button
                    variant="link"
                    className="p-0 text-artverse-purple hover:text-artverse-deepPurple"
                  >
                    View Profile
                  </Button>
                </div>
              </div>

              {/* Artist 3 */}
              <div className="flex rounded-lg border p-4 transition hover:border-artverse-purple">
                <img
                  src="https://images.unsplash.com/photo-1613312232067-d7a2d9f1d3c9"
                  alt="Ananya Gupta"
                  className="mr-4 h-16 w-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-medium">Ananya Gupta</h3>
                  <p className="text-sm text-gray-500">
                    Watercolor, Portraits
                  </p>
                  <Button
                    variant="link"
                    className="p-0 text-artverse-purple hover:text-artverse-deepPurple"
                  >
                    View Profile
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Commission;
