import React from 'react';

interface SeoContentProps {
  title: string;
  description: string;
  useCases: string[];
}

function SeoContent({ title, description, useCases }: SeoContentProps) {
  return (
    <div className="mt-16 max-w-4xl mx-auto prose prose-orange">
      <h2>How to Use the {title}</h2>
      <p>{description}</p>

      <h2>Use Cases of the {title}</h2>
      <ul>
        {useCases.map((useCase, index) => (
          <li key={index}>{useCase}</li>
        ))}
      </ul>

      <h2>Frequently Asked Questions</h2>
      <h3>Are these recipes suitable for beginners?</h3>
      <p>
        Yes! Our recipes come with detailed instructions and measurements, making them accessible 
        for cooks of all skill levels.
      </p>

      <h3>Can I save the recipes I like?</h3>
      <p>
        While we don't currently have a save feature, you can bookmark the page or take screenshots 
        of recipes you'd like to try later.
      </p>

      <h3>Are the ingredients easy to find?</h3>
      <p>
        Most recipes use common ingredients available in regular grocery stores. Some international 
        dishes might require specialty ingredients that can be found in ethnic food markets.
      </p>
    </div>
  );
}

export default SeoContent;