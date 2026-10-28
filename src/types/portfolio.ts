export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  keyPoints?: string[];
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
  category: 'Full Stack' | 'Mobile' | 'Web' | 'Systems';
  featured: boolean;
  image?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  bullets: string[];
  tech: string[];
}

export interface SkillItem {
  name: string;
  level?: string;
  badge?: string;
}

export interface SkillCategory {
  id: string;
  categoryName: string;
  skills: SkillItem[];
}

export interface Publication {
  id: string;
  title: string;
  venue: string;
  location: string;
  paperId?: string;
  status: string;
  description: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  status: string;
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  score: string;
}

export interface Profile {
  name: string;
  headline: string;
  tagline: string;
  bio: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  resumeUrl: string;
  status: string;
}

export interface PortfolioData {
  profile: Profile;
  projects: Project[];
  experiences: Experience[];
  skillCategories: SkillCategory[];
  publications: Publication[];
  certifications: Certification[];
  education: Education[];
}
