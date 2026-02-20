import { earthquakeLecture } from "./earthquake";
import { floodLecture } from "./flood";
import { volcanoLecture } from "./volcano";
import { Lecture } from "../../types";

export const lectures: Lecture[] = [
  earthquakeLecture,
  floodLecture,
  volcanoLecture,
];
