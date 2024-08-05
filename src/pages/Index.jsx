import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Paw, Heart, Award } from "lucide-react";

const dogBreeds = [
  { name: "Labrador Retriever", image: "https://images.unsplash.com/photo-1579213838058-c27e7a4e3c8a?w=500&h=500&fit=crop" },
  { name: "German Shepherd", image: "https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?w=500&h=500&fit=crop" },
  { name: "Golden Retriever", image: "https://images.unsplash.com/photo-1633722715463-d30f4f325e24?w=500&h=500&fit=crop" },
  { name: "French Bulldog", image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=500&h=500&fit=crop" },
  { name: "Bulldog", image: "https://images.unsplash.com/photo-1523567830207-96731740fa71?w=500&h=500&fit=crop" },
  { name: "Poodle", image: "https://images.unsplash.com/photo-1616149562385-1d84e79478bb?w=500&h=500&fit=crop" },
  { name: "Beagle", image: "https://images.unsplash.com/photo-1505628346881-b72b27e84530?w=500&h=500&fit=crop" },
  { name: "Rottweiler", image: "https://images.unsplash.com/photo-1567752881298-894bb81f9379?w=500&h=500&fit=crop" },
];

const Index = () => {
  const [likes, setLikes] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold mb-4 text-blue-800">Paw-some Pals</h1>
          <p className="text-xl text-gray-600">Discover the wonderful world of dogs!</p>
        </div>

        <div className="mb-16 relative">
          <img 
            src="https://images.unsplash.com/photo-1534361960057-19889db9621e?w=1200&h=400&fit=crop"
            alt="Happy dogs"
            className="w-full h-[400px] object-cover rounded-xl shadow-2xl"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-xl">
            <div className="text-white text-center">
              <h2 className="text-4xl font-bold mb-4">Man's Best Friend</h2>
              <p className="text-xl mb-6">Loyal companions for thousands of years</p>
              <Button size="lg" onClick={() => setLikes(likes + 1)}>
                <Heart className="mr-2 h-6 w-6" /> Show Some Love ({likes})
              </Button>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Paw className="mr-2 h-6 w-6 text-blue-500" />
                What are Dogs?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Dogs are domesticated mammals, not natural wild animals. They were originally bred from wolves. They have been bred by humans for a long time, and were the first animals ever to be domesticated.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Award className="mr-2 h-6 w-6 text-blue-500" />
                Characteristics of Dogs
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2">
                <li>Loyal and affectionate</li>
                <li>Highly trainable</li>
                <li>Come in various sizes and breeds</li>
                <li>Have an excellent sense of smell</li>
                <li>Can understand human emotions</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-16">
          <CardHeader>
            <CardTitle>Popular Dog Breeds</CardTitle>
            <CardDescription>Swipe to see some of the most popular dog breeds worldwide:</CardDescription>
          </CardHeader>
          <CardContent>
            <Carousel className="w-full max-w-xs mx-auto">
              <CarouselContent>
                {dogBreeds.map((breed, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <Card>
                        <CardContent className="flex aspect-square items-center justify-center p-6">
                          <div className="text-center">
                            <img src={breed.image} alt={breed.name} className="w-full h-48 object-cover rounded-lg mb-4" />
                            <h3 className="font-semibold">{breed.name}</h3>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;
