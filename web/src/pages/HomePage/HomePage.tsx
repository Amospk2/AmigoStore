import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import Banner from 'src/components/Banner/Banner'
import GroupProducts from 'src/components/GroupProducts/GroupProducts'
import './homePage.scss'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <Banner />
      <GroupProducts />
    </>
  )
}

export default HomePage
