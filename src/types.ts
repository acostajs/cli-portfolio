type Project = {
  name: string;
  description: string;
  url: string;
  tech: string[];
};

type Experience = {
  title: string;
  company: string;
  period: string;
  description: string[];
};

type About = {
  bio: string;
  highlights: string[];
};

type Contact = {
  email: string;
  portfolio: string;
  linkedin: string;
  github: string;
};

type Skills = {
  [category: string]: string[];
};

type Portfolio = {
  name: string;
  title: string;
  about: About;
  skills: Skills;
  projects: Project[];
  experience: Experience[];
  contact: Contact;
};

export type { Project, Experience, About, Contact, Skills, Portfolio };
