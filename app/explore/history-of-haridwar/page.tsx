import Image from "next/image";

const HistoryOfHaridwar = () => {
  return (
    <div className="bg-gray-100 py-20 pt-36 min-h-screen">
      <div className="container mx-auto px-4 py-10 pt-4 max-w-3xl">
        <div className="relative w-full">
          <div className="flex items-center justify-center text-[#343333] text-5xl max-md:text-2xl font-bold">
            History of Haridwar
          </div>
        </div>

        {/* Image - Haridwar Ganga Aarti */}
        <div className="my-6">
          <Image
            src="https://images.unsplash.com/photo-1719948077508-b4b0f121ba36?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Ganga Aarti at Haridwar"
            width={800}
            height={600}
            className="rounded-lg shadow-md"
          />
        </div>

        <p className="text-lg text-gray-800">
          Haridwar, one of the seven holiest places in Hinduism, holds a rich
          history that dates back thousands of years. Known as the gateway to
          the gods, this sacred city has been a center of spiritual and cultural
          significance for centuries. Located in the northern state of
          Uttarakhand, India, Haridwar is where the holy Ganges River emerges
          from the mountains and enters the plains, symbolizing a divine
          connection between the heavens and the earth. Its name,
          &quot;Haridwar,&quot; translates to &quot;Gateway to Lord Shiva,&quot;
          reflecting its deep religious ties to Hindu mythology.
        </p>
        <p className="text-lg text-gray-800 mt-4">
          Haridwar is not only a pilgrimage destination but also a vibrant hub
          for spirituality, where people from all walks of life come to purify
          their souls. It is believed that taking a dip in the sacred Ganges at
          Haridwar can wash away sins and lead to liberation (moksha). The city
          is known for its peaceful ghats, especially Har Ki Pauri, where
          devotees gather daily to participate in the mesmerizing Ganga Aarti, a
          ritual that praises the river&apos;s sanctity and power.
        </p>
        <p className="text-lg text-gray-800 mt-4">
          Throughout history, Haridwar has attracted saints, sages, and scholars
          seeking enlightenment, contributing to its reputation as a place of
          learning and spiritual awakening. From ancient Vedic rituals to
          modern-day yoga and meditation practices, Haridwar continues to serve
          as a beacon of spiritual light for millions. The city&apos;s
          significance is amplified during major festivals such as the Kumbh
          Mela, where vast crowds gather to bathe in the G
        </p>

        {/* Ancient History */}
        <h2 className="text-xl font-semibold mt-6">Ancient History</h2>
        <p className="text-md text-gray-700 mt-2">
          Haridwar&apos;s origins trace back to the Vedic era, with mentions in
          ancient Hindu scriptures such as the Mahabharata and the Puranas. It
          is believed to be one of the most sacred places in Hinduism, revered
          for its spiritual significance. Historically, the city was known by
          several names, including “Mayapuri” and “Gangadwara,” reflecting its
          association with both the divine and the Ganges River. Mayapuri,
          meaning “City of Illusions,” points to the mythical and mystical
          nature of the city, while Gangadwara refers to its role as the point
          where the sacred Ganges River emerges from the foothills of the
          Himalayas, beginning its journey through the plains.
        </p>
        <p className="text-md text-gray-700 mt-2">
          The unique geographical location of Haridwar, where the Ganges flows
          from the mountains into the plains, has always made it a site of great
          importance for Hindu worshippers. It is believed that this is where
          the divine presence of Lord Shiva and Lord Vishnu converges, further
          enhancing its religious importance. Over centuries, Haridwar has
          served as a major center for pilgrimages, attracting millions who come
          to bathe in the holy river, seeking purification and spiritual
          salvation. The city&apos;s history is woven into the fabric of Hindu
          rituals and practices, making it one of the most revered and cherished
          sacred sites in India.
        </p>

        {/* Image - Ancient Temples */}
        <div className="my-6">
          <Image
            src="https://haridwarlive-storage.s3.ap-south-1.amazonaws.com/1740598309151-temple.jpg"
            alt="Ancient Temples in Haridwar"
            width={800}
            height={600}
            className="rounded-lg shadow-md"
          />
        </div>

        {/* Mythological Significance */}
        <h2 className="text-xl font-semibold mt-6">
          Mythological Significance
        </h2>
        <p className="text-md text-gray-700 mt-2">
          According to Hindu mythology, Haridwar is one of the four sites where
          drops of Amrit (the elixir of immortality) fell during the Samudra
          Manthan. This makes it one of the hosts of the grand Kumbh Mela,
          attracting millions of devotees.
        </p>

        {/* Image - Kumbh Mela */}
        <div className="my-6">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Third_Shahi_Snan_in_Hari_Ki_Pauri.jpg"
            alt="Kumbh Mela in Haridwar"
            width={800}
            height={600}
            className="rounded-lg shadow-md"
          />
        </div>

        {/* Medieval Era */}
        <h2 className="text-xl font-semibold mt-6">Medieval Era</h2>
        <p className="text-md text-gray-700 mt-2">
          During the medieval period, Haridwar became a significant trade and
          cultural hub. It was visited by notable travelers like Hiuen Tsang.
          The city saw influences from Mughal rulers, but its religious
          importance remained intact.
        </p>

        {/* Modern Importance */}
        <h2 className="text-xl font-semibold mt-6">Modern Importance</h2>
        <p className="text-md text-gray-700 mt-2">
          Today, Haridwar stands as a blend of tradition and modernity. It hosts
          the world-renowned Kumbh Mela, attracts pilgrims, and is an important
          center for yoga and Ayurveda. The city remains a spiritual sanctuary
          for millions.
        </p>

        {/* Image - Har Ki Pauri */}
        <div className="my-6">
          <Image
            src="https://images.unsplash.com/photo-1653392083932-d5e9e7d2ccd1?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Har Ki Pauri in Haridwar"
            width={800}
            height={600}
            className="rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default HistoryOfHaridwar;
