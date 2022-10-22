export interface IProjects {
  name: string;
  date: string;
  title: string;
  description: string;
  roles: string[];
  client: string;
  links?: { name: string; url: string }[];
  mockup: string;
  gallery: string[];
}

const projects: IProjects[] = [
  {
    name: "foodz",
    title: "Foodz",
    date: "June 2021",
    roles: ["UI/UX", "Frontend", "Backend"],
    client: "Koning Willem I College",
    mockup: "foodz",
    links: [
      {
        name: "github",
        url: "https://github.com/kw1c-SchuurmansMark/ProjectThema4",
      },
      {
        name: "live demo",
        url: "https://kw1c-schuurmansmark.github.io/ProjectThema4/",
      },
    ],
    description:
      "Foodz is a web app built for Horeca students at Koning Willem I College (not for use purposes), where these students can view, add, edit and delete catering events.",
    gallery: ["homepage", "login", "overzicht", "editor", "edit", "appearance"],
  },
  {
    name: "dentist",
    title: "Dentist",
    date: "March 2021",
    roles: ["UI/UX", "Frontend"],
    client: "Koning Willem I College",
    mockup: "dentist",
    links: [
      {
        name: "github",
        url: "https://github.com/kw1c-SchuurmansMark/POThema3",
      },
      {
        name: "live demo",
        url: "https://kw1c-schuurmansmark.github.io/POThema3/",
      },
    ],
    description:
      "A small website made for patients at Tandarts Den Bosch where patients can do a self-test to receive a brush core.",
    gallery: ["homepage", "question", "print"],
  },
  {
    name: "pettelaer",
    title: "De Pettelear",
    date: "May 2021",
    roles: ["UI/UX", "Frontend", "Backend"],
    client: "Koning Willem I College",
    mockup: "pettelaer",
    links: [
      {
        name: "github",
        url: "https://github.com/kw1c-SchuurmansMark/POThema4",
      },
      {
        name: "live demo",
        url: "https://kw1c-schuurmansmark.github.io/POThema4/",
      },
    ],
    description:
      "A small website builded for members of the tennis club BTC De Pettelaer, where members can view various information about other members.",
    gallery: ["homepage", "login", "overzicht"],
  },
  {
    name: "notes",
    title: "Notes",
    date: "October 2021",
    roles: ["UI/UX", "Frontend"],
    client: "Personal project",
    mockup: "notes",
    links: [
      { name: "github", url: "https://github.com/Markiesch/vue-notes" },
      { name: "live demo", url: "https://vue-notesapp.netlify.app/" },
    ],
    description:
      "Notes is a web-based personal project, started to dive a bit deeper in the world of VueJs with Vuetify.",
    gallery: ["homepage", "editor", "favorite"],
  },
];

export default projects;
