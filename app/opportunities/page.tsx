import Link from "next/link"
import { Search, Filter, Briefcase, Clock, MapPin, DollarSign } from "lucide-react"
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

const opportunities = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    company: "TechCorp Inc.",
    location: "Remote",
    type: "Full-time",
    salary: "$90,000 - $120,000",
    description: "We're looking for a Senior Frontend Developer with expertise in React, TypeScript, and modern frontend frameworks to join our growing team.",
    skills: ["React", "TypeScript", "Redux", "CSS-in-JS"],
    postedDate: "2 days ago",
    deadline: "30 days remaining",
  },
  {
    id: 2,
    title: "Backend Engineer",
    company: "DataSystems",
    location: "New York, NY",
    type: "Full-time",
    salary: "$100,000 - $130,000",
    description: "Join our backend team to build scalable APIs and microservices for our enterprise clients using Node.js and PostgreSQL.",
    skills: ["Node.js", "Express", "PostgreSQL", "Docker"],
    postedDate: "1 week ago",
    deadline: "14 days remaining",
  },
  {
    id: 3,
    title: "Mobile App Developer",
    company: "AppWorks",
    location: "Remote",
    type: "Contract",
    salary: "$70/hour",
    description: "Looking for a mobile developer to create a cross-platform app for iOS and Android using React Native or Flutter.",
    skills: ["React Native", "Flutter", "Firebase", "Mobile UI/UX"],
    postedDate: "3 days ago",
    deadline: "21 days remaining",
  },
  {
    id: 4,
    title: "DevOps Engineer",
    company: "CloudTech Solutions",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$110,000 - $140,000",
    description: "Help us build and maintain our cloud infrastructure, CI/CD pipelines, and deployment processes using AWS and Kubernetes.",
    skills: ["AWS", "Kubernetes", "Docker", "CI/CD", "Terraform"],
    postedDate: "5 days ago",
    deadline: "25 days remaining",
  },
  {
    id: 5,
    title: "UI/UX Designer",
    company: "DesignHub",
    location: "Remote",
    type: "Part-time",
    salary: "$50/hour",
    description: "Join our design team to create beautiful and intuitive user interfaces for web and mobile applications.",
    skills: ["Figma", "Adobe XD", "UI Design", "User Research"],
    postedDate: "1 day ago",
    deadline: "15 days remaining",
  },
  {
    id: 6,
    title: "Data Scientist",
    company: "AnalyticsPro",
    location: "Boston, MA",
    type: "Full-time",
    salary: "$95,000 - $125,000",
    description: "We're seeking a data scientist to analyze large datasets and build machine learning models to drive business insights.",
    skills: ["Python", "Machine Learning", "SQL", "Data Visualization"],
    postedDate: "4 days ago",
    deadline: "28 days remaining",
  },
]

const jobTypes = ["Full-time", "Part-time", "Contract", "Freelance", "Internship"]
const locations = ["Remote", "On-site", "Hybrid"]
const experienceLevels = ["Entry Level", "Mid Level", "Senior", "Lead", "Manager"]

export default function OpportunitiesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="container py-8">
        <div className="flex flex-col space-y-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Work Opportunities</h1>
              <p className="text-muted-foreground">Find freelance projects, full-time positions, and collaboration opportunities.</p>
            </div>
            <Button asChild>
              <Link href="/opportunities/post">
                Post a Job
              </Link>
            </Button>
          </div>
          
          <Tabs defaultValue="all" className="mt-6">
            <TabsList className="grid w-full grid-cols-4 md:w-[600px]">
              <TabsTrigger value="all">All Jobs</TabsTrigger>
              <TabsTrigger value="full-time">Full-time</TabsTrigger>
              <TabsTrigger value="freelance">Freelance</TabsTrigger>
              <TabsTrigger value="remote">Remote</TabsTrigger>
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
                        <h4 className="text-sm font-medium">Job Type</h4>
                        <div className="space-y-1">
                          {jobTypes.map((type) => (
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
                        <h4 className="text-sm font-medium">Location</h4>
                        <div className="space-y-1">
                          {locations.map((location) => (
                            <div key={location} className="flex items-center space-x-2">
                              <input
                                type="checkbox"
                                id={location.toLowerCase().replace(/\s+/g, '-')}
                                className="h-4 w-4 rounded border-gray-300"
                              />
                              <label
                                htmlFor={location.toLowerCase().replace(/\s+/g, '-')}
                                className="text-sm font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                {location}
                              </label>
                            </div>
                          ))}
                        </div>
                      </div>
                      <Separator />
                      <div className="space-y-2">
                        <h4 className="text-sm font-medium">Experience Level</h4>
                        <div className="space-y-1">
                          {experienceLevels.map((level) => (
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
                        <h4 className="text-sm font-medium">Salary Range</h4>
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
                
                {/* Opportunities List */}
                <div className="space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="relative w-full sm:w-[300px]">
                      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input
                        type="search"
                        placeholder="Search jobs..."
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
                          <SelectItem value="salary-high">Salary: High to Low</SelectItem>
                          <SelectItem value="salary-low">Salary: Low to High</SelectItem>
                          <SelectItem value="deadline">Deadline: Soonest First</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    {opportunities.map((job) => (
                      <Card key={job.id}>
                        <CardHeader>
                          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                            <div>
                              <CardTitle className="text-xl">
                                <Link href={`/opportunities/${job.id}`} className="hover:underline">
                                  {job.title}
                                </Link>
                              </CardTitle>
                              <CardDescription className="flex items-center mt-1">
                                <span className="font-medium">{job.company}</span>
                              </CardDescription>
                              <div className="flex flex-wrap gap-2 mt-2">
                                {job.skills.map((skill) => (
                                  <Badge key={skill} variant="secondary">{skill}</Badge>
                                ))}
                              </div>
                            </div>
                            <div className="flex flex-col items-end gap-1">
                              <Badge variant="outline" className="mb-1">
                                {job.type}
                              </Badge>
                              <CardDescription>
                                Posted {job.postedDate}
                              </CardDescription>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground line-clamp-2 mb-4">
                            {job.description}
                          </p>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="flex items-center">
                              <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
                              <span className="text-sm font-medium">{job.location}</span>
                            </div>
                            <div className="flex items-center">
                              <DollarSign className="h-4 w-4 mr-2 text-muted-foreground" />
                              <span className="text-sm font-medium">{job.salary}</span>
                            </div>
                            <div className="flex items-center">
                              <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                              <span className="text-sm font-medium">{job.deadline}</span>
                            </div>
                          </div>
                        </CardContent>
                        <CardFooter className="flex justify-end border-t pt-4">
                          <Button asChild>
                            <Link href={`/opportunities/${job.id}`}>
                              Apply Now
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
            
            <TabsContent value="full-time" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-6">
                {/* Same filters as "all" tab */}
                <div className="space-y-6">
                  {/* Filters content (same as above) */}
                </div>
                
                {/* Filtered opportunities list */}
                <div className="space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    {/* Search and sort (same as above) */}
                  </div>
                  
                  <div className="space-y-4">
                    {opportunities
                      .filter(job => job.type === "Full-time")
                      .map((job) => (
                        <Card key={job.id}>
                          {/* Job card content (same as above) */}
                        </Card>
                      ))}
                  </div>
                  
                  <div className="flex justify-center mt-8">
                    {/* Pagination (same as above) */}
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="freelance" className="mt-6">
              {/* Similar structure to "all" tab but filtered for freelance jobs */}
            </TabsContent>
            
            <TabsContent value="remote" className="mt-6">
              {/* Similar structure to "all" tab but filtered for remote jobs */}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}