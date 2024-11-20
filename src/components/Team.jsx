import { useEffect, useState } from 'react';

const Team = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  useEffect(() => {
    fetch('/member.json')
      .then((response) => response.json())
      .then((data) => setTeamMembers(data));
  }, []);

  return (
    <section className='py-12 px-6 '>
      <h2 className='text-3xl font-bold text-center text-[#004d73] mb-8'>
        The Faces Behind Outdoor Adventures
      </h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
        {teamMembers.map((member, index) => (
          <div
            data-aos='fade-down'
            key={index}
            className='bg-white shadow-lg hover:shadow-xl hover:scale-105 transform transition duration-300 rounded-lg p-6 text-center'
          >
            <div className='mb-4'>
              <img
                src={member.image}
                alt={member.name}
                className='w-32 h-32 rounded-full object-cover mx-auto border-4 border-[#a8d8ea] hover:border-[#004d73] transition duration-300'
              />
            </div>
            <h3 className='text-xl text-[#004d73] font-semibold mb-2'>
              {member.name}
            </h3>
            <p className='text-gray-600'>{member.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
