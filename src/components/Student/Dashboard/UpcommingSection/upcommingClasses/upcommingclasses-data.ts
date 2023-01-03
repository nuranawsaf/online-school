import { IconType } from "react-icons";
import { AiOutlineFontSize } from "react-icons/ai";
import { BiCamera, BiFilterAlt, BiPaint, BiTimeFive } from "react-icons/bi";
import { CgClapperBoard } from "react-icons/cg";
import { SlOptionsVertical } from "react-icons/sl";
import { TbMusic } from "react-icons/tb";

export interface UpcommingClassesData {
  icon: IconType;
  title: string;
  timeIcon: IconType;
  time: string;
  menuIcon: IconType;
}

export const upcommingclassesdata: Array<UpcommingClassesData> = [
  {
    icon: AiOutlineFontSize,
    title: "English | Batch 42 | Group B",
    timeIcon: BiTimeFive,
    time: "2h 30m later",
    menuIcon: SlOptionsVertical,
  },
  {
    icon: TbMusic,
    title: "Music | Class 6 | Group A",
    timeIcon: BiTimeFive,
    time: "2h 30m later",
    menuIcon: SlOptionsVertical,
  },
  {
    icon: BiFilterAlt,
    title: "General Science | Class 8 | Group C",
    timeIcon: BiTimeFive,
    time: "2h 30m later",
    menuIcon: SlOptionsVertical,
  },
  {
    icon: AiOutlineFontSize,
    title: "English | Class 10 | Group A",
    timeIcon: BiTimeFive,
    time: "2h 30m later",
    menuIcon: SlOptionsVertical,
  },
  {
    icon: TbMusic,
    title: "Music | Class 6 | Group A",
    timeIcon: BiTimeFive,
    time: "2h 30m later",
    menuIcon: SlOptionsVertical,
  },
  {
    icon: BiFilterAlt,
    title: "General Science | Class 8 | Group C",
    timeIcon: BiTimeFive,
    time: "2h 30m later",
    menuIcon: SlOptionsVertical,
  },
];
