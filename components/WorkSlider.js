// work slider data
export const workSlider = {
  slides: [
    {
      images: [
        {
          title: 'title',
          path: '/house.png',
          heading: 'Student Housing Management System',
          description: 'Created a Java Swing-based application for student apartment rentals, incorporating features such as a chatbot, Google Maps, email notifications, along with image and table display from a database. Implemented an effective appointment scheduling mechanism within the program, streamlining the rental process and boosting overall user comfort.',
          githubLink: 'https://github.com/Pritika-24/AED-Final-Project/tree/main',
        },
        {
          title: 'title',
          path: '/splitUp.jpg',
          heading: 'SplitUp Financial Tracker',
          description: 'Embraced cutting-edge web development techniques, harnessed the power of RESTful API design and JWT authentication to guarantee seamless and secure data exchange between front-end and back-end. Integrated node mailer into the application, unlocking a realm of possibilities with automated email notifications for user actions and transaction confirmations brought to life with every click.',
          githubLink: 'https://github.com/Pritika-24/Web-Design_Final-Project',
        },
        {
          title: 'title',
          path: '/project3.png',
          heading: 'GourmetGo',
          description: 'GourmetGo redefines the gourmet food delivery experience with its sleek and user-friendly Figma-designed app. Embracing a visually captivating interface and a well-coordinated color scheme, the app allows users to effortlessly explore a wide array of gourmet restaurants, personalize orders, meal plans and conveniently monitor deliveries in real-time. Ensuring the utmost security, GourmetGo supports diverse payment options, elevating the overall user experience and setting new standards for gourmet food delivery services.',
          githubLink: 'https://www.figma.com/proto/uXC2Bi3o4ZnzUAFa5z2dBe/GourmetGo?type=design&node-id=1-2&t=NxnL0uXTazbTO6a7-0&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=1%3A2',
        },
        {
          title: 'title',
          path: '/vflow.png',
          heading: 'Vital Flow',
          description: 'Developed a Figma prototype for a healthcare application, featuring an intuitive interface, seamless navigation, and interactive elements. Users can easily access essential healthcare information, book appointments, and explore various medical services. With a focus on user-centricity and modern aesthetics, the Figma prototype aims to revolutionize the healthcare domain by offering a user-friendly platform for patients and medical professionals alike.',
          githubLink: 'https://www.figma.com/proto/uXC2Bi3o4ZnzUAFa5z2dBe/GourmetGo?type=design&node-id=1-2&t=NxnL0uXTazbTO6a7-0&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=1%3A2',
        },
      ],
    },
    {
      images: [
        {
          title: 'title',
          path: '/expiceland.png',
          heading: 'Explore Iceland',
          description: 'Created an Axure RP interactive prototype for a travel application with seamless user experience across essential pages: Landing/Splash, Sign In/Up, Home, Travel Deals, and Cart. Implemented validations and error handling for smooth registration & login. Utilized dynamic panels, Math functions, sliders, scroll bars, conditional flows, videos, and animations to offer engaging interactions and showcase creativity in design. The prototype aims to inspire wanderlust providing users with a glimpse of an exciting and user-friendly travel platform.',
          githubLink: 'https://jfsy2d.axshare.com/',
        },
        {
          title: 'title',
          path: '/weather.png',
          heading: 'Weather App',
          description: 'Built a weather forecasting app using REACT. It displays a 5-day weather forecast, showing daily high and low temperatures, and corresponding images for various weather conditions. It allows users to click on a day to view its hourly forecast. React Router was added to the project to handle navigation, with routes set up to show the 5-day forecast and the hourly forecast for a specific day. Real 5-day forecast data is fetched by signing up for a free API key providing accurate and reliable weather information for the app.',
          githubLink: 'https://github.com/Pritika-24/Web-Design_Assignment-10',
        },
      ],
    },
  ],
};

// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

// import swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper';

// icons
import { BsArrowRight } from 'react-icons/bs';
// next image
import Image from 'next/image';
import Link from 'next/link';

// ...

const WorkSlider = () => {
  const handleImageClick = (githubLink) => {
    window.open(githubLink, '_blank');
  };

  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className='h-[280px] sm:h-[480px]'
    >
      {workSlider.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className='grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer'>
              {slide.images.map((image, index) => {
                return (
                  <div
                    className='relative rounded-lg overflow-hidden flex items-center justify-center group'
                    key={index}
                    onClick={() => handleImageClick(image.githubLink)}
                  >
                    {/* image */}
                    <Image src={image.path} width={500} height={300} alt='' />
                    {/* overlay gradient */}
                    <div className='absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700'></div>
                    {/* title */}
                    <div className='absolute bottom-0 left-0 w-full p-4 bg-gray-800 text-white opacity-0 group-hover:opacity-100 transition-all duration-300'>
                     {/* heading */}
                     <div className='font-bold'>{image.heading}</div>
                     <div className='text-[10px] tracking-[0.2em]'>
                        {/* description */}
                        <div className='delay-100'>{image.description}</div>
                      </div>
                    </div>
                    {/* arrow */}
                   
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
