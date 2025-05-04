import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: 'Blockchain Voting System',
    description: 'A robust RESTful API built with NestJS for an e-commerce platform. Features include authentication, product management, order processing, and payment integration.',
    technologies: ['NestJS', 'TypeScript', 'PostgreSQL', 'JWT', 'Swagger'],
    githubUrl: 'https://github.com/EtomCoda/Voting-System-Smart-Contract',
  },
  {
    id: 2,
    title: 'Gas ordering system',
    description: 'A microservice architecture for task management using NestJS. Includes user management, task creation and assignment, notifications, and reporting.',
    technologies: ['NestJS', 'TypeScript', 'MongoDB', 'RabbitMQ', 'Docker'],
    githubUrl: 'https://github.com/EtomCoda/BobchiWebApp',
  },
  {
    id: 3,
    title: 'Polls Voting Application',
    description: 'A scalable WebSocket-based chat API built with NestJS. Supports private messaging, group chats, message history, and user presence.',
    technologies: ['NestJS', 'TypeScript', 'Socket.io', 'Redis', 'MongoDB'],
    githubUrl: 'https://github.com/EtomCoda/Unlimited_polls',
  },
  {
    id: 4,
    title: 'Blog Platform Backend',
    description: 'A feature-rich backend for a blog platform with content management, user authentication, commenting system, and analytics.',
    technologies: ['NestJS', 'TypeScript', 'PostgreSQL', 'TypeORM', 'AWS S3'],
    githubUrl: 'https://github.com/yourusername/blog-platform',
  },
];