import Link from 'next/link';
import Image from 'next/image';
import toyota from '@/../public/toyota.webp';
import suzukialto from '@/../public/suzukialto.png';
import hondacity from '@/../public/hondacity.webp';
import hondacivic from '@/../public/hondacivic.webp';
import rating from '@/../public/rating.svg'

export default function Featured() {
    return (
        <section className="h-[520px] bg-gray-100 my-auto">
            <div className="container mx-auto py-10 flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-medium  text-gray-700">Featured New Cars</h1>
                </div>
                <div><h1 className="text-sm font-light text-blue-500 cursor-pointer">View All New Cars</h1></div>
            </div>
            <div className="container mx-auto flex space-x-8 text-gray-600 font-medium text-xl cursor-pointer">
                <div>
                    <h1 className="underline underline-offset-[12px] decoration-blue-500 decoration-4">Popular</h1>
                </div>
                <div>
                    <h1>Upcoming</h1>
                </div>
                <div>
                    <h1>Newly Launched</h1>
                </div>
            </div>
            <div className="flex flex-wrap justify-evenly py-6">
                <div className="w-64 h-72 bg-white">
                    <Link href="/corolla">
                    <Image src={toyota} alt='Totyota Car' width={300} height={200} className='w-56 mx-auto my-5'/>
                    <h1 className='text-base text-blue-600 hover:text-blue-800 text-center'>Toyota Corolla</h1>
                    </Link>
                    <h1 className='text-sm text-green-600 text-center mt-1'>PKR 59.7 - 75.5 lacs</h1>
                    <Image src={rating} alt='Review Rating Stars' width={300} height={200} className='w-24 mx-auto my-[1px]'/>
                    <h1 className='text-xs text-blue-600 text-center mt-1'>621 Reviews</h1>
                </div>

                {/* Suzuki Alto Card */}
                <div className="w-64 h-72 bg-white">
                <Link href="/suzuki">
                <Image src={suzukialto} alt='Suzuki Alto Car' width={300} height={200} className='w-56 mx-auto my-8'/>
                <h1 className='text-base text-blue-600 hover:text-blue-800 text-center -mt-2'>Suzuki Alto</h1>
                    <h1 className='text-sm text-green-600 text-center mt-1'>PKR 23.3 - 30.5 lacs</h1>
                    <Image src={rating} alt='Review Rating Stars' width={300} height={200} className='w-24 mx-auto my-[1px]'/>
                    <h1 className='text-xs text-blue-600 text-center mt-1'>199 Reviews</h1>
                </Link>
                </div>

                {/* Honda City Card */}
                <div className="w-64 h-72 bg-white">
                <Link href="/hondacity">
                <Image src={hondacity} alt='Honda City Car' width={300} height={200} className='w-56 h-56 mx-auto -my-4'/>
                <h1 className='text-base text-blue-600 hover:text-blue-800 text-center -mt-5'>Honda City</h1>
                </Link>
                    <h1 className='text-sm text-green-600 text-center mt-1'>PKR 46.5 - 58.5 lacs</h1>
                    <Image src={rating} alt='Review Rating Stars' width={300} height={200} className='w-24 mx-auto my-[1px]'/>
                    <h1 className='text-xs text-blue-600 text-center mt-1'>458 Reviews</h1>
                </div>


                {/* Honda Civic Card */}
                <div className="w-64 h-72 bg-white">
                <Link href="/hondacivic">
                <Image src={hondacivic} alt='Honda Civic Car' width={300} height={200} className='w-56 mx-auto my-3'/>
                <h1 className='text-base text-blue-600 hover:text-blue-800 text-center mt-12 '>Honda City</h1>
                </Link>
                    <h1 className='text-sm text-green-600 text-center mt-1'>PKR 86.5 - 99.0 lacs</h1>
                    <Image src={rating} alt='Review Rating Stars' width={300} height={200} className='w-24 mx-auto my-[1px]'/>
                    <h1 className='text-xs text-blue-600 text-center mt-1'>357  Reviews</h1>
                </div>
            </div>

        </section>
    )
}