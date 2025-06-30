import Link from "next/link";
import clientPromise from "@/lib/mongodb";
import { notFound } from "next/navigation";

export default async function Page({ params }) {
    const handle = (await params).handle

    const client = await clientPromise;
    const db = client.db("bitTree")
    const collection = db.collection("links")

    // if the handle is already claimed u cannot create the bittree
    const item = await collection.findOne({ handle: handle })
    if(!item){
        return notFound()
    }

    /** 
* Paste one or more documents here
*/
    // const iteem = {
    //     "links": [
    //         {
    //             "link": "////dgsfgskgsjk",
    //             "linkText": "facebook"
    //         },
    //         {
    //             "link": "*/*/jdghfwgfw",
    //             "linkText": "instagram"
    //         },
    //         {
    //             "link": "&gfhwegwhwjgo",
    //             "linkText": "youtube"
    //         },
    //         {
    //             "link": "dfbvhhfgvyufvyugvyugvy",
    //             "linkText": "threads"
    //         }
    //     ],
    //     "handle": "KBR",
    //     "pic": "https://avatars.githubusercontent.com/u/190760806?s=400&u=d2630fa15e2f54ff617ef527ec3bc76fcfe5131f&v=4"
    // };

    return <div className="flex min-h-screen bg-gradient-to-b from-[#cd7f4c] to-[#514340] justify-center items-start py-5">
        {item && <div className="photo flex flex-col items-center justify-center gap-2">
            <img className="rounded-[50%]" src={item.pic} alt="pic" width={150} height={150} />
            <span className="font-bold text-xl text-white">@{item.handle}</span>
            <span className="desc w-[60%] text-white text-center">{item.desc}</span>
            <div className="links">
                {item.links.map((item, index) => {
                    // jb ap map function ka use krty tb key prop dena lazmi hota hai
                    return <Link key={index} target="_blank" href={item.link}><div className="py-4 w-lg px-2 text-center italic shadow-lg rounded-full bg-white mt-3" >
                        {item.linkText}


                    </div></Link>
                })}
            </div>
        </div>}

    </div>
}