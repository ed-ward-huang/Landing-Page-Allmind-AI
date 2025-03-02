import Image from "next/image";
import yooli from "./yooli.png";

export default function Cases() {
  const caseStudies = [
    {
      partner: "Allmind",
      title: "Creating a new generation of AI",
      description: "understanding impact of aiunderstanding impact of aiunderstanding impact of aiunderstanding impact of aiunderstanding impact of aiunderstanding impact of aiunderstanding impact of aiunderstanding impact of aiunderstanding impact of aiunderstanding impact of aiunderstanding impact of aiunderstanding impact of ai",
      tags: ["Company", "Waterloo", "UofWaterloo"],
    },
    {
      partner: "University of Waterloo",
      title: "Interns",
      description: "to the future to the futureto the futureto the futureto the futureto the futureto the futureto the futureto the futureto the futureto the futureto the futureto the futureto the futureto the futureto the futureto the futureto the futureto the future",
      tags: ["Creation of Sales", "Yoodli Replica"],
    },
    {
      partner: "Waterloo Works",
      title: "AI and Neural Networks",
      description: "Challenges to improve coding abilities, this exercise serves to help Unveil why blah blah  why blah blah  why blah blah  why blah blah  why blah blah  why blah blah  why blah blah  why blah blah  why blah blah  why blah blah  why blah blah  why blah blah  why blah blah  why blah blah ",
      tags: ["Intern in training", "Preparing to help!", "Improve skills"],
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 mt-40 mb-16">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold">Check out our case studies</h2>
        <button className="text-blue-600 hover:text-blue-800 font-medium">
          See all &gt;
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {caseStudies.map((study, index) => (
          <div
            key={index}
            className="relative bg-white rounded-xl shadow-lg hover:shadow-blue-500/50 transition-all duration-300 hover:-translate-y-2 group"
          >
            <div className="w-full h-40 relative">
              <Image
                src={yooli}
                alt="Yoodli AI"
                className="object-cover rounded-t-xl"
                fill
              />
            </div>

            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {study.partner}
              </h3>

              <h4 className="text-xl font-bold mb-2">{study.title}</h4>
              <p className="text-gray-600 mb-4">{study.description}</p>

              <div className="flex flex-wrap gap-2">
                {study.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
