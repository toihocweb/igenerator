import { KeyOutlined, NumberOutlined } from "@ant-design/icons";
import MediumReader from "../MediumReader/MediumReader";
import PasswordGenerator from "../PasswordGenerator/PasswordGenerator";
import RandomBytes from "../RandomBytes/RandomBytes";
import "react-toastify/dist/ReactToastify.css";
export const routes = [
  {
    path: "/",
    text: "Password Generator",
    icon: KeyOutlined,
    component: PasswordGenerator,
    exact: true,
  },
  {
    path: "/random-bytes",
    text: "Random Bytes",
    icon: NumberOutlined,
    component: RandomBytes,
  },
  {
    path: "/medium-reader",
    text: "Medium Reader",
    icon: NumberOutlined,
    component: MediumReader,
  },
];
