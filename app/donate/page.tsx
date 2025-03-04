"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Search, Filter, Heart, DollarSign, Users, Calendar } from "lucide-react"
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
import { Progress } from "@/components/ui/progress"

const projects = [
  {
    id: 1,
    title: "Open Source UI Component Library",
    description: "A comprehensive UI component library for React with accessibility and customization in mind.",
    image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    creator: "Sarah Johnson",
    category: "Web Development",
    tags: ["React", "UI", "Open Source"],
    raised: 8750,
    goal: 10000,
    backers: 124,
    daysLeft: 15,
  },
  {
    id: 2,
    title: "Machine Learning Framework for Edge Devices",
    description: "A lightweight ML framework designed to run efficiently on resource-constrained edge devices.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    creator: "Michael Chen",
    category: "AI & Machine Learning",
    tags: ["Machine Learning", "IoT", "Edge Computing"],
    raised: 12500,
    goal: 20000,
    backers: 187,
    daysLeft: 21,
  },
  {
    id: 3,
    title: "Cross-platform Mobile Game Engine",
    description: "An open-source game engine for creating high-performance mobile games that run on multiple platforms.",
    image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    creator: "David Wilson",
    category: "Game Development",
    tags: ["Game Engine", "Mobile", "Cross-platform"],
    raised: 15800,
    goal: 25000,
    backers: 213,
    daysLeft: 30,
  },
  {
    id: 4,
    title: "Decentralized Identity Verification System",
    description: "A blockchain-based system for secure and private identity verification without central authorities.",
    image: "https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    creator: "Emily Martinez",
    category: "Blockchain",
    tags: ["Blockchain", "Identity", "Privacy"],
    raised: 9200,
    goal: 15000,
    backers: 145,
    daysLeft: 18,
  },
  {
    id: 5,
    title: "Data Visualization Library for Scientific Research",
    description: "A specialized data visualization library for scientific research with support for complex datasets.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    creator: "Robert Taylor",
    category: "Data Science",
    tags: ["Data Visualization", "Science", "Research"],
    raised: 6500,
    goal: 12000,
    backers: 98,
    daysLeft: 25,
  },
  {
    id: 6,
    title: "DevOps Automation Toolkit",
    description: "A comprehensive toolkit for automating DevOps workflows, CI/CD pipelines, and infrastructure management.",
    image: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    creator: "James Anderson",
    category: "DevOps",
    tags: ["DevOps", "Automation", "CI/CD"],
    raised: 11200,
    goal: 18000,
    backers: 167,
    daysLeft: 12,
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

export default function DonatePage() {
  const [activeTab, setActiveTab] = useState("projects")

  return (
    <div className="flex flex-col min-h-screen">
      <div className="container py-8">
        <div className="flex flex-col space-y-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Donation Platform</h1>
              <p className="text-muted-foreground">Support open-source projects and developers through our donation system.</p>
            </div>
            <Button asChild>
              <Link href="/donate/create">
                Submit Your Project
              </Link>
            </Button>
          </div>
          
          <Tabs defaultValue="projects" className="mt-6" onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-3 md:w-[400px]">
              <TabsTrigger value="projects">All Projects</TabsTrigger>
              <TabsTrigger value="trending">Trending</TabsTrigger>
              <TabsTrigger value="ending-soon">Ending Soon</TabsTrigger>
            </TabsList>
            
            <TabsContent value="projects" className="mt-6">
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
                        <h4 className="text-sm font-medium">Funding Progress</h4>
                        <div className="space-y-1">
                          {["Less than 25%", "25% - 50%", "50% - 75%", "Over 75%"].map((progress) => (
                            <div key={progress} className="flex items-center space-x-2">
                              <input
                                type="checkbox"
                                id={progress.toLowerCase().replace(/\s+/g, '-')}
                                className="h-4 w-4 rounded border-gray-300"
                              />
                              <label
                                htmlFor={progress.toLowerCase().replace(/\s+/g, '-')}
                                className="text-sm font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                {progress}
                              </label>
                            </div>
                          ))}
                        </div>
                      </div>
                      <Separator />
                      <div className="space-y-2">
                        <h4 className="text-sm font-medium">Time Remaining</h4>
                        <div className="space-y-1">
                          {["Less than 1 week", "1-2 weeks", "2-4 weeks", "Over 4 weeks"].map((time) => (
                            <div key={time} className="flex items-center space-x-2">
                              <input
                                type="checkbox"
                                id={time.toLowerCase().replace(/\s+/g, '-')}
                                className="h-4 w-4 rounded border-gray-300"
                              />
                              <label
                                htmlFor={time.toLowerCase().replace(/\s+/g, '-')}
                                className="text-sm font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                {time}
                              </label>
                            </div>
                          ))}
                        </div>
                      </div>
                      <Separator />
                      <div className="space-y-2">
                        <h4 className="text-sm font-medium">Goal Amount</h4>
                        <div className="grid grid-cols-2 gap-2">
                          <Input type="number" placeholder="Min" className="h-8" />
                          <Input type="number" placeholder="Max" className="h-8" />
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
                      <Select defaultValue="popular">
                        <SelectTrigger className="w-[180px] h-8">
                          <SelectValue placeholder="Sort by" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="popular">Most Popular</SelectItem>
                          <SelectItem value="newest">Newest First</SelectItem>
                          <SelectItem value="ending">Ending Soon</SelectItem>
                          <SelectItem value="funded">Most Funded</SelectItem>
                          <SelectItem value="backers">Most Backers</SelectItem>
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
                            <CardTitle className="text-xl">
                              <Link href={`/donate/${project.id}`} className="hover:underline">
                                {project.title}
                              </Link>
                            </CardTitle>
                            <Badge>{project.category}</Badge>
                          </div>
                          <CardDescription className="line-clamp-2 mt-2">
                            {project.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="flex-grow">
                          <div className="flex flex-wrap gap-2 mb-4">
                            {project.tags.map((tag) => (
                              <Badge key={tag} variant="outline" className="bg-muted">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                          <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span className="font-medium">${project.raised.toLocaleString()}</span>
                              <span className="text-muted-foreground">of ${project.goal.toLocaleString()}</span>
                            </div>
                            <Progress value={(project.raised / project.goal) * 100} className="h-2" />
                            <div className="flex justify-between text-sm text-muted-foreground">
                              <div className="flex items-center">
                                <Users className="h-4 w-4 mr-1" />
                                <span>{project.backers} backers</span>
                              </div>
                              <div className="flex items-center">
                                <Calendar className="h-4 w-4 mr-1" />
                                <span>{project.daysLeft} days left</span>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                        <CardFooter className="flex justify-between border-t pt-4">
                          <div className="text-sm text-muted-foreground">
                            By: <span className="font-medium">{project.creator}</span>
                          </div>
                          <Button asChild>
                            <Link href={`/donate/${project.id}`}>
                              <Heart className="mr-2 h-4 w-4" />
                              Donate
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
            
            <TabsContent value="trending" className="mt-6">
              {/* Similar structure to "projects" tab but filtered for trending projects */}
            </TabsContent>
            
            <TabsContent value="ending-soon" className="mt-6">
              {/* Similar structure to "projects" tab but filtered for projects ending soon */}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}