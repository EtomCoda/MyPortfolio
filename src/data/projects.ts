import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: 'Blockchain Voting System',
    description: 'A Proof of Concept (POC) blockchain-based voting system that provides secure, time-based voting using Solidity and Hardhat. It includes features like user registration, voting, and result tallying.',
    technologies: ['Solidity', 'TypeScript', 'JavaScript', 'Ganache', 'Truffle'],
    githubUrl: 'https://github.com/EtomCoda/Voting-System-Smart-Contract',
  },
  {
    id: 2,
    title: 'Gas ordering system',
    description: 'E-commerce gas ordering website built with NextJS. Features include authentication, product management, order processing, and payment integration.',
    technologies: ['NextJS', 'TypeScript', 'Supabase'],
    githubUrl: 'https://github.com/EtomCoda/BobchiWebApp',
  },
  {
    id: 3,
    title: 'Polls Voting Application',
    description: 'A poll creating and voting app for opinions of all kinds.',
    technologies: ['React Native', 'TypeScript', 'Supabase'],
    githubUrl: 'https://github.com/EtomCoda/Unlimited_polls',
  },
  
];
