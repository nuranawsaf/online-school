// export const links: LinkProps[] =
import { IconType } from 'react-icons';
import { BiPen } from 'react-icons/bi';
import { BsChevronDown, BsGrid } from 'react-icons/bs';
import { CgMenuBoxed } from 'react-icons/cg';
import { HiOutlineBookOpen } from 'react-icons/hi';
import { MdOutlinePersonSearch } from 'react-icons/md';
import { RiAttachment2, RiCalendar2Line } from 'react-icons/ri';

export interface SidebardataProps {
  title: string;
  icon: IconType;
  second?: IconType;
  href: string;
}

export const navdata: Array<SidebardataProps> = [
  {
    title: 'Dashboard',
    icon: BsGrid,

    href: '/',
  },
  {
    title: 'Subjects',
    icon: HiOutlineBookOpen,

    href: '/subjects',
  },
  {
    title: 'Class Routine',
    icon: RiCalendar2Line,

    href: '/class',
  },
  {
    title: 'Assignment',
    icon: CgMenuBoxed,
    second: BsChevronDown,
    href: '/assignment',
  },
  {
    title: 'Exam',
    icon: BiPen,

    href: '/exam',
  },
  {
    title: 'Course Teachers',
    icon: MdOutlinePersonSearch,
    href: '/teachers',
  },
  {
    title: 'Attachments',
    icon: RiAttachment2,

    href: '/attachments',
  },
];
