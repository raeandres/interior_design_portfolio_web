import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Filter,
  Grid,
  List,
  MapPin,
  Calendar,
  User,
  ArrowRight,
} from "lucide-react";
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
  const [viewMode, setViewMode] = useState<"grid" | "masonry">("masonry");

  // Enhanced project data
  const projects: Project[] = [
    {
      id: "1",
      title: "Penthouse Sanctuary",
      category: "Residential",
      imageUrl:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80",
      description:
        "A sophisticated penthouse transformation featuring custom millwork, curated art collection, and panoramic city views. This project seamlessly blends contemporary luxury with timeless elegance.",
      client: "Private Residence",
      date: "2024",
      location: "Manhattan, NY",
    },
    {
      id: "2",
      title: "Tech Innovation Hub",
      category: "Commercial",
      imageUrl:
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&q=80",
      description:
        "A cutting-edge workspace designed to foster creativity and collaboration. Features include flexible meeting spaces, wellness areas, and biophilic design elements.",
      client: "Nexus Technologies",
      date: "2024",
      location: "San Francisco, CA",
    },
    {
      id: "3",
      title: "Boutique Hotel Reimagined",
      category: "Hospitality",
      imageUrl:
        "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?w=800&q=80",
      description:
        "Complete renovation of a historic boutique hotel, preserving architectural heritage while introducing contemporary luxury amenities and bespoke furnishings.",
      client: "Heritage Hospitality Group",
      date: "2023",
      location: "Charleston, SC",
    },
    {
      id: "4",
      title: "Culinary Masterpiece",
      category: "Residential",
      imageUrl:
        "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=800&q=80",
      description:
        "A chef's dream kitchen featuring professional-grade appliances, custom cabinetry, and a stunning marble waterfall island. Perfect for both intimate dinners and grand entertaining.",
      client: "The Morrison Estate",
      date: "2024",
      location: "Napa Valley, CA",
    },
    {
      id: "5",
      title: "Flagship Retail Experience",
      category: "Commercial",
      imageUrl:
        "https://images.unsplash.com/photo-1604014237800-1c9102c219da?w=800&q=80",
      description:
        "An immersive retail environment that tells the brand story through carefully curated spaces, innovative lighting design, and interactive customer touchpoints.",
      client: "Artisan Collective",
      date: "2024",
      location: "Beverly Hills, CA",
    },
    {
      id: "6",
      title: "Industrial Chic Loft",
      category: "Residential",
      imageUrl:
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=80",
      description:
        "A former warehouse transformed into a stunning residential loft, celebrating industrial heritage while incorporating modern comfort and sophisticated design elements.",
      client: "Urban Living Co.",
      date: "2023",
      location: "Brooklyn, NY",
    },
    {
      id: "7",
      title: "Wellness Retreat Spa",
      category: "Hospitality",
      imageUrl:
        "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&q=80",
      description:
        "A tranquil spa environment designed to promote relaxation and rejuvenation through natural materials, soothing color palettes, and thoughtful spatial flow.",
      client: "Serenity Wellness",
      date: "2023",
      location: "Sedona, AZ",
    },
    {
      id: "8",
      title: "Executive Boardroom",
      category: "Commercial",
      imageUrl:
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&q=80",
      description:
        "A prestigious boardroom design that commands respect while fostering productive discussions. Features custom conference table, integrated technology, and sophisticated lighting.",
      client: "Global Finance Corp",
      date: "2024",
      location: "Chicago, IL",
    },
    {
      id: "9",
      title: "Coastal Modern Retreat",
      category: "Residential",
      imageUrl:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
      description:
        "A beachfront home that captures the essence of coastal living through natural textures, ocean-inspired colors, and seamless indoor-outdoor integration.",
      client: "Oceanview Estates",
      date: "2023",
      location: "Malibu, CA",
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 py-6">
          <Link to="/" className="text-2xl font-light tracking-wider">
            SECTOR D
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <motion.section
        className="py-24 bg-gradient-to-b from-gray-50 to-white"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            className="text-5xl md:text-7xl font-light mb-6 text-gray-900"
            variants={itemVariants}
          >
            Portfolio
          </motion.h1>
          <motion.div
            className="w-24 h-0.5 bg-gray-900 mx-auto mb-8"
            variants={itemVariants}
          ></motion.div>
          <motion.p
            className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Discover our collection of thoughtfully designed spaces that
            transform the way people live, work, and experience their
            environments.
          </motion.p>
          <motion.div
            className="mt-12 flex justify-center"
            variants={itemVariants}
          >
            <div className="text-center">
              <div className="text-4xl font-light text-gray-900 mb-2">
                {projects.length}+
              </div>
              <div className="text-gray-600">Completed Projects</div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Filters */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
              <div className="flex items-center gap-2">
                <Filter className="w-5 h-5 text-gray-600" />
                <span className="text-lg font-medium text-gray-900">
                  Filter by:
                </span>
              </div>
              <div className="flex flex-wrap gap-3">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={
                      selectedCategory === category ? "default" : "outline"
                    }
                    onClick={() => setSelectedCategory(category)}
                    className={`px-6 py-2 rounded-full transition-all duration-300 ${
                      selectedCategory === category
                        ? "bg-gray-900 text-white shadow-lg"
                        : "border-gray-300 text-gray-700 hover:border-gray-900 hover:text-gray-900"
                    }`}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  placeholder="Search projects..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 pr-4 py-3 w-80 rounded-full border-gray-300 focus:border-gray-900 focus:ring-gray-900"
                />
              </div>

              <div className="flex items-center gap-2 border border-gray-300 rounded-full p-1">
                <Button
                  variant={viewMode === "masonry" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("masonry")}
                  className={`rounded-full px-4 ${
                    viewMode === "masonry"
                      ? "bg-gray-900 text-white"
                      : "text-gray-600"
                  }`}
                >
                  <Grid className="w-4 h-4" />
                </Button>
                <Button
                  variant={viewMode === "grid" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                  className={`rounded-full px-4 ${
                    viewMode === "grid"
                      ? "bg-gray-900 text-white"
                      : "text-gray-600"
                  }`}
                >
                  <List className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {filteredProjects.length === 0 ? (
            <motion.div
              className="text-center py-24"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-2xl font-light text-gray-900 mb-4">
                No Projects Found
              </h3>
              <p className="text-gray-600 max-w-md mx-auto">
                We couldn't find any projects matching your search criteria. Try
                adjusting your filters or search terms.
              </p>
            </motion.div>
          ) : (
            <AnimatePresence>
              <motion.div
                className={
                  viewMode === "masonry"
                    ? "columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8"
                    : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                }
                initial="hidden"
                animate="visible"
                variants={containerVariants}
              >
                {filteredProjects.map((project) => (
                  <motion.div
                    key={project.id}
                    layoutId={`project-${project.id}`}
                    variants={itemVariants}
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ duration: 0.4 }}
                    onClick={() => handleProjectClick(project)}
                    className={`cursor-pointer group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 ${
                      viewMode === "masonry" ? "break-inside-avoid mb-8" : ""
                    }`}
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={project.imageUrl}
                        alt={project.title}
                        className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${
                          viewMode === "masonry" ? "h-auto" : "h-80"
                        }`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <div className="flex items-center justify-between text-white">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            <span className="text-sm">{project.date}</span>
                          </div>
                          <ArrowRight className="w-5 h-5" />
                        </div>
                      </div>
                    </div>

                    <div className="p-8">
                      <div className="flex items-center justify-between mb-4">
                        <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-full">
                          {project.category}
                        </span>
                        <div className="flex items-center gap-1 text-gray-500">
                          <MapPin className="w-4 h-4" />
                          <span className="text-sm">{project.location}</span>
                        </div>
                      </div>

                      <h3 className="text-2xl font-light text-gray-900 mb-3 group-hover:text-gray-700 transition-colors duration-300">
                        {project.title}
                      </h3>

                      <p className="text-gray-600 leading-relaxed mb-4 line-clamp-3">
                        {project.description}
                      </p>

                      <div className="flex items-center gap-2 text-gray-500">
                        <User className="w-4 h-4" />
                        <span className="text-sm">{project.client}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-light mb-6">
              Ready to Create Your Dream Space?
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
              Let SECTOR D transform your vision into reality. Every project
              begins with understanding your unique story and aspirations.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-gray-900 hover:bg-gray-100 px-10 py-4 rounded-full text-lg"
              >
                <Link to="/contact">Start Your Project</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-gray-900 px-10 py-4 rounded-full text-lg"
              >
                <Link to="/services">Explore Services</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

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
