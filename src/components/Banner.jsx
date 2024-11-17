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
          src='/istockphoto-2077392931-612x612.webp'
          alt=''
        />
      </SwiperSlide>
      <SwiperSlide>
        <img className='w-full h-full object-cover' src='/images.jpg' alt='' />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className='w-full h-full object-cover'
          src='/images.jpg3.jpg'
          alt=''
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
