import styled from 'styled-components'

export const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  .main {
    &__body {
      text-align: center;
    }
    &__logo {
      width: 100px;
      height: 100px;
      margin: 0 48px 48px;
      pointer-events: none;
    }
  }
`
