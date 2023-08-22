import { Button, Show, Image } from '@chakra-ui/react'

import banner from './banner.jpg'
import './banner.scss'
const Banner = () => {
  return (
    <>
      <section>
        <Image src={banner} alt="banner" />
        <Show breakpoint="(min-width: 1300px)">
          <div className="floating-ad">
            <p className="ad-charm">New Arrival</p>
            <h1 className="ad-header">Discover Our New Collection</h1>
            <p className="ad-description">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi
              cumque illo voluptatem incidunt blanditiis?
            </p>
            <Button
              color="primaryButton.100"
              _hover={{ backgroundColor: 'primaryButton.100', color: 'white' }}
              size="lg"
            >
              Buy now
            </Button>
          </div>
        </Show>
      </section>
    </>
  )
}

export default Banner
