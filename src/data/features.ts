import { StaticImageData } from "next/image";
import img1 from "../../public/images/feautres/f1.png";
import img2 from "../../public/images/feautres/f2.png";
import img3 from "../../public/images/feautres/f3.png";
import img4 from "../../public/images/feautres/f4.png";
export interface Feature {
  id: number;
  text: string;
  image: StaticImageData;
}

export const features: Feature[] = [
  { id: 0, text: "Complete Packages For All Your Wishes", image: img1 },
  { id: 1, text: "Over 30 Years Of Experience", image: img2 },
  { id: 2, text: "Expert Guides For You", image: img3 },
  { id: 3, text: "Guaranteed fun at the best price!", image: img4 },
];
