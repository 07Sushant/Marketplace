"use client"

import { useState } from "react"
import Link from "next/link"
import { PlusCircle, Filter, Search, Clock, DollarSign, Briefcase } from "lucide-react"
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

const requests = [
  {
    id: 1,
    title: "E-commerce Website with Payment Integration",
    description: "Looking for a developer to build a full-featured e-commerce website with Stripe payment integration, user authentication, and admin dashboard.",
    budget: "$1,500 - $3,000",
    deadline: "30 days",
    category: "Web Development",
    skills: ["React", "Node.js", "Stripe API", "MongoDB"],
    status: "open",
    postedBy: "John Smith",
    postedDate: "2 days ago",
    proposals: 8,
  },
  {
    id: 2,
    title: "Mobile App for Fitness Tracking",
    description: "Need a mobile app developer to create a fitness tracking app with features like workout logging, progress tracking, and social sharing.",
    budget: "$2,000 - $4,000",
    deadline: "45 days",
    category: "Mobile Apps",
    skills: ["React Native", "Firebase", "UI/UX Design"],
    status: "open",
    postedBy: "Sarah Johnson",
    postedDate: "5 days ago",
    proposals: 12,
  },
  {
    id: 3,
    title: "AI-powered Content Generator",
    description: "Looking for an AI specialist to develop a content generation tool that can create blog posts, social media content, and product descriptions.",
    budget: "$3,500 - $5,000",
    deadline: "60 days",
    category: "AI & Machine Learning",
    skills: ["Python", "NLP", "TensorFlow", "GPT-3"],
    status: "open",
    postedBy: "Michael Brown",
    postedDate: "1 week ago",
    proposals: 6,
  },
  {
    id: 4,
    title: "Blockchain-based Voting System",
    description: "Need a blockchain developer to create a secure voting system for organizational elections with transparency and audit features.",
    budget: "$4,000 - $7,000",
    deadline: "90 days",
    category: "Blockchain",
    skills: ["Solidity", "Ethereum", "Smart Contracts", "Web3.js"],
    status: "open",
    postedBy: "Emily Chen",
    postedDate: "3 days ago",
    proposals: 4,
  },
  {
    id: 5,
    title: "Data Visualization Dashboard",
    description: "Looking for a data scientist to create an interactive dashboard for visualizing business metrics and KPIs with filtering capabilities.",
    budget: "$2,500 - $4,500",
    deadline: "40 days",
    category: "Data Science",
    skills: ["D3.js", "React", "SQL", "Data Analysis"],
    status: "open",
    postedBy: "David Wilson",
    postedDate: "6 days ago",
    proposals: 9,
  },
  {
    id: 6,
    title: "IoT Home Automation System",
    description: "Need an IoT specialist to develop a home automation system that can control lights, temperature, and security devices via a mobile app.",
    budget: "$3,000 - $6,000",
    deadline: "75 days",
    category: "IoT",
    skills: ["Arduino", "Raspberry Pi", "MQTT", "Mobile App Development"],
    status: "open",
    postedBy: "Jessica Martinez",
    postedDate: "4 days ago",
    proposals: 7,
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

export default function RequestsPage() {
  const [activeTab, setActiveTab] = useState("browse")

  return (
    <div className="flex flex-col min-h-screen">
      <div className="container py-8">
        <div className="flex flex-col space-y-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Custom Requests</h1>
              <p className="text-muted-foreground">Browse project requests or post your own custom project requirements.</p>
            </div>
            <Button asChild>
              <Link href="/requests/create">
                <PlusCircle className="mr-2 h-4 w-4" />
                Post a Request
              </Link>
            </Button>
          </div>
          
          <Tabs defaultValue="browse" className="mt-6" onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-2 md:w-[400px]">
              <TabsTrigger value="browse">Browse Requests</TabsTrigger>
              <TabsTrigger value="my-requests">My Requests</TabsTrigger>
            </TabsList>
            
            <TabsContent value="browse" className="mt-6">
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
                        <h4 className="text-sm font-medium">Budget Range</h4>
                        <div className="grid grid-cols-2 gap-2">
                          <Input type="number" placeholder="Min" className="h-8" />
                          <Input type="number" placeholder="Max" className="h-8" />
                        </div>
                      </div>
                      <Separator />
                      <div className="space-y-2">
                        <h4 className="text-sm font-medium">Project Duration</h4>
                        <div className="space-y-1">
                          {["Less than 1 month", "1-3 months", "3-6 months", "Over 6 months"].map((duration) => (
                            <div key={duration} className="flex items-center space-x-2">
                              <input
                                type="checkbox"
                                id={duration.toLowerCase().replace(/\s+/g, '-')}
                                className="h-4 w-4 rounded border-gray-300"
                              />
                              <label
                                htmlFor={duration.toLowerCase().replace(/\s+/g, '-')}
                                className="text-sm font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                {duration}
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
                
                {/* Requests List */}
                <div className="space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="relative w-full sm:w-[300px]">
                      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input
                        type="search"
                        placeholder="Search requests..."
                        className="w-full pl-8"
                      />
                    </div>
                    <div className="flex items-center gap-2">
                      <Select defaultValue="newest">
                        <SelectTrigger className="w-[180px] h-8">
                          <SelectValue placeholder="Sort by" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="newest">Newest First</SelectItem>
                          <SelectItem value="oldest">Oldest First</SelectItem>
                          <SelectItem value="budget-high">Budget: High to Low</SelectItem>
                          <SelectItem value="budget-low">Budget: Low to High</SelectItem>
                          <SelectItem value="proposals">Proposals: Low to High</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    {requests.map((request) => (
                      <Card key={request.id}>
                        <CardHeader>
                          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                            <div>
                              <CardTitle className="text-xl">
                                <Link href={`/requests/${request.id}`} className="hover:underline">
                                  {request.title}
                                </Link>
                              </CardTitle>
                              <div className="flex flex-wrap gap-2 mt-2">
                                <Badge variant="outline">{request.category}</Badge>
                                {request.skills.map((skill) => (
                                  <Badge key={skill} variant="secondary">{skill}</Badge>
                                ))}
                              </div>
                            </div>
                            <div className="flex flex-col items-end gap-1">
                              <Badge className="bg-green-500 hover:bg-green-600">
                                {request.status.toUpperCase()}
                              </Badge>
                              <CardDescription>
                                Posted {request.postedDate}
                              </CardDescription>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground line-clamp-2 mb-4">
                            {request.description}
                          </p>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="flex items-center">
                              <DollarSign className="h-4 w-4 mr-2 text-muted-foreground" />
                              <span className="text-sm font-medium">{request.budget}</span>
                            </div>
                            <div className="flex items-center">
                              <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                              <span className="text-sm font-medium">Deadline: {request.deadline}</span>
                            </div>
                            <div className="flex items-center">
                              <Briefcase className="h-4 w-4 mr-2 text-muted-foreground" />
                              <span className="text-sm font-medium">{request.proposals} Proposals</span>
                            </div>
                          </div>
                        </CardContent>
                        <CardFooter className="flex justify-between border-t pt-4">
                          <div className="text-sm text-muted-foreground">
                            Posted by: <span className="font-medium">{request.postedBy}</span>
                          </div>
                          <Button asChild>
                            <Link href={`/requests/${request.id}`}>
                              Submit Proposal
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
            
            <TabsContent value="my-requests" className="mt-6">
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="max-w-md space-y-4">
                  <h3 className="text-xl font-semibold">No Requests Found</h3>
                  <p className="text-muted-foreground">
                    You haven't posted any custom project requests yet. Create your first request to find the perfect developer for your project.
                  </p>
                  <Button asChild>
                    <Link href="/requests/create">
                      <PlusCircle className="mr-2 h-4 w-4" />
                      Post a Request
                    </Link>
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}