// links
import Link from 'next/link';

// icons
import {
  RiLinkedinLine,
  RiGithubLine,
  RiInstagramLine,
  RiFacebookLine,
  
} from 'react-icons/ri';

const Socials = () => {
  return (
    <div className='flex items-center gap-x-5 text-lg'>
      <Link href={'https://www.linkedin.com/in/pritika-purushothaman-a62237145/'} className='hover:text-accent transition-all duration-300'>
        <RiLinkedinLine />
      </Link>
      <Link href={'https://github.com/Pritika-24'} className='hover:text-accent transition-all duration-300'>
        <RiGithubLine />
      </Link>
      <Link href={'https://www.instagram.com/pritikaa_24/'} className='hover:text-accent transition-all duration-300'>
        <RiInstagramLine />
      </Link>
      <Link href={'https://www.facebook.com/profile.php?id=100009019814294'} className='hover:text-accent transition-all duration-300'>
        <RiFacebookLine />
      </Link>
      
    </div>
  );
};

export default Socials;
