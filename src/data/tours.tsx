import { HiOutlineUserGroup } from "react-icons/hi";
import { MdOutlineDateRange } from "react-icons/md";
import { IoMdTime } from "react-icons/io";
import { GiGolfFlag } from "react-icons/gi";
import { FaCarAlt } from "react-icons/fa";
import { ReactNode } from "react";
interface Tour {
  id: number;
  icon: ReactNode;
  title: string;
  options: string;
}
export const Tours: { public: Tour[]; private: Tour[] } = {
  public: [
    {
      id: 0,
      icon: <HiOutlineUserGroup />,
      title: "Number of people",
      options: "Choose number",
    },
    {
      id: 1,
      icon: <MdOutlineDateRange />,
      title: "Date",
      options: "Choose Date",
    },
    {
      id: 2,
      icon: <IoMdTime />,
      title: "Time",
      options: "Choose time",
    },
    {
      id: 3,
      icon: <GiGolfFlag />,
      title: "Toor",
      options: "Select toor",
    },
    {
      id: 4,
      icon: <FaCarAlt />,
      title: "Transportation",
      options: "Select Transportation",
    },
  ],
  private: [
    {
      id: 0,
      icon: <MdOutlineDateRange />,
      title: "Date",
      options: "Choose Date",
    },
    {
      id: 1,
      icon: <HiOutlineUserGroup />,
      title: "Number of people",
      options: "Choose number",
    },
    {
      id: 2,
      icon: <GiGolfFlag />,
      title: "Toor",
      options: "Select toor",
    },
    {
      id: 3,
      icon: <IoMdTime />,
      title: "Time",
      options: "Choose time",
    },
    {
      id: 4,
      icon: <FaCarAlt />,
      title: "Transportation",
      options: "Select Transportation",
    },
  ],
};
