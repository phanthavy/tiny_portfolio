import { useState } from 'react'
import productLink from '../utils/productLink'
import categoryLink from '../utils/categoryLink'
import { motion, AnimatePresence } from "framer-motion"


const ProductService = () => {

    const [categories, setCategories] = useState('all')

    const filtered = categories === 'all' ? productLink : productLink.filter((item) => item.category === categories)

    return (
        <div className='max-w-6xl mx-auto'>
            <p className="font-bold tracking-wider text-gray-600 uppercase mt-15 text-center text-lg">
                project category
            </p>
            {/* category */}

            <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 mt-10 text-center'>
                {
                    categoryLink.map((item, index) => (
                        <li key={index}>
                            <button onClick={() => setCategories(item.value)} className={`font-semibold transition duration-300 cursor-pointer capitalize bg-gray-600 px-2 py-1 rounded-xl text-sm ${categories === item.value ? "text-orange-400" : "text-gray-300"} `}>{item.label}</button>
                        </li>
                    ))
                }
            </ul>

            <h1 className={`text-center mt-8 font-semibold`}>
                {categories === 'all' ? 'all portfolio' : categories}
            </h1>
            {/* product service */}
            <ul className='mt-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 p-2'>
                {
                    <AnimatePresence>
                        {filtered.map((item) => (
                            <motion.li
                                key={item.id}
                                initial={{ opacity: 0, scale: 1 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 1 }}
                                transition={{ duration: 0.4 }}
                                className="flex flex-col items-center"
                            >
                                <div className="h-50 w-full overflow-hidden mb-5">
                                    <img
                                        src={item.img}
                                        alt={item.title}
                                        className="h-full w-full object-cover hover:scale-110 transition duration-500 cursor-pointer"
                                    />
                                </div>

                                <h1 className="text-xl font-semibold text-center">
                                    {item.title}
                                </h1>

                                <p className="text-gray-600 text-center my-4">
                                    {item.description}
                                </p>

                            </motion.li>
                        ))}
                    </AnimatePresence>
                }
            </ul>
        </div>
    )
}
export default ProductService