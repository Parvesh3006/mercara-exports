const { motion } = window.Motion;
const { useState, useEffect } = React;


const Icon = ({ name, size = 24, className = "" }) => {



    
    useEffect(() => {
        if (window.lucide) window.lucide.createIcons();
    });

    return <i data-lucide={name} width={size} height={size} className={className}></i>;
};


const Button = ({ children, variant = "primary", className = "", onClick, type="button" }) => {
    const baseStyle = "px-8 py-3 rounded-none font-medium transition-all duration-300 tracking-wide text-sm flex items-center gap-2 uppercase";
    const variants = {
        primary: "bg-mercara-gold text-white hover:bg-white hover:text-mercara-dark border border-mercara-gold",
        outline: "border border-white text-white hover:bg-white hover:text-mercara-dark",
        dark: "bg-mercara-dark text-white hover:bg-mercara-gold border border-mercara-dark hover:border-mercara-gold"
    };

    return (
        <button type={type} onClick={onClick} className={`${baseStyle} ${variants[variant]} ${className}`}>
            {children}
        </button>
    );
};


const SectionTitle = ({ title, subtitle, centered = true, light = false }) => {
    return (
        <div className={`mb-16 ${centered ? 'text-center' : 'text-left'}`}>
            <span className={`text-mercara-gold font-bold tracking-[0.2em] text-xs uppercase mb-3 block`}>
                {subtitle}
            </span>
            <h2 className={`font-serif text-3xl md:text-5xl ${light ? 'text-white' : 'text-mercara-dark'}`}>
                {title}
            </h2>
            <div className={`h-1 w-20 bg-mercara-gold mt-6 ${centered ? 'mx-auto' : ''}`}></div>
        </div>
    );
};


const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "index.html" },
        { name: "About", href: "index.html#about" },
        { name: "Products", href: "products.html" },
        { name: "Process", href: "index.html#process" },
        { name: "Contact", href: "index.html#contact" },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'glass-dark py-4 shadow-xl' : 'bg-transparent py-6'}`}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                {/* Logo */}
                <div className="flex items-center gap-3">
                    <img src="images/MERCARA_EXPORTS_LOGO.png" alt="MERCARA Exports Logo" className="h-12 w-auto" />
                    <div className="flex flex-col">
                        <h1 className={`font-serif text-2xl md:text-3xl font-bold tracking-tight ${scrolled ? 'text-white' : 'text-white'}`}>
                            MERCARA <span className="text-mercara-gold">EXPORTS</span>
                        </h1>
                        <span className="text-[0.6rem] text-gray-400 tracking-widest uppercase hidden md:block">Division of William & Associates</span>
                    </div>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <a 
                            key={link.name} 
                            href={link.href} 
                            className={`text-sm font-medium tracking-wide hover:text-mercara-gold transition-colors ${scrolled ? 'text-gray-200' : 'text-white'}`}
                        >
                            {link.name}
                        </a>
                    ))}
                    <a href="#contact">
                        <Button variant={scrolled ? "primary" : "outline"} className="!py-2 !px-6 text-xs">
                            Get Quote
                        </Button>
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button className="md:hidden text-white" onClick={() => setMobileOpen(!mobileOpen)}>
                    <Icon name={mobileOpen ? "X" : "Menu"} />
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileOpen && (
                <div className="absolute top-full left-0 w-full bg-mercara-dark border-t border-white/10 p-6 flex flex-col gap-4 shadow-2xl">
                    {navLinks.map((link) => (
                        <a 
                            key={link.name} 
                            href={link.href} 
                            className="text-white text-lg font-serif"
                            onClick={() => setMobileOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
            )}
        </nav>
    );
};


const Footer = () => {
    return (
<footer className="bg-mercara-dark text-white pt-20 pb-10 border-t border-mercara-gold/20">
    <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

            {/* Brand */}
            <div>
                <h2 className="font-serif text-2xl font-bold mb-4">
                    MERCARA <span className="text-mercara-gold">EXPORTS</span>
                </h2>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    Delivering the finest agro products and spices from the heart of India to the world.
                    A symbol of trust, quality, and commitment.
                </p>

                <div className="flex gap-4">
                    {[
                        { name: 'Linkedin', href: '#' },
                        { name: 'Facebook', href: 'https://www.facebook.com/share/1CEYxRMNwq/?mibextid=wwXIfr' },
                        { name: 'Instagram', href: 'https://www.instagram.com/mercara_exports?igsh=MTdscGI5d2Z4ZWNmcw%3D%3D&utm_source=qr' }
                    ].map(social => (
                        <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:border-mercara-gold hover:text-mercara-gold transition-colors">
                            <Icon name={social.name} size={18} />
                        </a>
                    ))}
                </div>
            </div>

            {/* Quick Links */}
            <div>
                <h3 className="text-mercara-gold font-bold uppercase tracking-widest text-sm mb-6">Explore</h3>
                <ul className="space-y-3 text-sm text-gray-300">
                    <li><a href="index.html#about" className="hover:text-mercara-gold transition-colors">About Us</a></li>
                    <li><a href="products.html" className="hover:text-mercara-gold transition-colors">Our Products</a></li>
                    <li><a href="index.html#process" className="hover:text-mercara-gold transition-colors">Export Process</a></li>
                    <li><a href="#" className="hover:text-mercara-gold transition-colors">Sustainability</a></li>
                    <li><a href="index.html#contact" className="hover:text-mercara-gold transition-colors">Contact</a></li>
                </ul>
            </div>

            {/* Contact */}
            <div>
                <h3 className="text-mercara-gold font-bold uppercase tracking-widest text-sm mb-6">Contact</h3>
                <ul className="space-y-4 text-sm text-gray-300">
                    <li className="flex gap-3">
                        <Icon name="MapPin" className="text-mercara-gold shrink-0" />
                        <a href={window.COMPANY_DATA.mapsLink} target="_blank" rel="noopener noreferrer" className="hover:text-mercara-gold transition-colors">
                            {window.COMPANY_DATA.address}
                        </a>
                    </li>
                    <li className="flex gap-3">
                        <Icon name="Phone" className="text-mercara-gold shrink-0" />
                        <span>{window.COMPANY_DATA.mobile}</span>
                    </li>
                    <li className="flex gap-3">
                        <Icon name="Mail" className="text-mercara-gold shrink-0" />
                        <span>{window.COMPANY_DATA.email}</span>
                    </li>
                </ul>
            </div>

            {/* Accreditations */}
            <div>
                <h3 className="text-mercara-gold font-bold uppercase tracking-widest text-sm mb-6">
                    Accreditations
                </h3>

                <div className="grid grid-cols-3 gap-4">
  {[
    { name: "FSSAI", src: "https://static.vecteezy.com/system/resources/previews/019/040/294/large_2x/fssai-icon-logo-symbol-free-vector.jpg" },
    { name: "APEDA", src: "https://tse3.mm.bing.net/th/id/OIP.59WNQ2ZRGhaPZLRVtzREvAHaHa?w=600&h=600&rs=1&pid=ImgDetMain&o=7&rm=3" },
    { name: "ISO", src: "https://cdn.vectorstock.com/i/1000v/31/20/iso-certification-logo-vector-48123120.jpg" },
    { name: "Spices Board", src: "https://www.indianspices.com/sites/default/files/new%20logo.jpg" },
    { name: "DGFT (IEC)", src: "https://th.bing.com/th/id/R.8838507f75ab963e97251543337d3a3b?rik=hkUXxkIZ9wAplQ&riu=http%3a%2f%2fwwepcindia.com%2fwp-content%2fuploads%2f2025%2f03%2fdigital-signature-dgft.png&ehk=7qTkbCHM4MxuTyr3vIRkeAloEioSiws3gs466wyJ4Rg%3d&risl=&pid=ImgRaw&r=0" },
    { name: "MSME", src: "https://tse4.mm.bing.net/th/id/OIP.p-lcXxBnz9faqXFp1dKmeAHaEK?rs=1&pid=ImgDetMain&o=7&rm=3" }
  ].map(cert => (
    <div
      key={cert.name}
      className="aspect-square bg-white border border-white/10 overflow-hidden flex items-center justify-center hover:shadow-lg hover:scale-105 transition-all duration-300"
    >
      <img
        src={cert.src}
        alt={cert.name}
        className="w-full h-full object-contain p-4 grayscale hover:grayscale-0 transition duration-300"
      />
    </div>
  ))}
</div>
            </div>
        </div>

        {/* LEGAL SECTION */}
        <div className="border-t border-gray-800 pt-10 mt-10 text-xs text-gray-500 leading-relaxed font-sans">
            <div className="grid md:grid-cols-2 gap-8">
                <div>
                    <p className="mb-4">
                        <strong>MERCARA EXPORTS</strong> operates as the bulk wholesale export division of <strong>WILLIAM & ASSOCIATES</strong>,
                        a registered Indian merchant exporter engaged in international trade of agro products, spices, and related commodities.
                    </p>
                    <p>
                        We function primarily as a merchant exporter and bulk supplier, sourcing, consolidating,
                        and exporting high-quality products to global markets.
                    </p>
                </div>

                <div>
                    <p className="mb-2">
                        All official export documentation, customs filings, commercial invoices, and banking transactions are issued under:
                    </p>
                    <div className="bg-gray-900/50 p-4 border border-gray-800 rounded mt-2">
                        <h4 className="text-gray-300 font-bold mb-1">WILLIAM & ASSOCIATES</h4>
                        <p>GSTIN: <span className="text-gray-400">{window.COMPANY_DATA.gstin}</span></p>
                        <p>IEC: <span className="text-gray-400">{window.COMPANY_DATA.iec}</span></p>
                        <p>Mobile: <span className="text-gray-400">{window.COMPANY_DATA.mobile}</span></p>
                    </div>
                </div>
            </div>

            <div className="mt-8 text-center border-t border-gray-800 pt-8">
                &copy; {new Date().getFullYear()} WILLIAM & ASSOCIATES. All Rights Reserved.
            </div>
        </div>
    </div>
</footer>
);
};
