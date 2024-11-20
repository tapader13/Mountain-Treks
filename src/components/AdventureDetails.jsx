import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // Or Next.js useRouter if you're using Next.js
import Modal from './Modal';
import { DynamicTitle } from './DynamicTItle';

const AdventureDetails = () => {
  const [showModal, setShowModal] = useState(false);
  const [adventure, setAdventure] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch('/data.json')
      .then((response) => response.json())
      .then((adventuresData) => {
        const foundAdventure = adventuresData.find(
          (adventure) => adventure.id === parseInt(id)
        );
        setAdventure(foundAdventure);
      });
  }, [id]);

  const handleTalkWithExpert = () => {
    const currentTime = new Date();
    const hours = currentTime.getHours();
    if (hours >= 10 && hours < 20) {
      window.open('https://meet.google.com/', '_blank');
    } else {
      setShowModal(true);
    }
  };

  if (!adventure) {
    return <div>Loading...</div>;
  }

  return (
    <div className='h-full flex flex-col'>
      <DynamicTitle />
      <div className=''>
        <div className='mx-auto shadow-lg overflow-hidden h-full'>
          <img
            src={adventure.image}
            alt={adventure.title}
            className='w-full h-[600px] object-cover'
          />
          <div className='p-6'>
            <h1 className='text-3xl text-[#004d73] font-bold text-coolGray-800'>
              {adventure.title}
            </h1>
            <p className='text-coolGray-600 mt-2'>
              {adventure.shortDescription}
            </p>
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
              <h2 className='text-xl font-semibold text-coolGray-700'>
                Included Items:
              </h2>
              <ul className='list-disc pl-6 mt-2 text-coolGray-600'>
                {adventure.includedItems.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div className='mt-6'>
              <h2 className='text-xl font-semibold text-coolGray-700'>
                Eco-Friendly Features:
              </h2>
              <ul className='list-disc pl-6 mt-2 text-coolGray-600'>
                {adventure.ecoFriendlyFeatures.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            <div className='mt-6'>
              <h2 className='text-xl font-semibold text-coolGray-700'>
                Special Instructions:
              </h2>
              <ul className='list-disc pl-6 mt-2 text-coolGray-600'>
                {adventure.specialInstructions.map((instruction, index) => (
                  <li key={index}>{instruction}</li>
                ))}
              </ul>
            </div>

            <button
              onClick={handleTalkWithExpert}
              className='mt-6 w-full py-2 px-4 bg-[#a3dcf1] text-white font-semibold rounded-lg hover:bg-[#5cacee] focus:outline-none focus:ring-2 focus:ring-[#a3dcf1]'
            >
              Talk with Expert
            </button>
          </div>
        </div>
      </div>

      {/* Uncomment Modal when ready */}
      {showModal && (
        <Modal
          title='Consultation Time'
          message='Our experts are available between 10:00am and 8:00pm. Please contact us during these hours.'
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
};

export default AdventureDetails;
