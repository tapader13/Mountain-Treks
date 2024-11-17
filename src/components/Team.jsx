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
      <h2 className='text-3xl font-bold text-center mb-8'>
        The Faces Behind Outdoor Adventures
      </h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className='bg-white shadow-lg rounded-lg p-6 text-center'
          >
            <div className='mb-4'>
              <img
                src={member.image}
                alt={member.name}
                className='w-32 h-32 rounded-full object-cover mx-auto'
              />
            </div>
            <h3 className='text-xl font-semibold mb-2'>{member.name}</h3>
            <p className='text-gray-600'>{member.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
