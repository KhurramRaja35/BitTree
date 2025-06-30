import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const pricing = () => {
    return (
        <>
            <section className='bg-[#f3f3f1] min-h-[100vh] pt-30 pb-10 '>
                <div className='flex flex-col gap-2 px-2'>
                    <h1 className='text-center text-4xl md:text-6xl lg:text-7xl font-extrabold text-[#323232]'>
                        Pick your plan. Make it yours.
                    </h1>
                    <p className='text-center md:text-xl text-[#323232] italic'>
                        Simple pricing with powerful features, cancel anytime.
                    </p>
                </div>

                <div className="cards grid grid-cols-1 md:grid-cols-4 gap-x-2 mx-[4vw] mt-5 md:mt-10">

                    <div className="card1 flex flex-col gap-4  bg-white rounded-2xl mb-4 md:mb-0">

                        <div className="head bg-[#e0e2d9] p-6 rounded-t-2xl">
                            <h2 className='font-bold text-3xl'>Free</h2>
                            <p className='font-semibold' >Get started with your own personal Linktree</p>
                        </div>

                        <div className="price px-6" >
                            <h2 className='font-extrabold text-4xl'>$0</h2>
                            <p className='text-[#676b64]'>Free, forever</p>
                        </div>

                        <div className="button flex justify-center items-center">
                            <button className='w-[80%] border-2 border-[#471e67] rounded-full px-5 py-3 cursor-pointer text-[#471e67] text-center'>
                                <Link href="/generate">
                                    Get Started!
                                </Link>
                            </button>
                        </div>

                        <div className="details flex flex-col gap-6 px-6">
                            <h3 className='font-bold'>Key Features:</h3>
                            <p className='flex gap-1 font-bold'>
                                <span>🔗</span> Unlimited links
                            </p>
                            <p className='flex gap-1 font-bold'>
                                <span>📺</span> Social icons, videos & embeds
                            </p>
                            <p className='flex gap-1 font-bold'>
                                <span>📈</span> Essential analytics
                            </p>
                            <p className='flex gap-1 font-bold'>
                                <span>🔎</span> SEO optimized, high-converting design
                            </p>
                            <p className='flex gap-1 font-bold'>
                                <span>🤳</span> Unique QR code
                            </p>

                            <h3 className='flex gap-1 font-bold text-[#676b64]'>Make money*</h3>
                            <div className="1 flex gap-1 ">
                                <span>🛍️</span>
                                <div>

                                    <p className='font-bold'>Linktree Shops & sponsored links</p>
                                    <small className='text-[#676b64] leading-tight '>Build a shop and get paid for space on your Linktree by trusted brands.</small>
                                </div>
                            </div>
                            <div className="2 flex gap-1">
                                <span>💰</span>
                                <div>
                                    <p className='font-bold'>Digital products and courses</p>
                                    <small className='text-[#676b64] leading-tight'>Build courses and sell digital products like eBooks, music files and images.</small>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="card2 flex flex-col gap-4  bg-white rounded-2xl mb-4 md:mb-0">

                        <div className="head bg-[#e0e2d9] p-6 rounded-t-2xl">
                            <h2 className='font-bold text-3xl'>Starter</h2>
                            <p className='font-semibold' >For creators and brands, just getting started</p>
                        </div>

                        <div className="price px-6" >
                            <h2 className='font-extrabold text-4xl'>$4</h2>
                            <p className='text-[#676b64]'>Billed annually, or $5 monthly</p>
                        </div>

                        <div className="button flex justify-center items-center">
                            <button className='w-[80%] border-2 border-[#471e67] rounded-full px-5 py-3 cursor-pointer text-[#471e67] text-center'>
                                <Link href="/generate">
                                    Get Started!
                                </Link>
                            </button>
                        </div>

                        <div className="details flex flex-col gap-4 px-6">
                            <h3 className='font-bold'>Everything in Free, plus:</h3>
                            <p className=' text-[#676b64] font-semibold'>
                                Link in bio
                            </p>
                            <div className='flex gap-1 '>
                                <span>🎨</span>
                                <div>
                                    <p className='font-bold'>
                                        Custom Themes
                                    </p>
                                    <small className='text-[#676b64]'>
                                        Custom color palettes and fresh themes to match your style
                                    </small>
                                </div>
                            </div>
                            <div className='flex gap-1 '>
                                <span>💌</span>
                                <div>
                                    <p className='font-bold'>
                                        Own your audience
                                    </p>
                                    <small className='text-[#676b64]'>
                                        Collect and manage your subscribers
                                    </small>
                                </div>
                            </div>
                            <div className='flex gap-1 '>
                                <span>🔀</span>
                                <div>
                                    <p className='font-bold'>
                                        Redirect Links
                                    </p>
                                    <small className='text-[#676b64]'>
                                        Temporarily send visitors to one key link, perfect for promos or launches
                                    </small>
                                </div>
                            </div>

                            <div className='flex gap-3 items-center  text-[#676b64]'>
                                <h3 className='font-bold'>
                                    Growth Tools
                                </h3>
                                <span>
                                    <small className='bg-[#e9c0e9] px-2 py-0.5 rounded-full'>
                                        New
                                    </small>
                                </span>
                            </div>

                            <div className="1 flex gap-1 ">
                                <span>⏰</span>
                                <div>

                                    <p className='font-bold'>Social media scheduling</p>
                                    <small className='text-[#676b64] leading-tight '>Plan and auto-publish your posts across all major social networks</small>
                                </div>
                            </div>

                            <h3 className='flex gap-1 font-bold text-[#676b64]'>Make money*</h3>

                            <div className="2 flex gap-1">
                                <span>💰</span>
                                <div>
                                    <p className='font-bold'>Reduced seller fees</p>
                                    <small className='text-[#676b64] leading-tight'>Sell your digital products and pay a 9% fee**</small>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="card3 flex flex-col gap-4  bg-white rounded-2xl mb-4 md:mb-0">

                        <div className="head bg-[#502274] p-6 rounded-t-2xl">
                            <div className='flex justify-between items-center'>
                                <h2 className='font-bold text-white text-3xl'>Pro</h2>
                                <span className='bg-[#d2e823] px-2 py-0 rounded-lg '>
                                    <small>Recommended</small>
                                </span>
                            </div>
                            <p className='text-white font-semibold'>For creators and solopreneurs looking to grow and monetize</p>
                        </div>

                        <div className="price px-6" >
                            <h2 className='font-extrabold text-4xl'>$7.50</h2>
                            <p className='text-[#676b64]'>Billed annually, or $9 monthly</p>
                        </div>

                        <div className="button flex justify-center items-center">
                            <button className='w-[80%] bg-[#e9c0e9] rounded-full px-5 py-3 cursor-pointer text-[#471e67] text-center'>
                                <Link href="/generate">
                                    Try free for 7 days
                                </Link>
                            </button>
                        </div>

                        <div className="details flex flex-col gap-4 px-6 pb-4">
                            <h3 className='font-bold'>Everything in Starter, plus:</h3>
                            <p className=' text-[#676b64] font-semibold'>
                                Link in bio
                            </p>
                            <div className='flex gap-1 '>
                                <span>📱</span>
                                <div>
                                    <p className='font-bold'>
                                        Personalized Linktree
                                    </p>
                                    <small className='text-[#676b64]'>
                                        Add your own logo, full-screen visuals and personalized design styles
                                    </small>
                                </div>
                            </div>
                            <div className='flex gap-1 '>
                                <span>🌟</span>
                                <div>
                                    <p className='font-bold'>
                                        Highlight key links
                                    </p>
                                    <small className='text-[#676b64]'>
                                        Prioritize what matters with eye-catching featured and animated links
                                    </small>
                                </div>
                            </div>
                            <div className='flex gap-1 '>
                                <span>📈</span>
                                <div>
                                    <p className='font-bold'>
                                        Comprehensive analytics
                                    </p>
                                    <small className='text-[#676b64]'>
                                        See top-performing links & optimize content that drives growth
                                    </small>
                                </div>
                            </div>

                            <div className='flex gap-3 items-center  text-[#676b64]'>
                                <h3 className='font-bold'>
                                    Growth Tools
                                </h3>
                                <span>
                                    <small className='bg-[#e9c0e9] px-2 py-0.5 rounded-full'>
                                        New
                                    </small>
                                </span>
                            </div>

                            <div className="1 flex gap-1 ">
                                <span>💬</span>
                                <div>

                                    <p className='font-bold'>Automated Instagram replies</p>
                                    <small className='text-[#676b64] leading-tight '>Boost engagement and drive sales through Instagram auto-replies</small>
                                </div>
                            </div>
                            <div className="1.1 flex gap-1 ">
                                <span>🔗</span>
                                <div>

                                    <p className='font-bold'>Link shortner</p>
                                    <small className='text-[#676b64] leading-tight '>‍Create custom shortlinks that auto-add UTMs and look great everywhere</small>
                                </div>
                            </div>
                            <div className="1.1 flex gap-1 ">
                                <span>📨</span>
                                <div>

                                    <p className='font-bold'>Email integrations</p>
                                    <small className='text-[#676b64] leading-tight '>Auto-sync your subscribers to Mailchimp, Google Sheets, Kit, and Klaviyo</small>
                                </div>
                            </div>

                            <h3 className='flex gap-1 font-bold text-[#676b64]'>Make money*</h3>

                            <div className="2 flex gap-1">
                                <span>💰</span>
                                <div>
                                    <p className='font-bold'>Reduced seller fees</p>
                                    <small className='text-[#676b64] leading-tight'>Sell your digital products and pay a 9% fee**</small>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card4 flex flex-col gap-4  bg-white rounded-2xl mb-4 md:mb-0">

                        <div className="head bg-[#e0e2d9] p-6 rounded-t-2xl">
                            <h2 className='font-bold text-3xl'>Premium</h2>
                            <p className=' font-semibold'>For businesses, brands, and teams wanting zero limits and fast results</p>
                        </div>

                        <div className="price px-6" >
                            <h2 className='font-extrabold text-4xl'>$19.50</h2>
                            <p className='text-[#676b64]'>Billed annually, or $24 monthly</p>
                        </div>

                        <div className="button flex justify-center items-center">
                            <button className='w-[80%] border-2 border-[#471e67] rounded-full px-5 py-3 cursor-pointer text-[#471e67] text-center'>
                                <Link href="/generate">
                                    Get Started!
                                </Link>
                            </button>
                        </div>

                        <div className="details flex flex-col gap-4 px-6">
                            <h3 className='font-bold'>Everything in Pro, plus:</h3>
                            <p className=' text-[#676b64] font-semibold'>
                                Link in bio
                            </p>
                            <div className='flex gap-1 '>
                                <span>🤝</span>
                                <div>
                                    <p className='font-bold'>
                                        Concierge onboarding
                                    </p>
                                    <small className='text-[#676b64]'>
                                        Solutions tailored to you with priority support
                                    </small>
                                </div>
                            </div>


                            <div className='flex gap-3 items-center  text-[#676b64]'>
                                <h3 className='font-bold'>
                                    Growth Tools
                                </h3>
                                <span>
                                    <small className='bg-[#e9c0e9] px-2 py-0.5 rounded-full'>
                                        New
                                    </small>
                                </span>
                            </div>

                            <div className="1 flex gap-1 ">
                                <span>🚀</span>
                                <div>

                                    <p className='font-bold'>Unlimited social posts</p>
                                    <small className='text-[#676b64] leading-tight '>Set up to scale with unlimited posts across 3 brands</small>
                                </div>
                            </div>
                            <div className="1.1 flex gap-1 ">
                                <span>🛠️</span>
                                <div>

                                    <p className='font-bold'>Optional add-on team tools</p>
                                    <small className='text-[#676b64] leading-tight '>Team chat, collaboration and approval workflows</small>
                                </div>
                            </div>
                            <div className="1.1 flex gap-1 ">
                                <span>💬</span>
                                <div>

                                    <p className='font-bold'>Unlimited Instagram replies</p>
                                    <small className='text-[#676b64] leading-tight '>Maximum reach with unlimited auto-replies and typo detection</small>
                                </div>
                            </div>

                            <h3 className='flex gap-1 font-bold text-[#676b64]'>Make money*</h3>

                            <div className="2 flex gap-1">
                                <span>💰</span>
                                <div>
                                    <p className='font-bold'>0% seller fees**</p>
                                    <small className='text-[#676b64] leading-tight'>Every dollar in digital product sales goes into your bank account</small>
                                </div>
                            </div>
                            <div className="2 flex gap-1">
                                <span>🏦</span>
                                <div>
                                    <p className='font-bold'>Earn 100% commissions**</p>
                                    <small className='text-[#676b64] leading-tight'>Sell affiliate products and keep all of your commission</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="laid bg-white p-7 my-5 mx-[4vw] rounded-3xl flex flex-col gap-3 md:flex-row md:gap-0 justify-between items-center">
                    <div className="head flex flex-col gap-2">
                        <h2 className='font-bold text-3xl md:text-5xl'>Agency or Enterprise</h2>
                        <p>Big teams, big goals. Connect with us and we'll build a custom plan to get you there.</p>
                    </div>

                    <button className='bg-[#e9c0e9] text-[#471e67] px-6 py-3 rounded-full w-full lg:w-[30%] cursor-pointer'>
                        Get in touch
                    </button>

                </div>


            </section>

            <section className='bg-[#e9c0e9] min-h-[100vh] py-15'>
                <div className="heading flex flex-col gap-3 items-center justify-center">
                    <h2 className='font-extrabold text-4xl text-center md:text-6xl text-[#471e67]'>Your growth starts here.</h2>
                    <div className="para text-[#471e67] text-center">
                        <p>Manage your entire online following on Linktree. Schedule your social posts, grow your email</p>
                        <p>list, track visitors and get even more followers.</p>
                    </div>
                </div>

                <div className="cards grid grid-cols-1 md:grid-cols-3 gap-x-10 mx-[4vw] my-5 md:my-15">

                    <div className="c1 flex flex-col items-center gap-4 bg-white p-5 rounded-2xl mb-4 md:mb-0">
                        <Image src="https://cdn.prod.website-files.com/666255f7f2126f4e8cec6f8f/6850e60a6d4a73b11f384a51_image.avif" alt='design' height={500} width={300} />
                        <h2 className='font-bold text-2xl'>Stay consistent on social</h2>
                        <p className='text-center'>Schedule social posts to go live across platforms and never miss a posting day again.</p>
                    </div>

                    <div className="c2 flex flex-col items-center gap-4 bg-white p-5 rounded-2xl mb-4 md:mb-0">

                        <Image src="https://cdn.prod.website-files.com/666255f7f2126f4e8cec6f8f/6850e6099f6d282d02e7eed3_image-1.avif" alt='design' height={500} width={300} />

                        <h2 className='font-bold text-2xl'>Grow your email list</h2>

                        <p className='text-center'>Collect emails on your Linktree so you can stay connected on and off social platforms.</p>
                    </div>

                    <div className="c flex flex-col items-center justify-center gap-4 bg-white p-5 rounded-2xl mb-4 md:mb-0">
                        <Image src="https://cdn.prod.website-files.com/666255f7f2126f4e8cec6f8f/6855e97139789b8bea546ad9_image.svg" alt='design' height={500} width={300} />
                        <h2 className='font-bold text-2xl'>Use insights to optimize</h2>
                        <p className='text-center'>Get deep insights into your audience and optimize your Linktree for more clicks and engagement.</p>
                    </div>
                </div>

                <div className="button  flex justify-center mx-[4vw]">
                    <button className='max-w-[250px] px-10 py-4 bg-[#471e67] hover:bg-[#714f8d] text-white font-semibold rounded-full'>
                        <Link href={"/generate"}>Get started for free</Link>
                        
                    </button>
                </div>
            </section>
        </>
    )
}

export default pricing
