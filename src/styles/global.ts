import { createGlobalStyle, css } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed&family=Barlow:wght@100;400;700&display=swap');
  * {
      color: #fff;
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }

  body {
    background-color: #0b0d17;
    background-size: cover;

    &.home {
      background-image: url('https://space-tourism-website-murex.vercel.app/_next/image?url=%2Fimages%2Fhome%2Fbackground-home-desktop.jpg&w=1920&q=75');
    }
    &.destination {
      background-image: url('https://space-tourism-website-murex.vercel.app/_next/image?url=%2Fimages%2Fdestination%2Fbackground-destination-desktop.jpg&w=1920&q=75');
    }
    &.crew {
      background-image: url('https://space-tourism-multi-page-solution.netlify.app/images/88a3c692fd34eb311e04.jpg')
    }
  }

  a {
      font-family: 'Barlow', sans-serif;
      color: #fff;
      text-align: center;
      border-bottom: 2px;
      border-color: #fff;
      text-decoration: none;
      font-weight: 400;
  }

  ul {
    list-style-type: none;
  }

  li {
    height: 100%;
    text-align: center;
    text-transform: uppercase;

    display: flex;
    align-items: center;
    justify-content: space-between;

    letter-spacing: .16875rem;

    position: relative;

    transition: 10s;

     span {
      color: #fff;
      font-weight: bold;
      margin: 0 0.5rem;
    }

    a {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    &:hover:after {
      content: "";
      position: absolute;
      height: 0.1875rem;
      width: 100%;
      left: 0;
      bottom: 0;
      background-color: #fff;
      opacity: 0.3;
    }

    &.active:after {
      content: "";
      position: absolute;
      height: 0.1875rem;
      width: 100%;
      left: 0;
      bottom: 0;
      background-color: #fff;
      opacity: 1;
    }
  }
`

export default GlobalStyle