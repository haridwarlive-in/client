import Image from "next/image";

const KawadYatra = () => {
  return (
    <div className="bg-gray-100 py-20 md:pt-36 min-h-screen">
      <div className="container mx-auto px-4 py-10 pt-4 max-w-3xl">
        <div className="relative w-full">
          <div className="flex items-center justify-center text-[#343333] text-5xl max-md:text-2xl font-bold">
            Kawad Yatra
          </div>
        </div>

        {/* Image - Kawad Yatra */}
        <div className="my-6">
          <Image
            src="https://hindupost.in/wp-content/uploads/2017/07/kanwar-yatra-1.jpg"
            alt="Kawad Yatra"
            width={800}
            height={600}
            className="rounded-lg shadow-md"
          />
        </div>

        <p className="text-lg text-gray-800">
          The Kawad Yatra is one of the largest religious pilgrimages in India, undertaken by devotees of Lord Shiva. During this annual event, thousands of pilgrims, known as Kanwariyas, travel to Haridwar, Gaumukh, or other holy places to collect water from the Ganges, which is then carried back to their local Shiva temples for offering. This sacred journey takes place every year during the Hindu month of Shravan (July-August).
        </p>

        {/* Significance of Kawad Yatra */}
        <h2 className="text-xl font-semibold mt-6">Significance of Kawad Yatra</h2>
        <ul className="text-md text-gray-700 mt-2 list-disc pl-6">
          <li>The Kawad Yatra is considered a form of penance and devotion to Lord Shiva, symbolizing purity, dedication, and sacrifice.</li>
          <li>Devotees carry the &quot;Kawad&quot; (a wooden structure with water pots) on their shoulders, which is believed to carry the blessings of Lord Shiva.</li>
          <li>The Yatra is a spiritual journey that fosters community bonding and deepens the faith of the participants.</li>
          <li>It is believed that the water collected from the holy river Ganga has the power to cleanse the devotees of their sins and bring them closer to Lord Shiva.</li>
        </ul>

        {/* Timing and Route */}
        <h2 className="text-xl font-semibold mt-6">Timing and Route</h2>
        <ul className="text-md text-gray-700 mt-2 list-disc pl-6">
          <li>The Kawad Yatra takes place every year during the month of Shravan (typically July to August), with the peak of the Yatra occurring during the first month of Shravan.</li>
          <li>Pilgrims start their journey from various regions, including Delhi, Haryana, and Rajasthan, traveling to Haridwar, Gaumukh, and other important pilgrimage sites.</li>
          <li>The route is often a long and arduous one, with devotees walking barefoot for hundreds of kilometers, making the journey a spiritual and physically demanding experience.</li>
        </ul>

        {/* Experience of Kawad Yatra */}
        <h2 className="text-xl font-semibold mt-6">Experience of Kawad Yatra</h2>
        <p className="text-md text-gray-700 mt-2">
          The Kawad Yatra is not just a physical journey but also a spiritual experience. During the Yatra, Kanwariyas sing devotional songs, chant mantras, and offer prayers to Lord Shiva. The sight of thousands of devotees walking together in devotion, with their Kawads on their shoulders, creates an awe-inspiring atmosphere. The energy of the Yatra is contagious, and it strengthens the faith of everyone involved.
        </p>

        <div className="my-6">
          <Image
            src="https://files.prokerala.com/news/photos/imgs/1200/kanwarias-in-haridwar-during-kanwar-yatra-on-july-85259.jpg"
            alt="Kanwariyas during Kawad Yatra"
            width={800}
            height={600}
            className="rounded-lg shadow-md"
          />
        </div>

        {/* Key Rituals */}
        <h2 className="text-xl font-semibold mt-6">Key Rituals During Kawad Yatra</h2>
        <ul className="text-md text-gray-700 mt-2 list-disc pl-6">
          <li>Collecting Holy Water: The main ritual of the Kawad Yatra is the collection of holy water from the river Ganges at Haridwar, which is then carried to the devotee&apos;s local Shiva temple.</li>
          <li>Bathing in the Ganges: Many devotees bathe in the holy river to purify themselves before taking the water back to their hometowns.</li>
          <li>Chanting of Mantras: Devotees continuously chant Lord Shiva’s mantras like &quot;Om Namah Shivaya&quot; during the journey, enhancing the spiritual aura of the event.</li>
          <li>Offering Water to Lord Shiva: The final ritual is the offering of the holy water collected during the journey to the Shiva temples in the devotee’s hometown, symbolizing a prayer for blessings.</li>
        </ul>


        {/* Tips for Participants */}
        <h2 className="text-xl font-semibold mt-6">Tips for Participants</h2>
        <ul className="text-md text-gray-700 mt-2 list-disc pl-6">
          <li>Prepare physically: The Yatra involves walking long distances, often under harsh conditions. Be sure to wear comfortable shoes and carry adequate water and snacks.</li>
          <li>Travel in groups: It’s safer and more enjoyable to travel in groups with fellow pilgrims.</li>
          <li>Stay hydrated: The journey can be exhausting, especially during the hot summer months. Make sure to stay hydrated throughout the pilgrimage.</li>
          <li>Be respectful of the traditions: The Kawad Yatra is a deeply spiritual event, and showing respect for the rituals and the people involved is essential.</li>
        </ul>
      </div>
    </div>
  );
};

export default KawadYatra;
