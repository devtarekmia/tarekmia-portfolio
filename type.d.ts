interface SanityBody {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
}

interface Image {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  }
}

export interface PageInfo extends SanityBody {
  _type: 'pageInfo';
  address: string;
  BackgroundInformation: string;
  email: string;
  role: string;
  heroImage: Image;
  name: string;
  phone: string;
  profilePicture: Image;
}

export interface Technology extends SanityBody {
  _type: 'skills';
  image: Image;
  progress: number;
  title: string;
}

export interface Skill extends SanityBody {
  _type: 'skills';
  image: Image;
  progress: number;
  title: string;
}

export interface Experience extends SanityBody {
  _type: 'experiences';
  company: string;
  companyImage: Image;
  dateStarted: Date;
  dateEnded: Date;
  isCurrent: boolean;
  jobTitle: string;
  points: string[];
  technologies: Technology[];
}

export interface Project extends SanityBody {
  title: string;
  type: 'projects';
  image: Image;
  linkToBuild: string;
  summery: string;
  technologies: Technology[];
}

export interface Social extends SanityBody {
  _type: 'socials';
  title: string;
  url: string;
}


// Hard Coded Values

export interface TechnologyHardCoded {
  _id: string;
  image: string;
  progress: number;
  title: string;
}

export interface ExperienceHardCoded {
  _id: string;
  company: string;
  companyImage: string;
  dateStarted: string;
  dateEnded: any;
  jobTitle: string;
  points: string[];
}

export interface ProjectHardCoded {
  _id: string;
  title: string;
  image: string;
  summery: string;
  technologies: TechnologyHardCoded[];
  linkToBuild: string;

}

export interface SkillHardCoded {
  _id: string;
  image: string;
  progress: number;
  title: string;
}