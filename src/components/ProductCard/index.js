import { concatCss, getCurrency } from "../../common";
import ColorSelector from "../ColorSelector";
import { VerticalSpace } from "../Space";
import S from './index.module.css';

const ProductCard = ({ product}) => {
    const { name, price, imageUrl } = product;
    return <div {...concatCss(S.ProductCard)}>
        <div draggable={false} {...concatCss(S.productImage)}>
            <img draggable={false} src={imageUrl} alt={name} />
        </div>
        <VerticalSpace height={8} />
        <div draggable={false} {...concatCss(S.productName, S.productText)}>{name}</div>
        <VerticalSpace height={4} />
        <div draggable={false} {...concatCss(S.currencyColorContainer)}>
            <div draggable={false} {...concatCss(S.productPrice, S.productText)}>{getCurrency(price)}</div>
            <VerticalSpace height={8} />
            <ColorSelector />
        </div>
    </div>
}

export default ProductCard