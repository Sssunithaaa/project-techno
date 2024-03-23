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
        link: "machines"
      },
      {
        name: "Jobs",
        icon: <MdInventory />,
        link: "jobs"
      },

      {
        name: "Transactions",
        icon: <AiOutlineTransaction />,
        link: "transactions"
      },
      {
        name: "Reports",
        icon: <HiDocumentReport />,
        link: "reports"
      },
    ],
  },
  {
    title: "Overview",
    links: [
      {
        name: "Tools",
        icon: <TbTools />,
        link: "tools"
      },
      {
        name: "Breakdown",
        icon: <AiOutlineStock />,
        link: "breakdown"
      },
    ],
  },
  {
    title: "Analytics",
    links: [
      {
        name: "Chart",
        icon: <AiOutlineCalendar />,
        link: "chart"
      },
      {
        name: "Toolchart",
        icon: <BsKanban />,
        link: "toolchart"
      },
    ],
  },
];
