import { IconType } from 'react-icons';
import { BiTime } from 'react-icons/bi';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { MdOutlineDateRange } from 'react-icons/md';
import { RiFolderForbidLine } from 'react-icons/ri';

export interface SubjectData {
  title: string;
  menuIcon: IconType;
  img: string;
  des: string;
  icon?: IconType;
  subTitle?: string;
  subIcon?: IconType;
  subTitle2?: string;
  subIcon2?: IconType;
  subDes?: string;
  footerIcon: IconType;
  footerIcon2: IconType;
}

export const subjectdata: Array<SubjectData> = [
  {
    title: 'General Science',
    menuIcon: BsThreeDotsVertical,
    img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    des: 'Jhon Nakamura',
    icon: BiTime,
    subTitle: 'Lab Final Report',
    subIcon: MdOutlineDateRange,
    subTitle2: 'Lab Final Report',
    subIcon2: MdOutlineDateRange,
    subDes: 'Dec 14 at 11:53pm',
    footerIcon: BiTime,
    footerIcon2: RiFolderForbidLine,
  },
  {
    title: 'English',
    menuIcon: BsThreeDotsVertical,
    img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    des: 'Olivier Kahn',
    icon: BiTime,
    subTitle: 'Lab Final Report',
    subIcon: MdOutlineDateRange,
    subDes: 'Dec 14 at 11:53pm',
    footerIcon: BiTime,
    footerIcon2: RiFolderForbidLine,
  },
  {
    title: 'Photography',
    menuIcon: BsThreeDotsVertical,
    img: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    des: 'Ansel Adams',
    footerIcon: BiTime,
    footerIcon2: RiFolderForbidLine,
  },
  {
    title: 'Music',
    menuIcon: BsThreeDotsVertical,
    img: 'https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
    des: 'Louis Armstrong',
    icon: BiTime,
    subTitle: 'We dances 3 line script of new song',
    subIcon: MdOutlineDateRange,
    subTitle2: 'We dances 3 line script of new song',
    subIcon2: MdOutlineDateRange,
    subDes: 'Dec 14 at 11:53pm',
    footerIcon: BiTime,
    footerIcon2: RiFolderForbidLine,
  },
  {
    title: 'History',
    menuIcon: BsThreeDotsVertical,
    img: 'https://images.unsplash.com/photo-1514315384763-ba401779410f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=683&q=80',
    des: 'Elvis Presley',
    icon: BiTime,
    subTitle: 'Lab Final Report',
    subIcon: MdOutlineDateRange,
    subDes: 'Dec 14 at 11:53pm',
    footerIcon: BiTime,
    footerIcon2: RiFolderForbidLine,
  },
];
