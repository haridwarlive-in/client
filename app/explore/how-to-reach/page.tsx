import Image from "next/image";

const HowToReachHaridwar = () => {
  return (
    <div className="bg-gray-100 py-20 pt-36 min-h-screen">
      <div className="container mx-auto px-4 py-10 pt-4 max-w-3xl">
        <div className="relative w-full">
          <div className="flex items-center justify-center text-[#343333] text-5xl max-md:text-2xl font-bold">
            How to Reach Haridwar
          </div>
        </div>

        {/* Image - How to Reach */}
        <div className="my-6">
          <Image
            src="https://images.unsplash.com/photo-1584421667511-c3ddda390f39?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Ways to reach Haridwar"
            width={800}
            height={600}
            className="rounded-lg shadow-md"
          />
        </div>

        <p className="text-lg text-gray-800">
          Haridwar is a popular spiritual destination, and it is well connected to major cities in India by road, rail, and air. Here&apos;s a guide to help you plan your journey to Haridwar:
        </p>

        {/* By Train */}
        <h2 className="text-xl font-semibold mt-6">By Train 🚝</h2>
        <ul className="text-md text-gray-700 mt-2 list-disc pl-6">
          <li>Haridwar Junction (HW) is the main railway station in the city.</li>
          <li>Trains connect Haridwar to major cities like Delhi, Mumbai, Kolkata, and Varanasi.</li>
          <li>Popular trains: Shatabdi Express, Rajdhani Express, Haridwar-Mumbai Express.</li>
          <li>The journey offers scenic views of the countryside and the Ganges River.</li>
          <li>Taxis and auto-rickshaws are available at the station to take you to your destination.</li>
        </ul>

        {/* By Bus */}
        <h2 className="text-xl font-semibold mt-6">By Bus 🚌</h2>
        <ul className="text-md text-gray-700 mt-2 list-disc pl-6">
          <li>Haridwar is connected to nearby cities like Delhi, Dehradun, and Rishikesh by bus.</li>
          <li>The Haridwar Bus Station is the central hub for buses traveling from different parts of India.</li>
          <li>Government-operated buses (UTC) and private travel services are available.</li>
          <li>Buses from Delhi take around 6-7 hours, depending on traffic.</li>
        </ul>

        {/* By Air */}
        <h2 className="text-xl font-semibold mt-6">By Air ✈️</h2>
        <ul className="text-md text-gray-700 mt-2 list-disc pl-6">
          <li>The nearest airport is Jolly Grant Airport (DED) in Dehradun, 35 km from Haridwar.</li>
          <li>The airport is well connected to major cities like Delhi, Mumbai, and Bangalore.</li>
          <li>No direct flights to Haridwar, but Dehradun’s airport provides easy access to the city.</li>
          <li>From the airport, a taxi or bus takes about 1-1.5 hours to reach Haridwar.</li>
        </ul>

        {/* By Car */}
        <h2 className="text-xl font-semibold mt-6">By Car 🚗</h2>
        <ul className="text-md text-gray-700 mt-2 list-disc pl-6">
          <li>Haridwar is around 230 km from Delhi, with a drive time of 5-6 hours via NH58.</li>
          <li>The route offers beautiful views of the countryside and several stopover opportunities.</li>
          <li>You can hire a taxi or rent a car from nearby cities.</li>
          <li>The road network is well-maintained, providing a comfortable travel experience.</li>
        </ul>
      </div>
    </div>
  );
};

export default HowToReachHaridwar;
