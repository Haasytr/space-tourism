import styled from 'styled-components';

export const Container = styled.div`
  margin: 3rem;
  max-width: 1180px;
`;

export const Content = styled.div`
  display: inline-block;
   h5{
    font-weight: 400;
    font-size: 1.75rem;
    letter-spacing: .296875rem;
  }
  
  h1{
    font-weight: 400;
    font-size: 9.375rem;
  }
  p {
    font-size: 1.25rem;
    max-width: 27.75rem;
  }
`

export const Button = styled.button`
  margin-top: 2rem;
  background: none;
  height: 50px;
  width: 100%;
  border-radius: 5px;
  border: 1px solid #ffffff3f;
  transition: 0.2s;

  &:hover {
    border-color: #f2f3f5;
  }
`