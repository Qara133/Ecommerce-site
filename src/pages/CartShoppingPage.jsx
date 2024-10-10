import { useContext } from 'react';
import { Layout, OrderCard } from '../components';
import { GoToTop } from '../utils';
import { Context } from '../context';
import { Link } from 'react-router-dom';
import { totalPrice } from '../utils';
import { useCreateDate } from '../hooks';

export const CartShoppingPage = () => {

    const context = useContext(Context);
    const date = useCreateDate();
    GoToTop();

    const handleDelete = (id) => {
        const filteredProducts = context.cartProducts.filter(prod => prod.id != id);
        context.setCartProducts(filteredProducts);
    }

    const handleCheckout = () => {
        const orderToAdd = {
            id: new Date().getTime(),
            date: date,
            products: context.cartProducts,
            totalProducts: context.cartProducts.length,
            totalPrice: totalPrice(context.cartProducts)
        }

        context.setOrder([...context.order, orderToAdd]);
        context.setCartProducts([]);
        context.closeCheckoutSideMenu();
    }

    return (
        <Layout >
            <h1 className='mb-5 font-bold text-2xl sm:text-3xl lg:text-4xl'>BalckShop shopping cart</h1>
            <div className='flex flex-col sm:flex-row justify-between items-start max-w-screen-lg'>
                <div className='overflow-y-scroll w-full lg:w-2/3 px-4 sm:px-8 lg:px-20 h-80 lg:h-auto'>
                    {
                        context.cartProducts.map((prod) => (
                            <OrderCard
                                key={prod.id}
                                id={prod.id}
                                title={prod.title}
                                imageUrl={prod.images[0]}
                                price={prod.price}
                                handleDelete={handleDelete}
                            />
                        ))
                    }
                </div>
                
                <div className='w-full sm:h-screen lg:w-1/3 px-4 sm:px-8 lg:px-4 mb-4 lg:mb-0'>
                    <p className='flex flex-row justify-between items-center'>
                        <span className='mr-2 text-sm sm:text-base lg:text-lg'>Total in the shopping cart:</span>
                        <span className='font-medium text-xl sm:text-2xl text-red-800'>${totalPrice(context.cartProducts)}</span>
                    </p>
                    {
                        context.productsCount !== 0 &&
                        <div>
                            <Link to='/my-orders/last'>
                                <button
                                    type='button'
                                    className='border-2 p-2 rounded-lg w-full mt-3 bg-orange-200 text-sm sm:text-base lg:text-lg' 
                                    onClick={() => handleCheckout()}
                                >
                                    Buy
                                </button>
                            </Link>
                            <button
                                type='button'
                                onClick={() => context.setCartProducts([])}
                                className='border-2 p-2 rounded-lg w-full bg-red-200 mt-3 text-sm sm:text-base lg:text-lg'
                            >
                                Delete all items
                            </button>
                        </div>
                    }
                </div>
            </div>
        </Layout>
    )
};
