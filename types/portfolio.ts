import type { RemixiconComponentType } from "@remixicon/react";

export type Skill = {
  name: string;
  icon: RemixiconComponentType;
};

export type SkillGroup = {
  title: string;
  skills: Skill[];
};

export type Responsibility = {
  id: number;
  content: string;
  highlight: string;
};

export type Experience = {
  period: string;
  role: string;
  organization: string;
  responsibilities: Responsibility[];
};

export type Project = {
  title: string;
  category: string;
  image: string;
  description: string;
  technologies: string[];
  liveUrl?: string;
  repositoryUrl: string;
};

export type Education = {
  period: string;
  program: string;
  institution: string;
};
