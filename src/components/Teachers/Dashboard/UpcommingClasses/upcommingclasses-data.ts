import { IconType } from 'react-icons';
import { AiOutlineFontSize } from 'react-icons/ai';
import { BiCamera, BiFilterAlt, BiPaint, BiTimeFive } from 'react-icons/bi';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { CgClapperBoard } from 'react-icons/cg';
import { TbMusic } from 'react-icons/tb';

export interface UpcommingClassData {
  icon: IconType;
  title: string;
  dateIcon: IconType;
  date: string;
  menuIcon: IconType;
}

export const upcommingclassdata: Array<UpcommingClassData> = [
  {
    icon: AiOutlineFontSize,
    title: 'English | Batch 42 | Group B',
    dateIcon: BiTimeFive,
    date: '2h 30m later',
    menuIcon: BsThreeDotsVertical,
  },
  {
    icon: BiCamera,
    title: 'Photography | class 6 | Group A',
    dateIcon: BiTimeFive,
    date: '4h 10m later',
    menuIcon: BsThreeDotsVertical,
  },
  {
    icon: CgClapperBoard,
    title: 'History | Class 8 | Group C',
    dateIcon: BiTimeFive,
    date: '12h 45m later',
    menuIcon: BsThreeDotsVertical,
  },
  {
    icon: BiPaint,
    title: 'Arts | Class 10 | Group A',
    dateIcon: BiTimeFive,
    date: '3 days later',
    menuIcon: BsThreeDotsVertical,
  },
  {
    icon: BiFilterAlt,
    title: 'General Science | class 7 | Group c',
    dateIcon: BiTimeFive,
    date: '5 days later',
    menuIcon: BsThreeDotsVertical,
  },
  {
    icon: TbMusic,
    title: 'Music | Class 6 | Group B',
    dateIcon: BiTimeFive,
    date: '7 days later',
    menuIcon: BsThreeDotsVertical,
  },
];
