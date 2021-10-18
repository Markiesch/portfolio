export interface IProjects {
  name: string;
  title: string;
  mockup?: string;
  description?: string;
  gallery?: string[];
}

const projects: IProjects[] = [
  {
    name: "foodz",
    title: "KW1C study choice test",
    mockup: "foodz",
    gallery: ["homepage", "login", "overzicht", "editor", "edit", "appearance"],
  },
  {
    name: "notes",
    title: "Notes webapp",
    mockup: "notes",
    gallery: ["homepage", "editor", "favorite"],
  },
  {
    name: "memory",
    title: "Notes webapp",
    mockup: "memory",
    gallery: ["homepage", "game", "victory"],
  },
  {
    name: "pettelaer",
    title: "Tennisclub de Pettelear",
    mockup: "pettelaer",
    gallery: ["homepage", "login", "overzicht"],
  },
  {
    name: "dentist",
    title: "Dentist practice 's-Hertogenbosch",
    mockup: "dentist",
    gallery: ["homepage", "question", "print"],
  },
  {
    name: "studytest",
    title: "KW1C study choice test",
    mockup: "kw1c",
    gallery: ["homepage", "form-name", "form-question", "result"],
  },
];

export default projects;
