export interface Personal {
  fullname: string
  name: string
  title: string
  description: string
  navItems: string[]
  cv: string
  social: Social
  education: Education
  courses: Course[]
  skills: Skills
  projects: Projects
  tags: string[]
  footer: Footer
}

export interface Footer {
  createdWith: string
  createdBy: string
}

export interface Projects {
  title: string
  description: string
  info: Info2[]
}

export interface Info2 {
  img: string
  imgs: string[]
  title: string
  description: string
  tags: string[]
  urls: Url[]
}

export interface Url {
  title: string
  url: string
}

export interface Skills {
  title: string
  description: string
  info: Info[]
}

export interface Info {
  name: string
  url: string
  img: string
}

export interface Social {
  telegram: string
  github: string
  email: string
  linkedin: string
  whatsapp: string
}

export interface CounterTag {
  title: string
  quantity: number
}

export interface Course {
  title: string
  coursesData: CourseData[]
}

export interface CourseData {
  title: string
}

export interface Education {
  title: string
  primary: EducationTypes
  secondary: EducationTypes
  Superior: EducationTypes
}

export interface EducationTypes {
  institute: string
  date: string
  description: string
  degree: string
}
