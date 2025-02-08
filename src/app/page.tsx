import '../app/globals.css';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, User, FileText } from "lucide-react";
import {
  RegisterLink,
  LoginLink,
  getKindeServerSession,
  LogoutLink
} from "@kinde-oss/kinde-auth-nextjs/server";

export default function HackathonLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Navbar */}
      <nav className="p-4 bg-gray-900 text-white flex justify-between items-center shadow-lg">
        <h1 className="text-2xl font-bold">Hackathon Builder</h1>
        <div className="space-x-4">
          <LoginLink className="border-white text-white hover:bg-white hover:text-gray-900">Login</LoginLink>
          <RegisterLink className="bg-blue-600 hover:bg-blue-700">Register</RegisterLink>
        </div>
      </nav>

      {/* Sidebar + Main Content */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-64 bg-white p-6 shadow-md">
          <ul className="space-y-4 text-gray-700 font-medium">
            <li className="flex items-center space-x-2 p-2 hover:bg-gray-200 rounded-md cursor-pointer">
              <Home size={20} /> <span>Home</span>
            </li>
            <li className="flex items-center space-x-2 p-2 hover:bg-gray-200 rounded-md cursor-pointer">
              <FileText size={20} /> <span>Projects</span>
            </li>
            <li className="flex items-center space-x-2 p-2 hover:bg-gray-200 rounded-md cursor-pointer">
              <User size={20} /> <span>Profile</span>
            </li>
          </ul>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8 bg-gray-50">
          <h2 className="text-3xl font-semibold mb-6 text-gray-800">Welcome to the Hackathon!</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="shadow-lg hover:shadow-xl transition duration-200">
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-bold text-gray-900">Create a Project</h3>
                <Button className="mt-4 bg-blue-600 hover:bg-blue-700">Start Now</Button>
              </CardContent>
            </Card>
            <Card className="shadow-lg hover:shadow-xl transition duration-200">
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-bold text-gray-900">Join a Team</h3>
                <Button className="mt-4 bg-green-600 hover:bg-green-700">Explore Teams</Button>
              </CardContent>
            </Card>
            <Card className="shadow-lg hover:shadow-xl transition duration-200">
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-bold text-gray-900">View Schedule</h3>
                <Button className="mt-4 bg-purple-600 hover:bg-purple-700">See Events</Button>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}
