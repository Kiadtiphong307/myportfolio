import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="pl-20 p-10">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-gray-300 hover:text-white text-2xl">Kiadtiphong</Link>
        <ul className="flex ml-auto space-x-20">
          <li>
            <Link href="#about" className="text-gray-300 hover:text-white">
              About
            </Link>
          </li>
          <li>
            <Link href="#skills" className="text-gray-300 hover:text-white">
              Skills
            </Link>
          </li>
          <li>
            <Link href="#experience" className="text-gray-300 hover:text-white">
              Experience
            </Link>
          </li>
          <li>
            <Link href="#contact" className="text-gray-300 hover:text-white">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
