import { useState } from 'react';
import Image from 'next/image';
import yooli from './yooli.png';

export default function Box() {
  const [activeTab, setActiveTab] = useState('Waterloo Works');
  
  const tabs = [
    {
      id: 'AllMind',
      title: 'AllMind AI',
      content: {
        heading: "Who doesn't love ALLMind AI",
        description: "ALL Mind AI Is The Best",
        features: [
          'Create Landing Page1',
          'Create Landing Page2',
          'Create Landing Page3',
          'Create Landing Page4',
          'Create Landing Page5',
          'Create Landing Page6'
        ],
        image: yooli
      }
    },
    {
      id: 'Waterloo',
      title: 'Waterloo Works',
      content: {
        heading: "Intern Position",
        description: "Intern Position Intern Position Intern Position Intern Position",
        features: [
            'Software Engineer',
            'Biomedical Engineer',
            'Management Engineer',
            'Environmental Engineer',
            'Computer Engineer',
            'System Engineer'
        ],
        image: yooli
      }
    },
    {
      id: 'Skills',
      title: 'Technical Skills',
      content: {
        heading: "Skills to Enhance",
        description: "Technical Programming Skills",
        features: [
          'Pytorch to create Neural Networks',
          'Scikit-Learn For Machine Learning',
          'Nextjs 15 for SE development'
        ],
        image: yooli
      }
    }
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-8">How will you use ALLMIND AI?</h2>
      <div className="bg-white rounded-2xl shadow-lg p-8">
        
        <div className="flex border-b mb-6">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.title)}
              className={`px-6 py-3 font-medium transition-colors border-b-4 flex-1 text-center ${
                activeTab === tab.title 
                  ? 'border-blue-500 text-blue-700' 
                  : 'border-transparent text-gray-600 hover:text-blue-500'
              }`}
              role="tab"
              aria-selected={activeTab === tab.title}
            >
              {tab.title}
            </button>
          ))}
        </div>

        {tabs.map((tab) => (
          activeTab === tab.title && (
            <div key={tab.id} className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">{tab.content.heading}</h3>
                <p className="text-gray-600 text-lg">{tab.content.description}</p>
                <ul className="space-y-3">
                  {tab.content.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-blue-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  Learn More
                </button>
              </div>
              
              <div className="relative h-96 rounded-xl overflow-hidden">
                <Image
                  src={tab.content.image}
                  alt={tab.content.heading}
                  className="object-cover"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          )
        ))}
      </div>
    </section>
  );
}
