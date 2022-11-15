import React, { useEffect, useState } from 'react';

import { Container, Content, Image, Description, Box, Nav } from './styles';

import CrewMembers from '../../utils/crew.json';

const crewMembers = CrewMembers.crew

interface ICrew {
  name: string,
  title: string,
  image: string,
  description: string,
}

const Crew: React.FC = () => {
  const [ selectedCrew, setSelectedCrew ] = useState(1)
  const [crew, setCrew] = useState<ICrew>()

  useEffect(() => {
    const crew = crewMembers.find(crew => {
      return crew.id === selectedCrew
    })

    if(crew) {
      setCrew(crew)
    }

  }, [selectedCrew])

  return (
    <Container>
      <Content>
        <Description>
          <h2>Meet your crew</h2>
          <Box>
            <span>{crew?.title}</span>
            <h1>
            {crew?.name}
            </h1>
            <p>
             {crew?.description}
            </p>
          </Box>
          <Nav>
            <button onClick={() => setSelectedCrew(1)} className={selectedCrew === 1 ? 'active' : ""}></button>
            <button onClick={() => setSelectedCrew(2)} className={selectedCrew === 2 ? 'active' : ""}></button>
            <button onClick={() => setSelectedCrew(3)} className={selectedCrew === 3 ? 'active' : ""}></button>
            <button onClick={() => setSelectedCrew(4)} className={selectedCrew === 4 ? 'active' : ""}></button>
          </Nav>
        </Description>
      </Content>
        <Image>
          <img src={crew?.image} />
        </Image>
    </Container>
  )
}

export default Crew;