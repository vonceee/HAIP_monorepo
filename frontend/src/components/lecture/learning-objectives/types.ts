export interface Objective {
  id: string;
  description: string;
}

export interface LectureObjectivesModel {
  topic: string;
  title: string;
  objectives: Objective[];
}
