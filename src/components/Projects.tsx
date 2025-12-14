import { ExternalLink, Github, X } from 'lucide-react';
import { useState } from 'react';
import Slider from 'react-slick';
import SolarPanelImage1 from '../styles/solar-panel/image1.jpg';
import SolarPanelImage2 from '../styles/solar-panel/image2.jpg';
import SolarPanelImage3 from '../styles/solar-panel/image3.jpg';
import SolarPanelImage4 from '../styles/solar-panel/image4.jpg';
import SolarPanelImage5 from '../styles/solar-panel/image5.jpg';
import SolarPanelImage6 from '../styles/solar-panel/image6.jpg';

import ChromeExtensionImage3 from '../styles/chrome-extension/image3.png';
import ChromeExtensionImage4 from '../styles/chrome-extension/image4.png';
import ChromeExtensionImage5 from '../styles/chrome-extension/image5.png';

import DeliveryPointImage1 from '../styles/delivery-point/image1.png';
import DeliveryPointImage2 from '../styles/delivery-point/image2.png';
import DeliveryPointImage3 from '../styles/delivery-point/image3.png';
import DeliveryPointImage4 from '../styles/delivery-point/image4.png';
import DeliveryPointImage5 from '../styles/delivery-point/image5.png';
import DeliveryPointImage6 from '../styles/delivery-point/image6.png';
import DeliveryPointImage7 from '../styles/delivery-point/image7.png';
import DeliveryPointImage8 from '../styles/delivery-point/image8.png';
import DeliveryPointImage9 from '../styles/delivery-point/image9.png';
import DeliveryPointImage10 from '../styles/delivery-point/image10.png';
import DeliveryPointImage11 from '../styles/delivery-point/image11.png';
import DeliveryPointImage12 from '../styles/delivery-point/image12.png';

import HomecareImage1 from '../styles/homecare/image1.png';
import HomecareImage2 from '../styles/homecare/image2.png';
import HomecareImage3 from '../styles/homecare/image3.png';
import HomecareImage4 from '../styles/homecare/image4.png';
import HomecareImage5 from '../styles/homecare/image5.png';
import HomecareImage6 from '../styles/homecare/image6.png';

import liveImage1 from '../styles/405live/image1.png';
import liveImage2 from '../styles/405live/image2.png';

import EnglishImage1 from '../styles/english/image1.png';
import EnglishImage2 from '../styles/english/image2.png';
import EnglishImage3 from '../styles/english/image3.png';
import EnglishImage4 from '../styles/english/image4.png';
import EnglishImage5 from '../styles/english/image5.png';
import EnglishImage6 from '../styles/english/image6.png';


export function Projects() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);


  const projects = [
    {
      title: 'Solar Panel Installation',
      description: 'Developed a 3D map rendering, using Three.js to create location-based house models with roof structures, enabling solar panel installation, placement, and energy output calculations.',
      tags: ['React.js', 'Javascript', 'Typescript', 'Three.js', 'GoogleApi'],
      github: '#',
      live: '#',
      images: [
        SolarPanelImage1,
        SolarPanelImage2,
        SolarPanelImage3,
        SolarPanelImage4,
        SolarPanelImage5,
        SolarPanelImage6,
      ],
    },
    {
      title: 'LinkedIn Profile Review Extension',
      description: 'Developed a Chrome extension web application integrating LinkedIn API for user authentication, profile reviews with ratings, and market insights visualization.',
      images: [
        ChromeExtensionImage3,
        ChromeExtensionImage4,
        ChromeExtensionImage5,
      ],
      tags: ['React.js', 'Javascript', 'TypeScript', 'Redux', 'Chrome extension'],
      github: '#',
      live: '#'
    },
    {
      title: 'HomeCare360',
      description: 'A one-stop platform for finding, booking, and reviewing local service providers like plumbers, electricians, cleaners, landscapers, and more.',
      images: [
        HomecareImage1,
        HomecareImage2,
        HomecareImage3,
        HomecareImage4,
        HomecareImage5,
        HomecareImage6,
      ],
      tags: ['React.js', 'Javascript', 'Typescript', 'Node.js', 'ExpressJs', 'MongoDB'],
      github: 'https://github.com/armanali0786/homecare360',
      live: 'https://homecare360.netlify.app'
    },
    {
      title: 'DeliveryPoint',
      description: 'Design and developed websites features such as food listing with quick delivery options within 30 minutes, showcasing top-rated restaurants, and enabling robust search capabilities for food items and restaurants.',
      images: [
        DeliveryPointImage1,
        DeliveryPointImage2,
        DeliveryPointImage3,
        DeliveryPointImage4,
        DeliveryPointImage5,
        DeliveryPointImage6,
        DeliveryPointImage7,
        DeliveryPointImage8,
        DeliveryPointImage9,
        DeliveryPointImage10,
        DeliveryPointImage11,
        DeliveryPointImage12,
      ],
      tags: ['React.js', 'Javascript', 'Typescript', 'Node.js', 'ExpressJs', 'MongoDB', 'Stripe', 'Google DialogFlow'],
      github: 'https://github.com/armanali0786/delivery-point.git',
      live: 'https://delivery-point.netlify.app'
    },
    {
      title: '405Live',
      description: 'Developed a user-friendly platform for accessing information on upcoming events, including event details, venue information, and event locations, user authentication and advanced search functionality, events, filtered events,venues events, favourites. ',
      images: [
        liveImage1,
        liveImage2,
      ],
      tags: ['React.js', 'Javascript', 'Typescript'],
      github: '#',
      live: 'https://405live.com'
    },
    {
      title: 'Expert English Spoken',
      description: 'Developed a user-friendly English spoken coaching website, offering interactive lessons, personalized learning paths, and real-time feedback.',
      images: [
        EnglishImage1,
        EnglishImage2,
        EnglishImage3,
        EnglishImage4,
        EnglishImage5,
        EnglishImage6
      ],
      tags: ['React.js', 'Javascript', 'Typescript'],
      github: 'https://github.com/armanali0786/expert-english-spoken.git',
      live: 'https://expert-english-spoken.netlify.app/'
    },
  ];


  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Slick settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <button className="slick-prev">❮</button>,
    nextArrow: <button className="slick-next">❯</button>,
  };


  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-red-500 mb-4">Featured Projects</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A showcase of my recent work and projects I'm proud of
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              onClick={() => openModal(project)}
              className="group bg-slate-800 border border-slate-700 rounded-xl overflow-hidden hover:border-red-500 transition-all cursor-pointer"
            >
              <div className="relative h-64 overflow-hidden bg-slate-900">
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60" />
              </div>

              <div className="p-6">
                <h3 className="mb-3">{project.title}</h3>
                <p className="text-slate-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-slate-900 text-slate-300 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  {/* <a
                    href={project.github}
                    target='_blank'
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-2 text-slate-300 hover:text-red-500 transition-colors text-sm"
                  >
                    <Github size={18} />
                    Code
                  </a> */}
                   {index >= 2 && (
                  <a
                    href={project.live}
                    target='_blank'
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-2 text-slate-300 hover:text-red-500 transition-colors text-sm"
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </a>
                   )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {isModalOpen && selectedProject && (
        <div
          className="fixed inset-0 z-50 bg-slate-900/95 backdrop-blur-sm flex items-center justify-center p-6"
          onClick={closeModal}

        >
          <button
            className="absolute top-6 right-6 w-10 h-10 bg-slate-800 border border-slate-700 rounded-lg flex items-center justify-center hover:border-red-500 transition-colors"
            onClick={closeModal}

          >
            <X size={20} className="text-white" />
          </button>

          <div
            className="max-w-5xl w-full bg-slate-800 border border-slate-700 rounded-xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <Slider {...sliderSettings}>
              {selectedProject?.images.map((image, index) => (
                <div key={index}>
                  <img
                    src={image}
                    alt={`Project Image ${index + 1}`}
                    className="w-full object-cover h-80 rounded-lg"
                  />
                </div>
              ))}
            </Slider>
            <div className="p-6">
              <h3 className="mb-2">{selectedProject?.title}</h3>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
