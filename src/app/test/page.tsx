import { getCuratedPhotos, fetchPhotos } from "@/lib/pexels";
import pexelsJson from "@/data/photos.json";

export default async function Test() {
  const photos = await fetchPhotos("god");
  return (
    <div>
      {photos.map((photo: any, index: number) => (
        <img key={photo.id} src={photo.src.original} alt={photo.alt} />
      ))}
    </div>
  );
}
