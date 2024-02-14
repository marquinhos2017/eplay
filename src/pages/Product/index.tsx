import { useParams } from 'react-router-dom'
import Hero from '../../components/Hero'
import Section from '../../components/Section'

import Gallery from '../../components/Gallery'

const Product = () => {
  const { id } = useParams()

  return (
    <>
      <Hero />
      <Section title="Sobre o jogo" background="black">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          dolore harum est nemo, dolorem veritatis ab unde quo ducimus magni
          repudiandae provident vero, doloribus eos dolor sequi molestias quasi
          enim?. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Eveniet vel consequatur natus ea, blanditiis provident? Provident
          temporibus id, accusantium consectetur voluptates, natus velit quo
          praesentium optio excepturi, iste ab facere.
        </p>
      </Section>
      <Section title="Mais detalhes" background="gray">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          dolore harum est nemo, dolorem veritatis ab unde quo ducimus magni
          repudiandae provident vero, doloribus eos dolor sequi molestias quasi
          enim?. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Eveniet vel consequatur natus ea, blanditiis provident? Provident
          temporibus id, accusantium consectetur voluptates, natus velit quo
          praesentium optio excepturi, iste ab facere.
        </p>
      </Section>
      <Gallery />
    </>
  )
}

export default Product
