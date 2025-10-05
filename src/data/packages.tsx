import { StaticImageData } from "next/image";
import img1 from "../../public/images/packages/image1.png";
import img2 from "../../public/images/packages/image2.png";
import img3 from "../../public/images/packages/image3.png";
import img4 from "../../public/images/packages/image4.png";
import icon11 from "../../public/images/packages/icons/icon11.png";
import icon12 from "../../public/images/packages/icons/icon12.png";
import icon13 from "../../public/images/packages/icons/icon13.png";
import icon14 from "../../public/images/packages/icons/icon14.png";
import icon21 from "../../public/images/packages/icons/icon21.png";
import icon22 from "../../public/images/packages/icons/icon22.png";
import icon23 from "../../public/images/packages/icons/icon23.png";
import icon31 from "../../public/images/packages/icons/icon31.png";
import icon32 from "../../public/images/packages/icons/icon32.png";
import icon33 from "../../public/images/packages/icons/icon33.png";
import icon41 from "../../public/images/packages/icons/icon41.png";
import icon42 from "../../public/images/packages/icons/icon42.png";
import icon43 from "../../public/images/packages/icons/icon43.png";
interface Type {
  id: number;
  iconImg: string | StaticImageData;
  desc: string;
}
export interface Package {
  id: number;
  price: number;
  image: string | StaticImageData;
  title: string;
  types: Type[];
}
export const packages: Package[] = [
  {
    id: 0,
    image: img1,
    price: 50,
    title: "BIKE / RICKSHAW",
    types: [
      { id: 0, iconImg: icon11, desc: "Your bike for a day" },
      { id: 1, iconImg: icon12, desc: "City App" },
      { id: 2, iconImg: icon13, desc: "Discount on Rickshaw" },
      { id: 3, iconImg: icon14, desc: "Guaranteed Support" },
    ],
  },
  {
    id: 1,
    image: img2,
    price: 30,
    title: "BIKE TOURS",
    types: [
      { id: 0, iconImg: icon21, desc: "A Mountain Bike Included" },
      { id: 1, iconImg: icon22, desc: "A Guide For You" },
      { id: 2, iconImg: icon23, desc: "Bottle of water" },
      { id: 3, iconImg: icon14, desc: "Guaranteed Support" },
    ],
  },
  {
    id: 2,
    image: img3,
    price: 45,
    title: "BUS TRIPS",
    types: [
      { id: 0, iconImg: icon31, desc: "Park ticket" },
      { id: 1, iconImg: icon32, desc: "Return bus" },
      { id: 2, iconImg: icon33, desc: "Companion" },
      { id: 3, iconImg: icon14, desc: "Guaranteed Support" },
    ],
  },
  {
    id: 3,
    image: img4,
    price: 10,
    title: "TRANSFER",
    types: [
      { id: 0, iconImg: icon41, desc: "Your bike for a day" },
      { id: 1, iconImg: icon42, desc: "City App" },
      { id: 2, iconImg: icon43, desc: "Discount on Rickshaw" },
      { id: 3, iconImg: icon14, desc: "Guaranteed Support" },
    ],
  },
];
