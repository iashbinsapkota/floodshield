import React, { useState } from 'react';
import { FullLayout } from '../layouts/FullLayout';

const FAQPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: 'What causes floods?',
      answer: 'Floods can be caused by heavy rainfall, overflowing rivers, storm surges, melting snow, or dam failures.'
    },
    {
      question: 'What are the different types of floods?',
      answer: 'The different types of floods include river floods, flash floods, coastal floods, and urban floods.'
    },
    {
      question: 'How can I prepare for a flood?',
      answer: 'To prepare for a flood, create an emergency plan, assemble a disaster kit, and stay informed about flood risks in your area.'
    },
    {
      question: 'What should I do if a flood warning is issued?',
      answer: 'If a flood warning is issued, follow the instructions of local authorities, evacuate if necessary, and move to higher ground.'
    },
    {
      question: 'What are the signs of an impending flood?',
      answer: 'Signs of an impending flood include heavy rainfall, rising water levels in rivers or streams, and flash flood warnings.'
    },
    {
      question: 'How do floods impact communities?',
      answer: 'Floods can cause damage to homes, infrastructure, and agriculture, disrupt transportation, and pose health risks.'
    },
    {
      question: 'What items should I include in a flood emergency kit?',
      answer: 'A flood emergency kit should include water, non-perishable food, a flashlight, batteries, a first aid kit, and important documents.'
    },
    {
      question: 'What should I do to protect my home from flood damage?',
      answer: 'To protect your home from flood damage, elevate utilities, waterproof basements, install flood barriers, seal entry points, elevate valuables, and consider flood insurance.'
    },
    {
      question: 'What are the risks of driving during a flood?',
      answer: 'Driving during a flood can be dangerous due to flooded roads, hidden obstacles, and fast-moving water. It is best to avoid driving if possible.'
    },
    {
      question: 'How can I stay safe if I get trapped in a flood?',
      answer: 'If you get trapped in a flood, seek higher ground, call for help, stay indoors if possible, avoid floodwaters, and stay informed about the situation.'
    }
  ];

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
    <FullLayout>
        {/* Content of the FAQ page */}
      </FullLayout>
      <div className="faq-container">
        <div className='FAQ-header'>
        <h1>FAQs - Floods</h1>
        </div>
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <div className={`question ${activeIndex === index ? 'active' : ''}`} onClick={() => handleClick(index)}>
              <strong>{faq.question}</strong>
            </div>
            {activeIndex === index && (
              <div className="answer">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default FAQPage;