import React from 'react';
import Image from 'next/image';
import { IoWallet } from "react-icons/io5";
import { FaBell } from "react-icons/fa";


const Header = () => {
    return (
        <div className='h-[80px] w-full flex justify-between items-center px-20 rounded-2xl'>
            <div className='font-medium text-2xl'>
                aBit
            </div>
            <div className='flex items-center gap-3'>
                <button className='text-[#764CC2] hover:text-[#ffffff] border-2 hover:bg-[#764CC2] hover:shadow-2xl border-[#764CC2] px-3 rounded-full py-1'>
                    Share new Video
                </button>
                <div className='flex items-center ml-4 gap-3 text-gray-500'>
                    <IoWallet size={25} className='cursor-pointer' />
                    <FaBell size={25} className='cursor-pointer' />
                </div>
                <div className=''>
                    <img className='w-8 rounded-full border-[1px] cursor-pointer border-black' src='/userImg.jpeg' alt='user' />
                </div>
                <div>
                    <img className='cursor-pointer' src='/downArrow.png' alt='downArrow' />
                </div>
            </div>
        </div>
    );
};

export default Header;
