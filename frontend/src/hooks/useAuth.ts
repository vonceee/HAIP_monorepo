import { useState, useEffect } from "react";

interface User {
  id: number;
  name: string;
  email: string;
  username?: string;
  bio?: string;
  avatar?: string;
}

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/user")
      .then((res) => {
        if (res.ok) return res.json();
        throw new Error("not authenticated");
      })
      .then((data) => setUser(data))
      .catch(() => setUser(null))
      .finally(() => setLoading(false));
  }, []);

  return { user, loading, setUser };
}
