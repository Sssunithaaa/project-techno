import { BsKanban } from "react-icons/bs";
import { FiShoppingBag } from "react-icons/fi";
import { IoMdContacts } from "react-icons/io";
import { RiContactsLine } from "react-icons/ri";
import {
  AiOutlineCalendar,
  AiOutlineTransaction,
  AiOutlineStock,
} from "react-icons/ai";
import { HiDocumentReport } from "react-icons/hi";
import { TbTools } from "react-icons/tb";
import { MdInventory } from "react-icons/md";
export const links = [
  {
    title: "Dashboard",
    links: [
      {
        name: "Homepage",
        icon: <FiShoppingBag />,
        link: "home"
      },
    ],
  },
  {
    title: "Pages",
    links: [
      {
        name: "Daily Entry",
        icon: <IoMdContacts />,
        link: "dailyentry"
      },
      {
        name: "Employees",
        icon: <RiContactsLine />,
        link:"employees"
      },
      {
        name: "Machine",
        icon: <MdInventory />,
      },
      {
        name: "Jobs",
        icon: <MdInventory />,
      },

      {
        name: "Transactions",
        icon: <AiOutlineTransaction />,
      },
      {
        name: "Reports",
        icon: <HiDocumentReport />,
      },
    ],
  },
  {
    title: "Overview",
    links: [
      {
        name: "Tools",
        icon: <TbTools />,
      },
      {
        name: "Breakdown",
        icon: <AiOutlineStock />,
      },
    ],
  },
  {
    title: "Analytics",
    links: [
      {
        name: "Chart",
        icon: <AiOutlineCalendar />,
      },
      {
        name: "Toolchart",
        icon: <BsKanban />,
      },
    ],
  },
];
