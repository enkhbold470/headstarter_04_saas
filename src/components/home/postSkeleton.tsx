import Image from "next/image";
import { IconFlame, IconShare } from "@tabler/icons-react";
const PostBoxSkeleton = ({
  image,
  avatar,
  name,
  location,
  likes,
  comments,
  shares,
  time,
  caption,
  isLiked,
}: {
  image: string;
  avatar: string;
  name: string;
  location: string;
  likes: number;
  comments: number;
  shares: number;
  time: string;
  caption: string;
  isLiked: boolean;
}) => {
  return (
    <div className=" p-4">
      <div className="bg-white border rounded-sm max-w-md">
        <div className="flex items-center px-4 py-3">
          <Image
            src={avatar}
            width={32}
            height={32}
            className="h-8 w-8 rounded-full"
            alt={`avatar of ${name}`}
          />
          <div className="ml-3 ">
            <span className="text-sm font-semibold antialiased block leading-tight">
              {name}
            </span>
            <span className="text-gray-600 text-xs block">
              {time} at {location}
            </span>
          </div>
        </div>

        <div className="">
          <Image
            src={image} // Use the 'image' parameter directly
            alt={`post of ${caption}`}
            width={500}
            height={500}
          />
        </div>
        <div className="flex items-center justify-between mx-4 mt-3 mb-2">
          <div className="flex gap-5 hover:cursor-pointer hover:scale-110 transition-all duration-300">
            {isLiked ? (
              <IconFlame width={35} height={35} color="orange" fill="orange" />
            ) : (
              <IconFlame width={35} height={35} color="orange" visibility={0} />
            )}
          </div>
          <div className="flex">
            <IconShare width={30} height={30} />
          </div>
        </div>
        <div className="font-semibold text-sm mx-4 mt-2 mb-2">
          {likes} upvotes
        </div>
        <div className="text-sm mx-4 mb-4">
          <span className="font-bold">{name}</span> {caption}
        </div>
      </div>
    </div>
  );
};
export { PostBoxSkeleton };