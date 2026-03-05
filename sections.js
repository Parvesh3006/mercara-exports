const { motion } = window.Motion;


const Hero = () => {
    return (
        <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0">
                <img 
                    src="images/unnamed.jpg" 
                    className="w-full h-full object-cover object-[110%_center]" 
                    alt="Spices and Export"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-mercara-dark/95 via-mercara-dark/80 to-mercara-dark/40"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10 pt-20">
                <div className="max-w-4xl">
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-mercara-gold/30 bg-mercara-dark/50 backdrop-blur-sm mb-6">
                            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                            <span className="text-mercara-gold text-xs font-bold tracking-widest uppercase">Premium Indian Exports</span>
                        </div>
                        
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white leading-tight mb-8">
                            Sourcing the World's <br/>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-mercara-gold to-yellow-200">Finest Commodities</span>
                        </h1>
                        
                        <p className="text-xl text-gray-300 max-w-2xl mb-10 font-light leading-relaxed">
                            MERCARA EXPORTS connects global markets with India's richest harvests. We deal in bulk wholesale of premium spices, agro products, and industrial commodities.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <a href="#products"><Button variant="primary">Explore Products</Button></a>
                            <a href="#contact"><Button variant="outline">Request Quotation</Button></a>
                        </div>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0 }} 
                        animate={{ opacity: 1 }} 
                        transition={{ delay: 0.5, duration: 1 }}
                        className="mt-16 flex items-center gap-8 border-t border-white/10 pt-8"
                    >
                        {['ISO 9001:2015', 'Govt Recognized', 'Global Shipping'].map((badge, i) => (
                            <div key={i} className="flex items-center gap-3">
                                <Icon name="CheckCircle2" className="text-mercara-gold" />
                                <span className="text-gray-400 text-sm font-medium uppercase tracking-wider">{badge}</span>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};


const About = () => {
    return (
        <section id="about" className="py-24 bg-mercara-beige">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div className="relative">
                        <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-mercara-gold"></div>
                        <img 
                            src="https://live.staticflickr.com/65535/48291066881_2be67346b4_b.jpg" 
                            alt="Warehouse Operations" 
                            className="w-full h-[500px] object-cover shadow-2xl relative z-10"
                        />
                        <div className="absolute -bottom-10 -right-10 bg-white p-8 shadow-xl z-20 hidden md:block max-w-xs">
                            <h4 className="text-4xl font-serif text-mercara-dark font-bold mb-2">15+</h4>
                            <p className="text-gray-500 uppercase text-xs tracking-widest">Years of Sourcing Experience</p>
                        </div>
                    </div>
                    
                    <div>
                        <SectionTitle 
                            title="Bridging Borders Through Quality Trade" 
                            subtitle="About Mercara Exports" 
                            centered={false} 
                        />
                        <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                            MERCARA EXPORTS acts as the dedicated international trade arm of <strong>WILLIAM & ASSOCIATES</strong>. We specialize in the consolidation and export of high-volume agro commodities.
                        </p>
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            Our strength lies in our robust network of farmers, processors, and logistics partners, allowing us to guarantee quality from the farm gate to your port of discharge. Whether you need container loads of premium cardamom or bulk shipments of rice, we ensure compliance, quality, and timely delivery.
                        </p>
                        
                        <div className="grid grid-cols-2 gap-6">
                            {window.COMPANY_DATA.stats.map((stat, i) => (
                                <div key={i} className="border-l-2 border-mercara-gold pl-4">
                                    <h5 className="text-2xl font-bold text-mercara-dark">{stat.value}</h5>
                                    <p className="text-sm text-gray-500 uppercase tracking-wide">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};


const Products = () => {
    return (
        <section id="products" className="py-24 bg-stone-50">
            <div className="container mx-auto px-6">
                <SectionTitle 
                    title="Our Product Portfolio" 
                    subtitle="Premium Indian Origins" 
                />
                
                <div className="max-w-5xl mx-auto">
                    <div className="grid grid-cols-1 gap-12 justify-center place-items-center">
                        {window.PRODUCTS_DATA.map((product) => (
                            <motion.div 
                                key={product.id}
                                whileHover={{ y: -10 }}
                                onClick={() => window.location.href = "products.html"}
                                className="bg-white shadow-xl overflow-hidden group cursor-pointer w-full max-w-xl"
                            >
                                <div className="h-80 overflow-hidden relative">
                                    <img 
                                        src={product.image} 
                                        alt={product.title} 
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-mercara-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                        <span className="text-white border border-white px-8 py-3 uppercase text-sm tracking-widest">
                                            View Details
                                        </span>
                                    </div>
                                </div>

                                <div className="p-10 text-center">
                                    <h3 className="font-serif text-3xl text-mercara-dark font-bold mb-4">
                                        {product.title}
                                    </h3>
                                    <p className="text-gray-500 text-base mb-6">
                                        {product.description}
                                    </p>

                                    <div className="flex flex-wrap gap-3 justify-center">
                                        {product.items.slice(0,4).map(item => (
                                            <span key={item} className="text-sm bg-stone-100 text-stone-600 px-3 py-1 rounded-sm">
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};


const Timeline = () => {
    return (
        <section id="process" className="py-24 bg-mercara-dark text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <SectionTitle 
                    title="Seamless Export Process" 
                    subtitle="How We Work" 
                    light={true}
                />

                <div className="mt-20">
                    <div className="hidden md:flex justify-between items-center relative">
                        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white/10 -translate-y-1/2 z-0"></div>

                        {window.PROCESS_STEPS.map((step, i) => (
                            <div key={i} className="relative z-10 flex flex-col items-center text-center w-48 group">
                                <div className="w-16 h-16 rounded-full bg-mercara-dark border-2 border-mercara-gold flex items-center justify-center mb-6 group-hover:bg-mercara-gold transition-colors duration-300">
                                    <Icon name={step.icon} className="text-white group-hover:text-mercara-dark" />
                                </div>
                                <h4 className="text-lg font-serif font-bold text-mercara-gold mb-2">{step.title}</h4>
                                <p className="text-xs text-gray-400 px-2">{step.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="md:hidden space-y-8">
                        {window.PROCESS_STEPS.map((step, i) => (
                            <div key={i} className="flex gap-6 items-start">
                                <div className="w-12 h-12 rounded-full bg-mercara-dark border border-mercara-gold shrink-0 flex items-center justify-center">
                                    <Icon name={step.icon} size={20} className="text-white" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-serif font-bold text-mercara-gold">{step.title}</h4>
                                    <p className="text-sm text-gray-400">{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};


const WhyUs = () => {
    const features = [
        { title: "Global Sourcing Network", desc: "Access to best-in-class plantations across India.", icon: "Globe" },
        { title: "Strict Quality Control", desc: "Every shipment undergoes 3-stage quality checks.", icon: "ShieldCheck" },
        { title: "Bulk Capabilities", desc: "Handling orders from 1 ton to 1000+ tons effortlessly.", icon: "Container" },
        { title: "Expert Documentation", desc: "Hassle-free customs clearance and paperwork.", icon: "FileText" }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                 <SectionTitle title="Why Partner With Us" subtitle="The Mercara Advantage" />
                 
                 <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feat, i) => (
                        <div key={i} className="p-8 border border-gray-100 hover:border-mercara-gold/30 hover:shadow-xl transition-all duration-300 bg-stone-50/50 group">
                            <Icon name={feat.icon} size={40} className="text-mercara-dark mb-6 group-hover:text-mercara-gold transition-colors" />
                            <h4 className="text-xl font-serif font-bold text-mercara-dark mb-3">{feat.title}</h4>
                            <p className="text-gray-500 text-sm leading-relaxed">{feat.desc}</p>
                        </div>
                    ))}
                 </div>
            </div>
        </section>
    );
};


const Testimonials = () => {
    return (
        <section className="py-24 bg-mercara-beige/30">
            <div className="container mx-auto px-6">
                <SectionTitle title="Trusted by Global Buyers" subtitle="Client Stories" />
                
                <div className="grid md:grid-cols-3 gap-8">
                    {window.TESTIMONIALS.map((t, i) => (
                        <div key={i} className="bg-white p-10 shadow-sm relative">
                            <Icon name="Quote" size={40} className="text-mercara-gold/20 absolute top-6 right-6" />
                            <p className="text-gray-600 italic mb-8 relative z-10">"{t.quote}"</p>
                            <div>
                                <h5 className="font-bold text-mercara-dark">{t.author}</h5>
                                <p className="text-xs text-mercara-gold uppercase tracking-wider font-bold mt-1">{t.company}</p>
                                <p className="text-xs text-gray-400 mt-1">{t.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};


const Contact = () => {

const PRODUCT_MAP = {
"Whole Spices":["Cardamom","Chilli","Black Pepper","Clove","Nutmeg","Mace","Turmeric","Turmeric Powder"],
"Ground & Processed Spices":["Moringa Powder","Psyllium Husk","Jaggery Powder"],
"Dry Fruits & Nuts":["Cashew Nuts","Groundnuts","Areca Nut"],
"Seeds & Oilseeds":["Sesame Seeds","Groundnuts (Oilseed)"],
"Edible Oils":["Coconut Oil"],
"Cereals & Millets":["Ragi","Foxtail Millet","Pearl Millet","Little Millet"],
"Pulses & Legumes":["Chickpeas","Moong","Masoor","Toor"],
"Fresh Agro Produce":["Onion","Coconut"],
"Natural Sweeteners & Condiments":["Honey","Jaggery","Tamarind"],
"Herbal & Functional Products":["Moringa Powder","Psyllium Husk"]
};

const CATEGORIES = Object.keys(PRODUCT_MAP);

// Form state
const [formData, setFormData] = React.useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    country: '',
    message: ''
});

const [productRows, setProductRows] = React.useState([{ id: 1, category: "", product: "" }]);
const [isSubmitting, setIsSubmitting] = React.useState(false);
const [submitStatus, setSubmitStatus] = React.useState(null);

const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
};

const addProductRow = () => {
    const newId = Math.max(...productRows.map(r => r.id), 0) + 1;
    setProductRows([...productRows, { id: newId, category: "", product: "" }]);
};

const removeProductRow = (id) => {
    if (productRows.length > 1) {
        setProductRows(productRows.filter(r => r.id !== id));
    }
};

const updateProductRow = (id, field, value) => {
    setProductRows(productRows.map(row => {
        if (row.id === id) {
            const updated = { ...row, [field]: value };
            if (field === "category") {
                updated.product = "";
            }
            return updated;
        }
        return row;
    }));
};

const getSelectedProducts = () => {
    return productRows.filter(r => r.category && r.product).map(r => `${r.product} (${r.category})`);
};

const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email) {
        alert("Please fill in your name and email!");
        return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus(null);

    const selectedProducts = getSelectedProducts();
    
    const adminParams = {
        from_name: formData.name,
        from_company: formData.company,
        from_email: formData.email,
        from_phone: formData.phone,
        from_country: formData.country,
        products: selectedProducts.join(", "),
        message: formData.message,
        to_email: "williamnassociates@gmail.com"
    };

    const customerParams = {
        to_name: formData.name,
        from_email: formData.email,
        from_company: formData.company,
        products: selectedProducts.join(", "),
        message: formData.message
    };

    try {
        if (!window.emailjs) {
            alert("Email service not loaded. Please refresh the page and try again.");
            setIsSubmitting(false);
            return;
        }
        
        
        const adminResponse = await window.emailjs.send(
            "service_tid4916",
            "template_tduoxha",
            adminParams
        );
        
        console.log("Admin email sent:", adminResponse);

        const customerResponse = await window.emailjs.send(
            "service_tid4916",
            "template_jzeriwe",
            customerParams
        );
        
        console.log("Customer email sent:", customerResponse);

        
        setSubmitStatus('success');
        setFormData({
            name: '',
            company: '',
            email: '',
            phone: '',
            country: '',
            message: ''
        });
        setProductRows([{ id: 1, category: "", product: "" }]);
    } catch (error) {
        console.error("EmailJS Error:", error);
        console.error("Error status:", error.status);
        console.error("Error text:", error.text);
        setSubmitStatus('error');
    } finally {
        setIsSubmitting(false);
    }
};

return (
<section id="contact" className="py-8 bg-white">
<div className="container mx-auto px-3">
<div className="bg-mercara-dark rounded-none overflow-hidden shadow-2xl flex flex-col md:flex-row">

<div className="w-full md:w-4/12 p-6 bg-mercara-green flex flex-col justify-center">
  <h3 className="text-4xl font-serif font-semibold text-white mb-4 text-center">
    Get A Quote
  </h3>
  <p className="text-lg text-gray-200 leading-relaxed text-center">
    Fill the form and our export team will contact you within 24 hours.
  </p>
</div>

<div className="w-full md:w-8/12 p-3 bg-white">
<form className="space-y-3">

<div className="grid md:grid-cols-2 gap-3">
<div>
<label className="block text-xs font-bold uppercase text-gray-500 mb-1">Your Name *</label>
<input 
    type="text" 
    name="name"
    value={formData.name}
    onChange={handleInputChange}
    required
    className="w-full border-b border-gray-300 py-1 bg-transparent focus:outline-none focus:border-mercara-gold text-sm"
/>
</div>

<div>
<label className="block text-xs font-bold uppercase text-gray-500 mb-1">Company Name</label>
<input 
    type="text" 
    name="company"
    value={formData.company}
    onChange={handleInputChange}
    className="w-full border-b border-gray-300 py-1 bg-transparent focus:outline-none focus:border-mercara-gold text-sm"
/>
</div>
</div>

<div className="grid md:grid-cols-2 gap-3">
<div>
<label className="block text-xs font-bold uppercase text-gray-500 mb-1">Email *</label>
<input 
    type="email" 
    name="email"
    value={formData.email}
    onChange={handleInputChange}
    required
    className="w-full border-b border-gray-300 py-1 bg-transparent focus:outline-none focus:border-mercara-gold text-sm"
/>
</div>

<div>
<label className="block text-xs font-bold uppercase text-gray-500 mb-1">Phone Number</label>
<input 
    type="tel" 
    name="phone"
    value={formData.phone}
    onChange={handleInputChange}
    className="w-full border-b border-gray-300 py-1 bg-transparent focus:outline-none focus:border-mercara-gold text-sm"
/>
</div>
</div>

<div>
<label className="block text-xs font-bold uppercase text-gray-500 mb-1">Country</label>
<input 
    type="text" 
    name="country"
    value={formData.country}
    onChange={handleInputChange}
    className="w-full border-b border-gray-300 py-1 bg-transparent focus:outline-none focus:border-mercara-gold text-sm"
/>
</div>

<div>
<label className="block text-xs font-bold uppercase text-gray-500 mb-2">Product Interest</label>
<div className="space-y-2">
    {productRows.map((row, index) => (
        <div key={row.id} className="flex items-center gap-2">
            <select 
                value={row.category}
                onChange={(e) => updateProductRow(row.id, "category", e.target.value)}
                className="flex-1 px-2 py-1.5 text-xs border border-gray-200 bg-stone-50 focus:outline-none focus:border-mercara-gold"
            >
                <option value="">Category</option>
                {CATEGORIES.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                ))}
            </select>
            
            <select 
                value={row.product}
                onChange={(e) => updateProductRow(row.id, "product", e.target.value)}
                disabled={!row.category}
                className="flex-1 px-2 py-1.5 text-xs border border-gray-200 bg-stone-50 focus:outline-none focus:border-mercara-gold disabled:opacity-50"
            >
                <option value="">Product</option>
                {row.category && PRODUCT_MAP[row.category]?.map(prod => (
                    <option key={prod} value={prod}>{prod}</option>
                ))}
            </select>
            
            {productRows.length > 1 && (
                <button 
                    type="button"
                    onClick={() => removeProductRow(row.id)}
                    className="w-7 h-7 flex items-center justify-center bg-red-100 text-red-600 hover:bg-red-200 rounded transition-colors text-xs"
                >
                    ✕
                </button>
            )}
        </div>
    ))}
    
    <button 
        type="button"
        onClick={addProductRow}
        className="inline-flex items-center gap-1 text-xs text-mercara-gold hover:text-mercara-dark font-medium transition-colors"
    >
        + Add Another Product
    </button>
</div>

{getSelectedProducts().length > 0 && (
    <p className="text-xs text-mercara-gold mt-1">Selected: {getSelectedProducts().join(", ")}</p>
)}
</div>

<div>
<label className="block text-xs font-bold uppercase text-gray-500 mb-1">Message / Quantity</label>
<textarea 
    name="message"
    value={formData.message}
    onChange={handleInputChange}
    rows="2" 
    className="w-full border-b border-gray-300 py-1 bg-transparent focus:outline-none focus:border-mercara-gold resize-none text-sm" 
    placeholder="Requirements..."
/>
</div>

{submitStatus === 'success' && (
    <div className="p-3 bg-green-100 text-green-700 text-sm rounded">
        Thank you! Your inquiry has been sent successfully. We will contact you within 24 hours.
    </div>
)}

{submitStatus === 'error' && (
    <div className="p-3 bg-red-100 text-red-700 text-sm rounded">
        Sorry, something went wrong. Please try again or contact us directly.
    </div>
)}

<button 
    type="button"
    onClick={handleSubmit}
    disabled={isSubmitting}
    className={`w-full justify-center mt-2 px-8 py-3 font-medium transition-all duration-300 tracking-wide text-sm flex items-center gap-2 uppercase ${isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-mercara-dark text-white hover:bg-mercara-gold border border-mercara-dark hover:border-mercara-gold'}`}
>
{isSubmitting ? 'Sending...' : 'Send Inquiry'}
</button>

</form>
</div>

</div>
</div>
</section>
);
};

// WhatsApp Floating Button Component
const WhatsAppButton = () => {
    const whatsappNumber = "+917305628193";
    const whatsappLink = `https://wa.me/${whatsappNumber.replace(/\D/g, '')}`;
    
    return (
        <a 
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 flex items-center justify-center"
            aria-label="Contact us on WhatsApp"
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
            </svg>
        </a>
    );
};
