'use client';

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-40 backdrop-blur-md bg-black/20 border-b border-[#4BC7BD]/20">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-black bg-gradient-to-r from-[#4BC7BD] to-[#7DD3C0] bg-clip-text text-transparent cursor-pointer hover:scale-105 transition-transform">
          AE
        </div>
        <div className="hidden md:flex space-x-2">
          {['Home', 'About', 'Education', 'Projects', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="nav-pill text-gray-300 font-medium cursor-pointer px-4 py-2 rounded-full transition-all duration-300 hover:text-white"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;



