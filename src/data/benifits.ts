import img1 from "../../public/images/image.png";
import img2 from "../../public/images/image2.png";
import { StaticImageData } from "next/image";
interface Option {
  id: number;
  number: number;
  desc: string;
}

export interface BenifitProps {
  image: string | StaticImageData;
  desc1: string;
  title: string;
  desc2: string;
  options: Option[];
}

export const benifits = {
  places: [
    {
      image: img1,
      desc1: "WELCOME TO OUR SITE!",
      title: "We are the best company for your visit",
      desc2:
        "After decades of experience, and a whole life in Lucca, we offer you the most complete tourism service in the city. In addition to having bikes and rickshaws to have as much fun as you want, you have the choice of tour guides with whom to tour and drivers for your every need! We offer packages in the way that you get the most at the lowest price. Book with us and we will always be available for you!",
      options: [
        {
          id: 0,
          number: 20,
          desc: "YearsExperience",
        },
        {
          id: 1,
          number: 100,
          desc: "HappyCustomer",
        },
        {
          id: 2,
          number: 15,
          desc: "Choice of Services",
        },
        {
          id: 3,
          number: 10,
          desc: "Professional Guides",
        },
      ],
    },
  ],
  offers: [
    {
      image: img2,
      desc1: "WELCOME TO OUR SITE!",
      title: "We Are The Center Of Lucca To Offer You The Best",
      desc2:
        "We are right in the center of Lucca to offer you the real city life! With years of experience in practically every tourism sector, with us you can find complete packages at the lowest price, to travel and learn and have fun all without worries and without stress. What are you waiting for, book a bright evening, a trip to beautiful Tuscany or a personal tour for you!",
      options: [
        {
          id: 0,
          number: 20,
          desc: "YearsExperience",
        },
        {
          id: 1,
          number: 100,
          desc: "HappyCustomer",
        },
        {
          id: 2,
          number: 15,
          desc: "Choice of Services",
        },
        {
          id: 3,
          number: 10,
          desc: "Professional Guides",
        },
      ],
    },
  ],
};
