export interface IProjects {
  name: string;
  title: string;
  date: string;
  mockup?: string;
  description?: string;
  gallery?: string[];
}

const projects: IProjects[] = [
  {
    name: "foodz",
    title: "KW1C study choice test",
    date: "March 2021",
    mockup: "foodz",
    gallery: ["homepage", "login", "overzicht", "editor", "edit", "appearance"],
  },
  {
    name: "notes",
    title: "Notes webapp",
    date: "March 2021",
    mockup: "notes",
    gallery: ["homepage", "editor", "favorite"],
  },
  {
    name: "memory",
    title: "Notes webapp",
    date: "March 2021",
    mockup: "memory",
    gallery: ["homepage", "game", "victory"],
  },
  {
    name: "pettelaer",
    title: "Tennisclub de Pettelear",
    date: "March 2021",
    mockup: "pettelaer",
    gallery: ["homepage", "login", "overzicht"],
  },
  {
    name: "dentist",
    title: "Dentist practice 's-Hertogenbosch",
    date: "March 2021",
    mockup: "dentist",
    gallery: ["homepage", "question", "print"],
  },
  {
    name: "studytest",
    title: "KW1C study choice test",
    date: "March 2021",
    mockup: "kw1c",
    gallery: ["homepage", "form-name", "form-question", "result"],
  },
];

export default projects;
