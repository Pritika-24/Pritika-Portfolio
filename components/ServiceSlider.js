// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

// import swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// icons
import {

  RxCamera,
  RxScissors,
  RxDesktop,
  RxPencil2,
  RxReader,
  RxStar,
  RxRocket,
  RxArrowTopRight,
} from 'react-icons/rx';

// import required modules
import { FreeMode, Pagination } from 'swiper';

// service data
export const serviceData = [
  {
    icon: <RxCamera />,
    title: 'Photography',
    description: 'As a passionate photographer, I capture cherished moments and heartfelt emotions, preserving them through the lens of my camera.',
    githubLink: 'https://github.com/Pritika-24/Web-Design_Final-Project',
  },
  {
    icon: <RxScissors />,
    title: 'Mixed Media Art',
    description: 'I delve passionately into a world of creativity, blending various artistic elements to create unique pieces that reflect my heart and soul.',
  },
  {
    icon: <RxStar />,
    title: 'Jewelry making',
    description: 'Through the delicate art of jewelry making, I meticulously handcraft pieces that symbolize love, uniqueness, and the beauty of individuality.',
  },
  {
    icon: <RxPencil2 />,
    title: 'Painting',
    description: 'My brush becomes an extension of my emotions as I pour my heart onto the canvas, creating vibrant paintings that speak volumes.',
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },

        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className='h-[240px] sm:h-[340px]'
    >
      {serviceData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div className='bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300'>
              {/* icon */}
              <div className='text-4xl text-accent mb-4'>{item.icon}</div>
              {/* title & desc */}
              <div className='mb-8'>
                <div className='mb-2 text-lg'>{item.title}</div>
                <p className='max-w-[350px] leading-normal'>
                  {item.description}
                </p>
              </div>
              {/* arrow */}
              <div className='text-3xl'>
                <RxArrowTopRight className='group-hover:rotate-45 group-hover:text-accent transition-all duration-300' />
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;
