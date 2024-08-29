export default function Header() {



  return (
       <nav className="py-10 mb-12 flex justify-between">
      <h1 className="text-xl font-burtons">Ambition</h1>
      <ul className="flex items-center">
        <li>
         
        </li>
        <li>
          <a
            href="./resume.pdf"
            className="bg-gradient-to-r from-cyan-500 to-teal-400 text-white px-4 py-2 rounded-md ml-8"
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}
