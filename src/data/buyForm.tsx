import { ReactNode } from "react";
import { MdAccessTime } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { IoIosArrowDown } from "react-icons/io";
interface Form {
  id: number;
  label: string;
  placeholder: string;
  icon: ReactNode | null;
}
export const forms: Form[] = [
  {
    id: 0,
    label: "Name and Surname",
    placeholder: "Enter your name and surname",
    icon: "",
  },
  {
    id: 1,
    label: "Email Address",
    placeholder: "Enter your email address",
    icon: "",
  },
  {
    id: 2,
    label: "Telephone Number",
    placeholder: "Enter your telephone number",
    icon: "",
  },
  {
    id: 3,
    label: "Service Type",
    placeholder: "Select the service types",
    icon: <IoIosArrowDown />,
  },
  {
    id: 4,
    label: "Date",
    placeholder: "Select the date",
    icon: <SlCalender />,
  },
  {
    id: 5,
    label: "Time",
    placeholder: "Select the time",
    icon: <MdAccessTime />,
  },
];
