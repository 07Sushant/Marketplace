"use client"

import { useState } from "react"
import Link from "next/link"
import { Search, Filter, MessageSquare, Tag, Clock, CheckCircle, PlusCircle } from "lucide-react"
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

const questions = [
  {
    id: 1,
    title: "How to implement authentication with JWT in a React/Node.js application?",
    description: "I'm building a full-stack application with React frontend and Node.js backend. I want to implement JWT authentication but I'm facing issues with token storage and validation.",
    tags: ["React", "Node.js", "Authentication", "JWT"],
    status: "open",
    answers: 3,
    views: 128,
    postedBy: "Alex Johnson",
    postedDate: "2 days ago",
  },
  {
    id: 2,
    title: "Optimizing database queries in a large-scale PostgreSQL database",
    description: "My application has grown significantly and now the database queries are becoming slow. I need help optimizing my PostgreSQL queries and possibly restructuring some tables.",
    tags: ["PostgreSQL", "Database", "Performance", "SQL"],
    status: "open",
    answers: 5,
    views: 215,
    postedBy: "Sarah Williams",
    postedDate: "1 week ago",
  },
  {
    id: 3,
    title: "Implementing real-time features with WebSockets in a React application",
    description: "I want to add real-time notifications and chat functionality to my React application. What's the best approach using WebSockets? Should I use Socket.io or something else?",
    tags: ["React", "WebSockets", "Socket.io", "Real-time"],
    status: "open",
    answers: 7,
    views: 342,
    postedBy: "Michael Brown",
    postedDate: "3 days ago",
  },
  {
    id: 4,
    title: "Debugging memory leaks in a Node.js application",
    description: "My Node.js application is experiencing memory leaks in production. I've tried using various tools but can't pinpoint the exact cause. Need help with debugging strategies.",
    tags: ["Node.js", "Memory Leak", "Debugging", "Performance"],
    status: "solved",
    answers: 4,
    views: 189,
    postedBy: "Emily Chen",
    postedDate: "5 days ago",
  },
  {
    id: 5,
    title: "Best practices for state management in a large React application",
    description: "As my React application grows, state management is becoming complex. Should I use Redux, Context API, or other solutions? Looking for best practices and architecture advice.",
    tags: ["React", "State Management", "Redux", "Context API"],
    status: "open",
    answers: 9,
    views: 276,
    postedBy: "David Wilson",
    postedDate: "1 day ago",
  },
  {
    id: 6,
    title: "Implementing CI/CD pipeline for a microservices architecture",
    description: "I'm working on a microservices-based application and need to set up a CI/CD pipeline. Looking for advice on tools and best practices for testing and deployment.",
    tags: ["DevOps", "CI/CD", "Microservices", "Docker"],
    status: "open",
    answers: 2,
    views: 154,
    postedBy: "Jessica Martinez",
    postedDate: "4 days ago",
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

export default function SupportPage() {
  const [activeTab, setActiveTab] = useState("questions")

  return (
    <div className="flex flex-col min-h-screen">
      <div className="container py-8">
        <div className="flex flex-col space-y-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Debugging Support</h1>
              <p className="text-muted-foreground">Get help with your code issues from experienced developers in our community.</p>
            </div>
            <Button asChild>
              <Link href="/support/ask">
                <PlusCircle className="mr-2 h-4 w-4" />
                Ask a Question
              </Link>
            </Button>
          </div>
          
          <Tabs defaultValue="questions" className="mt-6" onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-3 md:w-[400px]">
              <TabsTrigger value="questions">All Questions</TabsTrigger>
              <TabsTrigger value="my-questions">My Questions</TabsTrigger>
              <TabsTrigger value="answered">Answered</TabsTrigger>
            </TabsList>
            
            <TabsContent value="questions" className="mt-6">
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
                        <h4 className="text-sm font-medium">Status</h4>
                        <div className="space-y-1">
                          {["Open", "Solved", "In Progress"].map((status) => (
                            <div key={status} className="flex items-center space-x-2">
                              <input
                                type="checkbox"
                                id={status.toLowerCase().replace(/\s+/g, '-')}
                                className="h-4 w-4 rounded border-gray-300"
                              />
                              <label
                                htmlFor={status.toLowerCase().replace(/\s+/g, '-')}
                                className="text-sm font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                {status}
                              </label>
                            </div>
                          ))}
                        </div>
                      </div>
                      <Separator />
                      <div className="space-y-2">
                        <h4 className="text-sm font-medium">Popular Tags</h4>
                        <div className="flex flex-wrap gap-2">
                          {["React", "Node.js", "JavaScript", "Python", "Database", "API", "DevOps"].map((tag) => (
                            <Badge key={tag} variant="outline" className="cursor-pointer hover:bg-muted">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <Separator />
                      <Button className="w-full">Apply Filters</Button>
                    </div>
                  </div>
                </div>
                
                {/* Questions List */}
                <div className="space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="relative w-full sm:w-[300px]">
                      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input
                        type="search"
                        placeholder="Search questions..."
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
                          <SelectItem value="active">Most Active</SelectItem>
                          <SelectItem value="votes">Most Votes</SelectItem>
                          <SelectItem value="unanswered">Unanswered</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    {questions.map((question) => (
                      <Card key={question.id}>
                        <CardHeader>
                          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                            <div>
                              <CardTitle className="text-xl">
                                <Link href={`/support/${question.id}`} className="hover:underline">
                                  {question.title}
                                </Link>
                              </CardTitle>
                              <div className="flex flex-wrap gap-2 mt-2">
                                {question.tags.map((tag) => (
                                  <Badge key={tag} variant="secondary">{tag}</Badge>
                                ))}
                              </div>
                            </div>
                            <div className="flex flex-col items-end gap-1">
                              <Badge className={question.status === "solved" ? "bg-green-500 hover:bg-green-600" : "bg-blue-500 hover:bg-blue-600"}>
                                {question.status.toUpperCase()}
                              </Badge>
                              <CardDescription>
                                Posted {question.postedDate}
                              </CardDescription>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground line-clamp-2 mb-4">
                            {question.description}
                          </p>
                        </CardContent>
                        <CardFooter className="flex justify-between border-t pt-4">
                          <div className="flex items-center gap-4">
                            <div className="flex items-center">
                              <MessageSquare className="h-4 w-4 mr-1 text-muted-foreground" />
                              <span className="text-sm">{question.answers} answers</span>
                            </div>
                            <div className="flex items-center">
                              <svg
                                className="h-4 w-4 mr-1 text-muted-foreground"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                />
                              </svg>
                              <span className="text-sm">{question.views} views</span>
                            </div>
                          </div>
                          <div className="text-sm text-muted-foreground">
                            By: <span className="font-medium">{question.postedBy}</span>
                          </div>
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
            
            <TabsContent value="my-questions" className="mt-6">
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="max-w-md space-y-4">
                  <h3 className="text-xl font-semibold">No Questions Found</h3>
                  <p className="text-muted-foreground">
                    You haven't asked any questions yet. Ask your first question to get help from our community of developers.
                  </p>
                  <Button asChild>
                    <Link href="/support/ask">
                      <PlusCircle className="mr-2 h-4 w-4" />
                      Ask a Question
                    </Link>
                  </Button>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="answered" className="mt-6">
              {/* Similar structure to "questions" tab but filtered for answered questions */}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}