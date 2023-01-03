import { IconType } from 'react-icons';
import { AiOutlineFontSize } from 'react-icons/ai';
import { BiCamera, BiFilterAlt, BiPaint, BiTimeFive } from 'react-icons/bi';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { CgClapperBoard } from 'react-icons/cg';
import { TbMusic } from 'react-icons/tb';

export interface UpcommingData {
  icon: IconType;
  title: string;
  dateIcon: IconType;
  date: string;
  menuIcon: IconType;
}

export const upcommingdata: Array<UpcommingData> = [
  {
    icon: AiOutlineFontSize,
    title: 'English',
    dateIcon: BiTimeFive,
    date: 'Dec 29, 5:12pm',
    menuIcon: BsThreeDotsVertical,
  },
  {
    icon: BiCamera,
    title: 'Photography',
    dateIcon: BiTimeFive,
    date: 'Jan 3, 11:08am',
    menuIcon: BsThreeDotsVertical,
  },
  {
    icon: CgClapperBoard,
    title: 'History',
    dateIcon: BiTimeFive,
    date: 'Jan 1, 11:15pm',
    menuIcon: BsThreeDotsVertical,
  },
  {
    icon: BiPaint,
    title: 'Arts',
    dateIcon: BiTimeFive,
    date: 'Dec 26, 3:14am',
    menuIcon: BsThreeDotsVertical,
  },
  {
    icon: BiFilterAlt,
    title: 'General Science',
    dateIcon: BiTimeFive,
    date: 'Jan 16, 3:14am',
    menuIcon: BsThreeDotsVertical,
  },
  {
    icon: TbMusic,
    title: 'Music',
    dateIcon: BiTimeFive,
    date: 'Feb 3, 4:06am',
    menuIcon: BsThreeDotsVertical,
  },
];
