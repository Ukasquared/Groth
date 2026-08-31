

const Navbar = () => {
  return (
    
      <header className="w-full max-w-7xl px-6 py-6 flex items-center judtify c z-50">
        <div className="flex items-center justify-between w-full
         gap-40">

          {/* Logo */}
         

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-300">
             <a
            href="#"
            className=" flex items-center gap-2 text-brand-orange font-bold text-2xl tracking-tight"
          >
            <svg
              className="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2L2 22h20L12 2zm0 4.5l6.5 13.5h-13L12 6.5z" />
            </svg>

            GROTH
          </a>

            <a
              href="#features"
              className="hover:text-white transition-colors"
            >
              Features
            </a>

            <a
              href="#pricing"
              className="hover:text-white transition-colors"
            >
              Pricing
            </a>

            <a
              href="#blog"
              className="hover:text-white transition-colors"
            >
              Blog
            </a>

            <a
              href="#contact"
              className="hover:text-white transition-colors"
            >
              Contact
            </a>
          </nav>

          <div className="flex items-center gap-4 text-sm font-medium">
          <a
            href="#login"
            className="text-gray-300 hover:text-white transition-colors hidden sm:block"
          >
            Login
          </a>

          <a
            href="#demo"
            className=" w-full sm:w-auto bg-brand-orange text-white px-6 py-3 rounded-full font-medium hover:bg-white hover:text-brand-orange transition-colors duration-300 flex items-center justify-center gap-2"
          >
            Start Growing
          </a>
        </div>
        </div>

       
      </header>
  );
};

export default Navbar;