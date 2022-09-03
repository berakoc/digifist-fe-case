import { concatCss } from '../../common';
import S from './index.module.css'

const Header = () => {
    return <header {...concatCss(S.Header)}>
        <h1 {...concatCss(S.title)}>Everyday items, we have something to suit every occasion.</h1>
        <h2 {...concatCss(S.subtitle)}>At suspendisse augue lectus arcu, accumsan ut sit posuere vitae sit tincidunt semper eu proin leo gravida cursus.</h2>
    </header>
}

export default Header;