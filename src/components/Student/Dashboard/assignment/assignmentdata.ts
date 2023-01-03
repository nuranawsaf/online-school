import { IconType } from 'react-icons';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { BsCardText } from 'react-icons/bs';
import { HiOutlineBookOpen } from 'react-icons/hi';
import { RiCalendar2Line } from 'react-icons/ri';

export interface AssigmentsData {
  titleIcon: IconType;
  title: string;
  des: string;
  dateIcon: IconType;
  date: string;
  subIcon: IconType;
  sub: string;
  menuIcon: IconType;
}

export const assignmentdata: Array<AssigmentsData> = [
  {
    titleIcon: BsCardText,
    title: 'Elenar Pena',
    des: 'posted a new assignment: Lab report on selected paper',
    dateIcon: RiCalendar2Line,
    date: 'Dec 14',
    subIcon: HiOutlineBookOpen,
    sub: 'General Science',
    menuIcon: BsThreeDotsVertical,
  },
  {
    titleIcon: BsCardText,
    title: 'Leslie Alexander',
    des: 'posted a new assignment: Lab report on selected paper',
    dateIcon: RiCalendar2Line,
    date: 'Dec 14',
    subIcon: HiOutlineBookOpen,
    sub: 'History',
    menuIcon: BsThreeDotsVertical,
  },
  {
    titleIcon: BsCardText,
    title: 'Guy Hawkins',
    des: 'posted a new assignment: Lab report on selected paper',
    dateIcon: RiCalendar2Line,
    date: 'Dec 14',
    subIcon: HiOutlineBookOpen,
    sub: 'Photography',
    menuIcon: BsThreeDotsVertical,
  },
  {
    titleIcon: BsCardText,
    title: 'Savannah Nguyen',
    des: 'posted a new assignment: Lab report on selected paper',
    dateIcon: RiCalendar2Line,
    date: 'Dec 14',
    subIcon: HiOutlineBookOpen,
    sub: 'English',
    menuIcon: BsThreeDotsVertical,
  },
];
