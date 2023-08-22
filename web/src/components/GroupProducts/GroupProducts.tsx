import { Image } from '@chakra-ui/react'

import './groupProducts.scss'
import customization from './assets/customization.jpg'
import hardware from './assets/hardware.jpg'
import perifericos from './assets/perifericos.jpg'
const GroupProducts = () => {
  const images = [
    { src: hardware, title: 'Hardware' },
    { src: perifericos, title: 'Peripherals' },
    { src: customization, title: 'Customization' },
  ]
  return (
    <section className="group-products">
      <h2 className="gp-header">Browse The Range</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>

      <picture className="gp-group-images">
        {images.map((image) => {
          return (
            <figure key={image.title}>
              <Image
                className="gp-image"
                boxSize="300px"
                borderRadius="md"
                objectFit="cover"
                src={image.src}
                alt={image.title}
              />
              <figcaption className="gp-image-legend">{image.title}</figcaption>
            </figure>
          )
        })}
      </picture>
    </section>
  )
}

export default GroupProducts
