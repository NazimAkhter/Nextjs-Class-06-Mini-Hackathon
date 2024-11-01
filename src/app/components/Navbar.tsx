import Link from 'next/link';
import Image from 'next/image';
import pwlogo from '@/../public/pwlogo.png';
import phone from '@/../public/phone.svg';

export default function Navbar() {
    return (
        <nav className="gradient bg-gradient-to-t to-black from-sky-950 h-24 [&>*]font-sans sticky top-0 z-50">
           
            {/* navbar top section */}
            <div className="flex justify-between items-start  text-white text-xs">
                <div className="mt-2 flex space-x-1 ml-32 ">
                    <div>
                        <Image src={phone} alt='Phone Icon' width={200} height={100} className="h-5 w-4"/>
                    </div>
                    <h1>Download App via SMS</h1>
                </div>

                <div>
                    <ul className="flex space-x-2 mt-2 mx-32">
                        <li>Sign Up</li>
                        <li>|</li>
                        <li>Sign In</li>
                    </ul>
                </div>
            </div>

            {/* division navbar */}
            <div className='h-[1px] bg-gray-600 mx-32 my-1'></div>

            {/* main navbar */}
            <div className="flex justify-between items-center mx-32 text-white text-sm my-3">
                <div><Image src={pwlogo} alt='Pak Wheels Logo' width={600} height={300} className="w-32 " /></div>
                <div>
                    <ul className='flex space-x-16 text-sm'>
                        <li>Used Car</li>
                        <li><Link href="/" >New Car</Link></li>
                        <li><Link href="/" >Bikes</Link></li>
                        <li><Link href="/" >Auto Store</Link></li>
                        <li><Link href="/" >Video</Link></li>
                        <li><Link href="/" >Forums</Link></li>
                        <li><Link href="/" >Blogs</Link></li>   
                        <li><Link href="/" >More</Link></li>
                    </ul>
                </div>
                <div>
                    <button className='bg-red-500 py-1 px-4 rounded-sm hover:bg-red-700 active:bg-red-900'>Post an Ad</button>
                </div>
            </div>
            <div className='text-[9px]  text-white bg-blue-600 px-1 rounded absolute top-[41px] right-[350px]'>
                <h1>New</h1>
            </div>
        </nav>
    )
}