'use client'
import React, { useState, useEffect } from 'react'
import '../globals.css'
import Estimator from '../components/_estimator/Estimator';
import Contact from '../components/Contact';
import About from '../components/_about/page';
import Work from '../components/Work'
import Services from '../components/Services';
import { Element } from 'react-scroll';
import { Dialog, DialogTitle, DialogContent, Button } from '@mui/material';
import Image from 'next/image';


const HomePage = () => {
    const [isMobile, setIsMobile] = useState(false);

    // const theme = useTheme();
    // const isMobiles = useMediaQuery(theme.breakpoints.down('sm'));

    const [isModalOpen1, setIsModalOpen1] = useState(false);
    const [isModalOpen2, setIsModalOpen2] = useState(false);
    const [isModalOpen3, setIsModalOpen3] = useState(false);
    const [isModalOpen4, setIsModalOpen4] = useState(false);
    const [isModalOpen5, setIsModalOpen5] = useState(false);
    const [isModalOpen6, setIsModalOpen6] = useState(false);

    const openModal1 = () => {
        setIsModalOpen1(true);
    };

    const closeModal1 = () => {
        setIsModalOpen1(false);
    };

    const openModal2 = () => {
        setIsModalOpen2(true);
    };

    const closeModal2 = () => {
        setIsModalOpen2(false);
    };
    const openModal3 = () => {
        setIsModalOpen3(true);
    };

    const closeModal3 = () => {
        setIsModalOpen3(false);
    };

    const openModal4 = () => {
        setIsModalOpen4(true);
    };

    const closeModal4 = () => {
        setIsModalOpen4(false);
    };

    const openModal5 = () => {
        setIsModalOpen5(true);
    };

    const closeModal5 = () => {
        setIsModalOpen5(false);
    };

    const openModal6 = () => {
        setIsModalOpen6(true);
    };

    const closeModal6 = () => {
        setIsModalOpen6(false);
    };


    const styles = {
        rounded: {
            borderRadius: '20px',
        },
    };


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
        <div className='font-roboto'>
            <section className='section-1 mx-5 md:mx-[71px] my-10'>
                {isMobile ? (
                    <div className='flex flex-col h-full justify-center items-center bg-[#EFEFEF] rounded-[50px]'>
                        <div className='w-full h-auto'>
                            <img src="/images/mob-image 5.png" alt='' className='h-full w-full' />
                        </div>
                        <div className='px-5 py-3 '>
                            <h1 className='text-[20px] font-bold'>Total <span className='text-orange-400'>Transparency</span></h1>
                            <p className='text-[16px] font-normal my-3'>
                                At Prodyme Homes, transparency isn&apos;t just a principle; it&apos;s a practice ingrained in every facet of our operations to establish trust and confidence with our clients.
                            </p>
                            <div className='flex justify-center items-center'>
                                <button onClick={openModal1} className='bg-white text-orange-400 text-[16px] px-[30px] py-[8px] rounded-2xl'>
                                    See More
                                </button>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className='flex col-span-2 h-full bg-[#EFEFEF] rounded-[50px] items-center'>
                        <div className='w-[70%]  h-auto '>
                            <img src="/images/image 5.png" alt='Person standing on a concrete slab' className='h-auto w-full object-cover' />
                        </div>
                        <div className='px-10 py-5 '>
                            <h1 className='text-[22px] xl:text-[40px] font-bold'>Total <span className='text-orange-400'>Transparency</span></h1>
                            <p className='text-[18px] xl:text-[30px] font-normal my-4 xl:my-5'>
                                At Prodyme Homes, transparency isn&apos;t just a principle; it&apos;s a practice ingrained in every facet of our operations to establish trust and confidence with our clients.
                            </p>

                            <button onClick={openModal1} className='bg-white text-orange-400 text-[12px] xl:text-[20px] px-[40px] py-[10px] rounded-2xl '>See More</button>
                        </div>
                    </div>
                )}

                <div>
                    <Dialog
                        open={isModalOpen1}
                        onClose={closeModal1}
                        fullWidth
                        maxWidth="lg"

                    >
                        <DialogTitle className="">
                            <div className="flex justify-between items-center">
                                <h1 className='text-[22px] xl:text-[40px] font-bold'>Total <span className='text-orange-400'>Transparency</span></h1>
                                <Button onClick={closeModal1} color="secondary">
                                    X
                                </Button>
                            </div>
                        </DialogTitle>
                        <DialogContent
                            sx={{
                                overflowY: 'auto',
                                padding: '20px',
                                '&::-webkit-scrollbar': {
                                    display: 'none',
                                },
                                msOverflowStyle: 'none',
                                scrollbarWidth: 'none',
                            }}
                        >
                            <img
                                src="https://images.unsplash.com/photo-1616610269931-04d58b579ddf?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFib3VyfGVufDB8fDB8fHww"
                                alt=""
                                className="w-full h-full object-fill"
                            />
                            <p className="my-5 text-lg">
                                <span className='font-bold'>●	Quotations: </span>
                                Our commitment to transparency starts with our detailed quotations. We
                                go beyond providing an overall project cost; we break down costs item by item, from the foundation to the ﬁnishes. Clients appreciate this level of detail as it empowers them to make informed decisions about their investment.

                            </p>
                            <p className="my-5 text-lg">
                                <span className='font-bold'>●	Payments: </span>
                                Transparent ﬁnancial dealings are crucial to a positive client experience. Prodyme Homes goes above and beyond by providing a comprehensive payment schedule tied to speciﬁc project milestones. This ensures that each payment corresponds to tangible progress on-site, allowing clients to see their ﬁnancial commitment aligning with the actual construction timeline.

                            </p>
                            <img
                                src="https://images.unsplash.com/photo-1616610269931-04d58b579ddf?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFib3VyfGVufDB8fDB8fHww"
                                alt=""
                                className="w-full h-full object-fill"
                            />
                            <p className="my-5 text-lg">
                                <span className='font-bold'>● 24X7 On-site Cameras Access: </span>
                                To enhance transparency, Prodyme Homes provides clients with 24/7 on-site camera access. This tangible feature allows clients to virtually visit their construction site at any time. It&apos;s not just a promise of transparency; it&apos;s an actual tool that enables clients to witness the progress, fostering trust in the construction process.
                            </p>

                        </DialogContent>
                    </Dialog>
                </div>

            </section>


            <section className='section-3 mx-5 md:mx-[71px] my-10'>

                {isMobile ? (
                    <div className='flex flex-col h-full justify-center items-center bg-[#EFEFEF] rounded-[50px]'>
                        <div className='w-full h-auto'>
                            <img src="/images/mob-image 7.png" alt='' className='h-full w-full' />
                        </div>
                        <div className='px-5 py-3 '>
                            <h1 className='text-[20px] font-bold'>Zero <span className='text-orange-400'>Delays</span></h1>
                            <p className='text-[16px] font-normal my-3'>
                                Prodyme Homes takes great pride in its reputation for on-time project delivery, and we solidify this commitment with a unique guarantee that reﬂects our conﬁdence in our project management capabilities.
                            </p>
                            <div className='flex justify-center items-center'>
                                <button onClick={openModal2} className='bg-white text-orange-400 font-[16px] px-[30px] py-[8px] rounded-2xl '>
                                    See More
                                </button>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className='flex col-span-2 h-full bg-[#EFEFEF] rounded-[50px] items-center'>
                        <div className='px-10 py-5 '>
                            <h1 className='text-[22px] xl:text-[40px] font-bold'>Zero <span className='text-orange-400'>Delays</span></h1>
                            <p className='text-[18px] xl:text-[28px] font-normal my-4 xl:my-5'>
                                Prodyme Homes takes great pride in its reputation for on-time project delivery, and we solidify this commitment with a unique guarantee that reﬂects our conﬁdence in our project management capabilities.
                            </p>
                            <button onClick={openModal2} className='bg-white text-orange-400 text-[12px] xl:text-[20px] px-[40px] py-[10px] rounded-2xl'>See More
                            </button>
                        </div>
                        <div className='w-[100%]  h-auto'>
                            <img src="/images/image 7.png" alt='Person standing on a concrete slab' className='h-auto w-full object-cover' />
                        </div>
                    </div>
                )}
                <div>
                    <Dialog open={isModalOpen2}
                        onClose={closeModal2}
                        fullWidth
                        maxWidth="lg">
                        <DialogTitle>
                            <div className="flex justify-between items-center">
                                <h1 className='text-[22px] xl:text-[40px] font-bold'>Zero <span className='text-orange-400'>Delays</span></h1>
                                <Button onClick={closeModal2} color="secondary">
                                    X
                                </Button>
                            </div>
                        </DialogTitle>
                        <DialogContent
                            sx={{
                                overflowY: 'auto',
                                padding: '20px',
                                '&::-webkit-scrollbar': {
                                    display: 'none',
                                },
                                msOverflowStyle: 'none',
                                scrollbarWidth: 'none',
                            }}
                        >
                            <img
                                src="https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZGluaW5nJTIwdGFibGV8ZW58MHx8MHx8fDA%3D"
                                alt=""
                                className="w-full h-full object-fill"
                            />
                            <p className="my-5 text-lg">
                                <span className='font-bold'>●	Strict Timelines: </span>
                                Our project management approach involves setting realistic timelines
                                that account for potential challenges and unforeseen circumstances. We conduct a comprehensive assessment of the project scope, factoring in all aspects from permitting to weather conditions. By proactively addressing potential delays, we ensure that the construction process adheres to the established schedule.

                            </p>
                            <img
                                src="https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZGluaW5nJTIwdGFibGV8ZW58MHx8MHx8fDA%3D"
                                alt=""
                                className="w-full h-full object-fill"
                            />
                            <p className="my-5 text-lg">
                                <span className='font-bold'>● Financial Commitment: </span>
                                The &quot;zero delays or we pay twice the rent&quot; policy is more than a guarantee – it&apos;s a tangible commitment to our clients. In the rare event of a delay, Prodyme Homes compensates clients financially. This policy isn&apos;t just a safety net; it&apos;s a demonstration of our commitment to mitigating inconveniences and ensuring our clients&apos; peace of mind.
                            </p>

                        </DialogContent>
                    </Dialog>
                </div>
            </section>

            <section className='section-4 mx-5 md:mx-[71px] my-10'>
                {isMobile ? (
                    <div className='flex flex-col h-full justify-center items-center bg-[#EFEFEF] rounded-[50px]'>
                        <div className='w-full h-auto'>
                            <img src="/images/mob-image 6.png" alt='' className='h-full w-full'  />
                        </div>
                        <div className='px-5 py-3 '>
                            <h1 className='text-[20px] font-bold'><span className='text-orange-400'>Unmatched</span> Quality</h1>
                            <p className='text-[16px] font-normal my-3'>
                                Quality is the bedrock of every Prodyme home, and this commitment extends to both visible aesthetics and hidden structural elements.
                            </p>
                            <div className='flex justify-center items-center'>
                                <button onClick={openModal3} className='bg-white text-orange-400 font-[16px] px-[30px] py-[8px] rounded-2xl '>
                                    See More
                                </button>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className='flex col-span-2 h-full bg-[#EFEFEF] rounded-[50px] items-center'>
                        <div className='w-[65%]  h-auto '>
                            <img src="/images/image 6.png" alt='Person standing on a concrete slab'  className='h-auto w-full object-cover' />
                        </div>
                        <div className='px-10 py-5 '>
                            <h1 className='text-[22px] xl:text-[40px] font-bold'><span className='text-orange-400'>Unmatched </span>Quality</h1>
                            <p className='text-[18px] xl:text-[30px] font-normal my-4 xl:my-5'>
                                Quality is the bedrock of every Prodyme home, and this commitment extends to both visible aesthetics and hidden structural elements.
                            </p>
                            <button onClick={openModal3} className='bg-white text-orange-400 text-[12px] xl:text-[20px] px-[40px] py-[10px] rounded-2xl'>See More
                            </button>
                        </div>
                    </div>
                )}
                <div>
                    <Dialog open={isModalOpen3}
                        onClose={closeModal3}
                        fullWidth
                        maxWidth="lg">
                        <DialogTitle>
                            <div className="flex justify-between items-center">
                                <h1 className='text-[22px] xl:text-[40px] font-bold'><span className='text-orange-400'>Unmatched </span>Quality</h1>
                                <Button onClick={closeModal3} color="secondary">
                                    X
                                </Button>
                            </div>
                        </DialogTitle>
                        <DialogContent
                            sx={{
                                overflowY: 'auto',
                                padding: '20px',
                                '&::-webkit-scrollbar': {
                                    display: 'none',
                                },
                                msOverflowStyle: 'none',
                                scrollbarWidth: 'none',
                            }}
                        >
                            
                            <img
                                src="https://media.istockphoto.com/id/609444066/vector/earthquake-resistant-structure-contrast-diagram.jpg?s=612x612&w=0&k=20&c=fLSXTQG9axuHuW_ebQPpuA9CDS59-vgj06HCXHSRGFo="
                                alt=""
                                className="w-full h-full object-fill"
                            />
                            <p className="my-5 text-lg">
                                <span className='font-bold'>●	Visible Aesthetics: </span>
                                Prodyme Homes prioritizes visible excellence with an unwavering commitment to luxurious ﬁnishes, premium materials, and meticulous design. Our selection of materials, from ﬂooring to countertops, reﬂects a dedication to craftsmanship and aesthetic appeal.
                            </p>
                            <p className="my-5 text-lg">
                                <span className='font-bold'>●	Structural Integrity: </span>
                                Our commitment to quality goes beyond surface-level aesthetics. Prodyme employs cutting-edge construction techniques, using the ﬁnest materials to guarantee the structural integrity of every home. Rigorous quality assurance checks at every stage ensure that our homes not only meet but exceed industry standards.
                            </p>
                            <img
                                src="https://media.istockphoto.com/id/609444066/vector/earthquake-resistant-structure-contrast-diagram.jpg?s=612x612&w=0&k=20&c=fLSXTQG9axuHuW_ebQPpuA9CDS59-vgj06HCXHSRGFo="
                                alt=""
                                className="w-full h-full object-fill"
                            />
                            <p className="my-5 text-lg">
                                <span className='font-bold'>●	Quality Assurance: </span>
                                Prodyme Homes integrates a stringent quality assurance process into every construction project. Our team conducts thorough checks at various stages, involving third-party inspections when necessary, to ensure that industry standards are not just met but surpassed. This commitment to quality assurance is our pledge to deliver homes that meet the highest standards of excellence.
                            </p>
                        </DialogContent>
                    </Dialog>
                </div>
            </section>

            <section className='section-5 mx-5 md:mx-[71px] my-10'>
                {isMobile ? (
                    <div className='flex flex-col h-full justify-center items-center bg-[#EFEFEF] rounded-[50px]'>
                        <div className='w-full h-auto'>
                            <img src="/images/mob-image 7.png" alt=''  className='h-full w-full' />
                        </div>
                        <div className='px-5 py-3 '>
                            <h1 className='text-[20px] font-bold'>Decluttering the <span className='text-orange-400'>Clutter</span></h1>
                            <p className='text-[16px] font-normal my-3'>
                                Understanding that the home-building process can be overwhelming, Prodyme Homes takes deliberate steps to simplify decision-making for clients.
                            </p>
                            <div className='flex justify-center items-center'>
                                <button onClick={openModal4} className='bg-white text-orange-400 font-[16px] px-[30px] py-[8px] rounded-2xl '>
                                    See More
                                </button>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className='flex col-span-2 h-full bg-[#EFEFEF] rounded-[50px] items-center'>
                        <div className='px-10 py-5 '>
                            <h1 className='text-[22px] xl:text-[40px] font-bold'>Decluttering the <span className='text-orange-400'>Clutter</span></h1>
                            <p className='text-[18px] xl:text-[30px] font-normal my-4 xl:my-5'>
                                Understanding that the home-building process can be overwhelming, Prodyme Homes takes deliberate steps to simplify decision-making for clients.
                            </p>
                            <button onClick={openModal4} className='bg-white text-orange-400 text-[12px] xl:text-[20px] px-[40px] py-[10px] rounded-2xl'>See More
                            </button>
                        </div>
                        <div className='w-[65%] h-auto'>
                            <img src="/images/image 7.png" alt='Person standing on a concrete slab' className='h-auto w-full object-cover' />
                        </div>
                    </div>
                )}
                <div>
                    <Dialog open={isModalOpen4}
                        onClose={closeModal4}
                        fullWidth
                        maxWidth="lg">
                        <DialogTitle>
                            <div className="flex justify-between items-center">
                                <h1 className='text-[22px] xl:text-[40px] font-bold'>Decluttering the <span className='text-orange-400'>Clutter</span></h1>
                                <Button onClick={closeModal4} color="secondary">
                                    X
                                </Button>
                            </div>
                        </DialogTitle>
                        <DialogContent
                            sx={{
                                overflowY: 'auto',
                                padding: '20px',
                                '&::-webkit-scrollbar': {
                                    display: 'none',
                                },
                                msOverflowStyle: 'none',
                                scrollbarWidth: 'none',
                            }}
                        >
                            
                            <img
                                src="https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZGluaW5nJTIwdGFibGV8ZW58MHx8MHx8fDA%3D"
                                alt=""
                                className="w-full h-full object-fill"
                            />
                            <p className="my-5 text-lg">
                                <span className='font-bold'>●	Curated Options: </span>
                                Instead of inundating clients with a myriad of choices, Prodyme offers
                                curated options for materials, ﬁnishes, and design elements. Our approach is to present clients with choices that align with their taste and preferences, minimizing decision fatigue and ensuring that the selections contribute to a cohesive and personalized aesthetic.

                            </p>
                            <Image
                                src="https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZGluaW5nJTIwdGFibGV8ZW58MHx8MHx8fDA%3D"
                                alt=""
                                width={1000}
                                height={1000}
                                className="w-full h-full object-fill"
                            />
                            <p className="my-5 text-lg">
                                <span className='font-bold'>● Guided Decision Process: </span>
                                Our experienced team acts as a guiding force throughout the decision-making process. By offering personalized guidance and valuable insights, we help clients make informed choices based on their lifestyle, preferences, and budget. This personalized approach ensures that decision-making is not only straightforward but tailored to each client&apos;s unique vision.
                            </p>

                        </DialogContent>
                    </Dialog>
                </div>
            </section>

            <section className='section-4 mx-5 md:mx-[71px] my-10'>
                {isMobile ? (
                    <div className='flex flex-col h-full justify-center items-center bg-[#EFEFEF] rounded-[50px]'>
                        <div className='w-full h-auto'>
                            <Image src="/images/mob-image 6.png" alt='' width={1000} height={1000} className='h-full w-full' />
                        </div>
                        <div className='px-5 py-3 '>
                            <h1 className='text-[20px] font-bold'>Worry-Free<span className='text-orange-400'>Warranty</span></h1>
                            <p className='text-[16px] font-normal my-3'>
                                Prodyme Homes goes beyond industry norms to provide clients with a comprehensive warranty, offering peace of mind throughout and after the construction process.
                            </p>
                            <div className='flex justify-center items-center'>
                                <button onClick={openModal5} className='bg-white text-orange-400 font-[16px] px-[30px] py-[8px] rounded-2xl '>
                                    See More
                                </button>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className='flex col-span-2 h-full bg-[#EFEFEF] rounded-[50px] items-center'>
                        <div className='w-[75%] h-auto '>
                            <Image src="/images/image 6.png" alt='Person standing on a concrete slab' width={1000} height={1000} className='h-auto w-full object-cover' />
                        </div>
                        <div className='px-10 py-5 '>
                            <h1 className='text-[22px] xl:text-[40px] font-bold'>Worry-Free <span className='text-orange-400'>Warranty</span></h1>
                            <p className='text-[18px] xl:text-[30px] font-normal my-4 xl:my-5'>
                                Prodyme Homes goes beyond industry norms to provide clients with a comprehensive warranty, offering peace of mind throughout and after the construction process.
                            </p>
                            <button onClick={openModal5} className='bg-white text-orange-400 text-[12px] xl:text-[20px] px-[40px] py-[10px] rounded-2xl'>See More
                            </button>
                        </div>
                    </div>
                )}
                <div>
                    <Dialog open={isModalOpen5}
                        onClose={closeModal5}
                        fullWidth
                        maxWidth="lg">
                        <DialogTitle>
                            <div className="flex justify-between items-center">
                                <h1 className='text-[22px] xl:text-[40px] font-bold'>Worry-Free <span className='text-orange-400'>Warranty</span></h1>
                                <Button onClick={closeModal5} color="secondary">
                                    X
                                </Button>
                            </div>
                        </DialogTitle>
                        <DialogContent
                            sx={{
                                overflowY: 'auto',
                                padding: '20px',
                                '&::-webkit-scrollbar': {
                                    display: 'none',
                                },
                                msOverflowStyle: 'none',
                                scrollbarWidth: 'none',
                            }}
                        >
                            
                            <Image
                                src="https://media.istockphoto.com/id/609444066/vector/earthquake-resistant-structure-contrast-diagram.jpg?s=612x612&w=0&k=20&c=fLSXTQG9axuHuW_ebQPpuA9CDS59-vgj06HCXHSRGFo="
                                alt=""
                                width={1000}
                                height={1000}
                                className="w-full h-full object-fill"
                            />
                            <p className="my-5 text-lg">
                                <span className='font-bold'>●	1-Year Comprehensive Warranty: </span>
                                Our commitment to client satisfaction extends
                                beyond the completion of the home. Prodyme Homes stands by its work with a 1-year comprehensive warranty, addressing any concerns or issues that may arise
                                post-construction. This warranty provides clients with tangible assurance, demonstrating our commitment to their long-term satisfaction.

                            </p>
                            <Image
                                src="https://media.istockphoto.com/id/609444066/vector/earthquake-resistant-structure-contrast-diagram.jpg?s=612x612&w=0&k=20&c=fLSXTQG9axuHuW_ebQPpuA9CDS59-vgj06HCXHSRGFo="
                                alt=""
                                width={1000}
                                height={1000}
                                className="w-full h-full object-fill"
                            />
                            <p className="my-5 text-lg">
                                <span className='font-bold'>● 10-Year Structural Warranty: </span>
                                To underscore our confidence in the durability of our constructions, Prodyme Homes offers a 10-year structural warranty with no fine print or hidden clauses. This warranty is a tangible expression of our commitment to the long-term well-being of our clients&apos; homes, offering an additional layer of assurance that goes beyond industry standards.
                            </p>

                        </DialogContent>
                    </Dialog>
                </div>
            </section>

            <section className='section-5 mx-5 md:mx-[71px] my-10'>
                {isMobile ? (
                    <div className='flex flex-col h-full justify-center items-center bg-[#EFEFEF] rounded-[50px]'>
                        <div className='w-full h-auto'>
                            <Image src="/images/mob-image 7.png" alt='' width={1000} height={1000} className='h-full w-full ' />
                        </div>
                        <div className='px-5 py-3 '>
                            <h1 className='text-[20px] font-bold'><span className='text-orange-400'>Earthquake-Safe </span>Homes</h1>
                            <p className='text-[16px] font-normal my-3'>
                                Safety is a non-negotiable aspect of every Prodyme home, especially in regions prone to seismic activity.
                            </p>
                            <div className='flex justify-center items-center'>
                                <button onClick={openModal6} className='bg-white text-orange-400 font-[16px] px-[30px] py-[8px] rounded-2xl '>
                                    See More
                                </button>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className='flex col-span-2 h-full bg-[#EFEFEF] rounded-[50px] items-center'>
                        <div className='px-10 py-5 '>
                            <h1 className='text-[22px] xl:text-[40px] font-bold'><span className='text-orange-400'>Earthquake-Safe </span>Homes</h1>
                            <p className='text-[18px] xl:text-[30px] font-normal my-4 xl:my-5'>
                                Safety is a non-negotiable aspect of every Prodyme home, especially in regions prone to seismic activity.
                            </p>
                            <button onClick={openModal6} className='bg-white text-orange-400 text-[12px] xl:text-[20px] px-[40px] py-[10px] rounded-2xl'>See More
                            </button>
                        </div>
                        <div className='w-[50%] h-auto '>
                            <Image src="/images/image 7.png" alt='Person standing on a concrete slab' width={1000} height={1000} className='h-auto w-full object-cover' />
                        </div>
                    </div>
                )}
                <div>
                    <Dialog open={isModalOpen6}
                        onClose={closeModal6}
                        fullWidth
                        maxWidth="lg">
                        <DialogTitle>
                            <div className="flex justify-between items-center">
                                <h1 className='text-[22px] xl:text-[40px] font-bold'><span className='text-orange-400'>Earthquake-Safe </span>Homes</h1>
                                <Button onClick={closeModal6} color="secondary">
                                    X
                                </Button>
                            </div>
                        </DialogTitle>
                        <DialogContent
                            sx={{
                                overflowY: 'auto',
                                padding: '20px',
                                '&::-webkit-scrollbar': {
                                    display: 'none',
                                },
                                msOverflowStyle: 'none',
                                scrollbarWidth: 'none',
                            }}
                        >
                            
                            <Image
                                src="https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZGluaW5nJTIwdGFibGV8ZW58MHx8MHx8fDA%3D"
                                alt=""
                                width={1000}
                                height={1000}
                                className="w-full h-full object-fill"
                            />
                            <p className="my-5 text-lg">
                                <span className='font-bold'>●	Seismic Expertise: </span>
                                Our engineering team comprises specialists in earthquake-resistant design. Leveraging the latest technologies and methodologies, Prodyme Homes ensures that every home can withstand seismic forces. Our commitment to safety is grounded in expertise and ongoing research to stay at the forefront of seismic design advancements.
                            </p>
                            <Image
                                src="https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZGluaW5nJTIwdGFibGV8ZW58MHx8MHx8fDA%3D"
                                alt=""
                                width={1000}
                                height={1000}
                                className="w-full h-full object-fill"
                            />
                            <p className="my-5 text-lg">
                                <span className='font-bold'>● Guaranteed Protection: </span>
                                Prodyme Homes provides a solid guarantee of structural
                                integrity even in the face of earthquakes. Our designs undergo rigorous testing, and we utilize advanced engineering principles to ensure the safety and well-being of our clients&apos; families. This uncompromising commitment to safety extends beyond industry standards, with tangible measures in place to guarantee the protection of our clients and their homes.
                            </p>

                        </DialogContent>
                    </Dialog>
                </div>
            </section>

            <section className='my-5'>
                <Element name="aboutSection" className='about-section'>
                    <About />
                </Element>
            </section>

            <section>
                <Element name="estimatorSection" className="estimator-section">
                    <Estimator />
                </Element>
            </section>

            <section className='my-5'>
                <Element name="serviceSection" className="service-section">
                    <Services />
                </Element>
            </section>

            <section className='my-5'>
                <Element name="workSection" className="work-section">
                    <Work />
                </Element>
            </section>

            <section className="section-6 mx-5 md:mx-[71px] my-20 ">
                <h1 className="md:text-[40px] text-[16px] font-normal text-center">
                    Other practical reasons to choose Prodyme
                </h1>
                <hr className="my-10 bg-[#C6C6C6] border-2" />
                <div className="grid grid-cols-2 md:grid-cols-4 gap-5 justify-items-center">
                    {reasons.map((v, i) => (
                        <div key={i} className='text-center'>
                            <Image src={v.image} alt={v.title} width='0' height='0' sizes='100vw' className='mx-auto h-auto w-[100px]' />
                            <h1 className="my-3 text-orange-400 font-bold text-[16px] md:text-xl">
                                {v.title}
                            </h1>
                            <p className="text-[14px] md:text-xl font-normal">
                                {v.description}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="section-6 px-5 md:px-[71px] py-20 bg-[#EFEFEF]">
                <h1 className="md:text-[40px] text-[16px] font-normal text-center">
                    Words of our Customers
                </h1>
                <hr className="my-10 bg-[#C6C6C6] border-2" />
                <div className="grid grid-cols-2 md:grid-cols-4 gap-5 justify-items-center">

                    {reasons.map((v, i) => (
                        <div key={i} className='text-center'>
                            <Image src={v.image} alt={v.title} width='0' height='0' sizes='100vw' className='mx-auto h-auto w-[100px]' />
                            <p className="text-[14px] md:text-xl font-normal">
                                {v.description}
                            </p>
                            <h1 className="my-3 text-orange-400 font-bold text-[16px] md:text-xl">
                                {v.title}
                            </h1>
                        </div>
                    ))}
                </div>
            </section>

            <section className='section-7 px-5 md:px-[71px] py-20'>
                <Element name="contactSection" className="contact-section">
                    <Contact />
                </Element>
            </section>

        </div>
    )
}

export default HomePage