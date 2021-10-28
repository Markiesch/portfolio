export interface IProjects {
  name: string;
  title: string;
  date: string;
  roles: string[];
  client: string;
  mockup?: string;
  description?: string;
  gallery?: string[];
}

const projects: IProjects[] = [
  {
    name: "foodz",
    title: "Foodz - schoolproject",
    date: "March 2021",
    roles: ["UI/UX", "Frontend", "Backend"],
    client: "Koning Willem I College",
    mockup: "foodz",
    description: "Foodz is a web app built for Horeca students at Koning Willem I College (not for use purposes), where these students can view, add, edit and delete catering events.",
    gallery: ["homepage", "login", "overzicht", "editor", "edit", "appearance"],
  },
  {
    name: "notes",
    title: "Notes webapp",
    date: "March 2021",
    roles: ["UI/UX", "Frontend"],
    client: "Personal project",
    mockup: "notes",
    description: "Notes is a web-based personal project, started to dive a bit deeper in the world of VueJs with Vuetify.",
    gallery: ["homepage", "editor", "favorite"],
  },
  {
    name: "memory",
    title: "Memory Game",
    date: "March 2021",
    roles: ["UI/UX", "Frontend"],
    client: "Personal project",
    mockup: "memory",
    description: "The memory game is a pair matching game where the player has to click on 2 cards, if they are the same then they remain. The game ends whenever all cards are flipped successfully.",
    gallery: ["homepage", "game", "victory"],
  },
  {
    name: "pettelaer",
    title: "Tennisclub de Pettelear",
    date: "March 2021",
    roles: ["UI/UX", "Frontend", "Backend"],
    client: "Koning Willem I College",
    mockup: "pettelaer",
    description: "A small website builded for members of the tennis club BTC De Pettelaer, where members can view various information about other members.",
    gallery: ["homepage", "login", "overzicht"],
  },
  {
    name: "dentist",
    title: "Dentist practice 's-Hertogenbosch",
    date: "March 2021",
    roles: ["UI/UX", "Frontend"],
    client: "Koning Willem I College",
    mockup: "dentist",
    description: "A small website made for patients at Tandarts Den Bosch where patients can do a self-test to receive a brush core.",
    gallery: ["homepage", "question", "print"],
  },
  {
    name: "studytest",
    title: "KW1C study choice test",
    date: "March 2021",
    roles: ["UI/UX", "Frontend", "Backend"],
    client: "Koning Willem I College",
    mockup: "kw1c",
    description: "A web-based studyselftest made for students at Koning Willem I College.",
    gallery: ["homepage", "form-name", "form-question", "result"],
  },
];

export default projects;
