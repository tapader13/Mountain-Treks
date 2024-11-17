import { useState } from 'react';
// import Modal from './Modal';

const AdventureDetails = () => {
  const [showModal, setShowModal] = useState(false);

  const adventure = {
    id: 1,
    title: 'Alpine Glacier Trek',
    image: 'https://i.postimg.cc/SRhqvkb1/Untitled.jpg',
    category: 'Trekking',
    shortDescription:
      'Discover breathtaking alpine landscapes and trek across ancient glaciers.',
    cost: '$180 per person',
    bookingAvailability: true,
    location: 'Swiss Alps, Switzerland',
    duration: '7 hours',
    adventureLevel: 'Advanced',
    includedItems: [
      'Crampons',
      'Professional Guide',
      'Lunch Pack',
      'Safety Equipment',
    ],
    ecoFriendlyFeatures: [
      'Glacier conservation support',
      'Reusable water bottles provided',
      'Eco-friendly trekking gear',
    ],
    maxGroupSize: 8,
    specialInstructions: [
      'Wear warm, layered clothing.',
      'Bring sunscreen and sunglasses.',
      'Follow the guide’s instructions carefully.',
    ],
  };

  const handleTalkWithExpert = () => {
    const currentTime = new Date();
    const hours = currentTime.getHours();
    if (hours >= 10 && hours < 20) {
      window.open('https://meet.google.com/', '_blank');
    } else {
      setShowModal(true);
    }
  };

  return (
    <div className='h-screen bg-gray-100 flex flex-col'>
      <div className=''>
        <div className=' mx-auto bg-white shadow-lg rounded-lg overflow-hidden h-full'>
          <img
            src={adventure.image}
            alt={adventure.title}
            className='w-full h-[500px] object-cover'
          />
          <div className='p-6'>
            <h1 className='text-3xl font-bold text-gray-800'>
              {adventure.title}
            </h1>
            <p className='text-gray-600 mt-2'>{adventure.shortDescription}</p>
            <div className='mt-4 space-y-2'>
              <p>
                <strong>Category:</strong> {adventure.category}
              </p>
              <p>
                <strong>Location:</strong> {adventure.location}
              </p>
              <p>
                <strong>Duration:</strong> {adventure.duration}
              </p>
              <p>
                <strong>Cost:</strong> {adventure.cost}
              </p>
              <p>
                <strong>Adventure Level:</strong> {adventure.adventureLevel}
              </p>
              <p>
                <strong>Booking Available:</strong>{' '}
                {adventure.bookingAvailability ? 'Yes' : 'No'}
              </p>
              <p>
                <strong>Maximum Group Size:</strong> {adventure.maxGroupSize}
              </p>
            </div>

            <div className='mt-6'>
              <h2 className='text-xl font-semibold'>Included Items:</h2>
              <ul className='list-disc pl-6 mt-2 text-gray-600'>
                {adventure.includedItems.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div className='mt-6'>
              <h2 className='text-xl font-semibold'>Eco-Friendly Features:</h2>
              <ul className='list-disc pl-6 mt-2 text-gray-600'>
                {adventure.ecoFriendlyFeatures.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            <div className='mt-6'>
              <h2 className='text-xl font-semibold'>Special Instructions:</h2>
              <ul className='list-disc pl-6 mt-2 text-gray-600'>
                {adventure.specialInstructions.map((instruction, index) => (
                  <li key={index}>{instruction}</li>
                ))}
              </ul>
            </div>

            <button
              onClick={handleTalkWithExpert}
              className='mt-6 w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500'
            >
              Talk with Expert
            </button>
          </div>
        </div>
      </div>

      {/* Uncomment Modal when ready */}
      {/* {showModal && (
        <Modal
          title="Consultation Time"
          message="Our experts are available between 10:00am and 8:00pm. Please contact us during these hours."
          onClose={() => setShowModal(false)}
        />
      )} */}
    </div>
  );
};

export default AdventureDetails;
