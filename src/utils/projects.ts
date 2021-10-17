export interface IProjects {
  title: string;
  image: string;
  description?: string;
}

const projects: IProjects[] = [
  {
    title: "Tennisclub de Pettelear",
    image: "pettelaer",
  },
  {
    title: "Dentist practice 's-Hertogenbosch",
    image: "dentist",
  },
  {
    title: "football club PSV",
    image: "psv",
  },
  {
    title: "KW1C study choice test",
    image: "kw1c",
  },
];

export default projects;
