import styled from 'styled-components'

export const Hero = styled.header`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  pointer-events: none;
  position: fixed;
  width: 100vw;
  z-index: 1;
  justify-content: center;
  text-align: center;
  align-content: center;
  align-items: center;
  height: 100vh;
  background-image: var(--gradient-radial-right-top);
`
export const H1 = styled.h1`
  font-size: var(--font-size--colossal);
  font-weight: var(--font-weight-samibold);
  line-height: 1.2;
  margin: 0 0 0 0;
`
export const H2 = styled.h2`
  font-size: var(--font-size--huge);
  font-weight: var(--font-weight-samibold);
  line-height: 1.15;
`
