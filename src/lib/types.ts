export interface PersonalInfo {
  name: string;
  title: string;
  subtitle: string;
  description?: string;
  email: string;
  phone: string;
  status: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  image: string;
  icon?: string;
  technologies: string[];
  category: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  year: string;
}

export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface Experience {
  id: string;
  position: string;
  company: string;
  period: string;
  description: string;
}

export interface Social {
  linkedin: string;
  github: string;
}

export interface PortfolioData {
  personal: PersonalInfo;
  projects: Project[];
  services: Service[];
  experience: Experience[];
  skills: string[];
  social: Social;
}