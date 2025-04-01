import Image from "next/image";

const CityMap = () => {
  return (
    <div className="bg-gray-100 py-20 md:pt-36 min-h-screen">
      <div className="container mx-auto px-4 py-10 pt-4 max-w-3xl">
        <div className="relative w-full">
          <div className="mb-4 flex items-center justify-center text-[#343333] text-5xl max-md:text-2xl font-bold">
            Haridwar City Map
          </div>
        </div>

        <p className="text-lg text-gray-800">
          Below is the interactive map of Haridwar. You can use it to explore the city&apos;s landmarks, streets, and other locations. Zoom in and out or drag to navigate around Haridwar. 
        </p>

        {/* Google Maps iframe */}
        <div className="my-6">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22306.039774673888!2d78.16824976287552!3d29.945682308568554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39093b0f87e5a7f3%3A0x9d4e1772a3c204a3!2sHaridwar%2C%20Uttarakhand%2C%20India!5e0!3m2!1sen!2sus!4v1617754761584!5m2!1sen!2sus"
            width="100%"
            height="450"
            frameBorder="0"
            style={{ border: "0" }}
            allowFullScreen={true}
            aria-hidden="false"
            tabIndex={0}
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default CityMap;
