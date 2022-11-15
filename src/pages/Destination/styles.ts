import styled from 'styled-components';

export const Container = styled.div`
  margin: auto;
  max-width: 1080px;

  h1 {
    font-weight: 400;
    font-size: 1.75rem;
    letter-spacing: .296875rem;
    text-transform: uppercase;
  }
`;

export const Content = styled.main`
  color: rgb(208, 214, 249);
  margin: 3rem 0;
  display: flex;
  justify-content: space-between;

  ul {
    display: flex;
    justify-content: space-between;
    width: 80%;
    height: 50px;

    li {
      opacity: 0.5;
      &.active {
        opacity: 1;
      }
    }
  }
`

export const Image = styled.div`
  transition: 0.2s;
`

export const Description = styled.div`
  max-width: 27.8125rem;

  h1 {
    font-size: 6.25rem;
  }


  p {
    font-size: 1.125rem;
    line-height: 178%;
  }

  > div {
    padding-top: 1.5rem;
    margin-top: 1.5rem;
    border-top: 1px solid rgba(208, 214, 249, 0.3);
    display: flex;
    justify-content: space-between;
  }
`

export const Box = styled.div`
  display: flex;
  flex-direction: column;

  h4, h3 {
    color: rgb(208, 214, 249);
    font-weight: 400;
  }
`
