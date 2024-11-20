import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import '../App';
const Banner = () => {
  return (
    <Swiper
      pagination={{ clickable: true }}
      modules={[Pagination]}
      className='mySwiper'
    >
      <SwiperSlide>
        <img
          className='w-full h-full object-cover'
          src='/andrew-darlington-_uFNDmzJKII-unsplash.jpg'
          alt=''
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className='w-full h-full object-cover'
          src='/joshua-woroniecki-qjrOBYNb_fM-unsplash.jpg'
          alt=''
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className='w-full h-full object-cover'
          src='/joshua-woroniecki-TwWgefmZB_0-unsplash.jpg'
          alt=''
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
