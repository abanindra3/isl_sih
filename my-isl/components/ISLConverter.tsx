'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Mic, Type, HandMetal, User, LogIn, Globe, Home, Book, Settings, HelpCircle, Video, Users } from 'lucide-react'
import { SignIn } from '@/components/SignIn'
import { SignUp } from '@/components/SignUp'

export default function Component() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [activeTab, setActiveTab] = useState('home')
  const [targetLanguage, setTargetLanguage] = useState('english')
  const [childAge, setChildAge] = useState([5])

  const handleConvert = (type: string) => {
    // Placeholder for conversion logic
    console.log(`Converting ${type}`)
  }

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoggedIn(true)
  }

  const handleSignup = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Placeholder for signup logic
    console.log('Signing up')
  }

  const handleGoogleSignIn = () => {
    // Placeholder for Google Sign-In logic
    console.log('Signing in with Google')
    setIsLoggedIn(true)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex flex-col">
      <nav className="bg-indigo-700 text-white shadow-md p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">ISL Converter</h1>
          <div className="flex space-x-4">
            <Button variant="ghost" className="text-white hover:text-indigo-200" onClick={() => setActiveTab('home')}>
              <Home className="mr-2 h-4 w-4" />
              Home
            </Button>
            <Button variant="ghost" className="text-white hover:text-indigo-200" onClick={() => setActiveTab('audio-to-isl')}>
              <Mic className="mr-2 h-4 w-4" />
              Audio to ISL
            </Button>
            <Button variant="ghost" className="text-white hover:text-indigo-200" onClick={() => setActiveTab('text-to-isl')}>
              <Type className="mr-2 h-4 w-4" />
              Text to ISL
            </Button>
            <Button variant="ghost" className="text-white hover:text-indigo-200" onClick={() => setActiveTab('isl-to-text')}>
              <HandMetal className="mr-2 h-4 w-4" />
              ISL to Text
            </Button>
            <Button variant="ghost" className="text-white hover:text-indigo-200" onClick={() => setActiveTab('children')}>
              <Book className="mr-2 h-4 w-4" />
              For Children
            </Button>
            <Button variant="ghost" className="text-white hover:text-indigo-200" onClick={() => setActiveTab('profile')}>
              <User className="mr-2 h-4 w-4" />
              Profile
            </Button>
          </div>
        </div>
      </nav>

      <main className="flex-grow container mx-auto p-8">
        <Card className="w-full bg-white bg-opacity-90 backdrop-blur-lg shadow-xl">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-center text-indigo-800">Indian Sign Language Converter</CardTitle>
            <CardDescription className="text-center text-indigo-600">Bridging communication gaps with cutting-edge technology</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsContent value="home">
                <div className="space-y-6">
                  <div className="text-center">
                    <h2 className="text-3xl font-semibold text-indigo-800 mb-4">Welcome to ISL Converter</h2>
                    <p className="text-lg text-gray-700 mb-8">Empowering communication through innovative sign language technology</p>
                  </div>
                  <div className="grid md:grid-cols-2 gap-8">
                    <Card className="bg-gradient-to-br from-blue-100 to-indigo-100 hover:shadow-lg transition-shadow duration-300">
                      <CardHeader>
                        <CardTitle className="text-xl font-semibold text-indigo-700">Audio to ISL</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-700">Convert spoken words into Indian Sign Language animations in real-time.</p>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white" onClick={() => setActiveTab('audio-to-isl')}>
                          <Mic className="mr-2 h-4 w-4" />
                          Try Now
                        </Button>
                      </CardFooter>
                    </Card>
                    <Card className="bg-gradient-to-br from-purple-100 to-pink-100 hover:shadow-lg transition-shadow duration-300">
                      <CardHeader>
                        <CardTitle className="text-xl font-semibold text-indigo-700">Text to ISL</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-700">Transform written text into clear and accurate Indian Sign Language visuals.</p>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white" onClick={() => setActiveTab('text-to-isl')}>
                          <Type className="mr-2 h-4 w-4" />
                          Try Now
                        </Button>
                      </CardFooter>
                    </Card>
                    <Card className="bg-gradient-to-br from-green-100 to-teal-100 hover:shadow-lg transition-shadow duration-300">
                      <CardHeader>
                        <CardTitle className="text-xl font-semibold text-indigo-700">ISL to Text</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-700">Interpret Indian Sign Language and convert it into written text with multiple language options.</p>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white" onClick={() => setActiveTab('isl-to-text')}>
                          <HandMetal className="mr-2 h-4 w-4" />
                          Try Now
                        </Button>
                      </CardFooter>
                    </Card>
                    <Card className="bg-gradient-to-br from-yellow-100 to-orange-100 hover:shadow-lg transition-shadow duration-300">
                      <CardHeader>
                        <CardTitle className="text-xl font-semibold text-indigo-700">ISL Learning</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-700">Interactive lessons and games to help children and adults learn Indian Sign Language.</p>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white" onClick={() => setActiveTab('children')}>
                          <Book className="mr-2 h-4 w-4" />
                          Start Learning
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="audio-to-isl">
                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold text-indigo-800 mb-4">Audio to Indian Sign Language</h2>
                  <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white">
                    <Mic className="mr-2 h-4 w-4" />
                    Start Recording
                  </Button>
                  <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                    [ISL Animation Placeholder]
                  </div>
                  <Button onClick={() => handleConvert('audio-to-isl')} className="w-full bg-indigo-600 hover:bg-indigo-700 text-white">Convert</Button>
                </div>
              </TabsContent>
              <TabsContent value="text-to-isl">
                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold text-indigo-800 mb-4">Text to Indian Sign Language</h2>
                  <Textarea placeholder="Enter text to convert to ISL" className="w-full p-2 border border-indigo-300 rounded-md focus:ring-2 focus:ring-indigo-500" />
                  <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                    [ISL Animation Placeholder]
                  </div>
                  <Button onClick={() => handleConvert('text-to-isl')} className="w-full bg-indigo-600 hover:bg-indigo-700 text-white">Convert</Button>
                </div>
              </TabsContent>
              <TabsContent value="isl-to-text">
                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold text-indigo-800 mb-4">Indian Sign Language to Text</h2>
                  <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                    [ISL Input Placeholder]
                  </div>
                  <div className="flex space-x-2">
                    <Select value={targetLanguage} onValueChange={setTargetLanguage}>
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select language" />
                    </SelectTrigger>
                    <SelectContent style={{ backgroundColor: 'black', color: 'white' }}>
                      <SelectItem value="english" style={{ color: 'white' }}>English</SelectItem>
                      <SelectItem value="hindi" style={{ color: 'white' }}>Hindi</SelectItem>
                      <SelectItem value="marathi" style={{ color: 'white' }}>Marathi</SelectItem>
                      <SelectItem value="tamil" style={{ color: 'white' }}>Tamil</SelectItem>
                      <SelectItem value="gujrati" style={{ color: 'white' }}>Gujrati</SelectItem>
                      <SelectItem value="bhojpuri" style={{ color: 'white' }}>Bhojpuri</SelectItem>
                      <SelectItem value="maithili" style={{ color: 'white' }}>Maithili</SelectItem>
                      <SelectItem value="oriya" style={{ color: 'white' }}>Oriya</SelectItem>
                    </SelectContent>
                    </Select>
                    <Button onClick={() => handleConvert('isl-to-text')} className="flex-grow bg-indigo-600 hover:bg-indigo-700 text-white">
                      <Globe className="mr-2 h-4 w-4" />
                      Convert and Translate
                    </Button>
                  </div>
                  <Textarea placeholder="Converted and translated text will appear here" className="w-full p-2 border border-indigo-300 rounded-md focus:ring-2 focus:ring-indigo-500" readOnly />
                </div>
              </TabsContent>
              <TabsContent value="children">
                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold text-indigo-800 mb-4">ISL Learning for Children</h2>
                  <p className="text-gray-700">Select your child's age range to get started with age-appropriate ISL learning materials:</p>
                  <div className="space-y-2">
                    <Label htmlFor="age-range" className="text-indigo-700">Age Range</Label>
                    <Slider
                      id="age-range"
                      min={2}
                      max={15}
                      step={1}
                      value={childAge}
                      onValueChange={setChildAge}
                      className="w-full"
                    />
                    <div className="text-center font-semibold text-indigo-700">
                      {childAge[0]} years old
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <Card className="bg-gradient-to-br from-green-100 to-teal-100 hover:shadow-lg transition-shadow duration-300">
                      <CardHeader>
                        <CardTitle className="text-xl font-semibold text-indigo-700">Basic Signs</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-700">Learn common signs for everyday objects and actions.</p>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white">Start Learning</Button>
                      </CardFooter>
                    </Card>
                    <Card className="bg-gradient-to-br from-yellow-100 to-orange-100 hover:shadow-lg transition-shadow duration-300">
                      <CardHeader>
                        <CardTitle className="text-xl font-semibold text-indigo-700">Fun Games</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-700">Play interactive games to practice ISL in a fun way.</p>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white">Play Now</Button>
                      </CardFooter>
                    </Card>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="profile">
                {isLoggedIn ? (
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <Avatar className="h-20 w-20">
                        <AvatarImage src="/placeholder.svg?height=80&width=80" alt="Profile picture" />
                        <AvatarFallback>UN</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="text-2xl font-semibold text-indigo-800">User Name</h3>
                        <p className="text-gray-600">user@example.com</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <Card className="bg-gradient-to-br from-blue-100 to-indigo-100 hover:shadow-lg transition-shadow duration-300">
                        <CardHeader>
                          <CardTitle className="text-xl font-semibold text-indigo-700">Learning Progress</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-700">You've learned 50 signs this week!</p>
                          <div className="mt-2 h-2 w-full bg-gray-200 rounded-full">
                            <div className="h-full w-1/2 bg-indigo-600 rounded-full"></div>
                          </div>
                        </CardContent>
                      </Card>
                      <Card className="bg-gradient-to-br from-purple-100 to-pink-100 hover:shadow-lg transition-shadow duration-300">
                        <CardHeader>
                          <CardTitle className="text-xl font-semibold text-indigo-700">Conversion History</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-700">You've made 20 conversions this month.</p>
                          <ul className="mt-2 space-y-1">
                            <li className="text-sm text-gray-600">Audio to ISL: 8</li>
                            <li className="text-sm text-gray-600">Text to ISL: 7</li>
                            <li className="text-sm text-gray-600">ISL to Text: 5</li>
                          </ul>
                        </CardContent>
                      </Card>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <Card className="bg-gradient-to-br from-green-100 to-teal-100 hover:shadow-lg transition-shadow duration-300">
                        <CardHeader>
                          <CardTitle className="text-xl font-semibold text-indigo-700">Achievements</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2">
                            <li className="flex items-center">
                              <span className="mr-2 text-yellow-500">🏆</span>
                              <span className="text-gray-700">100 Signs Mastered</span>
                            </li>
                            <li className="flex items-center">
                              <span className="mr-2 text-blue-500">🎓</span>
                              <span className="text-gray-700">Beginner Course Completed</span>
                            </li>
                          </ul>
                        </CardContent>
                      </Card>
                      <Card className="bg-gradient-to-br from-yellow-100 to-orange-100 hover:shadow-lg transition-shadow duration-300">
                        <CardHeader>
                          <CardTitle className="text-xl font-semibold text-indigo-700">Settings</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-2">
                            <Button variant="outline" className="w-full text-indigo-700 hover:bg-indigo-50">
                              <Settings className="mr-2 h-4 w-4" />
                              Account Settings
                            </Button>
                            <Button variant="outline" className="w-full text-indigo-700 hover:bg-indigo-50">
                              <HelpCircle className="mr-2 h-4 w-4" />
                              Help & Support
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </div>


                  <Button>
                  onClick={() => setIsLoggedIn(false)} 
                  variant="outline" 
                  className="w-full text-indigo-700 hover:bg-indigo-50"
                
                  Log Out
                </Button>
                </div>
                ) : (
                <Tabs defaultValue="login" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="login">Login</TabsTrigger>
                    <TabsTrigger value="signup">Sign Up</TabsTrigger>
                  </TabsList>

                  {/* Login Tab */}
                  <TabsContent value="login">
                    <SignIn onSuccess={handleAuthSuccess} />
                    
                    <div className="relative mt-4">
                      <div className="absolute inset-0 flex items-center">
                        <span className="w-full border-t border-gray-300" />
                      </div>
                      <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-white px-2 text-gray-500">
                          Or continue with
                        </span>
                      </div>
                    </div>
                    <Button 
                      type="button" 
                      variant="outline" 
                      className="w-full mt-4 border-indigo-300 text-indigo-700 hover:bg-indigo-50" 
                      onClick={handleGoogleSignIn}
                    >
                      <svg 
                        className="mr-2 h-4 w-4" 
                        aria-hidden="true" 
                        focusable="false" 
                        data-prefix="fab" 
                        data-icon="google" 
                        role="img" 
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 488 512"
                      >
                        <path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path>
                      </svg>
                      Sign in with Google
                    </Button>
                  </TabsContent>

                  {/* Sign-Up Tab */}
                  <TabsContent value="signup">
                    <SignUp onSuccess={handleAuthSuccess} />
                    <div className="relative mt-4">
                      <div className="absolute inset-0 flex items-center">
                        <span className="w-full border-t border-gray-300" />
                      </div>
                      <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-white px-2 text-gray-500">
                          Or continue with
                        </span>
                      </div>
                    </div>
                    <Button 
                      type="button" 
                      variant="outline" 
                      className="w-full mt-4 border-indigo-300 text-indigo-700 hover:bg-indigo-50" 
                      onClick={handleGoogleSignIn}
                    >
                      <svg 
                        className="mr-2 h-4 w-4" 
                        aria-hidden="true" 
                        focusable="false" 
                        data-prefix="fab" 
                        data-icon="google" 
                        role="img" 
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 488 512"
                      >
                        <path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path>
                      </svg>
                      Sign up with Google
                    </Button>
                  </TabsContent>
                </Tabs>
                )}



              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </main>

      <footer className="bg-indigo-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About ISL Converter</h3>
              <p className="text-sm">Our mission is to break communication barriers and promote inclusivity through innovative technology.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-indigo-300">Home</a></li>
                <li><a href="#" className="hover:text-indigo-300">Audio to ISL</a></li>
                <li><a href="#" className="hover:text-indigo-300">Text to ISL</a></li>
                <li><a href="#" className="hover:text-indigo-300">ISL to Text</a></li>
                <li><a href="#" className="hover:text-indigo-300">For Children</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <p className="text-sm">Email: sih24@islconverter.com</p>
              <p className="text-sm">Phone: +91 8102913680</p>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="text-white hover:text-indigo-300">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-indigo-300">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-indigo-300">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-indigo-700 pt-8 text-sm text-center">
            © 2024 ISL Converter. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}