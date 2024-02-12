import { createGlobalStyle } from 'styled-components'

const cores = {
  branca: 'white',
  preta: 'black',
  verde: 'green',
  cinza: 'gray'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
  }

  body {
    background-color: ${cores.preta};
    color: ${cores.branca};
  }
`
