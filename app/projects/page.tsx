import Link from "next/link"
import Image from "next/image"
import { Filter, Search, ArrowUpDown, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"

const categories = [
  "All Categories",
  "Web Development",
  "Mobile Apps",
  "AI & Machine Learning",
  "Data Science",
  "Blockchain",
  "Game Development",
  "DevOps",
  "UI/UX Design",
  "IoT",
  "Cybersecurity",
]

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A fully-featured e-commerce platform with payment integration, user authentication, and admin dashboard.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    category: "Web Development",
    author: "Jane Smith",
    price: "$1,200",
    rating: 4.8,
  },
  {
    id: 2,
    title: "AI Image Generator",
    description: "An AI-powered image generator that creates unique images based on text prompts using deep learning.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    category: "AI & Machine Learning",
    author: "Alex Johnson",
    price: "$2,500",
    rating: 4.9,
  },
  {
    id: 3,
    title: "Fitness Tracking App",
    description: "A mobile app for tracking workouts, nutrition, and progress with social features and personalized recommendations.",
    image: "https://images.unsplash.com/photo-1576678927484-cc907957088c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    category: "Mobile Apps",
    author: "Michael Brown",
    price: "$1,800",
    rating: 4.7,
  },
  {
    id: 4,
    title: "Blockchain Voting System",
    description: "A secure and transparent voting system built on blockchain technology for organizations and elections.",
    image: "https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    category: "Blockchain",
    author: "Sarah Williams",
    price: "$3,200",
    rating: 4.6,
  },
  {
    id: 5,
    title: "Real-time Chat Application",
    description: "A real-time messaging platform with features like group chats, file sharing, and end-to-end encryption.",
    image: "https://images.unsplash.com/photo-1611746872915-64382b5c2a98?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    category: "Web Development",
    author: "David Lee",
    price: "$1,500",
    rating: 4.5,
  },
  {
    id: 6,
    title: "Smart Home IoT System",
    description: "An IoT system for controlling and monitoring home devices with voice commands and mobile app integration.",
    image: "https://images.unsplash.com/photo-1558002038-1055e2dae1d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    category: "IoT",
    author: "Emily Chen",
    price: "$2,800",
    rating: 4.8,
  },
  {
    id: 7,
    title: "Data Visualization Dashboard",
    description: "An interactive dashboard for visualizing complex data sets with customizable charts and filters.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    category: "Data Science",
    author: "Robert Taylor",
    price: "$2,200",
    rating: 4.7,
  },
  {
    id: 8,
    title: "3D Multiplayer Game",
    description: "A 3D multiplayer game with realistic physics, customizable characters, and cross-platform support.",
    image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    category: "Game Development",
    author: "Jessica Martinez",
    price: "$3,500",
    rating: 4.9,
  },
]

export default function ProjectsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="container py-8">
        <div className="flex flex-col space-y-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Projects</h1>
              <p className="text-muted-foreground">Browse and discover projects from our talented developers.</p>
            </div>
            <Button asChild>
              <Link href="/projects/create">
                Submit Your Project
              </Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-6 mt-6">
            {/* Filters Sidebar */}
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium">Filters</h3>
                  <Button variant="ghost" size="sm" className="h-8 text-xs">
                    Reset
                  </Button>
                </div>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium">Categories</h4>
                    <div className="space-y-1">
                      {categories.map((category) => (
                        <div key={category} className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id={category.toLowerCase().replace(/\s+/g, '-')}
                            className="h-4 w-4 rounded border-gray-300"
                          />
                          <label
                            htmlFor={category.toLowerCase().replace(/\s+/g, '-')}
                            className="text-sm font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            {category}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                  <Separator />
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium">Price Range</h4>
                    <div className="grid grid-cols-2 gap-2">
                      <Input type="number" placeholder="Min" className="h-8" />
                      <Input type="number" placeholder="Max" className="h-8" />
                    </div>
                  </div>
                  <Separator />
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium">Rating</h4>
                    <div className="space-y-1">
                      {[5, 4, 3, 2, 1].map((rating) => (
                        <div key={rating} className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id={`rating-${rating}`}
                            className="h-4 w-4 rounded border-gray-300"
                          />
                          <label
                            htmlFor={`rating-${rating}`}
                            className="text-sm font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            {rating} Stars & Up
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                  <Separator />
                  <Button className="w-full">Apply Filters</Button>
                </div>
              </div>
            </div>
            
            {/* Projects Grid */}
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="relative w-full sm:w-[300px]">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search projects..."
                    className="w-full pl-8"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" size="sm" className="h-8 gap-1">
                        <Filter className="h-3.5 w-3.5" />
                        <span>Filter</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>Newest First</DropdownMenuItem>
                      <DropdownMenuItem>Oldest First</DropdownMenuItem>
                      <DropdownMenuItem>Price: Low to High</DropdownMenuItem>
                      <DropdownMenuItem>Price: High to Low</DropdownMenuItem>
                      <DropdownMenuItem>Rating: High to Low</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                  <Select defaultValue="grid">
                    <SelectTrigger className="w-[120px] h-8">
                      <SelectValue placeholder="View" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="grid">Grid View</SelectItem>
                      <SelectItem value="list">List View</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project) => (
                  <Card key={project.id} className="overflow-hidden flex flex-col">
                    <div className="relative h-48 w-full">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-xl">{project.title}</CardTitle>
                        <Badge>{project.category}</Badge>
                      </div>
                      <CardDescription className="line-clamp-2">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-1">
                          <span className="text-muted-foreground">By:</span>
                          <span className="font-medium">{project.author}</span>
                        </div>
                        <div className="font-medium">{project.price}</div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between border-t pt-4">
                      <div className="flex items-center">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              className={`h-4 w-4 ${
                                i < Math.floor(project.rating) ? "text-yellow-400" : "text-gray-300"
                              }`}
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        <span className="ml-1 text-sm text-muted-foreground">
                          ({project.rating})
                        </span>
                      </div>
                      <Button size="sm" asChild>
                        <Link href={`/projects/${project.id}`}>
                          View Details
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
              
              <div className="flex justify-center mt-8">
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="sm" disabled>
                    Previous
                  </Button>
                  <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                    1
                  </Button>
                  <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                    2
                  </Button>
                  <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                    3
                  </Button>
                  <span>...</span>
                  <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                    8
                  </Button>
                  <Button variant="outline" size="sm">
                    Next
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}