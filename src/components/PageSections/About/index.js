import React, { Fragment } from 'react';
// import About from './components/About';
import Section from '../../Section/Section';
import MeetingForm from '../../../components/Form/MeetingForm';
import aboutMeImg from '../../../assets/img/me/meFelipeOrias.jpg'


const AboutComponent = () => {
  return (
    <Section>
    {/* <Fade delay={300} direction="right"> */}
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-1 my-10 mt-16 mb-10">
      <div className="col-span-1 md:col-span-1 xl:col-span-2 flex flex-col justify-center xl:ml-6">
        <h2 className="text-5xl xl:text-4xl text-center xl:text-start  text-primary font-bold uppercase">
            Sobre mí
          </h2>
        <div className='grid grid-cols-1 xl:grid-cols-2'>
          <div className="col-span-2 xl:col-span-1 flex justify-center flex-col">
            <img
              src={aboutMeImg}
              alt="about-img"
              className="rounded-full shadow-lg h-[280px] w-[280px] mt-10 mx-20 md:mx-2 md:w-[300px] md:h-[300px] xl:w-[360px] xl:h-[360px] xl:my-10 xl:mx-20 hover:scale-110 duration-300"
            />
          </div>
          <div className="col-span-2 xl:col-span-1 ">
            <p className="text-lg xl:text-xl text-gray-700 mt-8 ml-0 xl:ml-1 xl:text-left">
              En nuestra empresa, nos destacamos como especialistas en la administración de arriendos y gestión inmobiliaria. 
              Con una amplia experiencia y conocimiento del mercado, brindamos soluciones integrales y efectivas para propietarios e inquilinos por igual. 
              Nuestro enfoque se centra en ofrecer un servicio de alta calidad que se adapta a las necesidades específicas de cada cliente.
              <br />
              <br />
              Operamos en las regiones Metropolitanas y de Valparaíso, abarcando un amplio espectro geográfico para satisfacer las demandas 
              de una clientela diversa. Desde la gestión de arriendos residenciales hasta la administración de propiedades comerciales, 
              nos comprometemos a proporcionar un servicio profesional y confiable que garantice la tranquilidad y satisfacción de nuestros 
              clientes en cada paso del camino. Confíe en nosotros para manejar sus necesidades inmobiliarias con habilidad y experiencia.
              <br />
            </p>
            <p className="text-lg xl:text-xl text-gray-700 mt-8 ml-0 xl:ml-1 md:text-center xl:text-left">
              Felipe Orias.
            </p>
            <p className="text-xl xl:text-xl text-gray-700 ml-0 xl:ml-1 md:text-center xl:text-left">
              Fundador y Gerente General de Relocate Real Estate.
            </p>
          </div>
        </div>
      </div>
    </div>
    {/* </Fade>  */}
  </Section>
  );
};

export default AboutComponent;
