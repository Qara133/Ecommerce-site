import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from '../context';
import { deliveryDate, today } from '../utils';
import { Layout } from '../components';
import { ChevronLeftIcon, StarIcon, ShoppingCartIcon } from '@heroicons/react/24/solid';
import { GoToTop } from '../utils';

export const DetailProduct = () => {
    const context = useContext(Context);
    GoToTop();

    const navigate = useNavigate();
    const onNavigateBack = () => {
        navigate(-1);
    };

    // Image Exchange
    const [imagen, setImagen] = useState(context.showProductDetail.images[0]);
    const cambiarImagen = (element) => {
        setImagen(element);
    };

    useEffect(() => {}, [setImagen]);

    // Add to cart
    const addProductsToCart = (productData) => {
        context.setCartProducts([...context.cartProducts, productData]);
        context.openCheckoutSideMenu();
    };

    return (
        <>
            <Layout>
                <div className="w-full max-w-screen-lg px-4 md:px-8">
                    <button
                        className="flex items-center font-light mb-4"
                        onClick={onNavigateBack}
                    >
                        <ChevronLeftIcon className="h-4 w-4 text-black" /> Return
                    </button>

                    <div className="flex flex-col lg:flex-row w-full mb-10 mt-10">
                        {/* Product Images */}
                        <figure className="w-full lg:w-4/12">
                            <img
                                className="w-full h-60 md:h-80 object-contain"
                                src={imagen ?? context.showProductDetail.images[0]}
                                alt={`Image ${context.showProductDetail.title}`}
                            />
                            <div className="flex justify-between mt-2">
                                {context.showProductDetail.images.map((img, index) => (
                                    <img
                                        key={index}
                                        className="border object-contain h-20 md:h-24 w-20 mr-2 cursor-pointer"
                                        src={img}
                                        alt={`Image ${context.showProductDetail.title}`}
                                        onClick={() => cambiarImagen(img)}
                                    />
                                ))}
                            </div>
                        </figure>

                        {/* Product Info */}
                        <div className="w-full lg:w-3/6 px-4 lg:px-8 mt-4 lg:mt-0">
                            <h1 className="text-black mb-5 font-bold text-2xl lg:text-4xl">
                                {context.showProductDetail.title}
                            </h1>

                            <div className="flex mb-5 w-60">
                                {[...Array(5)].map((_, i) => (
                                    <StarIcon
                                        key={i}
                                        className={
                                            context.showProductDetail.rate >= i + 1
                                                ? 'text-yellow-500'
                                                : 'text-gray-300'
                                        }
                                    />
                                ))}
                            </div>

                            <div className="flex flex-col md:flex-row justify-between mb-4">
                                <div>
                                    <p>
                                        Brand:{' '}
                                        <span className="font-semibold">
                                            {context.showProductDetail.brand}
                                        </span>
                                    </p>
                                    <p>
                                        Stock available:{' '}
                                        <span className="font-semibold">
                                            {context.showProductDetail.quantity}
                                        </span>
                                    </p>
                                </div>
                                <span className="font-light mt-2 md:mt-0">
                                    {context.showProductDetail.category}
                                </span>
                            </div>

                            <p className="font-bold mt-4 text-right">
                                Price:{' '}
                                <span className="text-red-800 text-2xl ml-4">
                                    ${context.showProductDetail.price}
                                </span>
                            </p>

                            <p className="font-bold mt-4">About this article</p>
                            <p>{context.showProductDetail.description}</p>
                        </div>

                        {/* Add to Cart Section */}
                        <div className="w-full lg:w-1/6 mt-4 lg:mt-0">
                            <span className="text-red-800 text-2xl">
                                ${context.showProductDetail.price}
                            </span>
                            <p>Free shipping!</p>
                            <p className="text-xs mb-4">
                                Arrives between{' '}
                                <span className="font-bold">
                                    {deliveryDate(today, 'dd/mm/yy', 5)} and{' '}
                                    {deliveryDate(today, 'dd/mm/yy', 10)}
                                </span>
                            </p>

                            <button
                                type="button"
                                className="flex items-center bg-orange-200 font-bold border-3 py-1 px-2 rounded-lg w-full"
                                onClick={() => addProductsToCart(context.showProductDetail)}
                            >
                                <ShoppingCartIcon className="h-5 w-5 text-black mr-1" />
                                Add to Cart
                            </button>
                        </div>
                    </div>

                    {/* Banner */}
                    <figure>
                        <img
                            src={context.showProductDetail.banner}
                            alt={`Banner ${context.showProductDetail.title}`}
                            className="w-full rounded-lg"
                        />
                    </figure>
                </div>
            </Layout>
        </>
    );
};
