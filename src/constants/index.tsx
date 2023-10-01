import home from '../assets/svgs/home.svg'
import calendar from '../assets/svgs/calendar.svg'
import candidates from '../assets/svgs/candidates.svg'
import book from '../assets/svgs/book.svg'
import file from '../assets/svgs/file.svg'
import heart from '../assets/svgs/heart.svg'
import share from '../assets/svgs/share.svg'

export const DropdownItems = [
  { label: 'Applied', no: 1735 },
  { label: 'Shortlisted', no: 453 },
  { label: 'Technical Interview', no: 123 },
  { label: 'Opportunity Browsing', no: 243 },
  { label: 'Video Interview I', no: 25 },
  { label: 'Video Interview II', no: 25 },
  { label: 'Video Interview III', no: 25 },
  { label: 'Offer', no: 25 },
  { label: 'Withdrawn', no: 25 },
]

export const Menus = [
  { title: 'Dashboard', src: home, path: '/' },
  { title: 'Candidates', src: candidates },
  { title: 'Calendar', src: calendar },
  { title: 'Share', src: share },
  { title: 'Files', src: file },
  { title: 'Documents', src: book },
  { title: 'Saved', src: heart },
]

export const Candidates = [
  {
    id: 1,
    firstName: 'Aaliyah',
    lastName: 'Sanderson',
    city: 'Riyadh,Saudi Arabia',
    edu: 'Bachelor - Cambridge University (2023 - 2023)',
    exps: ['New York', 'Marketing', 'London'],
    tag: '#top_candidate',
  },
  {
    id: 2,
    firstName: 'John',
    lastName: 'Doe',
    city: 'Boston,USA',
    edu: 'Bachelor - MIT (2023 - 2023)',
    exps: ['New York', 'Marketing', 'London'],
    tag: '#top_candidate',
  },
  {
    id: 3,
    firstName: 'Thomas',
    lastName: 'Matt',
    city: 'Edinburgh,UK',
    edu: 'Bachelor - Havard University (2023 - 2023)',
    exps: ['New York', 'Marketing', 'London'],
    tag: '#top_candidate',
  },
  {
    id: 4,
    firstName: 'Kamilia',
    lastName: 'Smith',
    city: 'London,UK',
    edu: 'Bachelor - Cambridge University (2023 - 2023)',
    exps: ['New York', 'Marketing', 'London'],
    tag: '#top_candidate',
  },
  {
    id: 5,
    firstName: 'Roy',
    lastName: 'Jade',
    city: 'Cambridge,UK',
    edu: 'Bachelor - Yale (2023 - 2023)',
    exps: ['New York', 'Marketing', 'London'],
    tag: '#top_candidate',
  },
  {
    id: 6,
    firstName: 'Ahmed',
    lastName: 'Salman',
    city: 'New York,USA',
    edu: 'Bachelor - Cambridge University (2023 - 2023)',
    exps: ['New York', 'Marketing', 'London'],
    tag: '#top_candidate',
  },
]
