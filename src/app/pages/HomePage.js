'use client'
import React, { useState, useEffect } from 'react'
import '../globals.css'
import Estimator from './_estimator/Estimator';

const HomePage = () => {

    const [isMobile, setIsMobile] = useState(false);

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

    const reasons = [
        {
            image: "/images/Group 26537.png",
            title: "Simple payment terms",
            description: "Lorem ipsum dolor sit amet consectetur. In ultrices lectus velit fames. Faucibus ut tortor diam facilisis.",
        },
        {
            image: "/images/Group 26537.png",
            title: "Architectural, structural and Interior design included",
            description: "Lorem ipsum dolor sit amet consectetur. In ultrices lectus velit fames. Faucibus ut tortor diam facilisis.",
        },
        {
            image: "/images/Group 26537.png",
            title: "Highly professional service",
            description: "Lorem ipsum dolor sit amet consectetur. In ultrices lectus velit fames. Faucibus ut tortor diam facilisis.",
        },
        {
            image: "/images/Group 26537.png",
            title: "Licenced & Insured",
            description: "Lorem ipsum dolor sit amet consectetur. In ultrices lectus velit fames. Faucibus ut tortor diam facilisis.",
        }
    ]
    return (
        <div>

            <section className='section-2 mx-5 md:mx-[71px] my-10'>
                {isMobile ? (
                    <div className='flex flex-col h-full justify-center items-center bg-[#EFEFEF] rounded-[50px]'>
                        <div className='w-full h-auto'>
                            <img src="/images/mob-image 5.png" alt='' className='h-full w-full' />
                        </div>
                        <div className='px-5 py-3 '>
                            <h1 className='text-[20px] font-bold'>Invest in <span className='text-[orange]'>Proficiency</span></h1>
                            <p className='text-[16px] font-medium my-3'>
                                Lorem ipsum dolor sit amet consectetur. Diam egestas volutpat vulputate urna nisl at. Dignissim condimentum eget dignissim vestibulum volutpat. Risus odio enim nam fermentum donec nisi etiam amet at. Sed donec volutpat sagittis ultrices amet quam feugiat malesuada pulvinar.
                            </p>
                            <div className='flex justify-center items-center'>
                            <button className='bg-white text-[orange] text-[16px] px-[30px] py-[8px] rounded-2xl'>
                                Why our Quality is the best?
                            </button>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className='flex col-span-2 h-full bg-[#EFEFEF] rounded-[50px] items-center'>
                        <div className='w-[70%] max-w-[700px] h-auto mx-auto sm:w-full'>
                            <img src="/images/image 5.png" alt='Person standing on a concrete slab' className='h-auto w-full object-fill' />
                        </div>
                        <div className='px-10 py-5 '>
                            <h1 className='text-[22px] xl:text-[32px] font-bold'>Invest in <span className='text-[orange]'>Proficiency</span></h1>
                            <p className='text-[14px] xl:text-[24px] font-medium my-4 xl:my-5'>
                                Lorem ipsum dolor sit amet consectetur. Diam egestas volutpat vulputate urna nisl at. Dignissim condimentum eget dignissim vestibulum volutpat. Risus odio enim nam fermentum donec nisi etiam amet at. Sed donec volutpat sagittis ultrices amet quam feugiat malesuada pulvinar.
                            </p>
                            <button className='bg-white text-[orange] text-[12px] xl:text-[16px] px-[40px] py-[10px] rounded-2xl'>Why our Quality is the best?</button>
                        </div>
                    </div>
                )}
            </section>

            <section className='section-3 mx-5 md:mx-[71px] my-10'>

                {isMobile ? (
                    <div className='flex flex-col h-full justify-center items-center bg-[#EFEFEF] rounded-[50px]'>
                        <div className='w-full h-auto'>
                            <img src="/images/mob-image 7.png" alt='' className='h-full w-full' />
                        </div>
                        <div className='px-5 py-3 '>
                            <h1 className='text-[20px] font-bold'>Unmatched <span className='text-[orange]'>Quality</span></h1>
                            <p className='text-[16px] font-medium my-3'>
                                Lorem ipsum dolor sit amet consectetur. Diam egestas volutpat vulputate urna nisl at. Dignissim condimentum eget dignissim vestibulum volutpat. Risus odio enim nam fermentum donec nisi etiam amet at. Sed donec volutpat sagittis ultrices amet quam feugiat malesuada pulvinar.
                            </p>
                            <div className='flex justify-center items-center'>
                            <button className='bg-white text-[orange] font-[16px] px-[30px] py-[8px] rounded-2xl '>
                                Take a Glimpse!
                            </button>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className='flex col-span-2 h-full bg-[#EFEFEF] rounded-[50px] items-center'>
                        <div className='px-10 py-5 '>
                            <h1 className='text-[22px] xl:text-[32px] font-bold'>Unmatched <span className='text-[orange]'>Quality</span></h1>
                            <p className='text-[14px] xl:text-[24px] font-medium my-4 xl:my-5'>
                                Lorem ipsum dolor sit amet consectetur. Diam egestas volutpat vulputate urna nisl at. Dignissim condimentum eget dignissim vestibulum volutpat. Risus odio enim nam fermentum donec nisi etiam amet at. Sed donec volutpat sagittis ultrices amet quam feugiat malesuada pulvinar.
                            </p>
                            <button className='bg-white text-[orange] text-[12px] xl:text-[16px] px-[40px] py-[10px] rounded-2xl'>Take a Glimpse!
                            </button>
                        </div>
                        <div className='w-[70%] h-auto sm:w-full'>
                            <img src="/images/image 7.png" alt='Person standing on a concrete slab' className='h-full w-full object-fill' />
                        </div>
                    </div>
                )}

            </section>

            <section className='section-4 mx-5 md:mx-[71px] my-10'>
                {isMobile ? (
                    <div className='flex flex-col h-full justify-center items-center bg-[#EFEFEF] rounded-[50px]'>
                        <div className='w-full h-auto'>
                            <img src="/images/mob-image 6.png" alt='' className='h-full w-full' />
                        </div>
                        <div className='px-5 py-3 '>
                            <h1 className='text-[20px] font-bold'><span className='text-[orange]'>Earthquake safe</span> in Prodyme homes</h1>
                            <p className='text-[16px] font-medium my-3'>
                                Lorem ipsum dolor sit amet consectetur. Diam egestas volutpat vulputate urna nisl at. Dignissim condimentum eget dignissim vestibulum volutpat. Risus odio enim nam fermentum donec nisi etiam amet at. Sed donec volutpat sagittis ultrices amet quam feugiat malesuada pulvinar.
                            </p>
                            <div className='flex justify-center items-center'>
                            <button className='bg-white text-[orange] font-[16px] px-[30px] py-[8px] rounded-2xl '>
                                Customise your Steel Estimate
                            </button>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className='flex col-span-2 h-full bg-[#EFEFEF] rounded-[50px] items-center'>
                        <div className='w-[70%] h-auto sm:w-full'>
                            <img src="/images/image 6.png" alt='Person standing on a concrete slab' className='h-full w-full object-fill' />
                        </div>
                        <div className='px-10 py-5 '>
                            <h1 className='text-[22px] xl:text-[32px] font-bold'><span className='text-[orange]'>Earthquake safe</span> in Prodyme homes</h1>
                            <p className='text-[14px] xl:text-[24px] font-medium my-4 xl:my-5'>
                                Lorem ipsum dolor sit amet consectetur. Diam egestas volutpat vulputate urna nisl at. Dignissim condimentum eget dignissim vestibulum volutpat. Risus odio enim nam fermentum donec nisi etiam amet at. Sed donec volutpat sagittis ultrices amet quam feugiat malesuada pulvinar.
                            </p>
                            <button className='bg-white text-[orange] text-[12px] xl:text-[16px] px-[40px] py-[10px] rounded-2xl'>Customise your Steel Estimate
                            </button>
                        </div>
                    </div>
                )}

            </section>

            <section className='section-5 mx-5 md:mx-[71px] my-10'>
                {isMobile ? (
                    <div className='flex flex-col h-full justify-center items-center bg-[#EFEFEF] rounded-[50px]'>
                        <div className='w-full h-auto'>
                            <img src="/images/mob-image 7.png" alt='' className='h-full w-full' />
                        </div>
                        <div className='px-5 py-3 '>
                            <h1 className='text-[20px] font-bold'>Worry-Free <span className='text-[orange]'>Warranty</span>of 2 Year</h1>
                            <p className='text-[16px] font-medium my-3'>
                                Lorem ipsum dolor sit amet consectetur. Diam egestas volutpat vulputate urna nisl at. Dignissim condimentum eget dignissim vestibulum volutpat. Risus odio enim nam fermentum donec nisi etiam amet at. Sed donec volutpat sagittis ultrices amet quam feugiat malesuada pulvinar.
                            </p>
                            <div className='flex justify-center items-center'>
                            <button className='bg-white text-[orange] font-[16px] px-[30px] py-[8px] rounded-2xl '>
                                Take a Glimpse!
                            </button>
                            </div> 
                        </div>
                    </div>
                ): (
                    <div className='flex col-span-2 h-full bg-[#EFEFEF] rounded-[50px] items-center'>
                    <div className='px-10 py-5 '>
                        <h1 className='text-[22px] xl:text-[32px] font-bold'>Worry-Free <span className='text-[orange]'>Warranty</span>of 2 Year</h1>
                        <p className='text-[14px] xl:text-[24px] font-medium my-4 xl:my-5'>
                            Lorem ipsum dolor sit amet consectetur. Diam egestas volutpat vulputate urna nisl at. Dignissim condimentum eget dignissim vestibulum volutpat. Risus odio enim nam fermentum donec nisi etiam amet at. Sed donec volutpat sagittis ultrices amet quam feugiat malesuada pulvinar.
                        </p>
                        <button className='bg-white text-[orange] text-[12px] xl:text-[16px] px-[40px] py-[10px] rounded-2xl'>Take a Glimpse!
                        </button>
                    </div>
                    <div className='w-[70%] h-auto sm:w-full'>
                        <img src="/images/image 7.png" alt='Person standing on a concrete slab' className='h-full w-full object-fill' />
                    </div>
                </div>
                )}
                
            </section>

            <section>
                <Estimator/>
            </section>

            <section className='section-6 mx-5 md:mx-[71px] my-20 '>
                <h1 className='md:text-[32px] text-[16px] font-semibold text-center'>Other practical reasons to choose Prodyme</h1>
                <hr className='my-10 bg-[#C6C6C6] border-2' />
                <div className='grid grid-cols-2 md:grid-cols-4 gap-5 justify-items-center'>
                    {reasons.map((v, i) => (
                        <div key={i} className='text-center'>
                            <img src={v.image} alt={v.title} className='mx-auto' />
                            <h1 className='my-3 text-[orange] font-bold text-[16px] md:text-xl'>{v.title}</h1>
                            <p className='text-[14px] md:text-xl font-semibold'>{v.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className='section-6 px-5 md:px-[71px] py-20 bg-[#EFEFEF]'>
                <h1 className='md:text-[32px] text-[16px] font-semibold text-center'>Words of our Customers</h1>
                <hr className='my-10 bg-[#C6C6C6] border-2' />
                <div className='grid grid-cols-2 md:grid-cols-4 gap-5 justify-items-center'>
                    {reasons.map((v, i) => (
                        <div key={i} className='text-center'>
                            <img src={v.image} alt={v.title} className='mx-auto' />
                            <p className='text-[14px] md:text-xl font-semibold'>{v.description}</p>
                            <h1 className=' my-3 text-[orange] font-bold text-[16px] md:text-xl'>{v.title}</h1>
                        </div>
                    ))}
                </div>
            </section>


        </div>
    )
}

export default HomePage