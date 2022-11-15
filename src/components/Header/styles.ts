import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  grid-template-columns: 20% 60%;
  margin: 2.5rem 0 6.5rem 3.5rem;
  height: 6rem;

`;

export const Nav = styled.ul`
  height: 100%;
  padding: 0 5rem 0 7.5rem;
  
  background-color: rgba(200,200,200,0.1);
  
  display: flex;
  align-items: center;
  grid-gap: 2rem;
  
  text-transform: uppercase;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  box-shadow: -4px 4px 16px 3px #0b0d1766;    
`
