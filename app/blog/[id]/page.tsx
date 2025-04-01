"use client"
import { useParams } from "next/navigation";
import Image from "next/image";
import ShareButton from "@/components/ShareButton";

const blogs = [
  {
    "id": 1,
    "title": "Exploring the Sacred Ganga in Haridwar",
    "content": `
      <p>The Ganges river holds immense religious significance in Haridwar, being one of the holiest rivers in India. It is believed that bathing in its sacred waters will cleanse the soul of all sins and help in attaining salvation. The Ganga has been worshipped for thousands of years and has become an integral part of Hindu culture. In this blog, we delve into its sacredness and the many rituals performed at its ghats. The river not only holds spiritual importance but also serves as a lifeline for millions of people who rely on it for water, agriculture, and daily activities.</p><br>
      <p>Millions of pilgrims visit Haridwar every year to bathe in the Ganga and absolve themselves of sins. The river is not just a body of water; it is considered a living goddess, symbolizing purity, salvation, and divine grace. Haridwar is one of the most significant pilgrimage sites in India due to its association with the river. People from all walks of life come here with devotion, hoping to wash away their misdeeds and start anew. The experience of dipping into the Ganga’s waters is often seen as transformative and life-changing, connecting devotees to the divine forces that flow through the river.</p><br>
      <p>At Haridwar, the Ganga's journey is celebrated through various rituals, most notably the Ganga Aarti at Har Ki Pauri. This spectacular evening ceremony is a mesmerizing experience where lamps are lit and prayers are offered to the river. The sound of conch shells, bells, and chants fills the air, creating an atmosphere of deep devotion and spirituality. The Ganga Aarti is not just a ritual, but a collective expression of faith, bringing together people from around the world who are united by their love for the sacred river. Watching the flames dance in the wind as they are carried towards the river is a sight that touches the soul.</p><br>
      <p>The ghats of Haridwar are a place where people come together, connect with the divine, and experience a sense of peace and tranquility. The river’s significance transcends religion and culture, making it a place of universal appeal. It is common to see pilgrims, sadhus, and tourists alike, all gathered by the river to witness the beauty of Haridwar’s spiritual life. The ghats are also the venue for other rituals such as the cremation ceremonies, which hold deep spiritual meaning for the people of Haridwar. The experience of sitting by the river, watching the flowing water, and contemplating one’s life is an essential part of the Haridwar experience.</p>
    `,
    "image": "https://images.unsplash.com/photo-1641107699881-faab3a70b6fc?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    "id": 2,
    "title": "The History of Har Ki Pauri",
    "content": `
      <p>Har Ki Pauri is one of the most famous and revered ghats in Haridwar. Situated along the banks of the Ganges, this sacred spot is not only a place for pilgrims to bathe in the holy river but also holds a special place in Hindu mythology. According to legend, it was at this ghat that Lord Vishnu left his footprint, making it one of the most sacred locations for devotees. The Ganges, in Hindu belief, is considered to be a divine river that flows from the heavens to the earth, and Har Ki Pauri is thought to be the point where this celestial river descends to Earth. The significance of this ghat draws millions of people annually to Haridwar, seeking to wash away their sins and attain peace.</p><br>
      <p>The history of Har Ki Pauri dates back centuries. It is believed that the ghat was constructed by King Vikramaditya in memory of his brother. The place has always been a center for performing sacred rituals, especially for the departed souls. It is considered one of the holiest places to conduct rituals for ancestors, helping their souls attain peace and salvation. Over the years, it has become a vital part of the pilgrim journey, attracting people from different walks of life who come here seeking liberation (moksha). The ghat is not just a physical location but a symbol of spiritual connection to the divine.</p><br>
      <p>As the evening falls, the ghat transforms into a spiritual hub. The grand Ganga Aarti is performed, attracting hundreds of devotees who gather on the banks to offer prayers. Lamps are lit, and hymns are chanted in praise of the river goddess Ganga, filling the air with devotion and a sense of divine connection. The sight of the flames flickering in the wind, accompanied by the sound of sacred mantras, creates an atmosphere of deep spirituality. The energy at Har Ki Pauri during the aarti is unparalleled, making it an experience that resonates with the heart and soul of every visitor.</p><br>
      <p>The spiritual power of Har Ki Pauri draws people from all corners of the world. It is not just the rituals that attract visitors but the tranquil energy of the place. Whether it is the calm flow of the Ganges or the collective prayers of the people gathered there, Har Ki Pauri offers a sense of peace and solace. The ghat is a place where people come to reconnect with their faith and spirituality. The site holds immense cultural significance and is one of the most prominent pilgrimage destinations in India, where spirituality meets history in a unique and powerful way.</p>
    `,
    "image": "https://images.unsplash.com/photo-1511754863001-18d44abd0a93?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  
  {
    "id": 3,
    "title": "A Journey to Chandi Devi Temple",
    "content": `
      <p>Located atop a hill, the Chandi Devi Temple is one of the most iconic pilgrimage sites in Haridwar. The temple is dedicated to Goddess Chandi, a fierce incarnation of Goddess Durga, and is one of the five sacred tirths (pilgrimage spots) of Haridwar. Situated at an altitude of 2,900 feet above sea level, the temple offers a breathtaking panoramic view of the city of Haridwar, the sacred Ganga river, and the surrounding hills. The temple’s serene and majestic setting makes it a perfect place for spiritual reflection and prayer. Visitors are drawn to the temple not only for its spiritual significance but also for the picturesque landscape that surrounds it.</p><br>
      <p>The history of Chandi Devi Temple dates back to the 8th century, when it was established by the great philosopher and spiritual leader, Adi Shankaracharya. Over the centuries, the temple has become one of the most revered pilgrimage destinations in northern India. Devotees from all over the country travel to Haridwar to visit this sacred site and seek blessings from the goddess. The temple is situated on top of a hill, and pilgrims can reach it by foot, taking the challenging yet spiritually enriching climb up the hill. For those who prefer convenience, a cable car ride is available, providing an easier and more comfortable way to reach the temple while offering stunning views of the city and river below.</p><br>
      <p>Chandi Devi Temple sees a surge of visitors during the auspicious Navratri festival, a nine-day celebration dedicated to the worship of Goddess Durga. During this time, thousands of pilgrims flock to the temple to seek the blessings of Goddess Chandi, who is believed to grant strength, protection, and prosperity. The temple’s spiritual atmosphere is intensified during the festival, with special prayers, rituals, and ceremonies held every day. For many devotees, visiting Chandi Devi Temple during Navratri is a deeply moving and transformative experience, as they feel the presence of the goddess and the divine energy that pervades the temple.</p><br>
      <p>The temple also holds significant importance for individuals seeking strength and protection in their lives. Many devotees visit the temple to pray for the well-being of their families, to overcome personal challenges, or to find the courage to face life’s struggles. The blessings of Goddess Chandi are believed to offer solace and empowerment, helping individuals navigate difficult situations with confidence and resilience. Whether it is for spiritual growth, protection, or strength, the Chandi Devi Temple continues to be a source of inspiration and solace for all those who visit.</p>
    `,
    "image": "https://haridwarlive-storage.s3.ap-south-1.amazonaws.com/1740598569794-chandi-devi-temple-haridwar-tourism-entry-fee-timings-holidays-reviews-header.jpg"
  },
  
  {
    "id": 4,
    "title": "Exploring the Rich Culture of Haridwar",
    "content": `
      <p>Haridwar is a city that offers much more than its religious significance. It is a vibrant cultural hub where ancient traditions blend seamlessly with modern-day celebrations. The city’s culture is deeply rooted in its history, with influences from diverse communities that have lived and thrived here for centuries. Visitors to Haridwar will experience a unique cultural environment, one that is shaped by the convergence of Hindu rituals, local traditions, and cultural festivities. The city’s bustling markets, vibrant festivals, and traditional crafts provide a window into the heart of its cultural richness.</p><br>
      <p>The festivals celebrated in Haridwar are a major highlight of the city’s cultural scene. Every year, thousands of pilgrims and locals come together to celebrate various festivals, including Diwali, Holi, and Makar Sankranti. Each festival has its own distinct charm and significance, and the celebrations are marked by grand processions, music, dance, and the lighting of lamps. The Ganga Aarti held every evening at Har Ki Pauri is another example of the city’s cultural vibrancy, where devotees come together to offer prayers to the holy Ganges river, creating a mesmerizing atmosphere of devotion and festivity.</p><br>
      <p>In addition to religious festivals, Haridwar is known for its thriving arts and crafts scene. The city is home to a number of local artisans who create beautiful handicrafts, textiles, and jewelry that reflect the rich cultural heritage of the region. Visitors can explore the vibrant markets and purchase handcrafted goods, ranging from intricate brass and copper artifacts to beautifully woven fabrics and woolen shawls. These local handicrafts serve as a testament to the city’s cultural diversity and the skill of its artisans, making them perfect souvenirs for those looking to take a piece of Haridwar home.</p><br>
      <p>Haridwar’s culture is also evident in the traditional music and dance forms that are performed during festivals and cultural events. Classical music, devotional singing, and folk dances like Garba and Kathak are a regular feature of life in the city. These performances, often held at temples and public spaces, allow both locals and visitors to immerse themselves in the cultural vibrancy of Haridwar. Whether it’s a spiritual gathering or a lively cultural event, the city’s cultural scene offers something for everyone, making it a truly unique and enriching destination.</p>
    `,
    "image": "https://images.unsplash.com/photo-1724433789678-2ac769239bbb?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  
  {
    "id": 5,
    "title": "Haridwar's Famous Food: A Taste of Tradition",
    "content": `
      <p>Haridwar, a city known for its religious significance, also offers a rich food culture that is sure to satisfy any food lover. The streets of Haridwar are filled with vendors offering a variety of traditional Indian snacks and meals. From savory chaats to crispy kachoris, the city's food scene is a blend of flavors, spices, and textures that represent the culinary heritage of the region. These street foods not only offer a taste of Haridwar's culture but also provide a sensory experience that is unique to the city.</p><br>
      <p>One of the most popular snacks in Haridwar is the local chaat. This delicious dish is a combination of crispy puris filled with spicy potatoes, yogurt, and tamarind chutney, topped with various spices. The chaat vendors line the streets, offering a quick bite that locals and tourists alike can’t resist. It is the perfect snack to enjoy while strolling along the ghats or after a dip in the holy Ganges. The flavors of sweet, sour, spicy, and tangy come together in a delightful burst that leaves an unforgettable taste in your mouth.</p><br>
      <p>Another must-try dish in Haridwar is the kachori, a deep-fried pastry filled with a variety of fillings, from spicy potatoes to lentils. The kachoris are often served with tamarind chutney and are best enjoyed with a cup of hot masala chai. These crispy treats are a local favorite and are widely available at street corners and food stalls throughout the city. They make for a perfect snack during the cooler evenings when the air is filled with the aroma of freshly prepared kachoris.</p><br>
      <p>Haridwar is also famous for its sweets, particularly the pedas and the famous Ganga Jal (sweets made from milk). These treats are often made with locally sourced ingredients and have a distinct flavor that reflects the region's culinary traditions. The city's food culture is not just about the food itself; it's about the experience of enjoying these dishes in a lively and bustling environment, where food becomes a celebration of tradition and culture. Whether you're a seasoned traveler or a first-time visitor, the food in Haridwar offers a delicious way to connect with the city's heart and soul.</p>
    `,
    "image": "https://images.unsplash.com/photo-1672477179695-7276b0602fa9?q=80&w=3126&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  
  {
    "id": 6,
    "title": "Best Places to Stay in Haridwar",
    "content": `
      <p>Haridwar is not only a spiritual destination but also offers a variety of accommodation options to suit every budget. Whether you're looking for a budget-friendly stay or a luxury experience, the city has something for everyone. From guesthouses near the ghats to serene resorts nestled in the hills, Haridwar provides ample choices to make your stay comfortable and memorable.</p><br>
      <p>Here are some of the best places to stay in Haridwar:</p><br>
      <ul>
        <li><strong>Ganga Lahari:</strong> A boutique hotel offering beautiful views of the Ganges river. It is located near Har Ki Pauri and is known for its spiritual ambiance and exceptional service.</li>
        <li><strong>Hotel Ganges View:</strong> A mid-range hotel offering comfortable rooms with scenic views of the river. It's a great choice for those who want to be close to the ghats without compromising on comfort.</li>
        <li><strong>Aaram Bagh:</strong> A luxury resort located on the outskirts of Haridwar, offering a peaceful retreat with spa services, yoga sessions, and wellness facilities.</li>
        <li><strong>Hotel Krishna Sadan:</strong> A budget-friendly option offering basic amenities and a convenient location near Har Ki Pauri. Ideal for pilgrims looking for simple, no-frills accommodation.</li>
        <li><strong>Chandni Resort:</strong> A serene resort located near the Haridwar Bypass Road, providing comfortable rooms, lush gardens, and a peaceful atmosphere, perfect for families.</li>
      </ul><br>
      <p>Whether you are a pilgrim or a tourist, these accommodations in Haridwar offer the perfect blend of comfort, convenience, and spiritual tranquility. Make sure to choose one that fits your preferences and budget, and enjoy a fulfilling stay in this sacred city.</p>
    `,
    "image": "https://haridwarlive-storage.s3.ap-south-1.amazonaws.com/1740599524401-outside_goverdhan.jpg"
  },
  
  {
    "id": 7,
    "title": "A Spiritual Retreat in the Lush Greens of Haridwar",
    "content": `
      <p>Haridwar is known for its spiritual energy, but beyond the temples and ghats, the region is home to several serene retreats nestled in lush greenery. These peaceful locations offer the perfect environment for meditation, self-reflection, and rejuvenation. If you're looking to escape the hustle and bustle of daily life, these retreats in Haridwar provide a tranquil setting to connect with nature and your inner self.</p><br>
      <p>Some of the best spiritual retreats in the region include:</p><br>
      <ul>
        <li><strong>Parmarth Niketan:</strong> Located on the banks of the Ganges, Parmarth Niketan is a renowned ashram offering yoga, meditation, and spiritual learning programs. The serene surroundings, combined with the peaceful Ganga views, make it an ideal place for spiritual rejuvenation.</li>
        <li><strong>Sivananda Ashram:</strong> Situated on the outskirts of Haridwar, this ashram is perfect for those seeking a retreat that focuses on traditional yoga and Ayurveda. The lush green surroundings add to the peace and calm of the environment, making it an excellent choice for deep spiritual practices.</li>
        <li><strong>Osho Ganga Dham:</strong> Known for its peaceful atmosphere and lush greenery, this retreat offers guided meditation sessions, holistic therapies, and an opportunity to disconnect from the world. Located by the river, it's a great place to reflect and meditate in nature.</li>
        <li><strong>Vishwanath Mandir Retreat:</strong> This retreat offers a unique experience, combining meditation with Ayurvedic healing. Set in the quiet hills near Haridwar, it's a peaceful sanctuary where one can escape the city and reconnect with nature.</li>
      </ul><br>
      <p>These retreats provide an escape into nature, where one can meditate, practice yoga, and rejuvenate the body and mind. Whether you're a seasoned yogi or someone simply seeking a peaceful getaway, Haridwar's lush green retreats are perfect for anyone looking to recharge and find inner peace.</p>
    `,
    "image": "https://images.unsplash.com/photo-1563124155-dbc34ba9bedb?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  
  {
    "id": 8,
    "title": "The Temples of Haridwar: A Pilgrim’s Guide",
    "content": `
      <p>Haridwar, one of the holiest cities in India, is home to numerous sacred temples, each carrying its own unique history and spiritual significance. Pilgrims and travelers from all over the world visit these temples to seek blessings, experience the spiritual atmosphere, and connect with the divine. In this blog, we provide an overview of the most important temples and shrines in Haridwar and their spiritual relevance.</p><br>
      <p>The major temples and their significance include:</p><br>
      <ul>
        <li><strong>Har Ki Pauri:</strong> Perhaps the most famous ghat in Haridwar, Har Ki Pauri also features an ancient temple dedicated to Lord Vishnu. It is believed to be the spot where Lord Vishnu left his footprint, and the temple attracts thousands of pilgrims who come to offer prayers and seek blessings from the sacred Ganga river.</li>
        <li><strong>Chandi Devi Temple:</strong> Perched on the hilltop, this temple is dedicated to Goddess Chandi, an incarnation of Durga. The temple, built in the 8th century by Adi Shankaracharya, is one of the five pilgrimage sites known as Panch Tirths in Haridwar. The panoramic views of the city and the river from the temple make the pilgrimage experience truly special.</li>
        <li><strong>Maya Devi Temple:</strong> This ancient temple is dedicated to Goddess Maya, believed to be one of the three Shakti Peethas. The temple is associated with the legend of Sati's body parts falling at various places, with Maya Devi's temple being the location where her heart fell. It is one of the most revered spots for pilgrims seeking spiritual awakening.</li>
        <li><strong>Bhuma Niketan Temple:</strong> This serene temple, located on the outskirts of Haridwar, is dedicated to Lord Shiva. It offers a peaceful atmosphere for devotees who wish to meditate and experience the divine in solitude. Surrounded by nature, it’s an excellent spot for reflection.</li>
        <li><strong>Shri Bilkeshwar Mahadev Temple:</strong> Situated on the banks of the Ganges, this temple is dedicated to Lord Shiva. It is less crowded compared to other temples, providing a calm and spiritual atmosphere for devotees to offer prayers and experience divine serenity.</li>
      </ul><br>
      <p>These temples, along with many others in Haridwar, are not just religious places but also centers of culture, tradition, and spiritual significance. Whether you are seeking blessings, peace, or simply wish to experience the spiritual essence of Haridwar, these temples offer a glimpse into India’s rich religious history.</p>
    `,
    "image": "https://haridwarlive-storage.s3.ap-south-1.amazonaws.com/1740599885354-1690791327600-Shri-Bilkeshwar-Mahadev-Temple-Haridwar-Uttarakhand.jpg"
  },
  
  {
    "id": 9,
    "title": "Night Aarti at Har Ki Pauri",
    "content": `
      <p>One of the most mesmerizing experiences in Haridwar is the Ganga Aarti at Har Ki Pauri. Every evening, thousands of devotees gather along the banks of the sacred Ganges river to witness this beautiful and spiritual ritual. The Aarti, which involves the lighting of oil lamps and the chanting of prayers, creates an atmosphere that is both mystical and powerful. In this blog, we will take you through the evening rituals and the spiritual aura that fills the air during this divine ceremony.</p><br>
      
      <p>The Ganga Aarti at Har Ki Pauri is a spectacle of light and sound. As the sun sets, the ghats come alive with the glow of hundreds of lamps, each symbolizing the worship of Goddess Ganga. The rhythmic chanting of mantras, the sound of bells, and the waves of light combine to create an atmosphere of devotion that is truly unparalleled.</p><br>
  
      <p>Devotees believe that by participating in the Aarti, they are connecting with the divine energy of the river Ganga, which is considered to be sacred and purifying. The ceremony is not just a visual experience but also a deeply spiritual one, as the chants and the flames evoke a sense of peace and divine presence.</p><br>
  
      <p>The Aarti is performed with great precision and devotion by priests who have been performing the ritual for generations. The sequence of actions is carefully choreographed, from the waving of the lamps to the offering of flowers and the sprinkling of holy water. The entire event is accompanied by the sounds of hymns, which fill the air with a sense of divine energy.</p><br>
  
      <p>For those who visit Haridwar, attending the Ganga Aarti at Har Ki Pauri is an experience that should not be missed. It is not just a ritual, but a profound spiritual experience that touches the hearts of all who witness it. The power of the Aarti lies in its ability to unite people from all walks of life in a shared moment of devotion and connection to the divine.</p>
    `,
    "image": "https://images.unsplash.com/photo-1719948077337-40447e472c85?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  
  {
    "id": 10,
    "title": "Haridwar’s Local Markets: A Shopper’s Paradise",
    "content": `
      <p>Haridwar is not only known for its temples and ghats but also for its vibrant local markets, which offer a wide range of products that reflect the cultural richness of the city. From handicrafts to spiritual paraphernalia, the markets here provide something for every type of shopper. Whether you are looking for souvenirs, religious items, or traditional clothing, Haridwar’s markets have it all.</p><br>
  
      <p>The markets are often bustling with activity, and the narrow lanes are lined with shops selling colorful bangles, incense sticks, brass idols, and other religious artifacts. These items hold both spiritual significance and aesthetic value, making them perfect souvenirs for visitors. The markets also offer a variety of local textiles, including beautiful shawls and saris that reflect the traditional craftsmanship of the region.</p><br>
  
      <p>One of the most popular markets in Haridwar is the Bara Bazaar, where visitors can find a wide range of items, from puja essentials to handcrafted jewelry. The market is also a great place to pick up items like Rudraksha beads, which are considered to have spiritual significance. As you walk through the market, the sights and sounds of Haridwar’s culture come alive, creating a unique shopping experience.</p><br>
  
      <p>Another must-visit market in Haridwar is the Moti Bazaar, known for its vibrant stalls selling a variety of products, including brass and copper utensils, religious books, and spiritual paintings. The market is an excellent place to shop for items that can be used in your personal rituals or as gifts for friends and family back home. In addition to religious items, you will find a range of delicious local snacks and sweets that you can enjoy while exploring the market.</p><br>
  
      <p>For those looking for more traditional items, the local markets in Haridwar also offer beautiful wooden crafts, paintings, and textiles that make for great souvenirs. The colorful markets provide a unique blend of spirituality and commerce, making Haridwar a perfect destination for both pilgrims and shoppers alike. Whether you're on a spiritual journey or simply looking to take a piece of Haridwar home, the local markets are sure to provide an unforgettable shopping experience.</p>
    `,
    "image": "https://images.unsplash.com/photo-1666507856867-323a686eabd1?q=80&w=2740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  
  {
    "id": 11,
    "title": "The Ganga River: More Than Just Water",
    "content": `
      <p>The Ganga River is one of the most revered rivers in India, holding profound cultural, spiritual, and environmental significance. In Haridwar, it is not just a body of water, but a living entity that embodies purity, salvation, and life itself. The river's waters are considered sacred, and millions of people travel from all over India to bathe in its holy waters, believing it will cleanse them of sins and grant them moksha (liberation from the cycle of life and death).</p><br>
  
      <p>The Ganga’s spiritual role is intertwined with daily rituals in Haridwar. Every evening, thousands gather at the ghats to witness the Ganga Aarti, a mesmerizing ritual in which flames are offered to the river, accompanied by chants and hymns. This ritual is a display of devotion and gratitude for the river’s life-giving properties. The Ganga is not only a physical presence but also a symbol of spiritual cleansing and renewal for those who seek a deeper connection with the divine.</p><br>
  
      <p>The significance of the Ganga extends beyond spiritual practices; it plays a vital role in the lives of the people living along its banks. In Haridwar, the river is a source of livelihood for many, providing water for drinking, agriculture, and daily chores. The river is also a vital part of the ecosystem, supporting various species of plants and animals. The Ganga’s presence in Haridwar is a constant reminder of the interconnectedness of nature and spirituality.</p><br>
  
      <p>In recent years, efforts have been made to preserve the Ganga’s waters, as pollution and urbanization have posed a threat to the river’s sanctity. Government initiatives and local community efforts aim to clean and protect the river so that it continues to flow freely for future generations. The Ganga is not just a river; it is a symbol of India's deep-rooted cultural and spiritual heritage, and its preservation is essential for maintaining the connection between the people and the divine.</p><br>
  
      <p>For those visiting Haridwar, a dip in the Ganga is not merely a ritual; it is an experience that offers a sense of peace and spiritual awakening. The river’s sacredness, beauty, and significance make it a central element of Haridwar’s identity, and it continues to inspire devotion and reverence in those who visit.</p>
    `,
    "image": "https://images.unsplash.com/photo-1709078274279-12a6473bd4ab?q=80&w=3171&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
  
];

const BlogDetailPage = () => {
  
  const params = useParams(); 
  const id = params.id;
  
  const blog = blogs.find((blog) => blog.id === parseInt(id as string));

  if (!blog) {
    return <div>Blog not found.</div>;
  }

  return (
    <div className="bg-gray-100 py-20 pb-4 pt-36 min-h-screen">
      <div className="container mx-auto px-4 py-10 pt-4 max-w-3xl">
        <div className="mb-4">
          <h1 className="text-3xl mb-2 font-bold text-[#343333]">{blog.title}</h1>
          <ShareButton url={window.location.href}/>
        </div>
        <div className="mb-4">
          <Image
            src={blog.image}
            alt={blog.title}
            className="w-full object-cover"
            width={600}
            height={400}
          />
        </div>
        
        <div dangerouslySetInnerHTML={{__html: blog.content}} className="text-lg text-gray-800 mt-4" />
      </div>
    </div>
  );
};

export default BlogDetailPage;
