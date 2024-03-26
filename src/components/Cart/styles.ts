import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'
import { ButtonContainer } from '../Button/styles'
import fechar from '../../assets/images/fechar.png'
export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0.7;
`
export const CartContainer = styled.div`
  position: fixed;

  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  z-index: 1;
`
export const SideBar = styled.aside`
  max-width: 360px;
  width: 100%;
  background-color: ${cores.cinza};
  z-index: 1;
  padding: 40px 16px 0 16px;

  ${ButtonContainer} {
    max-width: 100%;
    width: 100%;
  }
`
export const Prices = styled.p`
  margin-bottom: 24px;
  font-weight: bold;
  font-size: 14px;
  color: ${cores.branca};

  span {
    display: block;
    font-size: 12px;
    color: ${cores.cinzaClaro};
  }
`
export const Quantity = styled.p`
  margin-top: 32px;
  margin-bottom: 16px;
  font-weight: bold;
  font-size: 16px;
  color: ${cores.branca};
`

export const CartItem = styled.li`
position: relative;
  display: flex;
  border-bottom: 1px solid ${cores.cinzaClaro};

  padding: 8px 0;
  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
    margin-right: 16px;
  }

  h3 {
    color: ${cores.branca}
    font-weight: bold;
    font-size: 16px;
  }

  div {
  }

  span{
    display: flex;
    color: ${cores.branca}
    font-weight: bold;
    font-size: 14px;
  }

  ${TagContainer}{
    margin-right: 8px;
    margin-top: 8px;
    margin=bottom: 16px;

  }

  button{
    background-image: url(${fechar});
    width: 16px;
    height: 16px;
    border:none;
    background-color: transparent;
    position: absolute;
    top: 8px;
    right: 0;
  }
`
