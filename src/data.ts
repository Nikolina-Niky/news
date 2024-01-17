
export interface NewsDetail {
  id: string;
  title: string;
  date: string;
  image: string | null;
  content: string;
}

export interface ErrorResult {
  code: number;
  message: string;
}

const DUMMY_TEXT =
  "Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

export const DATA_LIST: NewsDetail[] = [
  {
    id: "a53",
    title: "Post 1",
    date: "2023-10-01T12:30:00.000Z",
    image: "/static/1.jpg",
    content: DUMMY_TEXT,
  },
  {
    id: "b54",
    title: "Post 2",
    date: "2023-10-01T11:30:00.000Z",
    image: "/static/1.jpg",
    content: DUMMY_TEXT,
  },
  {
    id: "c55",
    title: "Post 3",
    date: "2023-09-20T12:30:00.000Z",
    image: "/static/1.jpg",
    content: DUMMY_TEXT,
  },
  {
    id: "d56",
    title: "Post 4",
    date: "2023-09-12T12:45:00.000Z",
    image: "/static/1.jpg",
    content: DUMMY_TEXT,
  },
  {
    id: "e57",
    title: "Post 5",
    date: "2023-09-10T08:30:00.000Z",
    image: "/static/1.jpg",
    content: DUMMY_TEXT,
  },
  {
    id: "f58",
    title: "Post 6",
    date: "2023-09-01T12:30:00.000Z",
    image: "/static/1.jpg",
    content: DUMMY_TEXT,
  },
];