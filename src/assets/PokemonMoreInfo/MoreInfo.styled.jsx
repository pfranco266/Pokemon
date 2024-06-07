import styled from "styled-components";
import colorMap from "../Pokemon/colorMap";
import { Link } from 'react-router-dom';
import { LuSword } from "react-icons/lu";
import { PiShieldPlusDuotone } from "react-icons/pi";
import { LuSwords } from "react-icons/lu";
import { GiMagicShield } from "react-icons/gi";
import { MdOutlineSpeed } from "react-icons/md";
import { GiHealthIncrease } from "react-icons/gi";
import { IoMdArrowRoundBack } from "react-icons/io";
import keyframes from "styled-components";


export const Heading = styled.header`
display: flex;
justify-content: space-evenly;
height: 50vh;
position: relative;
border-bottom-left-radius: 40px;
border-bottom-right-radius: 40px;
background-color: ${({ type }) => {
    return colorMap[type]?.color
  }};
  @media(max-width: 768px) {
    height: 40vh;

  }
`



export const OpenPokeballImage = styled.img`
display: none;
    width: 5em; 
    height: 7em;
    transform: rotate(-90deg)
`




export const PokemonTitle = styled.h1`
text-transform: capitalize;
font-size: 5em;
@media(max-width: 1068px) {
  font-size: 3em
}

`


export const HeaderTitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 2em 0;
`

export const LandingSVG = styled.img`
transform: scaleX(-1);
  padding: 2em 0;
    @media(max-width: 950px) {
      height: 18em;
      width: 18em;
    }
    @media(max-width: 768px) {
      height: 12em;
      width: 12em;
    }
`


export const PokeNumber = styled.span`
font-size: 3em;
opacity: .7;
font-weight: bold;
`

export const BackButton = styled(Link)`
    font-size: 2em;
    background: none;
    border: none;
    color: white;
    font-weight: bold;
    position: absolute;
    top: 2%;
    left: 2%;
    cursor: pointer;
`


export const BodyContainer = styled.main`
    display: flex;
    justify-content: center;
    height: auto;
    margin-bottom: 3em;
`



export const EvolutionGridContainer = styled.section`
  width: 80%;
  display: grid;
  grid-auto-rows: minmax(300px, auto);
  gap: 2em;
  height: auto;
  justify-content: center; /* Center the grid items horizontally */
  
  grid-template-columns: ${({ count }) => {
    if (count === 3) return 'repeat(3, 1fr)';
    if (count === 2) return 'repeat(2, 1fr)';
    return '1fr';
  }};
  
  ${({ count }) =>
    count === 1 &&
    `
    max-width: 500px;
  `}

  @media (max-width: 1360px) {
    color: magenta;
  }
`;




export const EvolutionName = styled.h2`
text-transform: capitalize;

`

export const EvolutionItem = styled.div`
  background-color: blue;
  padding: 10px;
  border: 2px solid #ddd;
  text-align: center;
  height: 300px;


    
`;
export const EvolutionOuterContainer = styled.div`

`


export const EvolutionChainSVG = styled.img`
    width: 5em; 
    height: 7em;
   
`

export const FlexColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  margin-bottom: 5rem;
`

export const AboutInfoContainer = styled.section`
  width: 80%;
  display: flex;
  justify-content: center;
  @media(max-width: 1068px) {
    flex-direction: column;
    align-items: center;
  }
`

export const AboutSVG = styled.img`
  width: 15em;
  height: 15em;
`
export const PrevButton = styled(IoMdArrowRoundBack)`
  font-size: 2em;
  background: none;
  border: none;
  color: white;
  font-weight: bold;
  position: absolute;
  top: 50%;
  left: 10%;
  z-index: 10;
  cursor: pointer;
`;

// Next Button
export const NextButton = styled(IoMdArrowRoundBack)`
  font-size: 2em;
  background: none;
  border: none;
  color: white;
  font-weight: bold;
  position: absolute;
  top: 50%;
  right: 10%;
  z-index: 10;
  cursor: pointer;
  transform: rotateY(180deg); /* Flip the image horizontally */
`;




export const AboutImgContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
 
`
export const AboutImgTitle = styled.h3`

`

export const AboutTextContainer = styled.div`
  width: 100%;
  background-color: black;
  border: 2px solid yellow;
  border-radius: 20px;
  margin: 1em 2em;
  padding: 3em;
  @media(max-width: 1068px) {
    width: 60%;
  }
`

export const StatsGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  background-color: black;
  border: 2px solid yellow;
  width: 920px;
  height: 720px;
  border-radius: 10px;
  @media(max-width: 980px) {
    grid-template-columns: repeat(2, 1fr);
    width: 720px;
    height: auto;
  }
  @media(max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    width: 540px;
    height: auto;
  }

  @media(max-width: 540px) {
    grid-template-columns: repeat(2, 1fr);
    width: 450px;
    height: auto;
  }
`

export const StatsFlexContainer = styled.div`
  display: flex; 
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  margin: 2em;
  @media(max-width: 980px) {
    margin: 1.5em;

  }
  @media(max-width: 768px) {
    margin: 1em;

  }
  
`

export const StatsText = styled.p`
  font-size: 2em;
  @media(max-width: 660px) {
    font-size: 1.5em;

  }
`


export const AttackIcon = styled(LuSword)`
height: 50px;
width: 50px;
color: navy;
`

export const DefenseIcon = styled(PiShieldPlusDuotone)`
height: 50px;
width: 50px;
color: #f1f1f1;
`

export const HealthIcon = styled(GiHealthIncrease)`
height: 50px;
width: 50px;
color: green;
`

export const SpeedIcon = styled(MdOutlineSpeed)`
height: 50px;
width: 50px;
color: yellow;
`

export const SpecialAttackIcon= styled(LuSwords)`
height: 50px;
width: 50px;
color: red;
`

export const SpecialDefenseIcon= styled(GiMagicShield)`
height: 50px;
width: 50px;
color: grey;
`



export const AbilitiesGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  background-color: black;
  border: 2px solid yellow;
  width: 920px;
  height: auto;
  border-radius: 10px;
  @media(max-width: 980px) {
    grid-template-columns: repeat(2, 1fr);
    width: 720px;
    height: auto;
  }
  @media(max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    width: 540px;
    height: auto;
  }
  @media(max-width: 540px) {
    grid-template-columns: repeat(2, 1fr);
    width: 450px;
    height: auto;
  }
`


export const AbilitiesFlexContainer = styled.div`
  display: flex; 
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  margin: 2em;
  text-transform: capitalize;
  @media(max-width: 980px) {
    margin: 1.5em;

  }
  @media(max-width: 768px) {
    margin: 1em;
  }
`


const twinkleEffect = styled(keyframes)`
{
  0%, 100% {
      opacity: 0.3;
      transform: scale(1);
  }
  50% {
      opacity: 1;
      transform: scale(1.05);
  }
}
`

export const Twinkle = styled.div`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
pointer-events: none;
background: transparent;
animation: ${twinkleEffect} 1.5s infinite;
`

export const TwinkleContainer = styled.div`

`