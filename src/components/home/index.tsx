import HeroScrollDemo from "@/components/example/container-scroll-animation-demo";
import { SignIn, SignUp, SignedIn, SignedOut } from "@clerk/nextjs";
import LayoutGridDemo from "@/components/example/layout-grid-demo";
export default function HeroHome() {
  return (
    <div className="flex h-screen items-center justify-center">
      <SignedIn>
        <LayoutGridDemo />
      </SignedIn>
      <SignedOut>
        <HeroScrollDemo />
      </SignedOut>
    </div>
  );
}
