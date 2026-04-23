type Project = {
  name: string;
  description: string;
  url: string;
  tech: string;
};

type Experience = {
  title: string;
  company: string;
  period: string;
  description: string;
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

type Skill = {
  category: string;
  skill: string;
};

type Portfolio = {
  name: string;
  title: string;
  about: About;
  skills: Skill[];
  projects: Project[];
  experience: Experience[];
  contact: Contact;
};

export type { Project, Experience, About, Contact, Skill, Portfolio };
