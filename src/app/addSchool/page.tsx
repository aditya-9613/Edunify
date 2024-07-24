'use client'
import Link from "next/link";
import { useState } from "react";


export default function AddSchool() {
    const [name,setName] = useState('')
    const [address,setAddress] = useState('')
    const [city,setCity] = useState('')
    const [state,setState] = useState('')
    const [contact,setContact] = useState('')
    const [image,setImage] = useState<File>();
    const [email,setEmail] = useState('')

    const handleAdd = () => {
        const formdata = new FormData();

        formdata.append("name",name);
        formdata.append("address",address)
        formdata.append("city",city)
        formdata.append("state",state)
        formdata.append("contact",contact)
        if (image) {
            formdata.append("image",image)
        }        
        formdata.append("email",email)

    }
    return (
        <>
            <Link className="text-2xl m-10" href="/">Home</Link>

            <div className="grid flex justify-center items-center h-screen">
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <label className="text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                            School Name
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="name"
                            type="text"
                            placeholder="School Name"
                            onChange={(e)=>setName(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
                            Address
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="address"
                            type="text"
                            placeholder="Address"
                            onChange={(e)=>setAddress(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="city">
                            City
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="city"
                            type="text"
                            placeholder="City"
                            onChange={(e)=>setCity(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="state">
                            State
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="state"
                            type="text"
                            placeholder="State"
                            onChange={(e)=>setState(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="contact">
                            Contact
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="contact"
                            type="number"
                            placeholder="Contact Number"
                            onChange={(e)=>setContact(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">
                            Image
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="image"
                            type="file"
                            onChange={(e)=>setImage(e.target.files?.[0])}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="email"
                            type="email"
                            placeholder="Email"
                            onChange={(e)=>setEmail(e.target.value)}
                        />
                    </div>

                    <div className="flex items-center justify-center pt-5">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="button"
                            onClick={handleAdd}
                        >Add School</button>
                    </div>
                </form>
            </div>
        </>
    )
}
