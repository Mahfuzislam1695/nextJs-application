import { useRouter } from "next/router";

const ProductDetails = () => {
    const route = useRouter();
    return (
        <div>
            this is product id page for: {route.query.productId}
        </div>
    );
};

export default ProductDetails;