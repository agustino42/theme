//links
import Link from 'next/link'

//icons
import {
RiInstagramLine,
RiCodeView,
RiGitRepositoryLine,
RiWhatsappLine,
} from 'react-icons/ri'

const Socials = () => {
  return(
   <div className='flex items-center gap-x-5 text-lg'>
    
    <Link href={''} className='hover:text-accent transition-all duration-300'>
    <RiCodeView />
    </Link>
    <Link href={''} className='hover:text-accent transition-all duration-300'>
    <RiWhatsappLine />
    </Link>
    <Link href={''} className='hover:text-accent transition-all duration-300'>
    <RiGitRepositoryLine />
    </Link>
   
    <Link href={''} className='hover:text-accent transition-all duration-300'>
    <RiInstagramLine />
    </Link>
   </div>
   )
};

export default Socials;
