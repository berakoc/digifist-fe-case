import { concatCss, getImageUrlFromResources } from '../../common';
import S from './index.module.css'

const Hero = () => {
    return <img {...concatCss(S.Hero)} src={getImageUrlFromResources('model-cover')} alt="hero" />
}

export default Hero;