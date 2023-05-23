
import { Fragment, useState, useEffect } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { FunnelIcon } from '@heroicons/react/20/solid'
import { getAllProducts, getAllCategories } from '../../utils/API';

// Import Components
import { Product } from "../../components/Product"

import { useSearchContext } from '../../context/SearchContext';

export default function Products({ products, categories }) {
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
    const [ categoryFilter , setCategoryFilter ] = useState([]);

    const { setItemsToSearchFromFn } = useSearchContext();

    useEffect(()=>{
        setItemsToSearchFromFn(products);
    }, []);

    const filters = [
    {
        id: 'category',
        name: 'Category',
        type: "checkbox",
        options: categories.map(category => {
            return {name: category.trim(), value: category.replace(/\s+/g, '-').toLowerCase(), label: category, checked:false}
        }) 
    },
    ]


    // Handles
    const handleCategoryChange = value => {
        const currentIndex = categoryFilter.indexOf(value);
        const newCategoryItem = [...categoryFilter];
        if(currentIndex === -1)
            newCategoryItem.push(value);
        else
            newCategoryItem.splice(currentIndex, 1);
        setCategoryFilter(newCategoryItem);
    };

    return (
        <div className="bg-white">
            <div>
                {/* Mobile filter dialog */}
                <Transition.Root show={mobileFiltersOpen} as={Fragment}>
                <Dialog as="div" className="relative z-40 lg:hidden" onClose={setMobileFiltersOpen}>
                    <Transition.Child
                    as={Fragment}
                    enter="transition-opacity ease-linear duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition-opacity ease-linear duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                    >
                    <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 z-40 flex">
                        <Transition.Child
                            as={Fragment}
                            enter="transition ease-in-out duration-300 transform"
                            enterFrom="translate-x-full"
                            enterTo="translate-x-0"
                            leave="transition ease-in-out duration-300 transform"
                            leaveFrom="translate-x-0"
                            leaveTo="translate-x-full"
                        >
                            <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                            <div className="flex items-center justify-between px-4">
                                <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                                <button
                                type="button"
                                className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                                onClick={() => setMobileFiltersOpen(false)}
                                >
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                </button>
                            </div>

                            {/* Filters */}
                            <form className="mt-4 border-t border-gray-200">
                                <h3 className="sr-only">Categories</h3>
                                {filters.map((section) => (
                                <div key={section.id} className="border-t border-gray-200 px-4 py-6">
                                    <>
                                        <h3 className="-mx-2 -my-3 flow-root">
                                        <div className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                                            <span className="font-medium text-gray-900 my-5">{section.name}</span>
                                        </div>
                                        </h3>
                                        <div className="space-y-6">
                                            {section.options.map((option) => (
                                            <div key={option.value} className="flex items-center">
                                                <input
                                                name={`${section.id}[]`}
                                                type="checkbox"
                                                checked={categoryFilter.indexOf(option.label) === -1? false:true}
                                                onChange={() => handleCategoryChange(option.label)}
                                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                                />
                                                <label
                                                className="ml-3 min-w-0 flex-1 text-gray-500"
                                                >
                                                {option.label}
                                                </label>
                                            </div>
                                            ))}
                                        </div>
                                    </>
                                </div>
                                ))}
                            </form>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </Dialog>
                </Transition.Root>
                <div className="full-screen h-60 mb-10 relative" style={{ backgroundImage: `url(https://cdn1.parksmedia.wdprapps.disney.com/media/blog/wp-content/uploads/2022/12/d100042054958420958409285094.jpg)`, backgroundSize: 'cover' }}>
                    <h2 className="uppercase font-bold text-white absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 text-3xl xl:text-6xl text-center">All Products</h2>
                </div>
                <main className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center">
                        <button
                            type="button"
                            className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                            onClick={() => setMobileFiltersOpen(true)}
                        >
                            <span className="sr-only">Filters</span>
                            <FunnelIcon className="h-5 w-5" aria-hidden="true" />
                        </button>
                    </div>
                    <section aria-labelledby="products-heading" className="pt-6 pb-24">
                        <h2 id="products-heading" className="sr-only">
                        Products
                        </h2>
                        <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
                            {/* Filters */}
                            <form className="hidden lg:block">
                                <h3 className="sr-only">Categories</h3>
                                {filters.map((section) => (
                                <div key={section.id} className="border-b border-gray-200 py-6">
                                    <>
                                        <h3 className="-my-3 flow-root">
                                        <div className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                                            <span className="font-medium text-gray-900 my-5">{section.name}</span>
                                        </div>
                                        </h3>
                                        <div className="space-y-4">
                                            {section.options.map((option) => (
                                            <div key={option.value} className="flex items-center">
                                                <input
                                                name={`${section.id}[]`}
                                                type="checkbox"
                                                checked={categoryFilter.indexOf(option.label) === -1? false:true}
                                                onChange={() => handleCategoryChange(option.label)}
                                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                                />
                                                <label
                                                className="ml-3 min-w-0 flex-1 text-gray-500"
                                                >
                                                {option.label}
                                                </label>
                                            </div>
                                            ))}
                                        </div>
                                    </>
                                </div>
                                ))}
                            </form>

                            {/* Product grid */}
                            <div className="lg:col-span-3">
                                <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                   {products.filter((item) => { //Use the filter to compare the value of the input (will take the value as props from navbar component), so that if it is empty, it displays all the data, and if any character changes, it displays the data that includes this character
                                    if (categoryFilter.length === 0) {
                                        return item;
                                    }
                                    else if (categoryFilter.includes(item.category)) {
                                        return item;
                                    }
                                    }).map((product) => {
                                        return (
                                            <Product 
                                            key={product.id} 
                                            id={product.id}
                                            title={product.title} 
                                            description={product.description} 
                                            image={product.image}
                                            price={product.price}
                                            rate={product.rating.rate} />
                                        );
                                    })
                                    }
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    )
}
export const getStaticProps = async () => {
    const products = await getAllProducts('products?limit=6');
    const categories = await getAllCategories();
    return {
      props: {
        products,
        categories,
      },
    };
  };

