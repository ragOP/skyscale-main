const AboutUs = () => {
    return (
        <section className="py-16 px-4 bg-gray-100">
            <div className="max-w-4xl mx-auto">
                {/* Main Title */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-black mb-8">
                        EasyAstro
                    </h1>

                    <div className="border-b-4 border-orange-500 mx-[35%] mb-8 mt-8" />

                </div>

                {/* Single Paragraph */}
                <div className="mb-8">
                    <p className="text-lg text-gray-700 leading-relaxed text-center">
                        EasyAstro is one of the most sought-after destinations for all types of astrology consultations online. Our services include Horoscope reading, Kundali matching, Calculating Shubh Tithi, Compatibility assessment, and advice on minimising risks and obstacles. You can talk, chat, and even consult online with our astrology experts. Here you will find a pool of over 500 astrologers to provide you with astrological solutions, following the planetary positions in your birth chart.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;