import { concatCss } from "../../common"
import Swiper from "../Swiper"
import ProductCard from "../ProductCard"
import { VerticalSpace } from "../Space"
import S from './index.module.css'
import useLocalApi from "../../hooks/useLocalApi"
import { getProducts } from "../../api/products"
import { LocalApiKey } from "../../constants"

const ProductList = () => {
    const { data: products } = useLocalApi(LocalApiKey.PRODUCTS, getProducts);

    return (
        <div>
            <div {...concatCss(S.category)}>Shop all everyday items</div>
            <VerticalSpace height={32} />
            <Swiper>
                {products?.map((product, index) => <ProductCard key={index} product={product} />)}
            </Swiper>
        </div>
    )
}

export default ProductList