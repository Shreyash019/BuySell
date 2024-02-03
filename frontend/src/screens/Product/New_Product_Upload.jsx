import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { FaPlus } from "react-icons/fa6";
import { AiFillDelete } from "react-icons/ai";
import { VscCloudUpload } from "react-icons/vsc";
import toast from 'react-hot-toast'

const New_Product_Upload = () => {

    const defaultImg = '';
    const [productImage, setProductImage] = useState([]);

    const handleImageDelete = (e, index) => {
        e.preventDefault()
        let temp = productImage.filter((data) => {
            if (data.toString() === index.toString()) {
                return null
            }
            return data
        })
        setProductImage(temp)
    }

    const uploadSelectedImage = (e) => {
        e.preventDefault()
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();

            reader.onload = () => {
                if (!productImage.includes(reader.result)) {
                    setProductImage([...productImage, reader.result])
                } else {
                    toast.error(`Please select another image as same image already selected!`)
                }
            };
            reader.readAsDataURL(file);
        }
    }

    useEffect(() => { }, [productImage])

    return (
        <div className='w-[100%] h-auto py-8 overflow-auto flex items-center justify-center'>
            <div className='w-[80%] sm:w-[98%] h-auto overflow-auto'>
                <div className='w-[90%] sm:w-[100%] h-auto mx-[5%] sm:mx-0 my-12 sm: mb-8 flex flex-wrap items-center justify-center'>
                    <h1 className='w-[100%] text-2xl font-semibold text-center truncate overflow-auto'>New Product Upload</h1>
                    <hr className='w-[40%] md:w-60% sm:w-[70%]  h-[2px] my-2 rounded-2xl border-none bg-black' />
                </div>
                <div className='w-[50%] sm:w-[100%] h-auto float-left overflow-auto'>
                    <div className='w-[94%] h-auto m-[3%] flex items-center justify-center'>
                        <div className={`w-[23rem] h-[20rem] md:h-[18rem] sm:h-[16rem] border border-sideNav rounded-sm bg-[length:24rem_20rem] bg-center bg-no-repeat overflow-hidden flex ${productImage[0] ? 'items-start justify-end' : 'items-center justify-center'}`} style={{ backgroundImage: `url(${productImage[0] || defaultImg})` }}>
                            {productImage[0]
                                ? <span className='text-sm text-white bg-black rounded-full p-1' onClick={(e) => handleImageDelete(e, productImage[0])}><AiFillDelete /></span>
                                : <div className='text-8xl text-imgBgColorHover animate-pulse'>
                                    <p className='text-center'><VscCloudUpload /></p>
                                    <p className='text-center text-sm'>Upload Image</p>
                                </div>
                            }
                        </div>
                    </div>
                    <div className='w-[100%] h-auto flex flex-wrap items-center justify-center'>
                        <div className='w-20 h-20 m-2 border border-sideNav rounded-sm overflow-hidden flex items-center justify-center bg-[length:5rem_5rem] bg-center bg-no-repeat' style={{ backgroundImage: `url(${productImage[1] || defaultImg})` }}>
                            {productImage[1]
                                ? <span className='text-sm text-white bg-black rounded-full p-1 cursor-pointer' onClick={(e) => handleImageDelete(e, productImage[1])}><AiFillDelete /></span>
                                : <div className='w-[100%] h-auto text-2xl text-imgBgColorHover animate-pulse'>
                                    <p className='w-[100%] h-auto text-center flex items-center justify-center'><VscCloudUpload /></p>
                                    <p className='w-auto h-text-[0.5rem] text-center text-[0.5rem]'>Upload Image</p>
                                </div>
                            }
                        </div>
                        <div className='w-20 h-20 m-2 border border-sideNav rounded-sm overflow-hidden flex items-center justify-center bg-[length:5rem_5rem] bg-center bg-no-repeat' style={{ backgroundImage: `url(${productImage[2] || defaultImg})` }}>
                            {productImage[2]
                                ? <span className='text-sm text-white bg-black rounded-full p-1 cursor-pointer' onClick={(e) => handleImageDelete(e, productImage[2])}><AiFillDelete /></span>
                                : <div className='w-[100%] h-auto text-2xl text-imgBgColorHover animate-pulse'>
                                    <p className='w-[100%] h-auto text-center flex items-center justify-center'><VscCloudUpload /></p>
                                    <p className='w-auto h-text-[0.5rem] text-center text-[0.5rem]'>Upload Image</p>
                                </div>
                            }
                        </div>
                        <div className='w-20 h-20 m-2 border border-sideNav rounded-sm overflow-hidden flex items-center justify-center bg-[length:5rem_5rem] bg-center bg-no-repeat' style={{ backgroundImage: `url(${productImage[3] || defaultImg})` }}>
                            {productImage[3]
                                ? <span className='text-sm text-white bg-black rounded-full p-1 cursor-pointer' onClick={(e) => handleImageDelete(e, productImage[3])}><AiFillDelete /></span>
                                : <div className='w-[100%] h-auto text-2xl text-imgBgColorHover animate-pulse'>
                                    <p className='w-[100%] h-auto text-center flex items-center justify-center'><VscCloudUpload /></p>
                                    <p className='w-auto h-text-[0.5rem] text-center text-[0.5rem]'>Upload Image</p>
                                </div>
                            }
                        </div>
                        <div className={`w-20 h-20 m-2 border border-sideNav rounded-sm overflow-hidden flex items-center justify-center bg-[length:5rem_5rem] bg-center bg-no-repeat ${productImage[5] ? 'blur-[0.5px]' : ''}`} style={{ backgroundImage: `url(${productImage[4] || defaultImg})` }}>
                            {productImage[5]
                                ? <span className='text-4xl text-black'><FaPlus /></span>
                                : <>{productImage[4] ? ''
                                    : <div className='w-[100%] h-auto text-2xl text-imgBgColorHover animate-pulse'>
                                        <p className='w-[100%] h-auto text-center flex items-center justify-center'><VscCloudUpload /></p>
                                        <p className='w-auto h-text-[0.5rem] text-center text-[0.5rem]'>Upload Image</p>
                                    </div>
                                }</>
                            }
                        </div>
                    </div>
                    <div className='w-[100%] h-auto py-4 float-left flex items-center justify-center'>
                        {/* <input type='file' accept="image/*" name='product_image' className='w-auto h-auto bg-imgBgColor text-white rounded-full border-none outline-none'/> */}
                        <label htmlFor="file-input" className="w-auto h-auto px-4 py-1.5 bg-imgBgColor hover:bg-imgBgColorHover text-sm text-white hover:text-sideNav font-semibold rounded-xl outline outline-offset-2 outline-borderColor hover:outline-imgBgColorHover">
                            <span >Choose a file</span>
                            <input id="file-input" type="file" className="hidden" accept="image/*" onChange={uploadSelectedImage} />
                        </label>
                        <button className='w-auto h-auto px-4 mx-4 py-1.5 bg-btnBgColorPrm hover:bg-btnBgColorPrmHover border border-white hover:border-imgBgColorHover text-white text-sm font-semibold rounded-full'>Upload</button>
                    </div>
                </div>
                <div className='w-[50%] sm:w-[100%] h-auto p-4 sm:px-1 sm:py-4 float-left overflow-auto'>
                    <div className='w-[100%] h-auto rounded-xl px-8 py-2 border border-borderColor shadow-md shadow-imgBgColorHover overflow-auto'>
                        <form className='w-[100%] h-auto float-left overflow-auto'>
                            <div className='w-[100%] h-auto mt-4 mb-2 float-left overflow-auto'>
                                <label htmlFor='description' className='w-[100%] h-auto float-left text-sm font-semibold'>Description:</label>
                                <textarea id='description' className='w-[100%] h-24 text-sm outline-none border border-borderColor p-4'>
                                    Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
                                </textarea>
                            </div>

                            <div className='w-[100%] h-auto mt-4 mb-2 float-left overflow-auto'>
                                <label htmlFor='price' className='w-[100%] h-auto float-left text-sm font-semibold'>Price:</label>
                                <input type='Number' id='price' name='price' placeholder='Price' className='w-[100%] h-auto px-4 py-1 text-sm float-left outline-none border border-borderColor rounded-xl' />
                            </div>
                            <div className='w-[100%] h-auto mt-4 mb-2 float-left overflow-auto'>
                                <label htmlFor='stock' className='w-[100%] h-auto float-left text-sm font-semibold'>Stock:</label>
                                <input type='Number' id='stock' name='stock' placeholder='Stock' className='w-[100%] h-auto px-4 py-1 text-sm float-left outline-none border border-borderColor rounded-xl' />
                            </div>
                            <div className='w-[100%] h-auto mt-4 mb-2 float-left overflow-auto'>
                                <div className='w-[47%] mr-[6%] h-auto float-left overflow-auto'>
                                    <label htmlFor='category' className='w-[100%] h-auto float-left text-sm font-semibold'>Category:</label>
                                    <select id='category' className='w-[100%] h-auto float-left text-xs px-2 py-1 outline-none border border-imgBgColorHover rounded-xl appearance-none cursor-pointer truncate overflow-hidden'>
                                        <option className='text-xs truncate overflow-hidden'>--Select--</option>
                                        <option className='text-xs truncate overflow-hidden'>Select1</option>
                                        <option className='text-xs truncate overflow-hidden'>Select2</option>
                                        <option className='text-xs truncate overflow-hidden'>Select3</option>
                                        <option className='text-xs truncate overflow-hidden'>Select4</option>
                                        <option className='text-xs truncate overflow-hidden'>Select5</option>
                                        <option className='text-xs truncate overflow-hidden'>Select6</option>
                                    </select>
                                </div>
                                <div className='w-[47%] h-auto float-left overflow-auto'>
                                    <label htmlFor='subCategory' className='w-[100%] h-auto float-left text-sm font-semibold'>Sub Category:</label>
                                    <select id='subCategory' className='w-[100%] h-auto float-left text-xs px-2 py-1 outline-none border border-imgBgColorHover rounded-xl appearance-none cursor-pointer truncate overflow-hidden'>
                                        <option className='text-xs truncate overflow-hidden'>--Select--</option>
                                        <option className='text-xs truncate overflow-hidden'>Select1</option>
                                        <option className='text-xs truncate overflow-hidden'>Select2</option>
                                        <option className='text-xs truncate overflow-hidden'>Select3</option>
                                        <option className='text-xs truncate overflow-hidden'>Select4</option>
                                        <option className='text-xs truncate overflow-hidden'>Select5</option>
                                        <option className='text-xs truncate overflow-hidden'>Select6</option>
                                    </select>
                                </div>
                            </div>

                            <button className='px-4 py-1 text-sm rounded-xl bg-sideNav text-white font-bold my-6 mr-4'>Upload</button>
                        </form>
                    </div>
                </div>
            </div>
            <Helmet> <title>Buy&Sell | New Product Upload</title></Helmet>
        </div>
    )
}

export default New_Product_Upload