// next image
import Image from 'next/image';

//components
import ParticlesContainer from '../components/ParticlesContainer'
import ProjectsBtn from '../components/ProjectsBtn'
import Avantar from '../components/Avatar'
import { Ripples } from '@uiball/loaders'

//framer motion
import { motion } from 'framer-motion'

//variants
import { fadeIn } from '../variants'

const Home = () => {
  return (
<div className='bg-primary/60 h-full'>
{/**text */}
<div className='w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10'>
  <div className='text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto'>
    {/** title*/}
    <motion.h1 
    variants={fadeIn('down', 0.2)}
    initial='hidden'
    animate='show'
    exit='hidden' 
    className='h1'>
      Agustin Lopez Front-end Developer <br />  <span className='text-accent'>Tecnico en Informatica</span>
    </motion.h1>
    {/**subtitle */}
    <motion.p
    variants={fadeIn('down', 0.3)}
    initial='hidden'
    animate='show'
    exit='hidden' 
    className='max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16'
    >Mi gran interés y fuerte compromiso en el mundo de la tecnología son dos de las principales motivaciones que me caracterizan como profesional. Desde mis primeras experiencias con la informática hasta mi continua búsqueda de aprendizaje en este campo, siempre he sentido una profunda pasión por la tecnología y su poder para cambiar nuestro entorno.
    </motion.p>
    {/**btn */}
    <div className='flex justify-center xl:hidden relative'>
   
    </div>
  <motion.div 
  variants={fadeIn('down', 0.4)}
  initial='hidden'
  animate='show'
  exit='hidden'
  className='hidden xl:flex justify-center'
  > 
 
  </motion.div>
  </div>
</div>
{/**Image */}
<div className='w-[1200px] h-full absolute right-0 bottom-0'>
  {/**bg img */}
  <div className='bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0'></div>
  {/**aqui van las particles */}
    <ParticlesContainer />
  {/**avatar img*/}
  
</div>
</div>
  )
};

export default Home;
