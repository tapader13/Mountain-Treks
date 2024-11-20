import {
  FaMapMarkerAlt,
  FaUserAlt,
  FaUsers,
  FaShieldAlt,
} from 'react-icons/fa';

const Service = () => {
  const features = [
    {
      icon: <FaMapMarkerAlt size={30} />,
      title: 'Great Location',
      description:
        'One of the most compelling aspects of hiking is its accessibility for all types of hikers.',
    },
    {
      icon: <FaUserAlt size={30} />,
      title: 'Expert Guide',
      description:
        'Hike with experienced guides who know the best routes, ensuring safety and a rich experience.',
    },
    {
      icon: <FaUsers size={30} />,
      title: 'Community Engagement',
      description:
        'Join a community of like-minded hikers who share their experiences and tips to enhance your journey.',
    },
    {
      icon: <FaShieldAlt size={30} />,
      title: 'Safe Adventure',
      description:
        'Your safety is our priority with well-planned routes and support throughout the trek.',
    },
  ];

  return (
    <section className='py-12 px-6 '>
      <h2 className='text-3xl text-[#004d73] font-bold text-center mb-8'>
        Key Features of Our Treks
      </h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
        {features.map((feature, index) => (
          <div
            data-aos='fade-down'
            key={index}
            className='bg-white border group hover:text-[#f0f8ff] hover:bg-[#a8d8ea] border-[#a8d8ea] rounded-lg p-6 flex flex-col items-center text-center transition-all duration-300 ease-in-out'
          >
            <div className='mb-4 text-[#a8d8ea] group-hover:text-[#f0f8ff]'>
              {feature.icon}
            </div>
            <h3 className='text-xl text-[#004d73] group-hover:text-[#f0f8ff] font-semibold mb-2'>
              {feature.title}
            </h3>
            <p className='text-gray-600 group-hover:text-[#f0f8ff]/80'>
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Service;
