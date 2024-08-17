import Link from "next/link";
export default function NotFound() {
  return (
    <div className="flex flex-col gap-5 justify-center items-center h-screen  text-3xl m-2 p-2">
      {/* <Image src={"/r-logo.png"} height={100} width={100} alt="logo" /> */}
      <h1 className="flex justify-center">404 Not Found</h1>
      <div className="border-2  rounded-full p-3 text-base  hover:outline focus:outline-none cursor-pointer">
        <Link href={"/"}>Go Back to Home</Link>
      </div>
    </div>
  );
}
