import websiteDesignImage from "../assets/images/webdesign.png";
import computerRepair from "../assets/images/repair.png";
import consultingImage from "../assets/images/consulting.png";
import trainingImage from "../assets/images/training.png";

export default function Services(){
  return (
    <section className="my-10">
      <div className="text-center p-10">
        <h3 className="text-3xl py-1">Services I offer</h3>
        <p className="text-md py-2 leading-8 text-gray-800 max-w-3xl mx-auto">
          I offer a wide range of services to help you achieve your goals. Whether you need help with website design, development, system administration, or any other type of service, I'm here to help.
        </p>
      </div>
      <div className="md:flex flex-wrap mx-auto">
        <div className="text-center flex flex-col items-center shadow-lg p-10 rounded-xl my-10 mx-auto max-w-lg bg-white">
          <img src={websiteDesignImage} width={100} height={100} className="text-center" alt="services"/>
          <h3 className="text-lg font-medium pt-8 pb-2">Web Design & Development</h3>
          <p>I'm here to help you bring your online vision to life. Whether you're looking to launch a new business, revamp your existing website, or create a unique online presence, I can help you achieve your goals.</p>
        </div>
        <div className="text-center flex flex-col items-center shadow-lg p-10 rounded-xl my-10 mx-auto max-w-lg bg-white">
          <img src={computerRepair} width={100} height={100} className="text-center rounded-md" alt="services"/>
          <h3 className="text-lg font-medium pt-8 pb-2">Computer Repair and Services</h3>
          <p>Installation, configuration, repair and services for both softwares and hardwares as per your requirement.</p>
        </div>
        <div className="text-center flex flex-col items-center shadow-lg p-10 rounded-xl my-10 mx-auto max-w-lg bg-white">
          <img src={consultingImage} width={100} height={100} className="text-center rounded-md" alt="services"/>
          <h3 className="text-lg font-medium pt-8 pb-2">Hosting & Consultation</h3>
          <p>I'm passionate about making sure your website is running smoothly, securely, and effectively. I offer a unique blend of technical expertise and strategic consulting to guide you every step of the way.</p>
        </div>
        <div className="text-center flex flex-col items-center shadow-lg p-10 rounded-xl my-10 mx-auto max-w-lg bg-white">
          <img src={trainingImage} width={100} height={100} className="text-center" alt="services"/>
          <h3 className="text-lg font-medium pt-8 pb-2">Training</h3>
          <p>I believe that strong skills in both communication, collaboration, and technology are essential for success in today's world. That's why I'm passionate about providing personalized and impactful training that empowers learners to thrive.</p>
        </div>
      </div>
    </section>
  )
}