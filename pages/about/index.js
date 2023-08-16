import React, { useState } from 'react';

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
  FaSass,
  FaJava,
  FaDownload,
  FaSave,
} from 'react-icons/fa';

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
  SiNodedotjs,
  SiSketch,
  SiOracle,
  SiSqlite,
  SiMysql,
  SiMongodb,
  SiPython,
  SiJavascript,
  SiCircle,
} from 'react-icons/si';


// CV download button
const CVDownloadButton = () => {
  const handleDownloadCV = () => {
    // Replace this with your actual file URL or API endpoint to download the CV
    const cvURL = '/Purushothaman_Pritika_.pdf';
    window.open(cvURL, '_blank');
  };

  return (
    <motion.button
      variants={fadeIn('right', 0.8)}
      initial='hidden'
      animate='show'
      exit='hidden'
      className='bg-accent hover:bg-accent-hover text-white px-8 py-3 rounded-full mt-4 font-semibold shadow-lg flex items-center'
      onClick={handleDownloadCV}
    >
      <FaDownload className='text-sm' />  {/* Adjust the icon size with text-sm */}
    </motion.button>
  );
};

//  about data


export const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Programming Languages',
        icons: [<SiPython />, <FaJava />],
      },
      {
        title: 'Web Development',
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaSass />,
          <FaJs />,
          <FaReact />,
          <SiNodedotjs />,
          <SiFramer />,
        ],
      },
      {
        title: 'UI/UX Design',
        icons: [<FaFigma />, <SiAdobexd />, <SiSketch />, <SiAdobephotoshop />],
      },
      {
        title: 'Databases',
        icons: [<SiOracle />, <SiMongodb />, <SiSqlite />, <SiMysql />],
      },
      {
         // Conditionally render the hyphen for other items except the first one
         title: 'Download CV',
         icons: [ <CVDownloadButton />],
      },
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'Project Engineer - Wipro Limited',
        stage: '2019 - 2022',
      },
      {
        stage: 'Experienced in working with Waterfall & Agile-Scrum projects and testing E-commerce websites built using AEM.',
      },
      {
        stage: 'Engaged in web services testing deploying RestAPI, database testing leveraging SQL, In-Sprint, and Regression Testing utilizing Selenium & Jenkins.',
      },
      {
        stage: 'Designed test scripts based on new stories created in each sprint to meet system and technical specifications.',
      },
      {
        stage: 'Received customer appreciation for successful testing and business demo of Apple Pay and Klarna payment features, thereby increasing consumer satisfaction by 50%.',
      },
      {
        stage: 'Assisted the In-Sprint team offshore and execution of each sprint while facilitating team with test-case design and review.',
      },
      {
        stage: 'Recognized and appreciated by client for taking ownership of critical features and ensuring quality delivery to achieve sprint closure.',
      },
    ],
  },
  {
    title: 'awards',
    info: [
      {
        title: 'TNSCST Student Project Scheme - Second Place',
        stage: '2017 - 2018',
      },
    ],
  },
  
];


// components
import Avatar from '../../components/Avatar';
import Circles from '../../components/Circles';

// framer motion
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

// counter
import CountUp from 'react-countup';

const About = () => {
  const [index, setIndex] = useState(0);
  console.log(index);



  return (
    <div className='h-full bg-primary/30 py-32 text-center xl:text-left'>
      <Circles />
      {/* avatar img */}
      <motion.div
        variants={fadeIn('right', 0.2)}
        initial='hidden'
        animate='show'
        exit='hidden'
        className='hidden xl:flex absolute bottom-0 -left-[370px]'
      >
        <Avatar />
      </motion.div>
      <div className='container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6'>
        {/* text */}
        <div className='flex-1 flex flex-col justify-center'>
          <motion.h2
            variants={fadeIn('right', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='h2 reduced-font-size'
          >
           {/*  Transforming <span className='text-accent'>technology</span> into 
            strategic software solutions. */}
          </motion.h2>
          <motion.p
            variants={fadeIn('right', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0'
          >
            A highly self-motivated and results-driven professional with a passion for tackling challenging environments. 
            With a proven track record of working hard and consistently delivering high-quality results, I leverage a unique blend of analytical 
            thinking, teamwork, and time management to ensure efficient project execution. I bring creativity and originality to my work and intend 
            to contribute significantly to the field of software development with innovative concepts and methodologies. I'm skilled in Python, Java, 
            SQL, MATLAB, and Unix Shell Scripting, as well as libraries and frameworks like Django, Flask, and React. 
            <br></br>
            <br></br>
            In addition to having extensive 
            knowledge of web technologies like HTML, CSS, and JavaScript, I have expertise working with databases like Oracle, MongoDB, MySQL, and 
            SQLite. I am familiar with the cloud and have utilized AWS services like S3, EC2, and Cloud Front. I've worked with TCP/IP, FTP, HTTP, 
            and SMTP protocols, as well as tools like GIT, JIRA, VS Code, Selenium, Jenkins, and Postman. I’m also proficient in Agile concepts, UML, 
            and Software QA/testing techniques. I contribute adaptability and diversity to any software development role as I am proficient in 
            various operating systems like MacOS, Windows, and Linux. I prioritize continuous personal and professional growth by actively pursuing 
            diverse opportunities for learning and development.
          </motion.p>
          {/* counters */}
          <motion.div
            variants={fadeIn('right', 0.6)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8'
          > 
            <div className='flex flex-1 xl:gap-x-6'>
              {/* experience */}
              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                  <CountUp start={0} end={3} duration={5} /> +
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
                  Years of experience
                </div>
              </div>
              {/* clients */}
              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                  <CountUp start={0} end={2} duration={5} /> +
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
                  Satisfied clients
                </div>
              </div>
              {/* projects */}
              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                  <CountUp start={0} end={10} duration={5} /> +
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
                  Finished projects
                </div>
              </div>
              {/* awards */}
              <div className='relative flex-1'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                  <CountUp start={0} end={1} duration={5} /> +
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
                  Winning awards
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        {/* info */}
        <motion.div
          variants={fadeIn('left', 0.4)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='flex flex-col w-full xl:max-w-[48%] h-[480px]'
        >
          <div className='flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4'>
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${
                    index === itemIndex &&
                    'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'
                  }  cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className='py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start'>
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className='flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60'
                >
                  {/* title */}
                  <div className='font-light mb-2 md:mb-0'>{item.title}</div>
                  <div className='hidden md:flex'>-</div>
                  <div>{item.stage}</div>
                  <div className='flex gap-x-4'>
                    {/* icons */}
                    {item.icons?.map((icon, itemIndex) => {
                      return <div className='text-2xl text-white'>{icon}</div>;
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
