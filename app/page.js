"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import TiltedCard from "@/titleCard/TiltedCard/TiltedCard";
import Link from "next/link";

export default function Home() {

  const router = useRouter()

  const [text, settext] = useState("")

  const createTree = () => {

    router.push(`/generate?handle=${text}`)

  }

  //THIS PART IS RELATED TO FAQ .. SHOULD'VE MADE A COMPONENET AND IMPORTED IT HERE BUT LET'S GOO NOWW
  const [openIndex, setOpenIndex] = useState(null);
  const questions = [
    {
      question: "Why do I need a link in bio tool?",
      answer: (
        <div className="desc  text-[#e9c0e9] font-semibold flex flex-col gap-3">
          <p>Right now, every time you’ve got something new to share, you have to go to every single one of your channels to change the link in each of your bios. It’s time-consuming and complicated – making it so much harder to keep everything up to date.</p>
          <p>A link in bio tool means you never have to compromise, or remove one link from your bio so you can add another. You can keep everything you want to share online in one link. When you’ve got a change, you only ever have to make it once.</p>
        </div>
      ),
    },
    {
      question: "Is Linktree the original link in bio tool?",
      answer: (
        <div className="desc text-[#e9c0e9] font-semibold flex flex-col gap-3">
          <p>The short answer? Yes!</p>
          <p>Back in 2016, we created Linktree as an easy way to link out to all socials and unify digital ecosystems, pioneering the link-in-bio category. Linktree remains the leading, biggest and most popular link-in-bio solution – but that’s just the beginning.  You can use your Linktree URL or QR code anywhere your audience is, including on your business cards, in your email signature, on paper-based posters and brochures, and even on your resumé. If you don’t have a website, that’s fine. If you have a Linktree, you don’t need one!</p>
        </div>
      ),
    },
    {
      question: "Can you get paid and sell things from a Linktree?",
      answer: (
        <div className="desc text-[#e9c0e9] font-semibold flex flex-col gap-3">
          <p>Yes, you can! We offer plenty of ways to sell products and monetize your audience. You can collect tips, request payments for services, collect revenue from affiliate links, and sell your products right in your Linktree.</p>
          <p>A lot of Linktree creators see incredible results with online sales on Linktree, because it removes the extra steps involved in a purchase. With Paypal or Square right in your Linktree, your customers won’t even need to leave your social media to go to another site and pay!</p>
          <p>“We love how Linktree has helped us manage our business by having all social media and ways to pay in one location. The QR code has made it easy for customers to access it all!” – Tiffany</p>
        </div>
      ),
    },
    {
      question: "Is Linktree safe to use on all of my social media profiles?",
      answer: (
        <div className="desc text-[#e9c0e9] font-semibold flex flex-col gap-3">
          <p>Linktree is trusted by all social platforms, and is even used on many of Facebook, Instagram and TikTok’s own social media accounts! Because Linktree is the original and most popular link-in-bio tool, the linktr.ee URL is a trusted, identifiable and familiar link that audiences feel comfy and safe clicking on.</p>
        </div>
      ),
    },
    {
      question: "What makes Linktree better than the other link in bio options?",
      answer: (
        <div className="desc text-[#e9c0e9] font-semibold flex flex-col gap-3">
          <p>We have our own opinions here, of course, but the stories of the people who use Linktree matter more. Let’s hear what they have to say:</p>
          <p>“Four months into creating, someone messaged me like: You need a Linktree. I can’t remember what I was using at the time, but it was one of those ones that were supposed to be easy. Once I got Linktree set up, I was like, oh my god – why did I spend $100 on a website? I don’t need all of that! Now, I can see the monetization of my following becoming a full-time thing.” – David Coleman</p>
          <p>It’s so much easier to set up and have all of your links in one place in a well designed format.” – Catie T</p>
          <p>”Websites are cool (I have one) but Linktrees just make it so much easier.” – Tan Nguyen</p>
          <p>“I love their analytics. Other link-in-bio companies don’t provide extensive data on what’s going on.” – Riley Lemon</p>
          <p>Linktree invented the bio link tool in 2016, and it continues to be the world’s most popular bio link to this day – with 50M+ people using it as their trusted place to share, sell and grow online. Join them on Linktree today and see for yourself!</p>
        </div>
      ),
    },
    {
      question: "How can I drive more traffic to and through my Linktree?",
      answer: (
        <div className="desc text-[#e9c0e9] font-semibold flex flex-col gap-3">
          <p>Sharing your Linktree on every social platform you have makes it easy for your most important content to be seen and engaged with by all of your followers. You can even use QR codes to generate online traffic in offline places, and drive people to your links.</p>
          <p>Once visitors arrive on your Linktree, easy-to-understand analytics help you quickly and easily discover where they’re coming from, and what they’re clicking on. You can immediately see what’s working and what’s not and improve your Linktree on the fly with different link placement, prioritized links, subheadings, animation and more to make sure your traffic is landing exactly where you want it!</p>
        </div>
      ),
    },
    {
      question: "How many links should I have on my Linktree?",
      answer: (
        <div className="desc text-[#e9c0e9] font-semibold flex flex-col gap-3">
          <p>This depends on two things. If your priority is click-throughs and conversion, we recommend having 3-7 links on your Linktree at once (based on our most successful creators). Including too many options for your visitors slows down their course of action.</p>
          <p>That said: for certain creators whose priority is display, education and showcasing (e.g. a record label with a library of new releases to promote, or a management company looking to showcase their full roster of clients), including more than seven links fulfils their purpose perfectly.</p>
          <p>You can use features on Linktree to add subheadings, sections, animation and other prioritisation methods to your links – so no matter how many things you’ve got to share, you can drive your visitors to what’s most important, first.</p>
        </div>
      ),
    },
    {
      question: "Do I need a website to use Linktree?",
      answer: (
        <div className="desc text-[#e9c0e9] font-semibold flex flex-col gap-3">
          <p>No, you don’t! Linktree can act as your very own mini-website to share, sell and grow without any of the time and effort it takes to build and maintain a regular website. You can create a design that fully reflects your personality and brand in seconds, with no knowledge, skills or experience needed. If you already have a website, that’s great: you can add it to your Linktree.</p>
          <p>“I hardly touch my website any more. I just send people to my Linktree! It’s a good-looking, fresh interface… so much more dynamic. I can take a few minutes, update my links and put my phone away rather than spending 45 struggling on WordPress.” – @ashleyhopeperez</p>
        </div>
      ),
    },
    {
      question: "Where can I download the app?",
      answer: (
        <div className="desc text-[#e9c0e9] font-semibold flex flex-col gap-3">
          <p>Find it in the App Store, and in the Google Play store!</p>
        </div>
      ),
    },
  ];



  return (
    <main>
      <section className="relative bg-[#254f1a] min-h-[100vh] grid grid-cols-1 lg:grid-cols-2 px-5 z-10">
        <div className=" flex flex-col  justify-center gap-5 lg:px-10  md:pb-4 lg:pb-0 mt-28 lg:mt-25 ">
          <h2 className="font-extrabold text-5xl md:text-7xl lg:text-7xl text-[#d2e823]">Everything you are. In one, simple link in bio.</h2>
          <p className="text-white text-left md:text-xl ">
            Join 70M+ people using Linktree for their link in bio. One link to help you share everything you create, curate and sell from your Instagram, TikTok, Twitter, YouTube & other social media profiles.
          </p>

          <div className="input flex flex-col pb-2 md:flex-row gap-4 md:gap-4   md:items-center">
            <input value={text} onChange={(e) => { settext(e.target.value) }} className=" w-full  md:w-[70%] lg:w-[60%] focus:outline-bg-[#254f1a] px-4  py-4  bg-white rounded-lg" placeholder="Enter Your Handle/Name" type="text" name="" id="" />
            <button onClick={() => { createTree() }} className="bg-[#e9c0e9] px-10 md:px-6  py-4 rounded-full  font-semibold cursor-pointer">Claim  BitTree</button>
          </div>
        </div>
        <div className=" flex items-center justify-center lg:pt-10  lg:pl-10 lg:mr-[5vw] ">
          <TiltedCard
            imageSrc="/home.png"
            altText="Hero img"
            captionText=""
            // containerHeight="300px md:500px"
            // containerWidth="300px md:500px"
            // imageHeight="300px md:500px"
            // imageWidth="300px md:500px"
            containerClassName="w-[350px] h-[350px] md:w-[500px] md:h-[500px] lg:w-[500px] lg:h-[500px]"
            imageClassName="w-[350px] h-[350px] md:w-[500px] md:h-[500px] lg:w-[500px] lg:h-[500px]"
            rotateAmplitude={20}
            scaleOnHover={1.2}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
          />
        </div>
      </section>
      <section className="relative bg-[#e9c0e9] min-h-[100vh] grid grid-cols-1 lg:grid-cols-2  p-5 lg:p-0  z-10">
        <div className="col1 flex md:items-center md:justify-center order-1 lg:order-0">
          <TiltedCard
            imageSrc="/home2.png"
            altText="Hero img"
            captionText=""
            // containerHeight="500px"
            // containerWidth="500px"
            // imageHeight="500px"
            // imageWidth="500px"
            containerClassName="w-[350px] h-[350px] md:w-[500px] md:h-[500px] lg:w-[500px] lg:h-[500px]"
            imageClassName="w-[350px] h-[350px] md:w-[500px] md:h-[500px] lg:w-[500px] lg:h-[500px]"
            rotateAmplitude={20}
            scaleOnHover={1.2}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
         
          />
        </div>
        <div className="col2 flex flex-col justify-center order-0 lg:order-1 gap-5 lg:mr-[5vw]  z-10">
          <h2 className="text-left text-4xl md:text-7xl lg:text-7xl text-[#502274] font-extrabold ">
            Create and customize your Linktree in minutes
          </h2>
          <p className="text-left text-[#1e2330] md:text-xl lg:text-xl">
            Connect your TikTok, Instagram, Twitter, website, store, videos, music, podcast, events and more. It all comes together in a link in bio landing page designed to convert.
          </p>
          <Link href="/generate"><button className="bg-[#502274] text-white px-10 py-3 rounded-full cursor-pointer lg:w-60 hover:bg-[#714f8d]">Get started for free</button></Link>
        </div>
      </section>


      <section className="relative bg-[#e8efd6] grid grid-cols-1 lg:grid-cols-2 min-h-screen p-5 z-10">
        <div className="col1 flex flex-col gap-5 justify-center  md:p-0 lg:ml-[5vw]">
          <h2 className="text-4xl md:text-6xl lg:text-7xl text-left text-[#1e2330] font-extrabold">
            Analyze your audience and keep your followers engaged
          </h2>
          <p className="text-left lg:text-xl text-[#1e2330]">
            Track your engagement over time, monitor revenue and learn what’s converting your audience. Make informed updates on the fly to keep them coming back.
          </p>
          <Link href="/generate">
            <button className="bg-[#e9c0e9] lg:bg-[#1e2330] font-bold  px-10 py-4 rounded-full cursor-pointer w-60 lg:hover:bg-[#e9c0e9]">Get started for free</button>
          </Link>
        </div>

        <div className="col2 flex justify-center items-center">
          <Image src="/home3.png" alt="Hero img 3" width={600} height={600} />
        </div>

      </section>

      <section className="bg-[#f3f3f1] min-h-[150vh] flex flex-col justify-center gap-40 py-[10vh]">


        <div className="h1 flex flex-col items-center justify-center gap-10 mx-[5vw] ">
          <div>
            <h2 className="text-4xl md:text-6xl lg:text-7xl text-center font-extrabold text-[#1e2330]">
              The fast, friendly and
            </h2>
            <h2 className="text-4xl md:text-6xl lg:text-7xl text-center font-extrabold text-[#1e2330]">
              powerful link in bio tool.
            </h2>
          </div>
          <Link href="/pricing"><button className="bg-[#e9c0e9] lg:bg-[#1e2330] font-semibold px-10 py-4 rounded-full cursor-pointer w-60 lg:hover:bg-[#e9c0e9]">Explore All Plans</button></Link>
        </div>

        <div className="h2 flex flex-col gap-10 items-center justify-center mx-[5vw] ">


          <h2 className="text-4xl md:text-6xl lg:text-7xl text-center font-extrabold text-[#1e2330]">As featured in...</h2>
          <div className="logos flex flex-wrap gap-x-4 gap-y-5 justify-center">
            <div className="img1 bg-white rounded-4xl p-5">
              <Image src="https://cdn.prod.website-files.com/666255f7f2126f4e8cec6f8f/66956c24b06a30e2abd303c1_Logo-TechCrunch-Large2.avif.svg" width={280} height={150} alt="Mashable Logo" />
            </div>
            <div className="img2 bg-white rounded-4xl p-5">
              <Image src="https://cdn.prod.website-files.com/666255f7f2126f4e8cec6f8f/66956c240c7252f99a711862_Logo-Insider-Large.avif.svg" width={280} height={150} alt="Mashable Logo" />
            </div>
            <div className="img3 bg-white rounded-4xl p-5">
              <Image src="https://cdn.prod.website-files.com/666255f7f2126f4e8cec6f8f/66956c243edb28a09bb80185_Logo-Mashable-Large.avif.svg" width={280} height={150} alt="Mashable Logo" />
            </div>
            <div className="img4 bg-white rounded-4xl p-5">
              <Image src="https://cdn.prod.website-files.com/666255f7f2126f4e8cec6f8f/66956c24fcbadb976185fa13_Logo-Fortune-Large.avif.svg" width={280} height={150} alt="Mashable Logo" />
            </div>
            <div className="img5 bg-white rounded-4xl p-5">
              <Image src="https://cdn.prod.website-files.com/666255f7f2126f4e8cec6f8f/66956c247ae4d73b70397940_Logo-Forbes-Large.avif.svg" width={280} height={150} alt="Mashable Logo" />
            </div>

          </div>
        </div>
      </section>

      <section className=" bg-[#780016] min-h-screen flex flex-col gap-10 justify-center py-10 mx-[5-vw]">
        <h2 className="font-extrabold text-4xl md:text-6xl lg:text-7xl text-center text-[#e9c0e9]">
          Got questions?
        </h2>

        <div className="questions flex flex-col gap-5 items-center w-full px-4">

          {questions.map((q, idx) => (
            <div key={idx} className="q flex flex-col gap-5 justify-center   bg-[#51000f] p-4 sm:p-6 md:p-8 w-full max-w-xl md:max-w-3xl lg:max-w-6xl rounded-2xl cursor-pointer hover:outline-[5px] hover:outline-[#51000f]"
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}>

              <div
                className="flex justify-between  items-center">
                <p className=" md:text-xl font-bold text-[#e9c0e9]">{q.question}</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="28"
                  height="28"
                  color="white"
                  fill="none"
                  className={`transition-transform duration-100 ${openIndex === idx ? "rotate-180" : ""}`}>
                  <defs />
                  <path fill="#e9c0e9" d="M17.397,15.445 C17.275,15.283 16.912,14.802 16.695,14.524 C16.261,13.968 15.668,13.229 15.028,12.492 C14.385,11.751 13.709,11.03 13.109,10.499 C12.808,10.234 12.544,10.032 12.326,9.9 C12.121,9.776 11.999,9.751 11.999,9.751 C11.999,9.751 11.882,9.776 11.677,9.9 C11.459,10.032 11.194,10.234 10.893,10.499 C10.293,11.03 9.618,11.751 8.975,12.492 C8.335,13.229 7.742,13.968 7.308,14.524 C7.091,14.802 6.727,15.283 6.606,15.444 C6.36,15.778 5.89,15.85 5.556,15.604 C5.223,15.358 5.152,14.889 5.397,14.555 L5.399,14.553 C5.527,14.383 5.904,13.884 6.125,13.601 C6.569,13.032 7.179,12.271 7.842,11.508 C8.501,10.749 9.227,9.97 9.9,9.375 C10.236,9.079 10.576,8.812 10.902,8.616 C11.208,8.431 11.595,8.25 12.001,8.25 C12.408,8.25 12.795,8.431 13.1,8.616 C13.426,8.812 13.767,9.079 14.102,9.375 C14.775,9.97 15.501,10.749 16.16,11.508 C16.823,12.271 17.433,13.032 17.877,13.601 C18.099,13.885 18.476,14.384 18.603,14.553 L18.605,14.555 C18.85,14.888 18.779,15.358 18.446,15.604 C18.112,15.85 17.643,15.778 17.397,15.445 Z" />
                </svg>
              </div>
              {openIndex === idx && (
                <div className="w-full transition-all duration-300">{q.answer}</div>
              )}
            </div>
          ))}
        </div>

      </section>
    </main>
  );
}
