import { StaticImageData } from "next/image";
import person from "../../public/images/person.png";
export interface Customer {
  id: number;
  image: string | StaticImageData;
  name: string;
  desc: string;
}
export const customers: Customer[] = [
  {
    id: 0,
    image: person,
    name: "Lyod Gomez",
    desc: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure",
  },
  {
    id: 1,
    image: person,
    name: "Lyod Gomez",
    desc: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure",
  },
  {
    id: 2,
    image: person,
    name: "Lyod Gomez",
    desc: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure",
  },
  {
    id: 3,
    image: person,
    name: "Lyod Gomez",
    desc: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure",
  },
];
