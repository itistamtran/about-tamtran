import React from "react";
import { Link } from "react-router-dom";

const projects = [
    {
        id: 1,
        title: "Library System Developed",
        imageUrl: process.env.PUBLIC_URL +  "/assets/images/cpp-library-2.png", // Ensure images are in /public/assets/images
        tags: ["2024", "DEV", "NextJS", "MaterialUI", "TailwindCSS"],
        link: "/projects/CPPlibrary"
    },
    {
        id: 2,
        title: "Math of Operations Research",
        imageUrl: process.env.PUBLIC_URL + "/assets/images/operations-research.png",
        tags: ["2024", "MatLab", "Mathematical Modeling"],
        link: "/projects/OperationsResearch"
    },
    {
        id: 3,
        title: "Brain Tumor Detected",
        imageUrl: process.env.PUBLIC_URL + "/assets/images/brain-tumor-detected.jpg",
        tags: ["Coming 2025", "Machine Learning", "Python", "TensorFlow", "Scikit-learn", "Keras"],
        link: "/projects/BrainTumorDetected"
    }
];

export default function ProjectsPage() {
    return (
        <div className="min-h-screen flex flex-col w-full bg-[#1f1f1f] p-12">
            <h1 className="mb-10 text-3xl font-bold text-center text-gray-200">My Projects</h1>
            
            <div className="grid w-full max-w-6xl grid-cols-1 gap-20 px-4 mx-auto sm:grid-cols-2 md:grid-cols-3">
                {projects.map((project) => (
                    <Link to={project.link} key={project.id} className="relative block transition duration-300 transform hover:scale-105">
                        <div className="mt-6 gray-900 rounded-xl shadow-lg p-8 w-[350px] h-[450px] rotate-3 hover:rotate-0 transition duration-300 shadow-green-300">
                            <img 
                                src={project.imageUrl} 
                                alt={project.title} 
                                style={{
                                    objectFit: 'cover', 
                                    width: '100%', 
                                    borderRadius: '8px', 
                                    height: '208px' 
                                }} 
                            />
                            <h2 style={{ marginTop: '50px', fontWeight: 'bold', color: '#4ADE80', fontSize: '1.3rem' }}>{project.title}</h2>
                            <div className="flex flex-wrap gap-2 mt-2">
                                {project.tags.map((tag, index) => (
                                    <span key={index} className="px-3 py-1 text-sm font-semibold text-[#1f1f1f] bg-[#4ADE80] rounded">{tag}</span>
                                ))}
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
