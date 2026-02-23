import { useAuth } from "@/hooks/navbar/useAuth";

export const useUserInitials = () => {
  const { user } = useAuth();

  const initials = user?.name
    ?.split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase() ?? "U";

  return initials;
};