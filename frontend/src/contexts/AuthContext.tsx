import { createContext, useState, useEffect, ReactNode } from "react";
import api from "@/lib/axios";

export interface User {
  id: number;
  name: string;
  email: string;
  username?: string;
  bio?: string;
  avatar?: string;
}

export interface AuthContextType {
  user: User | null;
  loading: boolean;
  setUser: (user: User | null) => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined,
);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get("/api/user")
      .then((res) => {
        if (res.data) {
          setUser(res.data);
        } else {
          setUser(null);
        }
      })
      .catch((err) => {
        console.error("Auth context load error:", err);
        setUser(null);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}
