import React, { useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import ProjectDetail from "../components/ProjectDetail";

interface Project {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  description: string;
  client: string;
  date: string;
  location: string;
}

const GalleryPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Mock data for projects
  const projects: Project[] = [
    {
      id: "1",
      title: "Modern Minimalist Living Room",
      category: "Residential",
      imageUrl:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80",
      description:
        "A clean, minimalist living room design with natural light and neutral tones.",
      client: "Johnson Family",
      date: "March 2023",
      location: "New York, NY",
    },
    {
      id: "2",
      title: "Executive Office Suite",
      category: "Commercial",
      imageUrl:
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&q=80",
      description: "Modern office space designed for productivity and comfort.",
      client: "Tech Innovations Inc.",
      date: "January 2023",
      location: "San Francisco, CA",
    },
    {
      id: "3",
      title: "Luxury Hotel Lobby",
      category: "Hospitality",
      imageUrl:
        "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?w=800&q=80",
      description:
        "Elegant and welcoming hotel lobby with custom furniture and lighting.",
      client: "Grand Plaza Hotels",
      date: "November 2022",
      location: "Miami, FL",
    },
    {
      id: "4",
      title: "Contemporary Kitchen Remodel",
      category: "Residential",
      imageUrl:
        "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=800&q=80",
      description:
        "Complete kitchen renovation with high-end appliances and custom cabinetry.",
      client: "Martinez Residence",
      date: "February 2023",
      location: "Chicago, IL",
    },
    {
      id: "5",
      title: "Boutique Retail Space",
      category: "Commercial",
      imageUrl:
        "https://images.unsplash.com/photo-1604014237800-1c9102c219da?w=800&q=80",
      description:
        "Innovative retail design focused on customer experience and brand identity.",
      client: "Elegance Apparel",
      date: "April 2023",
      location: "Los Angeles, CA",
    },
    {
      id: "6",
      title: "Urban Loft Apartment",
      category: "Residential",
      imageUrl:
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=80",
      description:
        "Industrial-inspired loft with open concept living and custom details.",
      client: "Park Residences",
      date: "May 2023",
      location: "Seattle, WA",
    },
  ];

  const categories = ["All", "Residential", "Commercial", "Hospitality"];

  // Filter projects based on search query and selected category
  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || project.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseDetail = () => {
    setSelectedProject(null);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="py-8 px-6 md:px-12 border-b border-gray-100">
        <div className="container mx-auto">
          <h1 className="text-3xl md:text-4xl font-light text-gray-900">
            Project Gallery
          </h1>
          <p className="mt-2 text-gray-600">
            Explore our portfolio of interior design projects
          </p>
        </div>
      </header>

      {/* Filters */}
      <div className="py-6 px-6 md:px-12 border-b border-gray-100">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="text-sm"
              >
                {category}
              </Button>
            ))}
          </div>
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9"
            />
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="container mx-auto py-12 px-6 md:px-12">
        {filteredProjects.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-gray-500">
              No projects found matching your criteria.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layoutId={`project-${project.id}`}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                onClick={() => handleProjectClick(project)}
                className="cursor-pointer group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="aspect-w-16 aspect-h-9 relative overflow-hidden">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs font-medium text-blue-600 uppercase tracking-wider">
                    {project.category}
                  </span>
                  <h3 className="mt-2 text-xl font-medium text-gray-900">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-gray-600 line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <ProjectDetail
          open={true}
          onOpenChange={(open) => !open && handleCloseDetail()}
          project={{
            id: selectedProject.id,
            title: selectedProject.title,
            description: selectedProject.description,
            client: selectedProject.client,
            location: selectedProject.location,
            date: selectedProject.date,
            tags: [selectedProject.category],
            images: [selectedProject.imageUrl],
          }}
        />
      )}
    </div>
  );
};

export default GalleryPage;
