import { AiFillLinkedin, AiFillGithub, AiFillYoutube } from "react-icons/ai";
import myImage from "../assets/images/myimage.png";

export default function Hero() {
  return (
    <section>
      <div className="text-center p-10">
        <h2 className="text-5xl py-2 text-teal-700 font-medium md:text-6xl">Ambition Kyndiah</h2>
        <h3  className="text-2xl md:text-3xl py-2">Web Developer and Sys Admin</h3>
        <p  className="text-md md:text-xl py-5 leading-8 text-gray-800">
          I'm a passionate web developer and system administrator with a knack for building robust and user-friendly web applications. I'm proficient in web technologies and system administration, and I'm always eager to learn new technologies. I have a strong understanding of system administration principles and enjoy keeping systems running smoothly and securely. I'm excited to contribute my skills to a collaborative team and work on projects that make a real difference.
        </p>
      </div>
      <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
        <a href="https://www.linkedin.com/in/ambitionkyndiah"><AiFillLinkedin /></a>
        <a href="https://github.com/ambiknds"><AiFillGithub /></a>  
        <a href="https://youtube.com/@kompiwtor"><AiFillYoutube /></a>
      </div>
      <div className="relative bg-gradient-to-b from-teal-600 rounded-full w-80 h-80 mt-10 mx-auto overflow-hidden">
        <img src={myImage} alt="profile"/>
      </div>
    </section>
  );
}
