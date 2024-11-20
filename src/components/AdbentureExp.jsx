import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AdbentureExp = () => {
  const [adventures, setAdventures] = useState([]);

  useEffect(() => {
    fetch('/data.json')
      .then((response) => response.json())
      .then((adventuresData) => setAdventures(adventuresData));
  }, []);
  return (
    <section className='p-6 py-12'>
      <h2 className='text-2xl text-[#004d73] font-bold text-center mb-6'>
        Adventure Experiences
      </h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        {adventures.map((adventure) => (
          <div
            data-aos='fade-up'
            key={adventure.id}
            className='bg-[rgba(255,255,255,0.8)] rounded-[12px] backdrop-blur-md box_sd overflow-hidden'
          >
            <img
              className='w-full h-56 object-cover'
              src={adventure.image}
              alt={adventure.title}
            />
            <div className='p-4'>
              <h3 className='text-xl text-[#004d73] font-semibold'>
                {adventure.title}
              </h3>
              <ul className='mt-2 text-sm text-gray-600'>
                {adventure.ecoFriendlyFeatures.map((feature, index) => (
                  <li key={index} className='flex items-center'>
                    <span className='mr-2'>✔️</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link to={`/adventure/${adventure.id}`}>
                <button className='mt-4 px-4 py-2 bg-[#a3dcf1] text-[#ffffff] rounded-md hover:bg-[#5cacee] transition'>
                  Explore Now
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AdbentureExp;
