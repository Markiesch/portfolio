export interface IProjects {
  name: string;
  title: string;
  mockup?: string;
  description?: string;
  gallery?: string[];
}

const projects: IProjects[] = [
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
    name: "psv",
    title: "football club PSV",
    mockup: "psv",
    gallery: ["homepage", "team", "plattegrond", "club", "contact"],
  },
  {
    name: "studytest",
    title: "KW1C study choice test",
    mockup: "kw1c",
    gallery: ["homepage", "form-name", "form-question", "result"],
  },
  {
    name: "foodz",
    title: "KW1C study choice test",
    gallery: ["homepage", "login", "overzicht", "editor", "edit", "appearance"],
  },
  {
    name: "drawingapp",
    title: "Drawing webapp",
    gallery: ["homepage"],
  },
];

export default projects;
