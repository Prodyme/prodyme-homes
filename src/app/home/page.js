'use client'
import React, { useState, useEffect } from 'react'
import '../globals.css'
import Estimator from '../components/_estimator/Estimator';
import { Element } from 'react-scroll';
import { Dialog, DialogTitle, DialogContent, Button } from '@mui/material';


const HomePage = () => {
    const [isMobile, setIsMobile] = useState(false);

    // const theme = useTheme();
    // const isMobiles = useMediaQuery(theme.breakpoints.down('sm'));

    const [isModalOpen1, setIsModalOpen1] = useState(false);
    const [isModalOpen2, setIsModalOpen2] = useState(false);
    const [isModalOpen3, setIsModalOpen3] = useState(false);
    const [isModalOpen4, setIsModalOpen4] = useState(false);

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
                                <button onClick={openModal1} className='bg-white text-[orange] text-[16px] px-[30px] py-[8px] rounded-2xl'>
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
                            <button onClick={openModal1} className='bg-white text-[orange] text-[12px] xl:text-[16px] px-[40px] py-[10px] rounded-2xl '>Why our Quality is the best?</button>
                        </div>
                    </div>
                )}

                <div>
                    <Dialog
                        open={isModalOpen1}
                        style={{ width: '100%', maxWidth: 'none' }}
                        onClose={closeModal1}
                        className="fixed inset-0 overflow-y-auto "
                        classes={{ paper: styles.rounded }}
                    >
                        <DialogTitle className="">
                            <div className="flex justify-between items-center">
                                <h2 className="text-xl font-bold">Invest in Proficiency</h2>
                                <Button onClick={closeModal1} color="secondary">
                                    X
                                </Button>
                            </div>
                        </DialogTitle>
                        <DialogContent
                            className="p-20"
                            fullWidth
                            maxWidth="false"
                            style={{
                                scrollbarWidth: 'thin',
                                scrollbarColor: '#A5A5A5 #EFEFEF',
                            }}
                        >
                            <style>
                                {`
          ::-webkit-scrollbar {
            width: 12px;
          }

          ::-webkit-scrollbar-thumb {
            background-color: #A5A5A5;
            border-radius: 6px;
          }

          ::-webkit-scrollbar-track {
            background-color: #EFEFEF;
            border-radius: 6px;
          }
        `}
                            </style>
                            <img
                                src="https://images.unsplash.com/photo-1616610269931-04d58b579ddf?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFib3VyfGVufDB8fDB8fHww"
                                alt=""
                                className="w-full h-full object-fill"
                            />
                            <p className="mt-4">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet atque harum, optio, ea magnam quod dolorem
                                inventore maiores hic officiis modi nulla dicta laudantium eos earum voluptates id dolores blanditiis! Quasi
                                dolorem maxime earum officia quos cupiditate magni provident minus officiis dolore, eveniet similique aliquam
                                temporibus hic asperiores iusto distinctio perferendis voluptas nobis alias iste consectetur, expedita
                                voluptates deleniti. Eum.
                            </p>
                            <img
                                src="https://images.unsplash.com/photo-1616610269931-04d58b579ddf?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFib3VyfGVufDB8fDB8fHww"
                                alt=""
                                className="w-full h-full object-fill"
                            />
                            <p className="mt-4">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet atque harum, optio, ea magnam quod dolorem
                                inventore maiores hic officiis modi nulla dicta laudantium eos earum voluptates id dolores blanditiis! Quasi
                                dolorem maxime earum officia quos cupiditate magni provident minus officiis dolore, eveniet similique aliquam
                                temporibus hic asperiores iusto distinctio perferendis voluptas nobis alias iste consectetur, expedita
                                voluptates deleniti. Eum.
                            </p>
                        </DialogContent>
                    </Dialog>
                </div>;

            </section>


            <section className='section-3 mx-5 md:mx-[71px] my-10'>

                {isMobile ? (
                    <div className='flex flex-col h-full justify-center items-center bg-[#EFEFEF] rounded-[50px]'>
                        <div className='w-full h-auto'>
                            <img src="/images/mob-image 7.png" alt='' className='h-[100%] w-full' />
                        </div>
                        <div className='px-5 py-3 '>
                            <h1 className='text-[20px] font-bold'>Unmatched <span className='text-[orange]'>Quality</span></h1>
                            <p className='text-[16px] font-medium my-3'>
                                Lorem ipsum dolor sit amet consectetur. Diam egestas volutpat vulputate urna nisl at. Dignissim condimentum eget dignissim vestibulum volutpat. Risus odio enim nam fermentum donec nisi etiam amet at. Sed donec volutpat sagittis ultrices amet quam feugiat malesuada pulvinar.
                            </p>
                            <div className='flex justify-center items-center'>
                                <button onClick={isModalOpen2} className='bg-white text-[orange] font-[16px] px-[30px] py-[8px] rounded-2xl '>
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
                            <button onClick={openModal2} className='bg-white text-[orange] text-[12px] xl:text-[16px] px-[40px] py-[10px] rounded-2xl'>Take a Glimpse!
                            </button>
                        </div>
                        <div className='w-[70%] h-auto sm:w-full'>
                            <img src="/images/image 7.png" alt='Person standing on a concrete slab' className='h-full w-full object-fill' />
                        </div>
                    </div>
                )}
                <div>
                    <Dialog open={isModalOpen2} style={{ width: '100%', maxWidth: 'none' }} onClose={closeModal2} className="fixed inset-0 overflow-y-auto">
                        <DialogTitle>
                            <div className="flex justify-between items-center">
                                <h2 className="text-xl font-bold">Unmatched Quality</h2>
                                <Button onClick={closeModal2} color="secondary">
                                    X
                                </Button>
                            </div>
                        </DialogTitle>
                        <DialogContent
                            className="p-20"
                            fullWidth
                            maxWidth="false"
                            style={{
                                scrollbarWidth: 'thin',
                                scrollbarColor: '#A5A5A5 #EFEFEF',
                            }}
                        >
                            <style>
                                {`
          ::-webkit-scrollbar {
            width: 12px;
          }

          ::-webkit-scrollbar-thumb {
            background-color: #A5A5A5;
            border-radius: 6px;
          }

          ::-webkit-scrollbar-track {
            background-color: #EFEFEF;
            border-radius: 6px;
          }
        `}
                            </style>
                            <img
                                src="https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZGluaW5nJTIwdGFibGV8ZW58MHx8MHx8fDA%3D"
                                alt=""
                                className="w-full h-full object-fill"
                            />
                            <p className="mt-4">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet atque harum, optio, ea magnam quod dolorem
                                inventore maiores hic officiis modi nulla dicta laudantium eos earum voluptates id dolores blanditiis! Quasi
                                dolorem maxime earum officia quos cupiditate magni provident minus officiis dolore, eveniet similique aliquam
                                temporibus hic asperiores iusto distinctio perferendis voluptas nobis alias iste consectetur, expedita
                                voluptates deleniti. Eum.
                            </p>
                            <img
                                src="https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZGluaW5nJTIwdGFibGV8ZW58MHx8MHx8fDA%3D"
                                alt=""
                                className="w-full h-full object-fill"
                            />
                            <p className="mt-4">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet atque harum, optio, ea magnam quod dolorem
                                inventore maiores hic officiis modi nulla dicta laudantium eos earum voluptates id dolores blanditiis! Quasi
                                dolorem maxime earum officia quos cupiditate magni provident minus officiis dolore, eveniet similique aliquam
                                temporibus hic asperiores iusto distinctio perferendis voluptas nobis alias iste consectetur, expedita
                                voluptates deleniti. Eum.
                            </p>
                        </DialogContent>
                    </Dialog>
                </div>
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
                                <button onClick={openModal3} className='bg-white text-[orange] font-[16px] px-[30px] py-[8px] rounded-2xl '>
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
                            <button onClick={openModal3} className='bg-white text-[orange] text-[12px] xl:text-[16px] px-[40px] py-[10px] rounded-2xl'>Customise your Steel Estimate
                            </button>
                        </div>
                    </div>
                )}
                <div>
                    <Dialog open={isModalOpen3} style={{ width: '100%', maxWidth: 'none' }} onClose={closeModal2} className="fixed inset-0 overflow-y-auto">
                        <DialogTitle>
                            <div className="flex justify-between items-center">
                                <h2 className="text-xl font-bold">Earthquake safe in Prodyme homes</h2>
                                <Button onClick={closeModal3} color="secondary">
                                    X
                                </Button>
                            </div>
                        </DialogTitle>
                        <DialogContent
                            className="p-20"
                            fullWidth
                            maxWidth="false"
                            style={{
                                scrollbarWidth: 'thin',
                                scrollbarColor: '#A5A5A5 #EFEFEF',
                            }}
                        >
                            <style>
                                {`
          ::-webkit-scrollbar {
            width: 12px;
          }

          ::-webkit-scrollbar-thumb {
            background-color: #A5A5A5;
            border-radius: 6px;
          }

          ::-webkit-scrollbar-track {
            background-color: #EFEFEF;
            border-radius: 6px;
          }
        `}
                            </style>
                            <img
                                src="https://media.istockphoto.com/id/609444066/vector/earthquake-resistant-structure-contrast-diagram.jpg?s=612x612&w=0&k=20&c=fLSXTQG9axuHuW_ebQPpuA9CDS59-vgj06HCXHSRGFo="
                                alt=""
                                className="w-full h-full object-fill"
                            />
                            <p className="mt-4">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet atque harum, optio, ea magnam quod dolorem
                                inventore maiores hic officiis modi nulla dicta laudantium eos earum voluptates id dolores blanditiis! Quasi
                                dolorem maxime earum officia quos cupiditate magni provident minus officiis dolore, eveniet similique aliquam
                                temporibus hic asperiores iusto distinctio perferendis voluptas nobis alias iste consectetur, expedita
                                voluptates deleniti. Eum.
                            </p>
                            <img
                                src="https://media.istockphoto.com/id/609444066/vector/earthquake-resistant-structure-contrast-diagram.jpg?s=612x612&w=0&k=20&c=fLSXTQG9axuHuW_ebQPpuA9CDS59-vgj06HCXHSRGFo="
                                alt=""
                                className="w-full h-full object-fill"
                            />
                            <p className="mt-4">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet atque harum, optio, ea magnam quod dolorem
                                inventore maiores hic officiis modi nulla dicta laudantium eos earum voluptates id dolores blanditiis! Quasi
                                dolorem maxime earum officia quos cupiditate magni provident minus officiis dolore, eveniet similique aliquam
                                temporibus hic asperiores iusto distinctio perferendis voluptas nobis alias iste consectetur, expedita
                                voluptates deleniti. Eum.
                            </p>
                        </DialogContent>
                    </Dialog>
                </div>
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
                                <button onClick={openModal2} className='bg-white text-[orange] font-[16px] px-[30px] py-[8px] rounded-2xl '>
                                    Take a Glimpse!
                                </button>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className='flex col-span-2 h-full bg-[#EFEFEF] rounded-[50px] items-center'>
                        <div className='px-10 py-5 '>
                            <h1 className='text-[22px] xl:text-[32px] font-bold'>Worry-Free <span className='text-[orange]'>Warranty</span>of 2 Year</h1>
                            <p className='text-[14px] xl:text-[24px] font-medium my-4 xl:my-5'>
                                Lorem ipsum dolor sit amet consectetur. Diam egestas volutpat vulputate urna nisl at. Dignissim condimentum eget dignissim vestibulum volutpat. Risus odio enim nam fermentum donec nisi etiam amet at. Sed donec volutpat sagittis ultrices amet quam feugiat malesuada pulvinar.
                            </p>
                            <button onClick={openModal2} className='bg-white text-[orange] text-[12px] xl:text-[16px] px-[40px] py-[10px] rounded-2xl'>Take a Glimpse!
                            </button>
                        </div>
                        <div className='w-[70%] h-auto sm:w-full'>
                            <img src="/images/image 7.png" alt='Person standing on a concrete slab' className='h-full w-full object-fill' />
                        </div>
                    </div>
                )}
                <div>
                    <Dialog open={isModalOpen2} style={{ width: '100%', maxWidth: 'none' }} onClose={closeModal2} className="fixed inset-0 overflow-y-auto">
                        <DialogTitle>
                            <div className="flex justify-between items-center">
                                <h2 className="text-xl font-bold">Worry-Free Warrantyof 2 Year</h2>
                                <Button onClick={closeModal2} color="secondary">
                                    X
                                </Button>
                            </div>
                        </DialogTitle>
                        <DialogContent
                            className="p-20"
                            fullWidth
                            maxWidth="false"
                            style={{
                                scrollbarWidth: 'thin',
                                scrollbarColor: '#A5A5A5 #EFEFEF',
                            }}
                        >
                            <style>
                                {`
          ::-webkit-scrollbar {
            width: 12px;
          }

          ::-webkit-scrollbar-thumb {
            background-color: #A5A5A5;
            border-radius: 6px;
          }

          ::-webkit-scrollbar-track {
            background-color: #EFEFEF;
            border-radius: 6px;
          }
        `}
                            </style>
                            <img
                                src="https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZGluaW5nJTIwdGFibGV8ZW58MHx8MHx8fDA%3D"
                                alt=""
                                className="w-full h-full object-fill"
                            />
                            <p className="mt-4">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet atque harum, optio, ea magnam quod dolorem
                                inventore maiores hic officiis modi nulla dicta laudantium eos earum voluptates id dolores blanditiis! Quasi
                                dolorem maxime earum officia quos cupiditate magni provident minus officiis dolore, eveniet similique aliquam
                                temporibus hic asperiores iusto distinctio perferendis voluptas nobis alias iste consectetur, expedita
                                voluptates deleniti. Eum.
                            </p>
                            <img
                                src="https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZGluaW5nJTIwdGFibGV8ZW58MHx8MHx8fDA%3D"
                                alt=""
                                className="w-full h-full object-fill"
                            />
                            <p className="mt-4">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet atque harum, optio, ea magnam quod dolorem
                                inventore maiores hic officiis modi nulla dicta laudantium eos earum voluptates id dolores blanditiis! Quasi
                                dolorem maxime earum officia quos cupiditate magni provident minus officiis dolore, eveniet similique aliquam
                                temporibus hic asperiores iusto distinctio perferendis voluptas nobis alias iste consectetur, expedita
                                voluptates deleniti. Eum.
                            </p>
                        </DialogContent>
                    </Dialog>
                </div>
            </section>

            <section>
                <Element name="estimatorSection" className="estimator-section">
                    <Estimator />
                </Element>
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