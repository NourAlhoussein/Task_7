import { IoLocation } from "react-icons/io5";
import { IoCallSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { ReactNode } from "react";

interface Item {
  id: number;
  content: string | null;
  icon: ReactNode | null;
}
interface Items {
  services: Item[];
  Home: Item[];
  Help: Item[];
  Contacts: Item[];
  SocialMedia: Item[];
}
export const items: Items = {
  services: [
    {
      id: 0,
      content: "Bike and Rickshaw rental",
      icon: null,
    },
    {
      id: 1,
      content: "Guided Tours of Lucca",
      icon: null,
    },
    {
      id: 2,
      content: "Guided Bike Tour of Lucca",
      icon: null,
    },
    {
      id: 3,
      content: "Trip In The Tuscan Hills",
      icon: null,
    },
    {
      id: 4,
      content: "Transportation With Luxury Cars",
      icon: null,
    },
    {
      id: 5,
      content: "Wine Tours By Bus With Guide",
      icon: null,
    },
  ],
  Home: [
    { id: 0, content: "Home", icon: null },
    { id: 1, content: "About Us", icon: null },
    { id: 2, content: "Tour Packages", icon: null },
  ],
  Help: [
    { id: 0, content: "Terms of Use", icon: null },
    { id: 1, content: "Provicy Policy", icon: null },
  ],
  Contacts: [
    {
      id: 0,
      content: "Piazza Napoleone, Lucca, Tuscany",
      icon: <IoLocation />,
    },
    {
      id: 1,
      content: "+39 346 368 5708",
      icon: <IoCallSharp />,
    },
    {
      id: 2,
      content: "italiainlimo@gmail.com",
      icon: <MdEmail />,
    },
  ],
  SocialMedia: [
    { id: 0, content: null, icon: <FaTwitter /> },
    { id: 1, content: null, icon: <FaFacebookF /> },
    { id: 2, content: null, icon: <FaSquareInstagram /> },
  ],
};
