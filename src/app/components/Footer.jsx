const Footer = () => {
    return (
        <div className='h-72 w-full border-t-[1px] border-gray-200 flex justify-center items-center'>
            <div className=' w-full px-20 flex justify-between'>
                <div className='gap-2 w-60'>
                    <div className='text-4xl font-semibold cursor-pointer'>
                        aBit
                    </div>
                    <div className=''>
                        Changing the way in which creators and fans interact.
                    </div>
                </div>
                <div className='text-[#262626] flex flex-col font-medium gap-4 border-s-[1px] px-8 border-gray-600'>
                    <div className='cursor-pointer'>
                        Home
                    </div>
                    <div className='cursor-pointer'>
                        Are you a Creator?
                    </div>
                    <div className='cursor-pointer'>
                        Support
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer