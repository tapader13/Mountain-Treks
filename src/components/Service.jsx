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
      <h2 className='text-3xl font-bold text-center mb-8'>
        Key Features of Our Treks
      </h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
        {features.map((feature, index) => (
          <div
            key={index}
            className='bg-white border group hover:text-white hover:bg-[#94794A] border-[#94794A] rounded-lg p-6 flex flex-col items-center text-center'
          >
            <div className='mb-4 text-[#94794A] group-hover:text-white'>
              {feature.icon}
            </div>
            <h3 className='text-xl font-semibold mb-2'>{feature.title}</h3>
            <p className='text-gray-600 group-hover:text-white/80'>
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Service;
