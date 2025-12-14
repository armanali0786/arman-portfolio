import { GraduationCap, Award } from 'lucide-react';
import AWS from '../styles/certificates/aws.pdf';
import SQL from '../styles/certificates/sql.pdf';
import DSA from '../styles/certificates/das.pdf';
import OOPS from '../styles/certificates/oops.pdf';
import Slider from "react-slick";


export function Education() {
  const education = [
    {
      degree: 'Bachelor of Engineering',
      institution: 'Marwadi Education Foundations Group Of Institutions',
      period: '2019 - 2023',
      description: 'Specialized in Web Technologies and Software Engineering. Graduated with honors.',
      highlights: [
        'CGPA: 8.62/10',
      ]
    },
    {
      degree: 'Higher Secondary Education',
      institution: 'Shrikant Babu Bindu Singh Degree College',
      period: '2017 - 2019',
      description: 'I focus on completing coursework, preparing for board exams, and exploring potential career paths.',
      highlights: [
        'Percentile: 71.8 %',
      ]
    },
    {
      degree: 'Secondary School Education',
      institution: 'Jay Ram Prasad Tiwari High School',
      period: '2016 - 2017',
      description: 'I strive to excel academically, engage in extracurricular activities, and make decisions about their future educational endeavors.',
      highlights: [
        'Percentile: 61.9 %',
      ]
    }
  ];

  const certifications = [
    {
      name: 'Amazon EC2 Basics',
      issuer: 'Amazon Web Services',
      year: '2023',
      pdf: AWS
    },
    {
      name: 'Database Programming with SQL',
      issuer: 'Oracle Academy',
      year: '2020',
      pdf: SQL
    },
    {
      name: 'Data Structures & Algorithm',
      issuer: 'Coding Ninjas',
      year: '2022',
      pdf: DSA

    },
    // {
    //   name: 'OOPS in Java',
    //   issuer: 'Great Learning',
    //   year: '2023',
    //   pdf: OOPS

    // }
  ];

  const settings = {
    dots: true, // Show navigation dots
    infinite: true, // Infinite scrolling
    speed: 500, // Transition speed
    slidesToShow: 2, // Show 2 certificates at a time
    slidesToScroll: 1, // Scroll 1 certificate at a time
    autoplay: true, // Enable auto play
    autoplaySpeed: 3000, // Time interval between slides
    adaptiveHeight: true, // Adjust the height of the carousel based on the content
    responsive: [
      {
        breakpoint: 1024, // Medium screens (like tablets)
        settings: {
          slidesToShow: 1, // Show 1 certificate at a time on medium screens
        },
      },
      {
        breakpoint: 768, // Small screens (like mobile)
        settings: {
          slidesToShow: 1, // Show 1 certificate at a time on smaller screens
        },
      },
    ],
  };

  return (
    <section id="education" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-red-500 mb-4">Education & Certifications</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            My academic background and professional certifications
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-slate-800 border border-slate-700 rounded-xl p-6 hover:border-red-500 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-600/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <GraduationCap size={24} className="text-red-500" />
                </div>
                <div className="flex-1">
                  <h3 className="mb-2">{edu.degree}</h3>
                  <p className="text-red-500 mb-2">{edu.institution}</p>
                  <p className="text-slate-400 text-sm mb-4">{edu.period}</p>
                  <p className="text-slate-300 text-sm mb-4 leading-relaxed">
                    {edu.description}
                  </p>
                  <ul className="space-y-2">
                    {edu.highlights.map((highlight, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-red-500">•</span>
                        <span className="text-slate-300 text-sm">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-red-600/10 rounded-lg flex items-center justify-center">
              <Award size={20} className="text-red-500" />
            </div>
            <h3>Professional Certifications</h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-slate-800 border border-slate-700 rounded-xl p-5 hover:border-red-500 transition-colors"
              >
                <p className="mb-2">{cert.name}</p>
                <div className="flex justify-between">
                  <p className="text-slate-400 text-sm mb-1">{cert.issuer}</p>
                  <p className="text-red-500 text-sm">{cert.year}</p>
                </div>

                <div
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl overflow-hidden mt-4"
                  style={{ height: '180px' }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <iframe
                    src={cert.pdf}
                    title={`Certificate for ${cert.name}`}
                    width="100%"
                    height="100%"
                    className="w-full h-full"
                    style={{ border: 'none' }}
                  />
                </div>
              </div>
            ))}
          </div>
          {/* <div className="p-4">
            <Slider {...settings}> 
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-gray-800 border border-gray-700 rounded-xl p-4 hover:border-red-500 transition-colors"
                >
                  <p className="text-white text-xl mb-2">{cert.name}</p>
                  <div className="flex justify-between mb-2">
                    <p className="text-slate-400 text-sm">{cert.issuer}</p>
                    <p className="text-red-500 text-sm">{cert.year}</p>
                  </div>

                  <div className="mt-4 relative" style={{ height: "calc(100% - 50px)" }}>
                    <iframe
                      src={cert.pdf}
                      title={`Certificate for ${cert.name}`}
                      width="100%"
                      height="100%"
                      className="w-full h-full"
                      style={{ border: "none" }}
                    />
                    <a
                      href={cert.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute bottom-2 left-0 right-0 text-center text-blue-500 underline"
                    >
                      View Certificate
                    </a>
                  </div>
                </div>
              ))}
            </Slider>
          </div> */}

        </div>
      </div>
    </section>
  );
}
