import Tag from '../Tag'
import { Card, Descricao, Titulo } from './styles'
const Product = () => (
  <Card>
    <img src="//placehold.it/222x250" />
    <Titulo>Nome do jogo</Titulo>
    <Tag>Catgoria</Tag>
    <Tag>Windows</Tag>
    <Descricao>
      Lorem iDescricaosum dolor sit amet consectetur adipisicing elit. Deserunt
      perferendis eveniet laborum doloremque repellendus voluptas repellat
      officiis hic placeat reprehenderit suscipit eaque, animi, laudantium natus
      aperiam vero quae distinctio quo?
    </Descricao>
  </Card>
)

export default Product
