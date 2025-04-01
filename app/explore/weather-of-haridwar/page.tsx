import Image from "next/image";

const WeatherOfHaridwar = () => {
  return (
    <div className="bg-gray-100 py-20 md:pt-36 min-h-screen">
      <div className="container mx-auto px-4 py-10 pt-4 max-w-3xl">
        <div className="relative w-full">
          <div className="flex items-center justify-center text-[#343333] text-5xl max-md:text-2xl font-bold">
            Weather of Haridwar
          </div>
        </div>

        {/* Image - Weather */}
        <div className="my-6">
          <Image
            src="https://images.unsplash.com/photo-1511754863001-18d44abd0a93?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Weather in Haridwar"
            width={800}
            height={600}
            className="rounded-lg shadow-md"
          />
        </div>

        <p className="text-lg text-gray-800">
          Haridwar experiences a varied climate, influenced by its location in the foothills of the Himalayas. The weather is classified as a subtropical climate, with hot summers, a monsoon season, and cool winters. The city’s proximity to the Ganges River and the surrounding mountains contributes to its unique weather patterns.
        </p>

        {/* Summer */}
        <h2 className="text-xl font-semibold mt-6">
          Summer ☀️
        </h2>
        <p className="text-md text-gray-700 mt-2">
          The summer season in Haridwar lasts from March to June. During this time, the city experiences hot and dry weather, with temperatures often reaching up to 40°C (104°F). The days can be quite warm, but the evenings tend to cool down, providing some respite. Despite the heat, many visitors still come to Haridwar to witness the Ganga Aarti and other spiritual activities, as the weather is generally dry with very little rain.
        </p>
        <p className="text-md text-gray-700 mt-2">
          It is advisable for travelers to wear light and comfortable clothing and stay hydrated when visiting during the summer months. The riverside atmosphere near the Ganges also offers a slight breeze that can make the heat more bearable.
        </p>

        

        {/* Monsoon */}
        <h2 className="text-xl font-semibold mt-6">Monsoon 🌧️</h2>
        <p className="text-md text-gray-700 mt-2">
          The monsoon season in Haridwar starts in July and continues until September. During this time, the city experiences heavy rainfall, which contributes to the lush green landscapes surrounding the region. The Ganges River swells with water, making it a sight to behold. Temperatures during the monsoon range from 25°C (77°F) to 35°C (95°F), but the humidity levels increase significantly.
        </p>
        <p className="text-md text-gray-700 mt-2">
          While the rains bring relief from the summer heat, they also cause occasional flooding in low-lying areas. It is advisable for travelers to check the weather forecast and prepare for possible delays due to the rain.
        </p>

        

        {/* Winter */}
        <h2 className="text-xl font-semibold mt-6">Winter ❄️</h2>
        <p className="text-md text-gray-700 mt-2">
          Winter in Haridwar lasts from November to February, with temperatures ranging from 5°C (41°F) to 20°C (68°F). The weather is cool and comfortable, making it the ideal time for spiritual activities. The days are pleasant, and the nights can get chilly, especially in the month of December and January. During this time, Haridwar attracts a large number of pilgrims who come to take a holy dip in the Ganges.
        </p>
        <p className="text-md text-gray-700 mt-2">
          The cool weather, combined with the serene atmosphere of the ghats, makes winter an excellent time to visit Haridwar. Travelers should bring warm clothing if they plan to visit during the peak winter months.
        </p>

        

      </div>
    </div>
  );
};

export default WeatherOfHaridwar;
