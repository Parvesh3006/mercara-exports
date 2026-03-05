
const App = () => {

    React.useEffect(() => {
        if (window.lucide) window.lucide.createIcons();
    }, []);

    return (
        <React.Fragment>
            <Navbar />
            <main>
                <Hero />
                <WhyUs />
                <About />
                <Products />
                <Timeline />
                <Testimonials />
                <Contact />
            </main>
            <Footer />
            
            {/* Scroll To Top Button */}
            <a href="#" className="fixed bottom-8 right-8 z-40 bg-mercara-gold text-white p-3 rounded-full shadow-lg hover:bg-mercara-dark transition-colors">
                <Icon name="ArrowUp" size={20} />
            </a>
            
            {/* WhatsApp Button */}
            <WhatsAppButton />
        </React.Fragment>
    );
};


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
