export interface IProject {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  imageAlt: string;
  github: string;
  demo: string;
  featured: boolean;
  year: string;
}

export interface IProjectProps {
  project: IProject;
}