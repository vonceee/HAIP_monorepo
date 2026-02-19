import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useAuth } from "@/hooks/useAuth";

const Dashboard = () => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !user) {
      navigate("/");
    }
  }, [user, loading, navigate]);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto py-10">
        <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
        <div className="bg-card p-6 rounded-lg shadow-sm border">
          <h2 className="text-xl font-semibold mb-4">
            Welcome back, {user?.name}!
          </h2>
          <p className="text-muted-foreground mb-4">
            You are successfully logged in.
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="p-4 bg-secondary/50 rounded-md">
              <h3 className="font-medium mb-2">Profile Status</h3>
              <p className="text-sm">Username: {user?.username || "Not set"}</p>
              <p className="text-sm">Email: {user?.email}</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
