'use client'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'

const Footer = () => {
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div>
            <section className='px-10 py-[30px] bg-black font-sans'>
                {isMobile ? (
                    <div>
                        <div className='flex flex-col justify-center'>
                            <div>
                                <h1 className='text-white border-2 px-[30px] text-center py-5 border-orange-400'>Prodyme Logo and name</h1>
                            </div>
                            <div className='my-2'>
                                <p className='text-white'>
                                    501, Colony name,<br />
                                    Lane name road,<br />
                                    City of office<br />
                                    Pin code</p>
                            </div>
                            <div className='my-2'>
                                <p className='text-white'>
                                    care@prodyme.in<br />
                                    +91 8920804195
                                </p>
                            </div>
                            <div className='my-2'>
                                <p className='text-white'>
                                    Prodym footer text like all rights reserved etc.</p>
                            </div>
                        </div>

                        <div>
                            <hr className='border-2 bg-white my-10' />
                        </div>

                        <div>
                            <div>
                                <h1 className='text-white font-semibold text-[24px]'>Contact Us</h1>
                            </div>
                            <div className='grid '>
                                <input type="text" name="" id="" placeholder='Site Address' className='p-3 rounded-xl my-5' />
                                <input type="text" name="" id="" placeholder='Subject' className='p-3 rounded-xl my-5' />
                                <input type="text" name="" id="" placeholder='Your message' className='p-3 rounded-xl my-5' />
                            </div>
                        </div>

                        <div>
                            <ul className='flex justify-center items-center my-5'>
                                <li className='mx-5 '>
                                    <Image src="/images/facebook.png"
                                        alt="prodyme homes"
                                        width={38}
                                        height={38}
                                        priority />
                                </li>
                                <li className='mx-5 '>
                                    <Image src="/images/instagram.png"
                                        alt="prodyme homes"
                                        width={38}
                                        height={38}
                                        priority />
                                </li>
                                <li className='mx-5 '>
                                    <Image src="/images/Vector.png"
                                        alt="prodyme homes"
                                        width={38}
                                        height={38}
                                        priority />
                                </li>

                            </ul>
                        </div>
                    </div>

                ) : (
                    <div className='flex justify-between items-center'>
                        <div className='grid grid-cols-3'>
                            <div className='py-5'>

                                <div>
                                    <div>
                                        <h1 className='text-white font-semibold text-[24px]'>Contact Us</h1>
                                    </div>
                                    <div className='grid '>
                                        <input type="text" name="" id="" placeholder='Site Address' className='p-3 rounded-xl my-5' />
                                        <input type="text" name="" id="" placeholder='Subject' className='p-3 rounded-xl my-5' />
                                        <input type="text" name="" id="" placeholder='Your message' className='p-3 rounded-xl my-5' />
                                    </div>
                                </div>

                            </div>

                            <div className='relative'>
                                <div className='absolute top-0 bottom-0 h-full w-0.5 bg-white left-[50%]'></div>
                            </div>

                            <div className='flex flex-col justify-between'>
                                <div>
                                    <h1 className='text-white border-2 px-[30px] text-center py-5 border-orange-400'>Prodyme Logo and name</h1>
                                </div>
                                <div className='my-2'>
                                    <p className='text-white'>
                                        501, Colony name,<br />
                                        Lane name road,<br />
                                        City of office<br />
                                        Pin code</p>
                                </div>
                                <div className='my-2'>
                                    <p className='text-white'>
                                        care@prodyme.in<br />
                                        +91 8920804195
                                    </p>
                                </div>
                                <div className='my-2'>
                                    <p className='text-white'>
                                        Prodym footer text like all rights reserved etc.</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <ul className='flex my-5'>
                                <li className='mx-5 '>
                                    <Image src="/images/facebook.png"
                                        alt="prodyme homes"
                                        width={38}
                                        height={38}
                                        priority />
                                </li>
                                <li className='mx-5 '>
                                    <Image src="/images/instagram.png"
                                        alt="prodyme homes"
                                        width={38}
                                        height={38}
                                        priority />
                                </li>
                                <li className='mx-5 '>
                                    <Image src="/images/Vector.png"
                                        alt="prodyme homes"
                                        width={38}
                                        height={38}
                                        priority />
                                </li>

                            </ul>
                        </div>
                    </div>
                )}

            </section>
        </div>
    )
}

export default Footer