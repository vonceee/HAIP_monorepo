import React, { useState, useEffect } from "react";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

import api from "@/lib/axios";

export default function Profile() {
  const { user, loading } = useAuth();
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    bio: "",
  });
  const [status, setStatus] = useState<"idle" | "saving" | "saved" | "error">(
    "idle",
  );
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name,
        username: user.username || "",
        bio: user.bio || "",
      });
    }
  }, [user]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("saving");
    setErrors({});

    try {
      // Axios automatically handles CSRF if configured with withCredentials
      await api.get("/sanctum/csrf-cookie");

      const response = await api.patch("/settings/profile", formData);

      if (response.status === 200) {
        setStatus("saved");
        setTimeout(() => setStatus("idle"), 2000);
      }
    } catch (error: any) {
      console.error("Error updating profile:", error);
      if (error.response && error.response.data && error.response.data.errors) {
        setErrors(error.response.data.errors);
      }
      setStatus("error");
    }
  };

  if (loading) return <div>Loading...</div>;
  if (!user) return <div>Please log in to view this page.</div>;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto py-10 px-4">
        <div className="max-w-2xl mx-auto space-y-8">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold">Profile Settings</h1>
            <p className="text-muted-foreground">
              update your profile details and public information.
            </p>
          </div>

          <div className="flex items-center gap-4 p-4 border rounded-lg bg-card">
            <Avatar className="h-16 w-16">
              <AvatarImage src={user.avatar} referrerPolicy="no-referrer" />
              <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <h2 className="font-semibold">{user.name}</h2>
              <p className="text-sm text-muted-foreground">{user.email}</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
              />
              {errors.name && (
                <p className="text-sm text-red-500">{errors.name}</p>
              )}
            </div>

            <div className="grid gap-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                value={formData.username}
                onChange={(e) =>
                  setFormData({ ...formData, username: e.target.value })
                }
                placeholder="username"
              />
              {errors.username && (
                <p className="text-sm text-red-500">{errors.username}</p>
              )}
            </div>

            <div className="grid gap-2">
              <Label htmlFor="bio">Bio</Label>
              <textarea
                id="bio"
                className="flex min-h-[80px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                value={formData.bio}
                onChange={(e) =>
                  setFormData({ ...formData, bio: e.target.value })
                }
                placeholder="tell us a little bit about yourself"
                maxLength={160}
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                {errors.bio ? (
                  <span className="text-red-500">{errors.bio}</span>
                ) : (
                  <span />
                )}
                <span>{formData.bio.length}/160</span>
              </div>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                value={user.email}
                disabled
                className="bg-muted"
              />
            </div>

            <div className="flex items-center gap-4">
              <Button disabled={status === "saving"}>
                {status === "saving" ? "Saving..." : "Save Changes"}
              </Button>
              {status === "saved" && (
                <span className="text-green-600 text-sm">
                  Saved successfully!
                </span>
              )}
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}
