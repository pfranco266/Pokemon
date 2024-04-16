import { BsFillLightningFill, BsFire } from "react-icons/bs";
import { GiStoneSphere, GiPsychicWaves, GiHighGrass, GiPolarStar, GiPoisonGas, GiAngelWings, GiGhost, GiMetalScales, GiFairyWand   } from "react-icons/gi";
import { FaRegSnowflake } from "react-icons/fa";
import { FaHandBackFist, FaMountainSun, FaBug, FaDragon    } from "react-icons/fa6";
import { CgDarkMode } from "react-icons/cg";






import { IoIosWater } from "react-icons/io"

const colorMap = {
    water: {
        color: '#2389da',
        icon: IoIosWater,
    },
    fire: {
        color: '#ff5a00',
        icon: BsFire,
    },
    ice: {
        color: '#368BC1',
        icon: FaRegSnowflake,
    },
    psychic: {
        color: '#635c84',
        icon: GiPsychicWaves,
    },
    grass: {
        color: '#40a829',
        icon: GiHighGrass,
    },
    normal: {
        color: '#A8A77A',
        icon: GiPolarStar,
    },
    electric: {
        color: '#f7e12c',
        icon: BsFillLightningFill,
    },
    fighting: {
        color: '#C22E28',
        icon: FaHandBackFist,
    },
    poison: {
        color: '#A33EA1',
        icon: GiPoisonGas, 
    },
    rock: {
        color: '#B6A136',
        icon: GiStoneSphere,
    },
    ground: {
        color: '#E2BF65',
        icon: FaMountainSun ,
    },
    flying: {
        color: '#A98FF3',
        icon: GiAngelWings ,
    },
    bug: {
        color: '#A6B91A',
        icon: FaBug ,
    },
    ghost: {
        color: '#735797',
        icon: GiGhost ,
    },
    dragon: {
        color: '#6F35FC',
        icon: FaDragon ,
    },
    dark: {
        color: '#705746',
        icon: CgDarkMode,
    },
    steel: {
        color: '#B7B7CE',
        icon: GiMetalScales ,
    },
    fairy: {
        color: '#D685AD',
        icon: GiFairyWand 
    },
}



export default colorMap