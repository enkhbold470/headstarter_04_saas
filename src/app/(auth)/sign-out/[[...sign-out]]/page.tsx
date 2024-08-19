import { SignOutButton } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div className="rounded-full bg-red-400 p-4">
        <SignOutButton />
      </div>
    </div>
  );
}
