'use client'
import Image from 'next/image'
import Link from 'next/link';
import React, { useState, useEffect } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';


const Navbar = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [showMenu, setShowMenu] = useState(false);

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

    const scrollToEstimator = () => {
        scroll.scrollTo('estimatorSection', {
            smooth: true,
            offset: -50,
        });
    }
    const scrollToSection=()=>{
        scroll.scrollTo("contactSection",{
            smooth :true,
            offset:-50
        })
    }

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };
    return (
        <main>
            <section>
                {isMobile ? (
                    <div className='font-roboto'>
                        <div>
                            <nav className='p-5 navbar relative' style={{ background: 'linear-gradient(rgba(0,0,0,1), rgba(0,0,0,0))' }}>
                                <ul className='flex justify-between md:text-[30px]'>
                                    <Link href="/">

                                        <li className=''>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M14.2448 2.72563C14.1096 2.58751 13.8904 2.58751 13.7552 2.72563L13.0209 1.97539L13.7552 2.72563L5.34625 11.317V25.0243C5.34625 25.2196 5.50123 25.3779 5.69241 25.3779H10.1925V19.3658C10.1925 17.9986 11.2773 16.8902 12.6156 16.8902H15.3848C16.723 16.8902 17.8079 17.9986 17.8079 19.3658V25.3779H22.3078C22.499 25.3779 22.6539 25.2196 22.6539 25.0243V11.3172L14.2448 2.72563L14.97 1.98466L14.2448 2.72563ZM15.7309 25.3779V19.3658C15.7309 19.1705 15.576 19.0122 15.3848 19.0122H12.6156C12.4244 19.0122 12.2694 19.1705 12.2694 19.3658V25.3779H15.7309ZM2.27276 14.4572L3.26933 13.439V25.0243C3.26933 26.3915 4.35418 27.4999 5.69241 27.4999H22.3078C23.646 27.4999 24.7309 26.3915 24.7309 25.0243V13.4392L25.7272 14.4572C26.1328 14.8715 26.7903 14.8715 27.1958 14.4572C27.6014 14.0429 27.6014 13.3711 27.1958 12.9567L15.7134 1.22516C14.7671 0.258361 13.2329 0.258361 12.2866 1.22516L0.804158 12.9567C0.398614 13.3711 0.398614 14.0429 0.804158 14.4572C1.2097 14.8715 1.86722 14.8715 2.27276 14.4572Z" fill="white" />
                                            </svg>
                                        </li>
                                    </Link>
                                    <li>
                                        <img src='/images/logo.png' alt='prodyme homes'   className='h-auto w-[37px]'  />
                                    </li>
                                    <li className={`text-white text-3xl`} onClick={toggleMenu}>
                                        {showMenu ? (
                                            <MdClose size={28} color='white' />
                                        ) : (
                                            <GiHamburgerMenu size={28} color='white' />
                                        )}

                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className='relative'>
                            {showMenu && (
                                <div className='absolute top-0 left-0 w-full bg-[#000000cb] py-5 px-5'>
                                    <div className='flex  justify-between items-center text-[16px] md:text-[30px] font-bold'>
                                        <ul>
                                            <ScrollLink to="aboutSection" smooth={true} duration={3000} onClick={scrollToSection}>
                                                <li className='mx-4 text-white hover:text-orange-400 font-normal'>About</li>
                                            </ScrollLink>

                                            <ScrollLink to="serviceSection" smooth={true} duration={3000} onClick={scrollToSection}>
                                                <li className='mx-4 text-white hover:text-orange-400 font-normal'>Services</li>
                                            </ScrollLink>

                                            <ScrollLink to="workSection" smooth={true} duration={3000} onClick={scrollToSection}>
                                                <li className='mx-4 text-white hover:text-orange-400 font-normal'>Work</li>
                                            </ScrollLink>

                                            <ScrollLink to="contactSection" smooth={true} duration={3000} onClick={scrollToSection}>
                                                <li className='mx-4 text-white hover:text-orange-400 font-normal'>Contact</li>
                                            </ScrollLink>
                                        </ul>
                                        
                                    </div>
                                </div>
                            )}
                        </div>
                        <div>

                            <video
                                className="absolute inset-0 object-cover w-full h-full"
                                autoPlay
                                muted
                                loop
                                playsInline
                                style={{
                                    zIndex: -1,
                                }}
                            >
                                <source src="/videos/prodyme-video.mp4" type="video/mp4" />
                            </video>
                            <div className='flex justify-start items-center h-screen'>
                                <div className='home_bg pl-[22px] pr-[80px] py-5'>
                                    <h1 className='font-semibold text-white text-[30px] md:text-[60px] '>The most<br /> <span className='text-orange-400'>professional</span> <br /> way to build <br />your home</h1>
                                    <hr className='border-2 my-5 bg-white' />

                                    <ScrollLink to="estimatorSection" smooth={true} onClick={scrollToEstimator}>
                                        <button className='bg-[orange] text-white rounded-[30px] px-5 py-[8px] text-[16px] md:text-[30px] lg:text-md'>Try Smart Estimator</button>
                                    </ScrollLink>

                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className='font-roboto'>
                        <nav className='p-5 navbar relative' style={{ background: 'linear-gradient(rgba(0,0,0,1), rgba(0,0,0,0))' }}>

                            <div className='flex justify-between items-center '>
                                <div>
                                    <img
                                        src="/images/logo.png"
                                        alt="prodyme homes"
                                      className='h-auto w-[50px]'
                                        
                                    />
                                </div>
                                <div>
                                    <ul className='flex cursor-pointer'>
                                        <Link href="/">
                                            <li className='mx-4 text-white hover:text-orange-400 font-normal text-[15px]'>Home</li>
                                        </Link>
                                        <ScrollLink to="aboutSection" smooth={true} duration={3000} onClick={scrollToSection}>
                                            <li className='mx-4 text-white hover:text-orange-400 font-normal text-[15px]'>About</li>
                                        </ScrollLink>

                                        <ScrollLink to="serviceSection" smooth={true} duration={3000} onClick={scrollToSection}>
                                            <li className='mx-4 text-white hover:text-orange-400 font-normal text-[15px]'>Services</li>
                                        </ScrollLink>

                                        <ScrollLink to="workSection" smooth={true} duration={3000} onClick={scrollToSection}>
                                            <li className='mx-4 text-white hover:text-orange-400 font-normal text-[15px]'>Work</li>
                                        </ScrollLink>

                                        <ScrollLink to="contactSection" smooth={true} duration={3000} onClick={scrollToSection}>
                                            <li className='mx-4 text-white hover:text-orange-400 font-normal text-[15px]'>Contact</li>
                                        </ScrollLink>
                                        
                                    </ul>
                                </div>
                            </div>
                        </nav>

                        <div>

                            <video
                                className="absolute inset-0 object-cover w-full h-full"
                                autoPlay
                                muted
                                loop
                                playsInline
                                style={{
                                    zIndex: -1,
                                }}
                            >
                                <source src="/videos/prodyme-video.mp4" type="video/mp4" />
                            </video>
                            <div className='flex  justify-start items-center h-screen'>
                                <div className='home_bg pl-10 pr-[300px] py-10'>
                                    <h1 className=' font-semibold text-white text-[50px]'>The most<br /> <span className='text-orange-400'>professional</span> <br /> way to build <br />your home</h1>
                                    <hr className='border-2 my-10 bg-white' />

                                    <ScrollLink to="estimatorSection" smooth={true} onClick={scrollToEstimator}>
                                        <button className='bg-[orange] text-white rounded-[40px] px-10 py-[10px]'>Try Smart Estimator</button>
                                    </ScrollLink>
                                </div>

                            </div>
                        </div>
                    </div>
                )
                }

            </section >
        </main >
    )
}

export default Navbar