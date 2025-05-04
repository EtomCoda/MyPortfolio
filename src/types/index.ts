export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
  githubUrl?: string;
  liveUrl?: string;
}

export interface Skill {
  name: string;
  level: number; // 1-5
  category: 'backend' | 'frontend' | 'database' | 'devops' | 'other';
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export type ThemeMode = 'light' | 'dark';