import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AboutHaridwar() {
  return (
    <main className="text-[#343333]">
      {/* Hero Section */}
      <section className="relative h-[80vh]">
        <Image
          src="https://images.unsplash.com/photo-1591783178925-3b400090387d?q=80&w=3025&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Haridwar Ghat"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0"
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80" />
        <div className="relative px-6 md:px-20 h-full flex flex-col justify-center text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold text-yellow-300 mb-4">About Haridwar</h1>
          <p className="text-lg text-white/90 md:max-w-2xl">
            Explore the history, spiritual significance, and cultural heritage of Haridwar – the Gateway to the Gods.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold border-l-4 border-yellow-400 pl-4 mb-8">History & Significance</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg leading-relaxed">
                Haridwar, meaning “Gateway to God,” is one of the seven holiest cities in Hinduism. It is where the Ganges River emerges from the Himalayas, attracting pilgrims for centuries. The city is famous for the Kumbh Mela, a spiritual gathering held every 12 years. Haridwar has long been a center of religious and spiritual activity, where rituals such as the Ganga Aarti and the immersion of ashes take place on the ghats of the river, offering devotees a chance to purify their souls.
              </p>
              <br></br>
              <p className="text-lg leading-relaxed">
                The significance of Haridwar extends beyond religious importance; it is a cultural hub where centuries-old traditions are upheld. The city also boasts a rich history, with its roots tracing back to ancient times when it was known as “Haridwar” in the sacred texts of the Vedas. It is believed that Lord Shiva and Lord Vishnu visited the region, adding to its divine reputation. Today, Haridwar continues to inspire millions, making it an enduring symbol of faith and devotion.
              </p>
            </div>
            <Image
              src="https://images.unsplash.com/photo-1728060428780-9f89ed391b71?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Ganga Aarti at Haridwar"
              width={1000}
              height={500}
              className="rounded-lg"
              unoptimized
            />
          </div>
          <div className="mt-12">
            
          </div>
        </div>
      </section>


      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold border-l-4 border-yellow-400 pl-4">Tourism in Haridwar</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="">
            <p className="text-lg leading-relaxed">
              Haridwar is a captivating blend of spirituality, culture, and natural beauty, making it a must-visit destination for travelers from around the world. The city ghats, such as Har Ki Pauri, are perfect spots for a peaceful experience, where visitors can witness the mesmerizing Ganga Aarti during the evening. The sight of thousands of devotees praying alongside the river creates an atmosphere of serenity that draws countless visitors each day.
            </p>
            <p className="text-lg leading-relaxed mt-6">
              Apart from the spiritual sites, Haridwar is also famous for its scenic surroundings. Visitors can enjoy tranquil moments at places like the Rajaji National Park, known for its diverse wildlife and serene natural beauty. The park offers trekking, wildlife safari experiences, and a chance to explore the beauty of the Shivalik Hills. 
            </p>
            <p className="text-lg leading-relaxed mt-6">
              The city is also home to several ancient temples, such as Mansa Devi Temple and Chandi Devi Temple, both perched on hilltops, providing panoramic views of the city. For those seeking adventure, Haridwar offers options for white-water rafting in the nearby areas of Rishikesh, as well as hiking opportunities in the surrounding hills. 
            </p>
          </div>
            
            <Image
              src="https://images.unsplash.com/photo-1660791601875-cc61b489e7fe?q=80&w=2837&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Har Ki Pauri in Haridwar"
              width={500}
              height={200}
              className="rounded-lg"
              unoptimized
            />
          </div>
          
        </div>
      </section>


      {/* 10 Interesting Facts */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold border-l-4 border-yellow-400 pl-4 mb-8">10 Interesting Facts</h2>
          <ul className="list-disc text-lg pl-8 space-y-4">
            <li>Haridwar is one of the four sites of the Kumbh Mela, which sees millions of devotees.</li>
            <li>The city is home to one of India’s oldest Ayurveda and Yoga institutions, Patanjali Yogpeeth.</li>
            <li>It is believed that drops of Amrit (nectar of immortality) fell in Haridwar, making it sacred.</li>
            <li>Haridwar hosts a grand Ganga Aarti every evening at Har Ki Pauri.</li>
            <li>The Chandi Devi Temple is accessible via a cable car ride.</li>
            <li>It is a vegetarian city by law.</li>
            <li>The city has some of the purest Ganges water, making it ideal for religious rituals.</li>
            <li>The Daksha Mahadev Temple is associated with a legend of Goddess Sati.</li>
            <li>Rajaji National Park, near Haridwar, is a great place for wildlife enthusiasts.</li>
            <li>Several ashrams in Haridwar offer spiritual learning and yoga programs.</li>
          </ul>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 text-center">
        <h2 className="text-4xl font-bold text-[#343333] mb-4">Plan Your Visit</h2>
        <p className="text-lg text-[#343333] mb-8">Explore the spiritual city of Haridwar and immerse yourself in its divine aura.</p>
        <Button asChild className="bg-yellow-300 text-[#343333] px-6 py-3 text-lg font-medium rounded-full shadow-lg hover:shadow-xl hover:text-yellow-300 transition-all duration-300">
          <Link href="/contact">Get in Touch <ChevronRight className="ml-2 h-5 w-5" /></Link>
        </Button>
      </section>
    </main>
  );
}