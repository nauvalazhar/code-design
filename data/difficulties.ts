export type Difficulty =
  | "All"
  | "Beginner"
  | "Easy"
  | "Intermediate"
  | "Advanced"
  | "Expert"
  | "Master";

const difficulties: Record<"name", Difficulty>[] = [
  {
    name: "Beginner",
  },
  {
    name: "Easy",
  },
  {
    name: "Intermediate",
  },
  {
    name: "Advanced",
  },
  {
    name: "Expert",
  },
  {
    name: "Master",
  },
];

export default difficulties;
