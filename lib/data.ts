import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { IoIosAppstore } from "react-icons/io";
import { DiRuby } from "react-icons/di";
import { SiJavascript } from "react-icons/si";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import movieland from "@/public/movieland.png"
import seesailImg from "@/public/seesail.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
 
  {
    title: "Full-Stack Developer",
    location: "Copenhagen, DK",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma, MongoDB and Ruby on rails. I'm open to full-time opportunities.",
      icon: React.createElement(FaReact),
      date: "2023 - present",
  },
  {
    title: "Full-stack Developer",
    location: "Casablanca, MA",
    description:
      "After I graduated. I immediately started working a freelance for Bookanyboat. Here I worked on the MVC design pattern and integrated the DB. I implementated other services such authenctication using ruby on rails. Mantained code and wrote automted tests. ",
      icon: React.createElement(DiRuby),
      date: "2023",
  },
  {
    title: "Javascript Developer Element",
    location: "Remote, DK",
    description:
      "I worked as a JS front-end developer. I worked in a agile and energetic environment. My stack was HTML, CSSS, jQuery to add anchor navigations, live chats. I created SPA using reactjs by converting figma designs to web apps.",
    icon: React.createElement(SiJavascript),
    date: "2020",
  },
  {
    title: "IOS Developer IFS",
    location: "Copenhagen, DK",
    description:
      "As a junior developer, I worked on a flexible Electronic Flight Bag system. I worked on different customization and adjustments for our customers. App maintenance was done using git.",
    icon: React.createElement(IoIosAppstore),
    date: "2019",
  },
] as const;

export const projectsData = [
  {
    title: "Seesail",
    description:
      "Booking agents can browse through boats that are available for booking. And boat owners can validate and approve.",
    tags: ["Ruby", "Ruby on Rails", "HTML5", "CSS3", "Javascript", "Mysql", "Sass"],
    imageUrl: seesailImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "MovieLand",
    description:
      "A public web app for movie fans. It shows movies from imbdb database, posters, titles and release.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: movieland,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
  "Agile",
  "Ancible",
  "Puppet",
  "PHP",
  "Nginx",
  "Chef",
  "CI/CD pipelines",
  "C++",
  "Kubernetes",
  "Linux",
  "AWS",
  "Azure",
  "Docker",
  "Jenkins",
  "SonarQube",
  "Nexus",
  "Artifactory"
] as const;
