import { earthquakeLecture } from "./earthquake";
import { hydroLecture } from "./hydro";
import { volcanoLecture } from "./volcano";
import { Lecture } from "../../types";

export const lectures: Lecture[] = [
  earthquakeLecture,
  volcanoLecture,
  hydroLecture,
];
