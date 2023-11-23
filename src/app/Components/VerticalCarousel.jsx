import React, { useState, useEffect } from 'react';

const FTP = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    // You can adjust the threshold as needed
    const threshold = 100;

    if (scrollPosition > threshold) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    // Add scroll event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array means this effect runs once when the component mounts

  return (
    <div
      className={`flex items-center my-24 justify-center ${
        isScrolled ? 'fade-in' : 'fade-out'
      }`}
    >
     <div className='max-w-6xl  mx-auto '>
                <div className='flex  justify-center'>
                    <div className='grid    gap-16 lg:grid-cols-2'>


                        <div className='mt-1 lg:mt-28   flex-wrap justify-center '>
                            <h1 className='lg:text-5xl text-center  text-4xl font-extrabold'>PRESENTATION</h1>
                            <p className='py-4 px-6 lg:px-0  text-center'>Sending and receiving money is just as easy as texting a friend.</p>
                            <div className='flex justify-center'>
                                <button className='px-8   bg-black py-2 rounded-3xl font-medium text-white'>Check</button>

                            </div>
                        </div>
                        <div className='flex px-6 justify-center'>
                            <div className='bg-[#5055f2]  w-full h-[50vh] rounded-3xl'>
                                <img className='h-full rounded-3xl ' src='https://images.unsplash.com/photo-1590402494682-cd3fb53b1f70?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='' />
                            </div>
                        </div>



                        <div className='mt-1 block lg:hidden   flex-wrap justify-center '>
                            <h1 className='lg:text-5xl text-center  text-4xl font-extrabold'>WEB DEVELOPMENT</h1>
                            <p className='py-4 px-6 lg:px-0  text-center'>Sending and receiving money is just as easy as texting a friend.</p>
                            <div className='flex justify-center'>
                                <button className='px-8   bg-black py-2 rounded-3xl font-medium text-white'>Check</button>

                            </div>
                        </div>
                        <div className='flex px-6 justify-center'>
                            <div className='bg-[#5055f2] w-full h-[50vh] rounded-3xl'>
                                <img className='h-full w-full rounded-3xl ' src='https://images.unsplash.com/photo-1593720213428-28a5b9e94613?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='' />

                            </div>
                        </div>
                        <div className='mt-28 hidden lg:block   flex-wrap justify-center '>
                            <h1 className='lg:text-5xl text-center  text-4xl font-extrabold'>WEB DEVELOPMENT</h1>
                            <p className='py-4 px-6 lg:px-0  text-center'>Sending and receiving money is just as easy as texting a friend.</p>
                            <div className='flex justify-center'>
                                <button className='px-8   bg-black py-2 rounded-3xl font-medium text-white'>Check</button>

                            </div>
                        </div>
                        <div className='mt-1 lg:mt-28 flex-wrap justify-center '>
                            <h1 className='lg:text-5xl text-center  text-4xl font-extrabold'>UI/UX DEVELOPMENT</h1>
                            <p className='py-4 px-6 lg:px-0  text-center'>Sending and receiving money is just as easy as texting a friend.</p>
                            <div className='flex justify-center'>
                                <button className='px-8   bg-black py-2 rounded-3xl font-medium text-white'>Check</button>

                            </div>
                        </div>
                        <div className='flex px-6 justify-center'>
                            <div className='bg-[#5055f2] w-full h-[50vh] rounded-3xl'>
                                <img className='h-full w-full rounded-3xl ' src='https://images.unsplash.com/photo-1576153192396-180ecef2a715?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='' />

                            </div>                        </div>
                            <div className='mt-1 block lg:hidden   flex-wrap justify-center '>
                            <h1 className='lg:text-5xl text-center  text-4xl font-extrabold'>COLLEGE PROJECTS</h1>
                            <p className='py-4 px-6 lg:px-0  text-center'>Sending and receiving money is just as easy as texting a friend.</p>
                            <div className='flex justify-center'>
                                <button className='px-8   bg-black py-2 rounded-3xl font-medium text-white'>Check</button>

                            </div>
                        </div>
                        <div className='flex px-6 justify-center'>
                            <div className='bg-[#5055f2] w-full h-[50vh] rounded-3xl'>
                                <img className='h-full w-full rounded-3xl ' src='https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='' />

                            </div>
                        </div>
                        <div className='mt-28 hidden lg:block   flex-wrap justify-center '>
                            <h1 className='lg:text-5xl text-center  text-4xl font-extrabold'>COLLEGE PROJECTS</h1>
                            <p className='py-4 px-6 lg:px-0  text-center'>Sending and receiving money is just as easy as texting a friend.</p>
                            <div className='flex justify-center'>
                                <button className='px-8   bg-black py-2 rounded-3xl font-medium text-white'>Check</button>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
    </div>
  );
};

export default FTP;
