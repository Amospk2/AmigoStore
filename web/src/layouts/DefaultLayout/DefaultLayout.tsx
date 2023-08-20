import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'

import { Link, routes } from '@redwoodjs/router'
import './defaultLayout.scss'

type DefaultLayoutProps = {
  children?: React.ReactNode
}

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  const navItems = ['Home', 'Shop', 'About', 'Contact']

  return (
    <>
      <header>
        Logo here
        <nav className="pages">
          {navItems.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </nav>
        <nav className="icons">
          <PersonOutlineOutlinedIcon />
          <SearchOutlinedIcon />
          <FavoriteBorderOutlinedIcon />
          <ShoppingCartOutlinedIcon />
        </nav>
      </header>
      {children}
    </>
  )
}

export default DefaultLayout
