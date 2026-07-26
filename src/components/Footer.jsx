import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mt-24 border-t border-amber-400/20 bg-gradient-to-b from-[#08122d] to-[#030711] text-white">
      <div className="mx-auto max-w-7xl px-6 py-12">

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">

          <div>
            <h2 className="text-2xl font-bold text-amber-400">
              🕉 Manoj Vedic Astro
            </h2>

            <p className="mt-4 text-slate-300 leading-7">
              27+ वर्षों के अनुभव के साथ वैदिक ज्योतिष, कुंडली,
              वास्तु एवं धार्मिक अनुष्ठानों की विश्वसनीय सेवाएँ।
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-xl font-semibold text-amber-300">
              Quick Links
            </h3>

            <ul className="space-y-3 text-slate-300">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/astrology">Astrology</Link></li>
              <li><Link to="/numerology">Numerology</Link></li>
              <li><Link to="/rashifal">Rashifal</Link></li>
              <li><Link to="/report">Reports</Link></li>
              <li><Link to="/poojan">Poojan</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xl font-semibold text-amber-300">
              Services
            </h3>

            <ul className="space-y-3 text-slate-300">
              <li>Astrology</li>
              <li>Handwritten kundli </li>
              <li>Numerology</li>
              <li>Rudrabhishek</li>
              <li>Vastu Consultation</li>
              <li>Pooja Path</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xl font-semibold text-amber-300">
              Contact
            </h3>

            <div className="space-y-3 text-slate-300">
              <p>📞 <a href="tel:+91 88825 32259">Call Now</a></p>
              <p>📧 <a href="mailto:manojshastriastrologer45@gmail.com?subject=Astrology%20Consultation%20Inquiry&body=Hello%2C%0A%0AI%20would%20like%20to%20know%20more%20about%20your%20astrology%20services.%20Please%20share%20details%20regarding%20consultations%2C%20kundali%20analysis%2C%20and%20pricing.%0A%0AThank%20you.">Gmail</a></p>
              <p>📍<a href="https://maps.app.goo.gl/aCPczyQgJWPnFoKE8?g_st=aw">Google Maps →</a></p>

              <a
                href="https://wa.me/918882532259"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block rounded-full bg-green-600 px-5 py-3 font-semibold transition hover:bg-green-500"
              >
                WhatsApp Now
              </a>
            </div>
          </div>

        </div>

        <div className="my-8 h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>

        <div className="flex flex-col items-center justify-center gap-4 text-center text-sm text-slate-400 md:flex-row">
          <p>© 2026 Manoj Vedic Astro. All Rights Reserved.</p>
                </div>

      </div>
    </footer>
  );
};

export default Footer;