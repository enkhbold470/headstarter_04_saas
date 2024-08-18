import HeroScrollDemo from "@/components/example/container-scroll-animation-demo";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import PostBox from "./postBox";

export default function HeroHome() {
  return (
    <div className="flex items-center justify-center border-2 border-red-500 mt-32">
      <SignedIn>
        <PostBox />
      </SignedIn>
      <SignedOut>
        <HeroScrollDemo />
      </SignedOut>
    </div>
  );
}
