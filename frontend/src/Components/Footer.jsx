import React from "react";
import { Link } from "react-router-dom";
import { FiMapPin, FiMail, FiPhone, FiArrowRight, FiInstagram, FiLinkedin, FiFacebook, FiTwitter } from "react-icons/fi";
import logo from "./Assets/logo_tbi.png";

const Footer = () => {
  return (
    <footer className="bg-primary-500 text-white">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="IIHMF" className="h-12 w-auto brightness-0 invert" />
              <div>
                <h3 className="font-display font-bold text-lg">IIHMF</h3>
                <p className="text-xs text-white/60">MNNIT Foundation</p>
              </div>
            </div>
            <p className="text-sm text-white/70 leading-relaxed">
              An innovation and incubation hub providing resources and support for entrepreneurs and startups to develop and commercialize new products or services.
            </p>
          </div>

          {/* Get In Touch */}
          <div>
            <h3 className="font-display font-bold text-lg mb-4">
              Get In Touch
              <div className="w-8 h-0.5 bg-accent-400 mt-2 rounded-full" />
            </h3>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-2">
                <FiMapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-accent-400" />
                MNNIT Allahabad, Prayagraj (UP), India
              </li>
              <li className="flex items-center gap-2">
                <FiMail className="w-4 h-4 flex-shrink-0 text-accent-400" />
                <a href="mailto:iihmf2022@gmail.com" className="hover:text-accent-300 transition-colors">
                  iihmf2022@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FiPhone className="w-4 h-4 flex-shrink-0 text-accent-400" />
                0532-4075285
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-bold text-lg mb-4">
              Quick Links
              <div className="w-8 h-0.5 bg-accent-400 mt-2 rounded-full" />
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Events", path: "/events" },
                { name: "Portfolio", path: "/portfolio" },
                { name: "Apply for Incubation", path: "/apply-incubation" },
                { name: "Training", path: "/training" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="flex items-center gap-2 text-white/70 hover:text-accent-300 transition-colors"
                  >
                    <FiArrowRight className="w-3 h-3" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Downloads & Social */}
          <div>
            <h3 className="font-display font-bold text-lg mb-4">
              Downloads
              <div className="w-8 h-0.5 bg-accent-400 mt-2 rounded-full" />
            </h3>
            <ul className="space-y-2 text-sm mb-6">
              <li>
                <a href="#brochure" className="flex items-center gap-2 text-white/70 hover:text-accent-300 transition-colors">
                  <FiArrowRight className="w-3 h-3" />
                  Brochure
                </a>
              </li>
            </ul>

            <h3 className="font-display font-bold text-lg mb-4">
              Follow Us
              <div className="w-8 h-0.5 bg-accent-400 mt-2 rounded-full" />
            </h3>
            <div className="flex gap-3">
              {[
                { icon: FiInstagram, href: "#", label: "Instagram" },
                { icon: FiFacebook, href: "https://www.facebook.com/profile.php?id=61558843515602&mibextid=ZbWKwL", label: "Facebook" },
                { icon: FiLinkedin, href: "https://www.linkedin.com/company/innovation-and-incubation-hub-mnnit-foundation/", label: "LinkedIn" },
                { icon: FiTwitter, href: "#", label: "Twitter" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-accent-500 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} Innovation & Incubation Hub MNNIT Foundation. All rights reserved.
          </p>
          <Link to="/webteam" className="text-xs text-white/50 hover:text-accent-300 transition-colors flex items-center gap-1">
            <FiArrowRight className="w-3 h-3" />
            @Web-Team
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
