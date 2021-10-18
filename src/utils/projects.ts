export interface IProjects {
  name: string;
  title: string;
  mockup?: string;
  description?: string;
  gallery?: string[];
}

const projects: IProjects[] = [
  {
    name: "tennis",
    title: "Tennisclub de Pettelear",
    mockup: "pettelaer",
    gallery: [""],
  },
  {
    name: "dentist",
    title: "Dentist practice 's-Hertogenbosch",
    mockup: "dentist",
    gallery: [""],
  },
  {
    name: "psv",
    title: "football club PSV",
    mockup: "psv",
    gallery: [""],
  },
  {
    name: "test",
    title: "KW1C study choice test",
    mockup: "kw1c",
    gallery: [""],
  },
  {
    name: "foodz",
    title: "KW1C study choice test",
    gallery: ["homepage", "login", "overzicht", "editor", "edit", "appearance"],
  },
];

export default projects;
