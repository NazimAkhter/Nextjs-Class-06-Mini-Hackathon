import Link from 'next/link';
import Image from 'next/image';
import hondacivic from '@/../public/hondacivic.webp';
import mileage from '@/../public/mileage.png';
import transmission from '@/../public/transmission.png';
import fuel from '@/../public/fuel.png';
import engine from '@/../public/engine.png';


export default function Corolla() {
    return (
        <section className="bg-gray-200 h-screen">

            <h1 className="text-center text-2xl font-semibold py-8">Toyota Corolla 2024 Price in Pakistan, Images, Reviews & Specs</h1>

            {/* Car Detail Right side */}
            <div className="container mx-auto max-w-5xl bg-white grid grid-cols-4">
                <div className=" h-96">
                    <h1 className='text-3xl text-green-600 text-center mt-12'>PKR 95,00,000</h1>
                    <h1 className='text-xs text-gray-600 text-center my-2'>(*Ex-Factory Price)</h1>
                    <h1 className='text-xs text-gray-600 text-center my-2 underline decoraion-gray-600 underline-offset-2 cursor-pointer'>Financing starts at PKR 105,280/Month</h1>
                    <p className='text-base text-gray-600 text-left m-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe asperiores ea autem nam totam perferendis amet ducimus consequuntur at odit. Eaque nostrum possimus voluptatum sint esse voluptatibus dicta vero dolores.</p>
                </div>



                {/* Car Detail left side */}

                <div className="border-gray-200 col-span-3 h-96">
                    <Image src={hondacivic} alt='Honda Civic Car' width={500} height={400} className='w-3/4 mx-auto my-auto hover:w-5/6 duration-1000 '/>
                </div>


                {/* Car Detail Bottom Mileage box */}
                <div className="border-gray-200 border h-24 flex space-x-5 justify-center items-center">
                    <div>
                        <Image src={mileage} alt='Mileage Icon' width={300} height={200} className='w-12'/>
                    </div>
                    <div className='my-4'>
                        <h1 className='text-xs text-gray-600 text-center'>MILEAGE (KM/LITER)</h1>
                        <h1 className='text-xl text-gray-600 text-center'>10 to 17</h1>
                    </div>
                </div>

                {/* Car Detail Bottom Transmission box */}
                <div className="border-gray-200 border h-24 flex space-x-1 justify-center items-center">
                    <div>
                        <Image src={transmission} alt='Transmission Icon' width={200} height={200} className='w-8 ml-8'/>
                    </div>
                    <div className='my-4'>
                        <h1 className='text-xs text-gray-600 text-center'>Transmission</h1>
                        <h1 className='text-2xl text-gray-600 text-center leading-none'>Automatic & Manual</h1>
                    </div>
                </div>

                {/* Car Detail Bottom Fuel Type box */}
                <div className="border-gray-200 border h-24 flex space-x-5 justify-center items-center">
                    <div>
                        <Image src={fuel} alt='fuel Icon' width={200} height={200} className='w-8'/>
                    </div>
                    <div className='my-4'>
                        <h1 className='text-xs text-gray-600 text-center'>Fuel Type</h1>
                        <h1 className='text-2xl text-gray-600 text-center leading-none'>Petrol</h1>
                    </div>
                </div>

                {/* Car Detail Bottom Engine box */}
                <div className="border-gray-200 border h-24 flex space-x-5 justify-center items-center">
                    <div>
                        <Image src={engine} alt='engine Icon' width={250} height={250} className='w-[40px]'/>
                    </div>
                    <div className='my-4'>
                        <h1 className='text-xs text-gray-600 text-center'>Engine</h1>
                        <h1 className='text-2xl text-gray-600 text-center leading-none'>Petrol</h1>
                    </div>
                </div>
            </div>

            <div className='container'>
                <Link href= "/form" >
            <button className='bg-blue-500  py-2 px-8 my-5 text-white font-semibold rounded-md hover:bg-blue-700 active:bg-blue-900 absolute inset-x-[40%]'>Make Payment</button>
           </Link>
            

            </div>


        </section>
    )
}