//import reac component
import {Swiper, SwiperSlide } from 'swiper/react'

//import swiper syles
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'

// icons
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowBottomRight,
  RxCode,
  RxInfoCircled,
} from "react-icons/rx";
//reqier modules
import { FreeMode, Pagination } from 'swiper';

// data
const serviceData = [
  {
    icon: <RxCrop />,
    title: 'Desarrollo Front-End',
    description: 'Creación de la parte visible de un sitio web que los usuarios interactúan directamente. Se utiliza HTML, CSS y JavaScript para construir la interfaz de usuario y la experiencia del usuario.',
  },
  {
    icon: <RxPencil2 />,
    title: 'Desarrollo de Aplicaciones Web',
    description: 'Aplicaciones web específicas que pueden realizar tareas específicas, como sistemas de gestión de contenido (CMS), tiendas en línea, redes sociales, y más.',
  },
  {
    icon: <RxDesktop />,
    title: 'Diseño Web',
    description: 'Creación de diseños atractivos y funcionales para sitios web, que incluye la disposición de elementos visuales, colores, tipografía y logotipos.',
  },
  {
    icon: <RxReader />,
    title: 'Optimización de Velocidad',
    description: 'Mejorar el rendimiento de un sitio web, optimizando su velocidad de carga y rendimiento general',
  },
  {
    icon: <RxRocket />,
    title: 'Diseño Responsivo',
    description: ' Asegurar que un sitio web se vea y funcione correctamente en una variedad de dispositivos y tamaños de pantalla, incluyendo computadoras de escritorio, tablets y teléfonos móviles.',
  },
  {
    icon: <RxCode />,
    title: 'Desarrollo de Comercio Electrónico',
    description: 'Crear tiendas en línea con funciones de carrito de compras, procesamiento de pagos y gestión de inventario.',
  },
  {
    icon: <RxInfoCircled />,
    title: 'Mantenimiento y Soporte Continuo',
    description: 'Proporcionar actualizaciones regulares, solución de problemas y soporte técnico después del lanzamiento del sitio web.',
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
    clickable: true
   }}
   modules={{FreeMode, Pagination}}
   className='h-[240px] sm:h-[340px]'
   >
    {
      serviceData.map((item,index) => {
        return (
          <SwiperSlide key={index}>
             <div className='bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300'>
              {/**iconoes */}
              <div className='text-4x1 text-accent mb-4'>{item.icon}</div>
              {/** title & description */}
              <div className='mb-8'>
                <div className='mb-2 text-lg'>{item.title}</div>
                <p className='max-w-[350px] leading-normal'>{item.description}</p>
              </div>
              {/**arrow */}
              <div className='text-3x1'>
                <RxArrowBottomRight className='group-hover:rotate-45 group-hover:text-accent transition-all duration-300'/>
              </div>
             </div>
          </SwiperSlide>
        )
      })
    }
   </Swiper>
   )
};

export default ServiceSlider;
