export interface ProjectData {
  title: string;
  summary: string;
  role: string;
  roleDesc?: string;
  desc: string[];
  stacks?: string[];
  github?: string;
  url?: string;
  videos?: MediaData[];
  images?: MediaData[];
}

interface MediaData {
  name: string;
  width: string;
}
