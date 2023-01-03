import { IconType } from 'react-icons';
import { BiCamera, BiFilterAlt, BiPaint, BiTimeFive } from 'react-icons/bi';
import { CgClapperBoard, CgSandClock } from 'react-icons/cg';
import { HiOutlineBookOpen } from 'react-icons/hi';
import { RiCalendar2Line } from 'react-icons/ri';
import { TbMusic } from 'react-icons/tb';
import { VscPlay } from 'react-icons/vsc';

export interface RecentData {
  image: string;
  title: string;
  dateIcon: IconType;
  date: string;
  sandDate: string;
  sandIcon: IconType;
  playIcon: IconType;
  menuIcon: IconType;
}

export const recentclassdata: Array<RecentData> = [
  {
    image:
      'https://images.unsplash.com/photo-1597423244037-519742d0a9f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
    title: 'Arts_ Class-l',
    dateIcon: RiCalendar2Line,
    date: 'Dec 29',
    sandDate: '26:48',
    sandIcon: CgSandClock,
    playIcon: VscPlay,
    menuIcon: HiOutlineBookOpen,
  },
  {
    image:
      'https://images.unsplash.com/photo-1543109740-4bdb38fda756?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    title: 'English_Class-lV',
    dateIcon: RiCalendar2Line,
    date: 'Jan 3',
    sandDate: '36:48',
    sandIcon: CgSandClock,
    playIcon: VscPlay,
    menuIcon: HiOutlineBookOpen,
  },
  {
    image:
      'https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
    title: 'General Science_Lab Class-lX',
    dateIcon: RiCalendar2Line,
    date: 'Jan 10',
    sandDate: '28:48',
    sandIcon: CgSandClock,
    playIcon: VscPlay,
    menuIcon: HiOutlineBookOpen,
  },
  {
    image:
      'https://images.unsplash.com/photo-1619983081563-430f63602796?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    title: 'Music_Class-lll',
    dateIcon: RiCalendar2Line,
    date: 'Dec 26',
    sandDate: '16:48',
    sandIcon: CgSandClock,
    playIcon: VscPlay,
    menuIcon: HiOutlineBookOpen,
  },
];
