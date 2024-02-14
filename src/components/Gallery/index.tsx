import Section from '../Section'
import zelda from '../../assets/images/banner-homem-aranha.png'
import { Item, Items } from './styles'
const Gallery = () => (
  <Section title="Galeria" background="black">
    <Items>
      <Item>
        <img src={zelda} />
      </Item>
      <Item>
        <img src={zelda} />
      </Item>
      <Item>
        <img src={zelda} />
      </Item>
      <Item>
        <img src={zelda} />
      </Item>
    </Items>
  </Section>
)

export default Gallery
