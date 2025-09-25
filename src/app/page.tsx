"use client";

import {
 RocketIcon,
 LightbulbIcon,
 LayoutDashboardIcon,
 UsersIcon,
} from "lucide-react";

const features = [
 {
  icon: <RocketIcon className="text-white size-5" />,
  bg: "bg-blue-500",
  title: "Instant Slides",
  desc: "AI generates slides instantly from your topic.",
 },
 {
  icon: <LightbulbIcon className="text-white size-5" />,
  bg: "bg-yellow-400",
  title: "Smart Suggestions",
  desc: "Get smart layout and content ideas.",
 },
 {
  icon: <LayoutDashboardIcon className="text-white size-5" />,
  bg: "bg-green-500",
  title: "Custom Layouts",
  desc: "Choose or customize your slide templates.",
 },
 {
  icon: <UsersIcon className="text-white size-5" />,
  bg: "bg-purple-500",
  title: "Team Collaboration",
  desc: "Invite others to build and review your slides.",
 },
];

import Link from "next/link";
import { Button } from "@/components/ui/button";
import ThemeSwitcher from "@/components/global/mode-toggle";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Home() {
 return (
  <main className="min-h-screen bg-white text-black dark:bg-[#1c1c1c] dark:text-white">
   {/* Navbar */}
   <header className="relative flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-white/10">
    {/* Logo */}
    <div className="absolute left-6">
     <Link href="/" className="flex items-center gap-2">
      <div className="flex aspect-square size-8 items-center justify-center rounded-lg text-sidebar-primary-foreground">
       <Avatar className="h-10 w-10 rounded-full">
        <AvatarImage src={"/vivid.svg"} alt={`vivid-logo`} />
        <AvatarFallback className="rounded-lg">VI</AvatarFallback>
       </Avatar>
      </div>
      <span className="truncate text-primary text-3xl font-semibold">
       Vivid
      </span>
     </Link>
    </div>

    {/* Centered Nav */}
    <nav className="mx-auto flex gap-6 text-sm items-center">
     <Link href="/" className="hover:text-blue-500 transition">
      Home
     </Link>
     <Link href="/about" className="hover:text-blue-500 transition">
      About
     </Link>
     <Link href="/dashboard" className="hover:text-blue-500 transition">
      Dashboard
     </Link>
    </nav>
    <ThemeSwitcher />
   </header>

   {/* Hero */}
   <section className="text-center px-4 py-20 max-w-4xl mx-auto">
    <p className="text-sm uppercase tracking-wide text-blue-400 mb-4">
     Create Smarter Presentations
    </p>
    <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
     AI-Powered Presentation Builder for Everyone
    </h1>
    <p className="text-gray-600 dark:text-gray-400 text-lg mb-8">
     Build stunning, professional presentations in seconds using AI. Just
     describe your topic — we’ll handle the rest.
    </p>
    <div className="flex justify-center gap-4">
     <Button>
      <Link href="/dashboard">Get Started</Link>
     </Button>
     <Button variant="outline" asChild>
      <Link href="/about">Learn More</Link>
     </Button>
    </div>
   </section>

   {/* Features */}
   <section className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6 pb-24 max-w-7xl mx-auto">
    {features.map((feature, index) => (
     <Card
      key={index}
      className="hover:shadow-lg hover:border-primary transition-shadow duration-200 border-muted bg-background"
     >
      <CardContent className="p-6">
       <div className={`rounded-xl p-3 w-fit mb-4 ${feature.bg}`}>
        {feature.icon}
       </div>
       <h3 className="text-lg font-semibold mb-1">{feature.title}</h3>
       <p className="text-muted-foreground text-sm">{feature.desc}</p>
      </CardContent>
     </Card>
    ))}
   </section>
  </main>
 );
}

function FeatureCard({
 icon,
 title,
 desc,
}: {
 icon: React.ReactNode;
 title: string;
 desc: string;
}) {
 return (
  <div className="bg-gray-100 dark:bg-[#2a2a2a] rounded-xl p-6 shadow hover:shadow-lg transition">
   <div className="mb-4">{icon}</div>
   <h3 className="text-lg font-semibold mb-2 dark:text-white text-black">
    {title}
   </h3>
   <p className="text-sm text-gray-600 dark:text-gray-400">{desc}</p>
  </div>
 );
}
