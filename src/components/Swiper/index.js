import { concatCss } from '../../common'
import useSwipe from '../../hooks/useSwipe'
import S from './index.module.css'

const Swiper = ({ children }) => {
    const { swiperRef, swiperButtons, ...swipeEvents } = useSwipe(children?.length, S);
    
    return <div ref={swiperRef} {...concatCss(S.Swiper)} {...swipeEvents}>
        {children}
        {swiperButtons}
    </div>
}

export default Swiper