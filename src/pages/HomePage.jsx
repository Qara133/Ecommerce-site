import { useContext } from 'react';
import { Card, Layout, ProductDetail } from '../components';
import { Context } from '../context';
import { GoToTop } from '../utils';

export const HomePage = () => {

    const context = useContext(Context);
    GoToTop();

    const renderView = () => {
        if (context.filteredItems?.length > 0) {
            return (
                context.filteredItems?.map((item) => (
                    <Card key={item.id} item={item} />
                ))
            )
        } else {
            return (
                <p>No results found 😣</p>
            )
        }
            
    }


    return (
        <Layout>
            <h1 className='mb-5 font-bold text-4xl'>Products</h1>
            
            <form className='w-1/2 mb-8'>
                <input
                    type='text'
                    placeholder='Search product...'
                    className='border-2 rounded-lg w-full p-3'
                    onChange={(e) => context.setSearchByTitle(e.target.value)}
                />
            </form>

            <div className='grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
                {
                    renderView()
                }   
            </div>
            <ProductDetail />
        </Layout>
    )
};