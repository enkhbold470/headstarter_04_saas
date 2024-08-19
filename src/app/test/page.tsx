"use client";
import { useUser } from "@/hooks/useUser";
export default function Test() {
  const { user, loading, error } = useUser();
  return (
    <div>
      <h1 className="text-4xl font-bold">Hi Mom</h1>
      {user && <p>Username: {}</p>}
    </div>
  );
}
