"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { 
  LayoutDashboard, 
  Users, 
  FileText, 
  Settings, 
  Bell, 
  MessageSquare, 
  Heart, 
  PlusCircle,
  BarChart,
  DollarSign,
  Clock,
  CheckCircle,
  XCircle,
  Calendar
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="flex flex-col min-h-screen">
      <div className="container py-8">
        <div className="flex flex-col space-y-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
              <p className="text-muted-foreground">Welcome back, John Doe!</p>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <Bell className="mr-2 h-4 w-4" />
                Notifications
                <Badge className="ml-2 bg-primary text-primary-foreground">3</Badge>
              </Button>
              <Button variant="outline" size="sm">
                <MessageSquare className="mr-2 h-4 w-4" />
                Messages
                <Badge className="ml-2 bg-primary text-primary-foreground">5</Badge>
              </Button>
              <Button size="sm">
                <PlusCircle className="mr-2 h-4 w-4" />
                New Project
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-8">
            {/* Sidebar Navigation */}
            <div className="space-y-6">
              <div className="flex flex-col space-y-1">
                <Button variant="ghost" className="justify-start" onClick={() => setActiveTab("overview")}>
                  <LayoutDashboard className="mr-2 h-4 w-4" />
                  Overview
                </Button>
                <Button variant="ghost" className="justify-start" onClick={() => setActiveTab("projects")}>
                  <FileText className="mr-2 h-4 w-4" />
                  My Projects
                </Button>
                <Button variant="ghost" className="justify-start" onClick={() => setActiveTab("requests")}>
                  <MessageSquare className="mr-2 h-4 w-4" />
                  My Requests
                </Button>
                <Button variant="ghost" className="justify-start" onClick={() => setActiveTab("opportunities")}>
                  <Users className="mr-2 h-4 w-4" />
                  Opportunities
                </Button>
                <Button variant="ghost" className="justify-start" onClick={() => setActiveTab("donations")}>
                  <Heart className="mr-2 h-4 w-4" />
                  Donations
                </Button>
                <Button variant="ghost" className="justify-start" onClick={() => setActiveTab("analytics")}>
                  <BarChart className="mr-2 h-4 w-4" />
                  Analytics
                </Button>
                <Button variant="ghost" className="justify-start" onClick={() => setActiveTab("settings")}>
                  <Settings className="mr-2 h-4 w-4" />
                  Settings
                </Button>
              </div>
              <Separator />
              <div className="bg-muted rounded-lg p-4">
                <h3 className="font-medium mb-2">Pro Account</h3>
                <p className="text-sm text-muted-foreground mb-4">Upgrade to access premium features and remove limits.</p>
                <Button className="w-full" size="sm">
                  Upgrade Now
                </Button>
              </div>
            </div>
            
            {/* Main Content */}
            <div className="space-y-6">
              {activeTab === "overview" && (
                <div className="space-y-6">
                  {/* Stats Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <Card>
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                          Total Projects
                        </CardTitle>
                        <FileText className="h-4 w-4 text-muted-foreground" />
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">12</div>
                        <p className="text-xs text-muted-foreground">
                          +2 from last month
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                          Active Requests
                        </CardTitle>
                        <MessageSquare className="h-4 w-4 text-muted-foreground" />
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">4</div>
                        <p className="text-xs text-muted-foreground">
                          +1 from last month
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                          Total Earnings
                        </CardTitle>
                        <DollarSign className="h-4 w-4 text-muted-foreground" />
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">$4,550</div>
                        <p className="text-xs text-muted-foreground">
                          +12.5% from last month
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                          Profile Views
                        </CardTitle>
                        <Users className="h-4 w-4 text-muted-foreground" />
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">573</div>
                        <p className="text-xs text-muted-foreground">
                          +28.4% from last month
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  {/* Recent Activity */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Recent Activity</CardTitle>
                      <CardDescription>
                        Your latest actions and updates
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {[1, 2, 3, 4, 5].map((i) => (
                          <div key={i} className="flex items-start gap-4">
                            <div className="relative h-10 w-10 rounded-full overflow-hidden bg-muted">
                              <Image
                                src={`https://images.unsplash.com/photo-1570295999919-5${i}335fb9f63?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80`}
                                alt="User"
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center justify-between">
                                <p className="text-sm font-medium">
                                  {i === 1 ? "You submitted a new project" : 
                                   i === 2 ? "Sarah commented on your project" :
                                   i === 3 ? "You received a new message" :
                                   i === 4 ? "Your request received a proposal" :
                                   "You made a donation to a project"}
                                </p>
                                <span className="text-xs text-muted-foreground">
                                  {i === 1 ? "2 hours ago" : 
                                   i === 2 ? "Yesterday" :
                                   i === 3 ? "2 days ago" :
                                   i === 4 ? "3 days ago" :
                                   "1 week ago"}
                                </span>
                              </div>
                              <p className="text-sm text-muted-foreground mt-1">
                                {i === 1 ? "You submitted 'E-commerce Platform' to the marketplace." : 
                                 i === 2 ? "Sarah: 'This looks great! I'd love to collaborate on this project.'" :
                                 i === 3 ? "John: 'Hi, I'm interested in your services. Can we discuss further?'" :
                                 i === 4 ? "Your request 'Mobile App Development' received a new proposal." :
                                 "You donated $50 to 'Open Source UI Component Library'."}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full">
                        View All Activity
                      </Button>
                    </CardFooter>
                  </Card>
                  
                  {/* Upcoming Deadlines */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Upcoming Deadlines</CardTitle>
                      <CardDescription>
                        Projects and tasks due soon
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {[1, 2, 3].map((i) => (
                          <div key={i} className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                              <div className="p-2 rounded-full bg-muted">
                                <Calendar className="h-4 w-4 text-muted-foreground" />
                              </div>
                              <div>
                                <p className="text-sm font-medium">
                                  {i === 1 ? "Complete E-commerce Dashboard" : 
                                   i === 2 ? "Submit Project Proposal" :
                                   "Client Meeting"}
                                </p>
                                <p className="text-xs text-muted-foreground">
                                  {i === 1 ? "Project deadline" : 
                                   i === 2 ? "Proposal submission" :
                                   "Virtual meeting"}
                                </p>
                              </div>
                            </div>
                            <div className="text-sm">
                              <span className={`font-medium ${
                                i === 1 ? "text-red-500" : 
                                i === 2 ? "text-yellow-500" :
                                "text-muted-foreground"
                              }`}>
                                {i === 1 ? "Tomorrow" : 
                                 i === 2 ? "3 days" :
                                 "Next week"}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full">
                        View All Deadlines
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              )}
              
              {activeTab === "projects" && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold">My Projects</h2>
                    <Button>
                      <PlusCircle className="mr-2 h-4 w-4" />
                      Add New Project
                    </Button>
                  </div>
                  
                  <Tabs defaultValue="active">
                    <TabsList>
                      <TabsTrigger value="active">Active</TabsTrigger>
                      <TabsTrigger value="completed">Completed</TabsTrigger>
                      <TabsTrigger value="drafts">Drafts</TabsTrigger>
                    </TabsList>
                    <TabsContent value="active" className="mt-4">
                      <div className="space-y-4">
                        {[1, 2, 3].map((i) => (
                          <Card key={i}>
                            <CardHeader>
                              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                                <div>
                                  <CardTitle>
                                    {i === 1 ? "E-commerce Platform" : 
                                     i === 2 ? "Portfolio Website" :
                                     "Task Management App"}
                                  </CardTitle>
                                  <CardDescription className="mt-1">
                                    {i === 1 ? "A full-featured e-commerce platform with payment integration" : 
                                     i === 2 ? "A responsive portfolio website for a photographer" :
                                     "A task management application with team collaboration features"}
                                  </CardDescription>
                                </div>
                                <div className="flex flex-col items-end gap-1">
                                  <Badge className="bg-green-500 hover:bg-green-600">
                                    ACTIVE
                                  </Badge>
                                  <CardDescription>
                                    Updated {i === 1 ? "2 days ago" : i === 2 ? "1 week ago" : "3 days ago"}
                                  </CardDescription>
                                </div>
                              </div>
                            </CardHeader>
                            <CardContent>
                              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                                <div>
                                  <p className="text-sm text-muted-foreground">Category</p>
                                  <p className="font-medium">
                                    {i === 1 ? "Web Development" : 
                                     i === 2 ? "UI/UX Design" :
                                     "Mobile Apps"}
                                  </p>
                                </div>
                                <div>
                                  <p className="text-sm text-muted-foreground">Views</p>
                                  <p className="font-medium">
                                    {i === 1 ? "245" : 
                                     i === 2 ? "187" :
                                     "132"}
                                  </p>
                                </div>
                                <div>
                                  <p className="text-sm text-muted-foreground">Inquiries</p>
                                  <p className="font-medium">
                                    {i === 1 ? "12" : 
                                     i === 2 ? "8" :
                                     "5"}
                                  </p>
                                </div>
                                <div>
                                  <p className="text-sm text-muted-foreground">Status</p>
                                  <div className="flex items-center">
                                    <span className="h-2 w-2 rounded-full bg-green-500 mr-2"></span>
                                    <p className="font-medium">Published</p>
                                  </div>
                                </div>
                              </div>
                            </CardContent>
                            <CardFooter className="flex justify-between border-t pt-4">
                              <Button variant="outline" size="sm">
                                Edit Project
                              </Button>
                              <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                  <Button variant="ghost" size="sm">
                                    Actions
                                  </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                  <DropdownMenuItem>View Details</DropdownMenuItem>
                                  <DropdownMenuItem>View Analytics</DropdownMenuItem>
                                  <DropdownMenuItem>Promote Project</DropdownMenuItem>
                                  <DropdownMenuSeparator />
                                  <DropdownMenuItem className="text-red-500">
                                    Unpublish
                                  </DropdownMenuItem>
                                </DropdownMenuContent>
                              </DropdownMenu>
                            </CardFooter>
                          </Card>
                        ))}
                      </div>
                    </TabsContent>
                    <TabsContent value="completed" className="mt-4">
                      {/* Completed projects content */}
                    </TabsContent>
                    <TabsContent value="drafts" className="mt-4">
                      {/* Draft projects content */}
                    </TabsContent>
                  </Tabs>
                </div>
              )}
              
              {activeTab === "requests" && (
                <div className="space-y-6">
                  {/* My Requests content */}
                </div>
              )}
              
              {activeTab === "opportunities" && (
                <div className="space-y-6">
                  {/* Opportunities content */}
                </div>
              )}
              
              {activeTab === "donations" && (
                <div className="space-y-6">
                  {/* Donations content */}
                </div>
              )}
              
              {activeTab === "analytics" && (
                <div className="space-y-6">
                  {/* Analytics content */}
                </div>
              )}
              
              {activeTab === "settings" && (
                <div className="space-y-6">
                  {/* Settings content */}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}