import Link from "next/link"
import Image from "next/image"
import { Search, Filter, BookOpen, Video, FileText, Download, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"

const resources = [
  {
    id: 1,
    title: "Complete React Developer Guide",
    type: "Course",
    description: "A comprehensive guide to building modern web applications with React, Redux, and related technologies.",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    author: "Sarah Johnson",
    category: "Web Development",
    tags: ["React", "Redux", "JavaScript"],
    difficulty: "Intermediate",
    duration: "20 hours",
    rating: 4.8,
    reviews: 245,
  },
  {
    id: 2,
    title: "Machine Learning Fundamentals",
    type: "Tutorial",
    description: "Learn the core concepts of machine learning, including supervised and unsupervised learning, neural networks, and more.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    author: "Michael Chen",
    category: "AI & Machine Learning",
    tags: ["Python", "TensorFlow", "Neural Networks"],
    difficulty: "Advanced",
    duration: "15 hours",
    rating: 4.7,
    reviews: 189,
  },
  {
    id: 3,
    title: "Mobile App Development with Flutter",
    type: "Course",
    description: "A step-by-step guide to building cross-platform mobile applications using Flutter and Dart.",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    author: "David Wilson",
    category: "Mobile Apps",
    tags: ["Flutter", "Dart", "Mobile Development"],
    difficulty: "Intermediate",
    duration: "18 hours",
    rating: 4.9,
    reviews: 312,
  },
  {
    id: 4,
    title: "Blockchain Development Guide",
    type: "E-book",
    description: "A comprehensive guide to blockchain technology, smart contracts, and decentralized application development.",
    image: "https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    author: "Emily Martinez",
    category: "Blockchain",
    tags: ["Ethereum", "Solidity", "Smart Contracts"],
    difficulty: "Advanced",
    duration: "10 hours",
    rating: 4.6,
    reviews: 156,
  },
  {
    id: 5,
    title: "Data Visualization with D3.js",
    type: "Video Series",
    description: "Learn how to create interactive data visualizations for the web using D3.js and SVG.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    author: "Robert Taylor",
    category: "Data Science",
    tags: ["D3.js", "JavaScript", "Data Visualization"],
    difficulty: "Intermediate",
    duration: "12 hours",
    rating: 4.5,
    reviews: 178,
  },
  {
    id: 6,
    title: "DevOps Mastery: CI/CD Pipelines",
    type: "Workshop",
    description: "A hands-on workshop on setting up continuous integration and deployment pipelines using modern DevOps tools.",
    image: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    author: "James Anderson",
    category: "DevOps",
    tags: ["Docker", "Jenkins", "Kubernetes"],
    difficulty: "Advanced",
    duration: "16 hours",
    rating: 4.7,
    reviews: 203,
  },
]

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

const resourceTypes = ["Course", "Tutorial", "E-book", "Video Series", "Workshop", "Documentation"]
const difficultyLevels = ["Beginner", "Intermediate", "Advanced"]

export default function ResourcesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="container py-8">
        <div className="flex flex-col space-y-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Teaching Resources</h1>
              <p className="text-muted-foreground">Access tutorials, courses, and educational materials to enhance your skills.</p>
            </div>
            <Button asChild>
              <Link href="/resources/submit">
                Submit a Resource
              </Link>
            </Button>
          </div>
          
          <Tabs defaultValue="all" className="mt-6">
            <TabsList className="grid w-full grid-cols-5 md:w-[600px]">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="courses">Courses</TabsTrigger>
              <TabsTrigger value="tutorials">Tutorials</TabsTrigger>
              <TabsTrigger value="ebooks">E-books</TabsTrigger>
              <TabsTrigger value="videos">Videos</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-6">
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
                        <h4 className="text-sm font-medium">Resource Type</h4>
                        <div className="space-y-1">
                          {resourceTypes.map((type) => (
                            <div key={type} className="flex items-center space-x-2">
                              <input
                                type="checkbox"
                                id={type.toLowerCase().replace(/\s+/g, '-')}
                                className="h-4 w-4 rounded border-gray-300"
                              />
                              <label
                                htmlFor={type.toLowerCase().replace(/\s+/g, '-')}
                                className="text-sm font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                {type}
                              </label>
                            </div>
                          ))}
                        </div>
                      </div>
                      <Separator />
                      <div className="space-y-2">
                        <h4 className="text-sm font-medium">Difficulty Level</h4>
                        <div className="space-y-1">
                          {difficultyLevels.map((level) => (
                            <div key={level} className="flex items-center space-x-2">
                              <input
                                type="checkbox"
                                id={level.toLowerCase().replace(/\s+/g, '-')}
                                className="h-4 w-4 rounded border-gray-300"
                              />
                              <label
                                htmlFor={level.toLowerCase().replace(/\s+/g, '-')}
                                className="text-sm font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                {level}
                              </label>
                            </div>
                          ))}
                        </div>
                      </div>
                      <Separator />
                      <div className="space-y-2">
                        <h4 className="text-sm font-medium">Duration</h4>
                        <div className="grid grid-cols-2 gap-2">
                          <Input type="number" placeholder="Min hours" className="h-8" />
                          <Input type="number" placeholder="Max hours" className="h-8" />
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
                
                {/* Resources Grid */}
                <div className="space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="relative w-full sm:w-[300px]">
                      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input
                        type="search"
                        placeholder="Search resources..."
                        className="w-full pl-8"
                      />
                    </div>
                    <div className="flex items-center gap-2">
                      <Select defaultValue="popular">
                        <SelectTrigger className="w-[180px] h-8">
                          <SelectValue placeholder="Sort by" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="popular">Most Popular</SelectItem>
                          <SelectItem value="newest">Newest First</SelectItem>
                          <SelectItem value="rating-high">Rating: High to Low</SelectItem>
                          <SelectItem value="duration-low">Duration: Low to High</SelectItem>
                          <SelectItem value="duration-high">Duration: High to Low</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {resources.map((resource) => (
                      <Card key={resource.id} className="overflow-hidden flex flex-col">
                        <div className="relative h-48 w-full">
                          <Image
                            src={resource.image}
                            alt={resource.title}
                            fill
                            className="object-cover"
                          />
                          <div className="absolute top-2 right-2">
                            <Badge className="bg-primary text-primary-foreground">
                              {resource.type}
                            </Badge>
                          </div>
                        </div>
                        <CardHeader>
                          <div className="flex justify-between items-start">
                            <CardTitle className="text-xl">
                              <Link href={`/resources/${resource.id}`} className="hover:underline">
                                {resource.title}
                              </Link>
                            </CardTitle>
                          </div>
                          <div className="flex items-center gap-2 mt-1">
                            <Badge variant="outline">{resource.category}</Badge>
                            <Badge variant="secondary">{resource.difficulty}</Badge>
                          </div>
                          <CardDescription className="line-clamp-2 mt-2">
                            {resource.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="flex-grow">
                          <div className="flex flex-wrap gap-2 mb-4">
                            {resource.tags.map((tag) => (
                              <Badge key={tag} variant="outline" className="bg-muted">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <div className="flex items-center gap-1">
                              <span className="text-muted-foreground">By:</span>
                              <span className="font-medium">{resource.author}</span>
                            </div>
                            <div className="flex items-center">
                              <span className="text-muted-foreground mr-1">Duration:</span>
                              <span className="font-medium">{resource.duration}</span>
                            </div>
                          </div>
                        </CardContent>
                        <CardFooter className="flex justify-between border-t pt-4">
                          <div className="flex items-center">
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <svg
                                  key={i}
                                  className={`h-4 w-4 ${
                                    i < Math.floor(resource.rating) ? "text-yellow-400" : "text-gray-300"
                                  }`}
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                >
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                              ))}
                            </div>
                            <span className="ml-1 text-sm text-muted-foreground">
                              ({resource.reviews})
                            </span>
                          </div>
                          <Button size="sm" asChild>
                            <Link href={`/resources/${resource.id}`}>
                              View Resource
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
            </TabsContent>
            
            <TabsContent value="courses" className="mt-6">
              {/* Similar structure to "all" tab but filtered for courses */}
            </TabsContent>
            
            <TabsContent value="tutorials" className="mt-6">
              {/* Similar structure to "all" tab but filtered for tutorials */}
            </TabsContent>
            
            <TabsContent value="ebooks" className="mt-6">
              {/* Similar structure to "all" tab but filtered for e-books */}
            </TabsContent>
            
            <TabsContent value="videos" className="mt-6">
              {/* Similar structure to "all" tab but filtered for videos */}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}