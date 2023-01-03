import { IconType } from 'react-icons';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { BsCardText } from 'react-icons/bs';
import { HiOutlineBookOpen } from 'react-icons/hi';
import { RiCalendar2Line } from 'react-icons/ri';

export interface UpcommingAssigmentsData {
  titleIcon: IconType;
  title: string;
  des: string;
  dateIcon: IconType;
  date: string;
  subIcon: IconType;
  sub: string;
  menuIcon: IconType;
}

export const upcommingassignmentdata: Array<UpcommingAssigmentsData> = [
  {
    titleIcon: BsCardText,
    title: 'Lab Final Report',
    des: '| Class 6 | Group B',
    dateIcon: RiCalendar2Line,
    date: 'Dec 14',
    subIcon: HiOutlineBookOpen,
    sub: 'General Science',
    menuIcon: BsThreeDotsVertical,
  },
  {
    titleIcon: BsCardText,
    title: 'Write Down "Student Life" Composition',
    des: '|Class 10 | Group D',
    dateIcon: RiCalendar2Line,
    date: 'Dec 14',
    subIcon: HiOutlineBookOpen,
    sub: 'History',
    menuIcon: BsThreeDotsVertical,
  },
  {
    titleIcon: BsCardText,
    title: 'Submit a Song on your own voice |',
    des: 'Class 8 | Group D',
    dateIcon: RiCalendar2Line,
    date: 'Dec 14',
    subIcon: HiOutlineBookOpen,
    sub: 'Photography',
    menuIcon: BsThreeDotsVertical,
  },
  {
    titleIcon: BsCardText,
    title: 'Write down 7 Question from chapter-6 |',
    des: 'Class 8 | Group C',
    dateIcon: RiCalendar2Line,
    date: 'Dec 14',
    subIcon: HiOutlineBookOpen,
    sub: 'English',
    menuIcon: BsThreeDotsVertical,
  },
];
