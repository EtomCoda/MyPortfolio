import { Project } from '../types';
export const projects: Project[] = [
  {
    id: 1,
    title: 'Blockchain Voting System',
    description: 'A Proof of Concept (POC) blockchain-based voting system that provides secure, time-based voting using Solidity and Hardhat. It includes features like user registration, voting, and result tallying.',
    technologies: ['Solidity', 'TypeScript', 'JavaScript', 'Ganache', 'Truffle'],
    images: ['/images/metransparent.png' ],
    githubUrl: 'https://github.com/EtomCoda/Voting-System-Smart-Contract',
  },
  {
    id: 2,
    title: 'Gas ordering system',
    description: 'E-commerce gas ordering website built with NextJS. Features include authentication, product management, order processing, and payment integration.',
    technologies: ['NextJS', 'TypeScript', 'Supabase'],
    images: ['/images/metransparent.png'], 
    githubUrl: 'https://github.com/EtomCoda/BobchiWebApp',
    liveUrl: 'https://bobchiwebapp.vercel.app/',
  },
  {
    id: 3,
    title: 'Polls Voting Application',
    description: 'A poll creating and voting app for opinions of all kinds.',
    technologies: ['React Native', 'TypeScript', 'Supabase'],
    images: ['/images/metransparent.png'], 
    githubUrl: 'https://github.com/EtomCoda/Unlimited_polls',
  },
  {
    id: 4,
    title: 'Investment Guide Application',
    description: 'A diverse investment guide system that determines users risk appetite and provides tailored investment options.',
    technologies: ['HTML', 'CSS', 'Django', 'Python', 'Render'],
     images: ['/images/investguidelogic.png', '/images/investguideform.png', '/images/investguideappetite.png', '/images/investguideassets.png'],
    githubUrl: 'https://github.com/EtomCoda/InvestorProfiler-Backend',
    
  },
  
];
