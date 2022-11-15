import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin: auto;
  max-width: 1080px;
`;

export const Content = styled.main`
  color: rgb(208, 214, 249);
  margin-bottom: 3rem;


`

export const Image = styled.div`
  object-fit: contain;

  img {
    width: 100%;
    height: 90%;
    border-radius: 5rem;
  }
`

export const Description = styled.div`
  max-width: 27.8125rem;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-around;

 h2 {
    font-size: 28px;
    font-weight: 400;
    text-transform: uppercase;
  }
`

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2.5rem 0;

    span {
    font-size: 32px;
    font-weight: 400;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.5);
  }

  h1 {
    font-size: 4.25rem;
  }

  h4, h3 {
    color: rgb(208, 214, 249);
    font-weight: 400;
  }

   p {
    font-size: 1.125rem;
    line-height: 178%;
  }
`

export const Nav = styled.nav`
  display: flex;
  gap: 24px;
  button {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    border: none;
    background-color: rgba(255,255,255,.2);
    cursor: pointer;

    &.active {
      background-color: #fff;
    }
  }
`