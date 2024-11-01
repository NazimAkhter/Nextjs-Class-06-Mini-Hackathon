import Image from 'next/image';
import right from '@/../public/right.svg'

export default function Hero() {
    return (
        <section className=' h-96 my-36'>

            {/* Main Heading */}

            <h1 className='text-gray-600 text-center text-xl font-semibold bg-white p-4 absolute left-1/3 top-52'> Sell Your Car on PakWheels and Get the Best Price</h1>
            <div className='flex justify-between items-center m-auto h-80 w-2/3 border border-gray-200'>

                {/* left side */}
                <div>
                    <h1 className='text-sky-800 text-xl font-semibold mx-16 py-4'>Post Your Ad on PakWheels</h1>
                    <ul className='flex flex-col mx-16 text-gray-500 text-sm'>
                        <div className='flex space-x-3'>
                            <Image src={right} alt='Right Sign' width={200} height={350} className='w-3 h-5 my-[2px]'/>
                            <li>Post Your Ad for Free in 3 Easy Steps</li>
                        </div>

                        <div className='flex space-x-3'>
                            <Image src={right} alt='Right Sign' width={200} height={350} className='w-3 h-5 my-[2px]'/>
                            <li>Get Genuine offers from Verified Buyers</li>
                        </div>

                        <div className='flex space-x-3'>
                            <Image src={right} alt='Right Sign' width={200} height={350} className='w-3 h-5 my-[2px]'/>
                            <li>Sell your car Fast at the Best Price</li>
                        </div>
                    </ul>
                    <button className='bg-red-500 py-2 px-12 ml-16 my-5 text-white font-semibold rounded-md hover:bg-red-700 active:bg-red-900'>Post your Ad</button>
                </div>
               

                {/* Middle Portion */}
                <div className='flex justify-center relative'>
                    <div className='border border-gray-400 h-32'></div>
                    <h1 className='absolute top-14 font-bold text-gray-500 bg-white'>OR</h1>
                </div>

                {/* right side   */}
                <div>
                    <h1 className='text-sky-800 text-xl font-semibold mx-16 py-4'>Try PakWheels Sell it For Me</h1>
                    <ul className='flex flex-col mx-16 text-gray-500 text-sm'>

                        <div className='flex space-x-3'>
                            <Image src={right} alt='Right Sign' width={200} height={350} className='w-3 h-5 my-[2px]'/>
                            <li>Dedicated Sales Expert to sell your Car</li>
                        </div>

                        <div className='flex space-x-3'>
                            <Image src={right} alt='Right Sign' width={200} height={350} className='w-3 h-5 my-[2px]'/>
                            <li>We Bargain for you and share the Best Offer</li>
                        </div>

                        <div className='flex space-x-3'>
                            <Image src={right} alt='Right Sign' width={200} height={350} className='w-3 h-5 my-[2px]'/>
                            <li>We ensure Safe & Secure Transaction</li>
                        </div>
                    </ul>
                    <button className='bg-blue-500 py-2 px-8 ml-16 my-5 text-white font-semibold rounded-md hover:bg-blue-700 active:bg-blue-900'>Register Your Car</button>
                </div>
            </div>
        </section>
    )
}