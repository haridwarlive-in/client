import Image from "next/image";

const AboutUs = () => {
  return (
    <div className="bg-gray-100 py-20 md:pt-36 min-h-screen">
      <div className="container mx-auto px-4 py-10 pt-4 max-w-3xl">
        <div className="relative w-full">
          <div className="flex items-center justify-center text-[#343333] text-5xl max-md:text-2xl font-bold">
            About Us
          </div>
        </div>

        {/* Main Image */}
        <div className="my-6">
          <Image
            src="https://images.unsplash.com/photo-1696466093494-007a0927fc00?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Haridwar Tourism"
            width={800}
            height={600}
            className="rounded-lg shadow-md"
          />
        </div>

        <p className="text-lg text-gray-800">
          Welcome to{" "}
          <span className="bg-yellow-300 text-black">haridwarlive.in</span>,
          your ultimate guide to exploring the sacred city of Haridwar. Our
          mission is to provide up-to-date information about the city&apos;s
          famous temples, hotels, local news, and travel experiences to help
          visitors make the most of their journey.
        </p>

        {/* Our Mission */}
        <h2 className="text-xl font-semibold mt-6">Our Mission</h2>
        <ul className="text-md text-gray-700 mt-2 list-disc pl-6">
          <li>
            To offer reliable and updated information about Haridwar&apos;s rich
            cultural heritage.
          </li>
          <li>
            To help travelers find the best hotels, accommodations, and local
            experiences.
          </li>
          <li>
            To keep visitors informed about city news, events, and important
            travel updates.
          </li>
        </ul>

        {/* What We Offer */}
      <h2 className="text-xl font-semibold mt-8 text-gray-900">What We Offer</h2>
      <ul className="text-medium text-gray-700 mt-4 space-y-2">
        <li>📌 Latest News & Updates – Stay informed about what’s happening in Haridwar.</li>
        <li>🏨 Best Hotels & Stays – Find the best places to stay during your visit.</li>
        <li>🛕 Temple Guide – Explore the spiritual significance of Haridwar’s temples.</li>
        <li>✈️ Blogs & Travel Tips – Read in-depth travel guides and local experiences.</li>
        <li>🎥 Exclusive Instagram Content – Follow us for daily updates, reels, and stories.</li>
      </ul>

        {/* Instagram Community */}
        <h2 className="text-xl font-semibold mt-6">
          Join Our 200K+ Instagram Community
        </h2>
        <div className="my-6">
          <Image
            src="/instagramPage.png"
            alt="Instagram Community"
            width={800}
            height={600}
            className="rounded-lg shadow-md"
          />
        </div>
        <p className="text-md text-gray-700">
          We have built a vibrant community of over{" "}
          <strong>200,000 followers</strong> on Instagram, where we share
          breathtaking images, travel guides, and daily updates about Haridwar.
          Follow us for an immersive experience!
        </p>

        {/* Why Choose Us? */}
        <h2 className="text-xl font-semibold mt-6">Why Choose Us?</h2>
        <ul className="text-md text-gray-700 mt-2 list-disc pl-6">
          <li>Authentic and updated information from locals and experts.</li>
          <li>High-quality travel content, guides, and recommendations.</li>
          <li>
            Regular updates about cultural events, festivals, and city news.
          </li>
        </ul>

        {/* Our Achievement */}
        <h2 className="text-xl font-semibold mt-6 text-left">
          Recognized as the Best Media and Informative Page
        </h2>

        <div className="flex flex-row max-md:flex-col justify-between gap-8 items-center">
          <div className="mt-6 flex justify-center">
            <iframe
              src="https://www.instagram.com/p/DHvFmHdy5EG/embed"
              width="400"
              height="480"
              className="border border-gray-300 rounded-lg shadow-md"
              allowFullScreen
            ></iframe>
          </div>

          <div>
            <p className="text-md text-gray-700 text-left">
              We are honored to have been recognized as the{" "}
              <strong>Best Media and Informative Page</strong> in Uttarakhand!
              This prestigious award is a testament to our dedication to
              providing reliable and engaging content about Haridwar and its
              rich culture.
            </p>

            <p className="text-md text-gray-700 text-left mt-4">
              A huge thank you to our amazing Instagram community of{" "}
              <strong>200K+ followers</strong> for supporting us on this
              journey. We remain committed to bringing you the best travel
              insights, local news, and hidden gems of Haridwar!
            </p>

            <div className="flex justify-start mt-6">
              <a
                href="https://www.instagram.com/haridwarlive.in"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-yellow-300 text-black px-6 py-2 rounded-full hover:bg-yellow-300/80 transition"
              >
                Follow Us on Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
