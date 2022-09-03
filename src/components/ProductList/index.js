import { concatCss } from "../../common"
import { products } from "../../constants"
import Swiper from "../Swiper"
import ProductCard from "../ProductCard"
import { VerticalSpace } from "../Space"
import S from './index.module.css'

const ProductList = () => {
    return (
        <div>
            <div {...concatCss(S.category)}>Shop all everyday items</div>
            <VerticalSpace height={32} />
            <Swiper>
                {products.map((product, index) => <ProductCard key={index} product={product} />)}
            </Swiper>
        </div>
    )
}

export default ProductList