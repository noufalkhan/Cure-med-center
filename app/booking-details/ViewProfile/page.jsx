import React from 'react';

const ProfilePage = () => {
  return (
    <>
      <div className='flex flex-col lg:flex-row h-screen bg-base-200 md:h-[90vh] p-2  container mx-auto px-5 md:px-20'>
        <div className='  w-full h-1/2 md:h-full flex flex-col justify-between items-center md:p-5'>

        <div className='font-bold text-xl'>Profile</div>
        <div className='bg-green-300 h-28 w-28 sm:h-32 sm:w-32 md:h-60 md:w-60 rounded-full'></div>
        <div className='text-xl font-bold'>Dr, Ana Di Armas</div>

        <div className='flex items-center justify-between md:gap-10 gap-3'>
          <div className='md:text-xl'>Specialist: <span className='font-bold'>ENT</span></div>
          <div className='md:text-xl'>Experience: <span className='font-bold'>14 Years</span></div>
        </div>


        <div className='md:text-xl'>10:00 AM - 11:00 AM</div>

        </div>
        <div className='bg-green-30  w-full  md:h-full flex flex-col justify-between '>
        <div className='bg-blue-20 h-full flex flex-col gap-5 md:gap-10 mt-5'>
          <div >
            <p className='font-bold mb-2  md:text-xl'>About</p>
            <p className='text-sm md:text-xl font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, enim iure sint aspernatur autem culpa perferendis voluptates ipsam quisquam dolore exercitationem tempore. Qui optio provident illum eaque eos dolorum aperiam!</p>
          </div>
          <div >
            <p className='font-bold mb-2 text-xl mt-2 md:text-xl'>Speciality</p>
            <p className='text-sm md:text-xl font-light'>Lorem ipsum dolor sit amet consectetur!</p>
          </div>
          </div>

          <div className='flex justify-center lg:justify-end w-full  p-5'>
            <button className='btn btn-sm md:btn-md w-1/2 btn-warning flex '>Book Appointment</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
