import { ReactNode, useEffect, useState } from 'react'
import {
  Navbar as MTNavbar,
  Collapse,
  Button,
  IconButton,
  Typography,
} from '@material-tailwind/react'
import {
  UserGroupIcon,
  XMarkIcon,
  Bars3Icon,
  CalendarDaysIcon,
  InboxArrowDownIcon,
  MapPinIcon,
} from '@heroicons/react/24/solid'
import Image from 'next/image'
import { Alert } from './ui-components/atom'

interface NavItemProps {
  children: ReactNode
  href?: string
  target?: string
  setOpen?: (open: boolean) => void
}

function NavItem({ children, href, target, setOpen }: NavItemProps) {
  return (
    <li>
      <Typography
        as='a'
        href={href || '#'}
        target={target || '_blank'}
        variant='paragraph'
        className='flex items-center gap-2 font-medium'
        placeholder={''}
        onClick={setOpen && (() => setOpen(false))}
      >
        {children}
      </Typography>
    </li>
  )
}

const NAV_MENU = [
  {
    name: 'Les Mariés',
    icon: UserGroupIcon,
    href: '#bio',
    target: '_self',
  },
  {
    name: 'Localisation',
    icon: MapPinIcon,
    href: '#location',
    target: '_self',
  },
  {
    name: 'Le jour J',
    icon: CalendarDaysIcon,
    href: '#countdown',
    target: '_self',
  },
  {
    name: 'RSVP',
    icon: InboxArrowDownIcon,
    href: '#rsvp',
    target: '_self',
  },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [isScrolling, setIsScrolling] = useState(false)
  const [clicked, setClicked] = useState(false)

  const handleOpen = () => setOpen((cur) => !cur)

  useEffect(() => {
    window.addEventListener(
      'resize',
      () => window.innerWidth >= 960 && setOpen(false),
    )
  }, [])

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 0) {
        setIsScrolling(true)
      } else {
        setIsScrolling(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <MTNavbar
      shadow={false}
      fullWidth
      blurred={false}
      color={isScrolling ? 'white' : 'transparent'}
      className='fixed top-0 z-50 border-0'
      placeholder={''}
    >
      <div className='container mx-auto flex items-center justify-between'>
        <div className='flex gap-2'>
          <a href='/'>
            <Image
              src='/logos/wedding_logo_v1_rounded.png'
              alt='logo'
              className='h-8 w-8 object-cover'
              width={32}
              height={32}
              priority
            />
          </a>
          <Typography
            color={isScrolling ? 'blue-gray' : 'white'}
            className='text-lg font-bold text-center'
            placeholder={''}
            as='span'
          >
            Jennifer &amp; Mickaël
          </Typography>
        </div>

        <ul
          className={`hidden w-1/2 ml-10 items-center gap-6 lg:flex justify-end ${
            isScrolling ? 'text-gray-900' : 'text-white'
          }`}
        >
          {NAV_MENU.map(({ name, icon: Icon, href, target }) => (
            <NavItem key={name} href={href} target={target}>
              <Icon className='h-5 w-5' />
              <span>{name}</span>
            </NavItem>
          ))}
        </ul>
        <div className='hidden items-center gap-4 lg:flex'>
          {/* <a href='/signin'> */}
          <Button
            // color={isScrolling ? 'cyan' : 'white'}
            placeholder={''}
            onClick={() => setClicked(true)}
            className={`${
              isScrolling
                ? 'bg-cyan-700 text-white'
                : 'bg-white bg-opacity-70 text-gray-900'
            } shadow-lg`}
          >
            Log in
          </Button>
          {/* </a> */}
        </div>
        <IconButton
          variant='text'
          color={isScrolling ? 'gray' : 'white'}
          onClick={handleOpen}
          className='ml-auto inline-block lg:hidden'
          placeholder={''}
        >
          {open ? (
            <XMarkIcon strokeWidth={2} className='h-6 w-6' />
          ) : (
            <Bars3Icon strokeWidth={2} className='h-6 w-6' />
          )}
        </IconButton>
      </div>
      <Collapse open={open}>
        <div className='container mx-auto mt-4 rounded-lg bg-white px-6 py-5'>
          <ul className='flex flex-col gap-4 text-gray-900'>
            {NAV_MENU.map(({ name, icon: Icon, href, target }) => (
              <NavItem key={name} href={href} target={target} setOpen={setOpen}>
                <Icon className='h-5 w-5' />
                {name}
              </NavItem>
            ))}
          </ul>
          <div className='mt-6 flex items-center gap-4'>
            {/* <a href='/signin'> */}
            <Button
              variant='outlined'
              placeholder={''}
              onClick={() => setClicked(true)}
            >
              Log in
            </Button>
            {/* </a> */}
          </div>
        </div>
      </Collapse>
      <Alert
        message={'En cours de création 😇'}
        variant={'info'}
        open={clicked}
        onClose={() => setClicked(false)}
        timeout={4000}
      />
    </MTNavbar>
  )
}

export default Navbar
