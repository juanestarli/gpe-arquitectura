import React from 'react';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const ContactPage = () => {
    return (
        <>
            <div className="pt-24"> {/* Spacing for fixed navbar */}
                <Contact />
            </div>
            <Footer />
        </>
    );
};

export default ContactPage;
