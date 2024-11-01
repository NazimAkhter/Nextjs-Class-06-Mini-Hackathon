import Link from 'next/link';

export default function Form() {
    return (
        <div className="h-[55vh]" >
            <h1 className="text-center text-3xl my-14 text-gray-600 font-semibold" >ENTER YOUR DETAILS</h1>
            <form className="flex flex-col justify-center items-center gap-6">
                <input type="text" placeholder="Enter Your Name" className="w-2/6 py-2 px-3 mx-auto shadow-md shadow-gray-600 rounded-md focus:shadow-sky-400"/>

                <input type="email" placeholder="Enter Your E-mail" className="w-2/6 py-2 px-3 mx-auto shadow-md shadow-gray-600 rounded-md focus:shadow-sky-400"/>

                <input type="password" placeholder="Enter Your Password" className="w-2/6 py-2 px-3 mx-auto shadow-md shadow-gray-600 rounded-md focus:shadow-sky-400"/>

                <Link href="/greeting" >
                <button className="bg-blue-500  py-2 px-24 my-2 text-white font-semibold rounded-md hover:bg-blue-700 active:bg-blue-900">Place Your Order</button>
                </Link>
            </form>
        </div>
    )
}
