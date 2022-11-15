import React, { useEffect, useState } from 'react';

import { Container, Content, Image, Description, Box, Nav } from './styles';

import data from '../../utils/tech.json';

const techs = data.techs

interface ITech {
  name: string,
  image: string,
  description: string,
}

const Technology: React.FC = () => {
  const [ selectedTech, setSelectedTech ] = useState(1)
  const [tech, setTech] = useState<ITech>()

  useEffect(() => {
    const tech = techs.find(tech => {
      return tech.id === selectedTech
    })

    if(tech) {
      setTech(tech)
    }

  }, [selectedTech])

  console.log(tech)

  return (
    <Container>
      <Content>
        <Description>
          <h2>SPACE LAUNCH 101</h2>
          <Box>
            <span>THE TERMINOLOGY...</span>
            <h1>
            {tech?.name}
            </h1>
            <p>
              {tech?.description}
            </p>
          </Box>
          <Nav>
            <button onClick={() => setSelectedTech(1)} className={selectedTech === 1 ? 'active' : ""}></button>
            <button onClick={() => setSelectedTech(2)} className={selectedTech === 2 ? 'active' : ""}></button>
            <button onClick={() => setSelectedTech(3)} className={selectedTech === 3 ? 'active' : ""}></button>
          </Nav>
        </Description>
      </Content>
       <Image>
          <img src={tech?.image} />
        </Image>
    </Container>
  )
}

export default Technology;