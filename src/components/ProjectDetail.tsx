import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "../components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel";
import { Badge } from "../components/ui/badge";
import { Separator } from "../components/ui/separator";
import { Button } from "../components/ui/button";
import { ArrowLeft, Calendar, User, MapPin } from "lucide-react";

interface ProjectDetailProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  project?: {
    id: string;
    title: string;
    description: string;
    client: string;
    location: string;
    date: string;
    tags: string[];
    images: string[];
  };
}

const ProjectDetail = ({
  open = true,
  onOpenChange,
  project = {
    id: "1",
    title: "Modern Minimalist Apartment",
    description:
      "A complete renovation of a 1,200 sq ft apartment featuring open concept living, custom cabinetry, and a neutral color palette with accents of natural materials. The design focuses on maximizing natural light and creating a sense of spaciousness through thoughtful furniture placement and built-in storage solutions.",
    client: "John & Sarah Doe",
    location: "Downtown Metro Area",
    date: "January 2023",
    tags: ["Residential", "Minimalist", "Renovation"],
    images: [
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb3?w=800&q=80",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
      "https://images.unsplash.com/photo-1616137422495-1e9e46e2aa77?w=800&q=80",
    ],
  },
}: ProjectDetailProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-white max-w-6xl w-[90vw] max-h-[90vh] overflow-y-auto p-0">
        <div className="sticky top-0 z-10 bg-white p-6 pb-2">
          <DialogHeader>
            <div className="flex items-center justify-between">
              <DialogTitle className="text-2xl font-medium">
                {project.title}
              </DialogTitle>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => onOpenChange?.(false)}
              >
                <ArrowLeft className="h-5 w-5" />
                <span className="sr-only">Back to gallery</span>
              </Button>
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>
          </DialogHeader>
        </div>

        <div className="p-6 pt-0">
          <Carousel className="w-full">
            <CarouselContent>
              {project.images.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="aspect-[16/9] w-full overflow-hidden rounded-md">
                    <img
                      src={image}
                      alt={`Project image ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </Carousel>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="md:col-span-2">
              <h3 className="text-lg font-medium mb-4">Project Description</h3>
              <p className="text-gray-700">{project.description}</p>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-4">Project Details</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <User className="h-5 w-5 text-gray-500" />
                    <div>
                      <p className="text-sm text-gray-500">Client</p>
                      <p className="text-gray-700">{project.client}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-gray-500" />
                    <div>
                      <p className="text-sm text-gray-500">Location</p>
                      <p className="text-gray-700">{project.location}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-gray-500" />
                    <div>
                      <p className="text-sm text-gray-500">Completion Date</p>
                      <p className="text-gray-700">{project.date}</p>
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="text-lg font-medium mb-4">
                  Interested in this style?
                </h3>
                <Button className="w-full">Contact Us</Button>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectDetail;
