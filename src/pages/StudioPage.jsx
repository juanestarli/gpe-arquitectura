import React from 'react';
import Studio from '../components/Studio';
import Footer from '../components/Footer';

const StudioPage = () => {
    return (
        <>
            <div className="pt-24"> {/* Spacing for fixed navbar */}
                <Studio />
            </div>
            <Footer />
        </>
    );
};

export default StudioPage;
