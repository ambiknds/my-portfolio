import { useState } from 'react';
export default function About(){
  const [showMore, setShowMore] = useState(false);
  const handleReadMore = () => {
    setShowMore(!showMore);
  };

  
  return (
    <section>
      <div className="text-center shadow-lg rounded-md p-5 bg-white">
        <h3 className="text-3xl py-1">About Me</h3>
        <h4  className="text-2xl py-1">A Passion for Building Seamless Digital Experiences</h4>
        <p className="text-md pt-5 leading-8 text-gray-800">
          I'm a web developer and system administrator driven by a passion for building robust and user-friendly digital experiences. My journey into the world of technology began with a fascination for how websites could connect people and businesses in meaningful ways. This fascination evolved into a deep-seated desire to understand the intricate workings of both the front-end and back-end, driving me to master a comprehensive set of skills that empower me to create impactful web solutions.
        </p>
        {showMore && (
       <>
        <p className="text-md leading-8 text-gray-800">
          My approach to web development centers around the belief that a website's success hinges on a perfect blend of aesthetics and functionality. I'm proficient in a range of front-end technologies, including HTML, CSS, and JavaScript, enabling me to craft visually appealing and engaging user interfaces. I'm equally adept at back-end development to build secure and scalable systems that power the logic behind the scenes. My understanding of databases, such as MySQL and MongoDB, allows me to efficiently manage and manipulate data, ensuring a smooth and robust user experience.
          </p>
          <p className="text-md  leading-8 text-gray-800">
          Beyond the realm of web development, my passion extends to the realm of system administration. I possess a deep understanding of system architecture, network configurations, and security protocols, enabling me to ensure the stability, security, and optimal performance of web applications and infrastructure. I'm comfortable working with various operating systems, including Linux and Windows, and I'm adept at utilizing scripting languages like Bash and Python to automate tasks and streamline processes.
            </p>
            <p className="text-md leading-8 text-gray-800">
          I believe that a successful web developer and system administrator must continuously evolve and adapt to the ever-changing landscape of technology. I'm committed to staying at the forefront of industry trends by actively seeking out new technologies, attending workshops, and engaging in online communities. This dedication to lifelong learning ensures that I can deliver cutting-edge solutions that meet the ever-evolving needs of clients.
              </p>
              <p className="text-md leading-8 text-gray-800">
          My approach to working with clients is built on collaboration, transparency, and a commitment to achieving their goals. I believe in clear communication and actively involve clients in every stage of the development process, ensuring their vision is translated into a successful digital product. I strive to create a positive and supportive working environment where everyone feels heard and valued.
                </p>
                <p className="text-md leading-8 text-gray-800">
          Whether you need a custom website, a secure web application, or a reliable system infrastructure, I'm here to help. My expertise, coupled with my passion for technology and client satisfaction, allows me to deliver solutions that exceed expectations. I'm eager to contribute my skills to collaborative teams and work on projects that make a real difference in the digital world.
                  </p>
                  <p className="text-md pb-5 leading-8 text-gray-800">
          Let's discuss your project and discover how I can help you achieve your online goals!
        </p>
      </>
      )}
        <button className="text-teal-700 font-medium hover:underline" onClick={handleReadMore}>
          {showMore ? 'Read Less' : 'Read More'}
        </button>
      </div>
    </section>
  )
}