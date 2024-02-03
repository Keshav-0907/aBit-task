const Card = () => {
    return (
        <div className=' bg-[#e0e0e0] rounded-2xl flex w-[30rem] h-48 shadow-2xl'>
            <div className='w-2/6'>
                <img className='h-full object-cover rounded-s-2xl' src='/userImg.jpeg' alt='user' />
            </div>

            <div className='p-3 px-3 w-4/6 border-l-[1.5px] border-black flex justify-around flex-col'>
                <div className='flex justify-between pr-5'>
                    <div className='uppercase text-lg font-semibold'>
                        Dan Image
                    </div>
                    <div className='text-[#696969]'>
                        /Johny_Films/
                    </div>
                </div>

                <div className=''>
                    <div className='font-bold text-[#696969]'>
                        Bio
                    </div>
                    <div className='text-sm text-[#696969]'>
                        Simply a film fan creating original content for YouTube. Let’s Collaborate.
                    </div>
                </div>

                <div className='bg-[#515151] w-full mr-5 border-[1px] border-black rounded-[3px] cursor-pointer'>
                    <div className='bg-[#e0e0e0] w-1/2 border-black border-[1px] rounded-[3px] text-sm py-1 text-center'>  
                        Creator
                    </div>
                    <div className='w-1/2'></div>
                </div>
            </div>
        </div>
    )
}

export default Card