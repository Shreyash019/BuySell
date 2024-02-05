import React from 'react';

const FilterComponent = () => {
    return (
        <div>
            {/* Filter Start */}
            <div className='lg:w-[19%] md:w-[26%] sm:w-[96%] min-h-[40rem] mx-[0.5%] sm:mx-[2%] h-auto mb-8 lg:mb-0 float-left py-8 px-4 sm:px-8 rounded-xl bg-white border border-borderColor shadow-lg shadow-borderColor overflow-auto'>
                <div className='w-[100%] h-auto mb-16'>
                    <h1 className='text-2xl font-bold mb-8'>Category</h1>
                    <div className='w-[100%] h-auto flex items-center justify-start my-4'>
                        <input type='checkbox' id='id11' name='id11' className='w-4 h-4' />
                        <label htmlFor='id11' className='text-sm font-medium px-4'>Men</label>
                    </div>
                    <div className='w-[100%] h-auto flex items-center justify-start my-4'>
                        <input type='checkbox' id='id22' name='id22' className='w-4 h-4' />
                        <label htmlFor='id22' className='text-sm font-medium px-4'>Women</label>
                    </div>
                    <div className='w-[100%] h-auto flex items-center justify-start my-4'>
                        <input type='checkbox' id='id33' name='id33' className='w-4 h-4' />
                        <label htmlFor='id33' className='text-sm font-medium px-4'>Children</label>
                    </div>
                    <div className='w-[100%] h-auto flex items-center justify-start my-4'>
                        <input type='checkbox' id='id44' name='id44' className='w-4 h-4' />
                        <label htmlFor='id44' className='text-sm font-medium px-4'>Electronic</label>
                    </div>
                    <div className='w-[100%] h-auto flex items-center justify-start my-4'>
                        <input type='checkbox' id='id55' name='id55' className='w-4 h-4' />
                        <label htmlFor='id55' className='text-sm font-medium px-4'>Home Decor</label>
                    </div>
                </div>

                <div className='w-[100%] h-auto mb-12'>
                    <h1 className='text-2xl font-bold mb-8'>Price Range</h1>
                    <div className='w-[100%] h-auto flex items-center justify-start my-4'>
                        <input type='checkbox' id='id11' name='id11' className='w-4 h-4' />
                        <label htmlFor='id11' className='text-sm font-medium px-4'>between ₹0 to ₹999</label>
                    </div>
                    <div className='w-[100%] h-auto flex items-center justify-start my-4'>
                        <input type='checkbox' id='id22' name='id22' className='w-4 h-4' />
                        <label htmlFor='id22' className='text-sm font-medium px-4'>between ₹1000 to ₹2999</label>
                    </div>
                    <div className='w-[100%] h-auto flex items-center justify-start my-4'>
                        <input type='checkbox' id='id33' name='id33' className='w-4 h-4' />
                        <label htmlFor='id33' className='text-sm font-medium px-4'>between ₹3000 to ₹7999</label>
                    </div>
                    <div className='w-[100%] h-auto flex items-center justify-start my-4'>
                        <input type='checkbox' id='id44' name='id44' className='w-4 h-4' />
                        <label htmlFor='id44' className='text-sm font-medium px-4'>between ₹5000 to ₹24999</label>
                    </div>
                    <div className='w-[100%] h-auto flex items-center justify-start my-4'>
                        <input type='checkbox' id='id55' name='id55' className='w-4 h-4' />
                        <label htmlFor='id55' className='text-sm font-medium px-4'>Above ₹25000</label>
                    </div>
                </div>
                
                {/* <div className='w-[100%] h-auto mb-16'>
                    <h1 className='text-2xl font-bold mb-8'>Sub Category</h1>
                    <div className='w-[100%] h-auto flex items-center justify-start my-4'>
                        <input type='checkbox' id='id11' name='id11' className='w-4 h-4' />
                        <label htmlFor='id11' className='text-sm font-medium px-4'>Sub Type 1</label>
                    </div>
                    <div className='w-[100%] h-auto flex items-center justify-start my-4'>
                        <input type='checkbox' id='id22' name='id22' className='w-4 h-4' />
                        <label htmlFor='id22' className='text-sm font-medium px-4'>Sub Type 2</label>
                    </div>
                    <div className='w-[100%] h-auto flex items-center justify-start my-4'>
                        <input type='checkbox' id='id33' name='id33' className='w-4 h-4' />
                        <label htmlFor='id33' className='text-sm font-medium px-4'>Sub Type 3</label>
                    </div>
                    <div className='w-[100%] h-auto flex items-center justify-start my-4'>
                        <input type='checkbox' id='id44' name='id44' className='w-4 h-4' />
                        <label htmlFor='id44' className='text-sm font-medium px-4'>Sub Type 4</label>
                    </div>
                    <div className='w-[100%] h-auto flex items-center justify-start my-4'>
                        <input type='checkbox' id='id55' name='id55' className='w-4 h-4' />
                        <label htmlFor='id55' className='text-sm font-medium px-4'>Sub Type 5</label>
                    </div>
                </div> */}

                <div className='w-[100%] h-auto mb-12'>
                    <button className='px-4 py-1.5 text-white text-sm font-bold rounded-lg bg-subNav'>Filter</button>
                </div>

            </div>
            {/* Filter End */}
        </div>
    )
}

export default FilterComponent