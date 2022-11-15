import React, { useEffect, useState } from 'react';

import { Container, Content, Image, Description, Box } from './styles';

import destionations from '../../utils/planets.json';

const planets = destionations.planets

interface IPlanet {
  name: string,
  description: string,
  image: string,
  distance: string,
  travel: string
}

const Destination: React.FC = () => {
  const [ selectedPlanet, setSelectedPlanet ] = useState(1)
  const [planet, setPlanet] = useState<IPlanet>()

  useEffect(() => {
    const planet = planets.find(planet => {
      return planet.id === selectedPlanet
    })

    console.log(planet)

    setPlanet(planet)
  }, [selectedPlanet])

  return (
    <Container>
      <h1>Pick your destination</h1>
      <Content>
        <Image>
          <img src={planet?.image} />
        </Image>
        <Description>
          <ul>
            <li onClick={() => setSelectedPlanet(1)} className={selectedPlanet === 1 ? 'active' : ""}>Moon</li>
            <li onClick={() => setSelectedPlanet(2)} className={selectedPlanet === 2 ? 'active' : ""}>Mars</li>
            <li onClick={() => setSelectedPlanet(3)} className={selectedPlanet === 3 ? 'active' : ""}>Europa</li>
            <li onClick={() => setSelectedPlanet(4)} className={selectedPlanet === 4 ? 'active' : ""}>Titan</li>
          </ul>
          <h1>{planet?.name}</h1>
          <p>
           {planet?.description}
          </p>
          <div>
            <Box>
              <h4>AVG. DISTANCE</h4>
              <h3>{planet?.distance}</h3>
            </Box>
            <Box>
              <h4>AVG. DISTANCE</h4>
              <h3>{planet?.travel}</h3>
            </Box>
          </div>
        </Description>
      </Content>
    </Container>
  )
}

export default Destination;