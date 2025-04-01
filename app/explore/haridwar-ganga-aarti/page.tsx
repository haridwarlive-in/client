import Image from "next/image";

const HaridwarGangaAarti = () => {
  return (
    <div className="bg-gray-100 py-20 pt-36 min-h-screen">
      <div className="container mx-auto px-4 py-10 pt-4 max-w-3xl">
        <div className="relative w-full">
          <div className="flex items-center justify-center text-[#343333] text-5xl max-md:text-2xl font-bold">
            Haridwar Ganga Aarti
          </div>
        </div>

        {/* Image - Ganga Aarti */}
        <div className="my-6">
          <Image
            src="https://images.unsplash.com/photo-1719948077337-40447e472c85?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Ganga Aarti at Haridwar"
            width={800}
            height={600}
            className="rounded-lg shadow-md"
          />
        </div>

        <p className="text-lg text-gray-800">
          The Ganga Aarti at Haridwar is one of the most iconic and spiritually
          significant events that take place every evening at Har Ki Pauri. This
          mesmerizing ritual is dedicated to the River Ganga, where devotees gather
          to offer prayers and express their gratitude to the goddess of the Ganges.
        </p>

        {/* Significance of Ganga Aarti */}
        <h2 className="text-xl font-semibold mt-6">Significance of Ganga Aarti</h2>
        <ul className="text-md text-gray-700 mt-2 list-disc pl-6">
          <li>The Ganga Aarti is a ceremonial ritual in which devotees offer fire, prayers, and flowers to the Ganges River.</li>
          <li>The Aarti is performed with synchronized chants, music, and the lighting of oil lamps, creating a serene and divine atmosphere.</li>
          <li>The purpose of the Aarti is to honor the river, which is considered a goddess in Hinduism and symbolizes purity and life.</li>
          <li>The spiritual energy of the Aarti is believed to purify on&apos;s soul and bring peace and blessings.</li>
        </ul>

        {/* Timing and Location */}
        <h2 className="text-xl font-semibold mt-6">Timing and Location</h2>
        <ul className="text-md text-gray-700 mt-2 list-disc pl-6">
          <li>The Ganga Aarti at Haridwar is held every evening at Har Ki Pauri, a prominent ghat on the banks of the Ganges River.</li>
          <li>The Aarti begins just before sunset and lasts for around 45 minutes to an hour.</li>
          <li>It is recommended to reach the ghat early to find a good spot for viewing and participating in the Aarti.</li>
        </ul>

        {/* Experience */}
        <h2 className="text-xl font-semibold mt-6">Experience of Ganga Aarti</h2>
        <p className="text-md text-gray-700 mt-2">
          Attending the Ganga Aarti is an unforgettable experience. The sound of
          bell chimes, the chanting of mantras, and the lighting of lamps create
          an overwhelming sense of peace and devotion. Devotees, both local and
          from all over the world, come together to offer their prayers, lighting
          earthen lamps and floating them on the river. The sight of the lamps
          floating on the water, surrounded by the flames and offerings, is
          nothing short of mesmerizing.
        </p>

        {/* Image - Devotees during Aarti */}
        <div className="my-6">
          <Image
            src="https://images.unsplash.com/photo-1653392171376-63cb323fb31e?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Devotees performing Ganga Aarti"
            width={800}
            height={600}
            className="rounded-lg shadow-md"
          />
        </div>

        {/* Best Time to Visit */}
        <h2 className="text-xl font-semibold mt-6">Best Time to Visit</h2>
        <ul className="text-md text-gray-700 mt-2 list-disc pl-6">
          <li>The best time to witness the Ganga Aarti is during the evenings, especially around sunset when the Aarti begins.</li>
          <li>It is also recommended to visit during festivals like Kumbh Mela or Maha Shivaratri when the Aarti attracts even larger crowds and is performed with much more grandeur.</li>
          <li>Winter months (October to March) are considered the best time to visit Haridwar due to the pleasant weather.</li>
        </ul>

        {/* Image - Evening at Har Ki Pauri */}
        <div className="my-6">
          <Image
            src="https://images.unsplash.com/photo-1653392098608-baafefcf9ab2?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Evening at Har Ki Pauri"
            width={800}
            height={600}
            className="rounded-lg shadow-md"
          />
        </div>

        {/* Tips for Visitors */}
        <h2 className="text-xl font-semibold mt-6">Tips for Visitors</h2>
        <ul className="text-md text-gray-700 mt-2 list-disc pl-6">
          <li>Dress modestly, as it is a sacred ritual.</li>
          <li>Carry a camera to capture the mesmerizing views, but be mindful of others during the Aarti.</li>
          <li>Arrive early to secure a good spot to view the Aarti comfortably.</li>
          <li>Be respectful of the spiritual atmosphere and the devotees around you.</li>
        </ul>
      </div>
    </div>
  );
};

export default HaridwarGangaAarti;
