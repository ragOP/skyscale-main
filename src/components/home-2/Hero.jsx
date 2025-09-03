import CTAButton from "../common/CTAButton";

const Hero = () => {
    return (
        <div className="pt-24 relative bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/astro-bg.webp)' }}>
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center">
                <div className="text-center text-white px-6">
                    <h1 className="text-2xl md:text-7xl font-bold mb-6">
                        Personalised Astrology Solutions
                    </h1>
                    <p className="text-3xl font-bold md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
                        Get 5 minutes free on your first consultation
                    </p>
                    <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
                        Most accurate predictions along with remedial consultation from the most trusted Astrologers in India
                    </p>
                    <CTAButton>
                        Chat with Astrologer
                    </CTAButton>
                </div>

                {/* Rotating Images Container */}
                <div className="relative w-80 h-80 md:w-96 md:h-96 mt-8">
                    {/* bg-1 - Rotating background */}
                    <img
                        src="/bg-1.png"
                        alt="Rotating Background"
                        className="w-full h-full object-contain animate-spin"
                        style={{ animationDuration: '20s' }}
                    />

                    {/* bg-2 - Centered overlay */}
                    <img
                        src="/bg-2.png"
                        alt="Center Image"
                        className="absolute top-1/2 h-24 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 object-contain"
                    />

                </div>

                <img src="hero-bg-bottom.png" alt="Hero Background Bottom"  />

            </div>
        </div>
    );
}

export default Hero;