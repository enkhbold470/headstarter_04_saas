"use client";
import { useUser } from "@/hooks/useUser";

interface UserData {
  firstName: string;
  lastName: string;
  // Add other properties if needed
}
s
export default function Test() {
  const { user, loading, error } = useUser();
  const userName = user?.firstName? + " " + user?.lastName?; // Use the 'firstName' property from UserData

  return (
    <div>
      <h1 className="text-4xl font-bold">Hi Mom</h1>
      {user && <p>Username: {userName}</p>}
    </div>
  );
}
