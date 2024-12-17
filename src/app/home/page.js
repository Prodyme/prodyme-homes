'use client'
import React, { useState, useEffect, use } from 'react'
import '../globals.css'
import Estimator from '../components/_estimator/Estimator';
import Contact from '../components/Contact';
import { Element } from 'react-scroll';
import { Dialog, DialogTitle, DialogContent, Button } from '@mui/material';
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import AOS from 'aos'
import 'aos/dist/aos.css'
import Banner from "../components/Banner"
import featuresURL from '../../features.json'
import offering from '../../offering.json'
import reasons from '../../customerReviews.json'
import aboutUs from '../../aboutUs.json'

const HomePage = () => {
    const [features, setFeatures] = useState([])
    const [isMobile, setIsMobile] = useState(false);
    const [currentFeature, setCurrentFeature] = useState(null);

    // const theme = useTheme();
    // const isMobiles = useMediaQuery(theme.breakpoints.down('sm'));

    const fetchFeature = () => {
        const response = featuresURL
        setFeatures(response)
        console.log(response);
    }

    useEffect(() => {
        fetchFeature()
    }, [])

    const openModal = (index) => {
        setCurrentFeature(index);
    };

    const closeModal = () => {
        setCurrentFeature(null);
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

    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            mirror: true,
        });
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScroll = () => {
        const elements = document.querySelectorAll('.scroll-element');
        elements.forEach(element => {
            const rect = element.getBoundingClientRect();
            if (rect.top <= window.innerHeight && rect.bottom >= 0) {
                element.classList.add('aos-animate');
            } else {
                element.classList.remove('aos-animate');
                element.classList.add('fade-out');
            }
        });
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className='font-roboto '>
            <section>
                <Element name="bannerSection" className="banner-section">
                    <Banner />
                </Element>
            </section>
            <div className='overflow-x-hidden'>
                {features.map((feature, index) => (
                    <div key={index}>
                        <section data-aos={`${index % 2 !== 0 ? 'fade-left' : 'fade-right'}`} className='section-1 mx-5 md:mx-[71px] my-10 scroll-element'>

                            {/* mobile view */}
                            <div className='block lg:hidden'>
                                <div className='flex flex-col h-full  bg-[#EFEFEF] rounded-[40px]'>

                                    <div className='w-full h-auto'>
                                        {feature.media.endsWith('.mp4') ? (
                                            <>
                                                <video
                                                    autoPlay
                                                    loop
                                                    muted
                                                    width={1000}
                                                    height={1000}
                                                    className='h-full w-full object-fill rounded-t-[40px]'
                                                >
                                                    <source src={feature.media} alt='' />
                                                </video>
                                            </>
                                        ) : (
                                            <>
                                                <Image
                                                    src={feature.media}
                                                    alt=""
                                                    className='h-full w-full object-fill rounded-t-[40px]'
                                                    width={1000}
                                                    height={1000}
                                                />
                                            </>
                                        )}

                                    </div>

                                    <div className='px-10 py-5 '>

                                        <h3 className='md:text-[30px] text-base font-bold' dangerouslySetInnerHTML={{ __html: feature.content.title }}></h3>

                                        <p className='text-lg font-normal my-3' dangerouslySetInnerHTML={{ __html: feature.content.snippet }}></p>

                                        <div className='flex justify-center items-center'>
                                            <button onClick={() => openModal(index)} className=' text-white text-[16px] px-[30px] py-[8px] rounded-2xl btn-background font-semibold'>
                                                See More
                                            </button>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            {/* desktop view */}
                            <div className='hidden lg:block'>
                                <div className={`flex col-span-2 justify-between h-full bg-[#EFEFEF] rounded-[50px] items-center ${index % 2 !== 0 ? 'flex-row-reverse' : ''}`}>

                                    <div className='px-10 py-5 lg:w-[calc(60%-20px)]'>

                                        <h3 className='text-[30px] xl:text-[50px] font-bold' dangerouslySetInnerHTML={{ __html: feature.content.title }}></h3>

                                        <p className='text-[18px] xl:text-[30px] font-normal my-4 xl:my-5' dangerouslySetInnerHTML={{ __html: feature.content.snippet }}></p>

                                        <button onClick={() => openModal(index)} className=' text-white text-[12px] xl:text-[20px] px-[40px] py-[10px] rounded-2xl btn-background font-semibold'>See More</button>
                                    </div>

                                    <div className='lg:w-[calc(40%-20px)]'>
                                        {feature.media.endsWith('.mp4') ? (
                                            <>
                                                <video
                                                    key={feature.media}
                                                    autoPlay
                                                    loop
                                                    muted
                                                    width={1000}
                                                    height={1000}
                                                    className={`h-[400px] w-[100%] object-cover ${index % 2 !== 0 ? 'rounded-l-[50px]' : 'rounded-r-[50px]'}`}
                                                >
                                                    <source src={feature.media} type="video/mp4" />
                                                </video>
                                            </>
                                        ) : (
                                            <>
                                                <Image
                                                    src={feature.media}
                                                    alt=""
                                                    width={1000}
                                                    height={1000}
                                                    className={`h-[400px] w-[100%] object-cover ${index % 2 !== 0 ? 'rounded-l-[50px]' : 'rounded-r-[50px]'}`}
                                                />
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div>
                                {currentFeature !== null && (
                                    <Dialog
                                        open={currentFeature !== null}
                                        onClose={closeModal}
                                        fullWidth
                                        maxWidth="lg">

                                        <DialogTitle className="">
                                            <div className="flex justify-between items-center">
                                                <h3 className='text-xl xl:text-3xl font-bold' dangerouslySetInnerHTML={{ __html: features[currentFeature].content.information.title }}></h3>

                                                <Button onClick={closeModal} color="secondary">
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
                                            <div>
                                                {features[currentFeature].content.information.data.map((item, index) => (
                                                    <div key={index}>
                                                        <p className='my-5 text-sm lg:text-lg font-semibold lg:font-bold' dangerouslySetInnerHTML={{ __html: item.heading }}>
                                                        </p>

                                                        {item.content && item.content.map((contentItem, contentIndex) => (
                                                            <div key={contentIndex}>
                                                                <p
                                                                    className="my-5 text-sm lg:text-lg"
                                                                    dangerouslySetInnerHTML={{ __html: contentItem }}
                                                                ></p>
                                                            </div>
                                                        ))}

                                                        {item.media && (
                                                            <div className="my-5">
                                                                {item.media.map((mediaItem, mediaIndex) => (
                                                                    mediaItem.endsWith('.mp4') ? (
                                                                        <video
                                                                            key={mediaIndex}
                                                                            autoPlay
                                                                            loop
                                                                            muted
                                                                            width={1000}
                                                                            height={1000}
                                                                            className="h-auto w-[100%] object-cover"
                                                                        >
                                                                            <source src={mediaItem} type="video/mp4" />
                                                                        </video>
                                                                    ) : (
                                                                        <Image
                                                                            key={mediaIndex}
                                                                            src={mediaItem}
                                                                            alt=""
                                                                            width={1000}
                                                                            height={1000}
                                                                            className="h-auto w-[100%] object-cover mb-4"
                                                                        />
                                                                    )
                                                                ))}
                                                            </div>
                                                        )}

                                                    </div>
                                                ))}
                                            </div>

                                        </DialogContent>
                                    </Dialog>
                                )}
                            </div>

                        </section>
                    </div>
                ))}

            </div>

            <Element name="serviceSection" className="service-section">
                <section className="section-6 mx-5 md:mx-[71px] my-20 ">
                    <h2 className="md:text-[40px] text-[25px] font-normal text-center">
                        Our offerings
                    </h2>
                    <hr className="my-10 bg-[#C6C6C6] border-2" />
                    <div data-aos="zoom-in" className=" grid grid-cols-2 gap-2 justify-between  ">
                        {offering.map((v, i) => (
                            <div key={i} className='text-center'>
                                <Image src={v.image} width={1000} height={1000} alt={v.title} className='mx-auto h-auto w-[100px]' />
                                <h4 className="my-3 text-orange-400 font-bold text-[16px] md:text-xl">
                                    {v.title}
                                </h4>
                                <p className="text-[14px] md:text-[20px] font-normal">
                                    {v.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>
            </Element>

            <section>
                <Element name="estimatorSection" className="estimator-section">
                    <Estimator />
                </Element>
            </section>

            <Element name="aboutSection" className='about-section'>
                <section className="section-6 mx-5 md:mx-[71px] my-20">
                    <h2 className="md:text-[40px] text-[25px] font-normal text-center">
                        Who are we?
                    </h2>
                    <hr className="my-10 bg-[#C6C6C6] border-2" />
                    <div data-aos="zoom-in" className="grid grid-cols-2 md:grid-cols-4 gap-5 justify-items-center xl:px-36">
                        {aboutUs.map((v, i) => (
                            <div key={i} className='text-center'>
                                <Image src={v.image} width={1000} height={1000} alt={v.title} className='mx-auto h-auto w-[100px]' />
                                <div className="flex flex-col justify-center items-center">
                                    <h4 className="my-5 text-orange-400 font-bold text-[16px] md:text-xl h-[50px] ">
                                        {v.title}
                                    </h4>
                                    <p className="text-[14px] md:text-[16px] my-8 font-normal ">
                                        {v.description}
                                    </p>

                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </Element>

            <Element name="workSection" className="work-section">
                <section className="section-6 px-5 md:px-[71px] py-20 bg-[#EFEFEF]">
                    <h2 className="md:text-[40px] text-[25px] font-normal text-center">
                        Words of our Customers
                    </h2>
                    <hr className="my-10 bg-[#555454] border-2" />
                    <div className="">
                        <Slider {...settings} >
                            {reasons.map((v, i) => (
                                <div key={i} className='text-center px-8'>
                                    <Image src={v.image} width={1000} height={1000} alt={v.title} className='mx-auto h-auto w-[100px] my-4' />
                                    <div className="flex flex-col justify-center items-center">
                                        <h4 className="my-5 text-orange-400 font-bold text-[16px] md:text-xl h-[50px] ">
                                            {v.title}
                                        </h4>
                                        <p className="text-[14px] md:text-[16px] my-2 font-normal ">
                                            {v.description}
                                        </p>

                                    </div>
                                </div>
                            ))}
                        </Slider>
                        <style jsx global>{`
          .slick-prev,
          .slick-next {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            z-index: 1;
            cursor: pointer;
            background: none;
            border: none;
          }
          .slick-prev {
            left: 5px;
          }
          .slick-next {
            right: 5px;
          }
        `}</style>
                    </div>
                </section>

            </Element>


            {/* <section className='section-7 px-5 md:px-[71px] py-20'>
                <Element name="contactSection" className="contact-section">
                    <Contact />
                </Element>
            </section> */}

        </div>
    )
};

export default HomePage;
