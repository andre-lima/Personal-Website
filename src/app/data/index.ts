import { about_me } from './about_me';
import { contact } from './contact';
import { jobs } from './jobs';
import { skills } from './skills';
import { projects } from './projects';

interface AboutMe {
  name: string;
  position: string;
  photo: string;
  title: string;
  description: string;
}
interface Data {
  about_me: AboutMe;
  skills: any;
  projects: any;
  jobs: any;
  contact: any;
}


export const data: Data = {
  about_me,
  skills,
  projects,
  jobs,
  contact
};
