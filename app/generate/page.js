"use client"
import { React, useState } from 'react'
import TiltedCard from '@/titleCard/TiltedCard/TiltedCard'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSearchParams } from 'next/navigation';

const GeneratePage = () => {

    const searchParams = useSearchParams()

    // each state for each input
    // const [link, setlink] = useState("")
    // const [linkText, setLinkText] = useState("")
    const [links, setlinks] = useState([{ link: "", linkText: "" }])
    const [handle, sethandle] = useState(searchParams?.get('handle') || "")
    const [pic, setpic] = useState("")
    const [desc, setdesc] = useState("")

    const [createdHandle, setCreatedHandle] = useState(null);

    const handleChange = (index, field, value) => {
        setlinks((initialLinks) => {
            return initialLinks.map((item, i) => {
                if (i == index) {
                    return { ...item, [field]: value };
                }
                else {
                    return item;
                }
            })
        });
    }

    const addLink = () => {
        const lastLink = links[links.length - 1];
        if (!lastLink.linkText.trim() || !lastLink.link.trim()) {
            toast.error("Please fill both inputs before adding a new one.", {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            return;
        }
        setlinks(links.concat({ link: "", linkText: "" })) // concat is liye use kia q k concat return krta hai neya array .. said it earlier gotta learn js 
        toast.success("Link Added Successfully", {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "light",
            // transition: "bounce",
        });
    }

    //the code inside this function is copied from postman
    const submitLinks = async () => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "links": links,
            "handle": handle,
            "pic": pic,
            "desc": desc
        });

        console.log(raw)

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        const r = await fetch("/api/add", requestOptions)
        const result = await r.json();
        if (result.success) {
            toast.success(result.message, {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "light",
                // transition: "bounce",
            });
            setlinks([{ link: "", linkText: "" }])
            sethandle("")
            setpic("")
            setdesc("")
            setCreatedHandle(handle);
        }
        else {
            toast.error(result.message, {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                // transition: Bounce,
            });
        }


    }
    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={true}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            // Remove the transition="bounce" prop
            />
            <div className='bg-[#e9c0e9] min-h-[100vh]   grid grid-cols-1 lg:grid-cols-2'>
                <div className="col1 flex flex-col gap-2 items-center  px-5  mt-30   lg:h-[calc(100vh-140px)] lg:overflow-y-auto
                 [&::-webkit-scrollbar]:w-2
  [&::-webkit-scrollbar-thumb]:bg-[#c7a6e5]
  [&::-webkit-scrollbar-thumb]:rounded-full
  [&::-webkit-scrollbar-track]:bg-[#e9c0e9]
                ">
                    <h1 className='font-bold text-4xl  md:text-5xl text-[#3C2A6A]'>
                        Create Your BitTree
                    </h1>
                    <div className='flex flex-col justify-center  gap-2 '>
                        <h2 className='font-semibold text-xl text-[#7B5397]'>Step 1: Claim Your Handle</h2>
                        <input
                            value={handle || ""}
                            onChange={(e) => { sethandle(e.target.value) }} className='bg-white focus:outline-pink-500 px-4 py-2 rounded-lg '
                            type="text"
                            name=""
                            id=""
                            placeholder='Enter Handler/Name' />

                        <h2 className='font-semibold text-xl text-[#7B5397]'>Step 2: Add Links</h2>

                        {links && links.map((item, index) => {
                            return <div key={index} className="flex flex-col md:flex-row gap-2 justify-around  w-full">

                                <input
                                    value={item.linkText || ""}
                                    onChange={(e) => { handleChange(index, "linkText", e.target.value) }}
                                    className='bg-white focus:outline-pink-500 px-4 py-2 rounded-lg'
                                    type="text"
                                    name=""
                                    id=""
                                    placeholder='Enter Link Text'
                                    required />

                                <input
                                    value={item.link || ""}
                                    onChange={(e) => { handleChange(index, "link", e.target.value) }}
                                    className='focus:outline-pink-500 px-4 py-2 bg-white rounded-lg '
                                    type="text"
                                    name=""
                                    id=""
                                    placeholder='Enter Link'
                                    required />


                            </div>
                        })}

                        <button onClick={() => { addLink() }} className='bg-[#3C2A6A] active:bg-[#564485] text-white rounded-full font-semibold px-2 py-2  cursor-pointer '>
                            Add Link
                        </button>

                        <h2 className='font-semibold text-xl text-[#7B5397]'>Step 3: Add a Profile Picture & Description</h2>

                        <input value={pic || ""} onChange={(e) => { setpic(e.target.value) }} className='focus:outline-pink-500 px-4 py-2 bg-white rounded-lg ' type="text" name="" id="" placeholder='Enter Link To Your Picture' />
                        <input value={desc || ""} onChange={(e) => { setdesc(e.target.value) }} className='focus:outline-pink-500 px-4 py-2 bg-white rounded-lg ' type="text" name="" id="" placeholder='Enter Your Description' />

                        <button disabled={pic == "" || handle == "" || links[0].linkText == ""}
                            onClick={() => { submitLinks() }} className='disabled:bg-[#cec2f0] disabled:cursor-not-allowed bg-[#3C2A6A] active:bg-[#564485] text-white rounded-full font-semibold px-2 py-2 mb-2 cursor-pointer'>
                            Create Your BitTree
                        </button>

                        {createdHandle && (
                            <>
                                <button
                                    className="bg-green-600 text-white rounded-full font-semibold px-4 py-2 mt-4"
                                    onClick={() => window.location.href = `/${createdHandle}`}
                                >
                                    View your BitTree
                                </button>
                                <div className="my-2 text-center">
                                    <span className="text-xl text-[#7B5397]">Your BitTree link: </span>
                                    <div className="font-mono bg-gray-100 rounded px-2 py-1 inline-block">
                                        {`${typeof window !== "undefined" ? window.location.origin : ""}/${createdHandle}`}
                                    </div>
                                </div>
                            </>
                        )}

                    </div>
                </div>
                
                <div className="col2 hidden lg:flex lg:h-screen ">

                    <img className="mix-blend-darken" src="/generate.png" alt="" />
                </div>


                
            </div>
        </>
    )
}

export default GeneratePage
