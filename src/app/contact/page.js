import React from 'react'

const Contact = () => {
    return (
        <div>
            <section>
                <div className='grid grid-cols-2 py-20'>
                    <div className='px-36'>
                        <div className='flex  items-center'>
                            <h1 className='font-semibold text-5xl '>
                                Let's Discuss <br />
                                Your Next Project</h1>
                        </div>

                        <div className='flex justify-start items-center my-5'>
                            <p>
                                Fill out the form, or call us to <br />
                                set up a free in-home consultation.
                            </p>


                        </div>
                        <div>
                            <h1 className='text-blue-500'>Service Areas:</h1>

                            <p className='mt-2'>San Francisco, Santa Clara, Alameda, San Mateo</p>
                            <p className='mt-4'>500 Terry Francine Street San Francisco, CA 94158</p>
                            <p className='mt-4'>info@mysite.com</p>
                            <p className='mt-4'>123-456-7890</p>
                        </div>
                    </div>
                    <div className='px-36'>
                        <form className="p-4">
                            <div className='grid grid-cols-2 gap-4'>
                                <div className="mb-4">
                                    <label htmlFor="firstName" className="form-label block">First Name</label>
                                    <input type="text" name="firstName" className="form-control border-b border-black border-solid border-2 border-opacity-100 border-t-0 border-r-0 border-l-0" />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="lastName" className="form-label block">Last Name</label>
                                    <input type="text" name="lastName" className="form-control border-b border-black border-solid border-2 border-opacity-100 border-t-0 border-r-0 border-l-0" />
                                </div>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="form-label block">Email</label>
                                <input type="email" name="email" className="form-control border-b border-black border-solid border-2 border-opacity-100 border-t-0 border-r-0 border-l-0" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="phone" className="form-label block">Phone</label>
                                <input type="tel" name="phone" className="form-control border-b border-black border-solid border-2 border-opacity-100 border-t-0 border-r-0 border-l-0" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="address" className="form-label block">Address</label>
                                <input name="address" rows="3" className="form-control border-b border-black border-solid border-2 border-opacity-100 border-t-0 border-r-0 border-l-0" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="subject" className="form-label block">Subject</label>
                                <input type="text" name="subject" className="form-control border-b border-black border-solid border-2 border-opacity-100 border-t-0 border-r-0 border-l-0" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="message" className="form-label block">Message</label>
                                <textarea name="message" rows="6" className="form-control border-b border-black border-solid border-2 border-opacity-100 border-t-0 border-r-0 border-l-0" />
                            </div>
                            <button type="submit" className="bg-black text-white text-center w-full py-2">Submit</button>
                        </form>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact