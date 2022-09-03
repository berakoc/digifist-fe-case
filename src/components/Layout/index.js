import { concatCss } from "../../common";
import S from './index.module.css'

const Layout = ({ children }) => {
    return (
        <section {...concatCss(S.Layout)}>
            {children}
        </section>
    );
}

export default Layout;