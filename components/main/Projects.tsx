import React from "react";
import ProjectCard from "./sub/ProjectCard";

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <h1
        className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r
       from-purple-500 to-cyan-500 py-20"
      >
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/P1.png"
          title="Space Themed Portfolio"
          description="Personal portfolio built using React.js, TypeScript, and TailwindCSS. 
          This is a clean, fast, and responsive front-end project 
          that showcases my work, personal brand, and contact information."
        />
        <ProjectCard
          src="/A.png"
          title="NovaAI Landing Page"
          description="Nova is a cutting-edge React and TypeScript-based landing page template designed for AI products, services, and startups."
        />
      </div>
    </div>
  );
};

export default Projects;
