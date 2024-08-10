import React from 'react';

const FeatureCard = ({ feature, description }: any) => {
  return (
    <div className="bg-black p-6 rounded-lg ">
      <h3 className="text-xl font-semibold mb-2">{feature}</h3>
      <p>{description}</p>
    </div>
  );
};

export default FeatureCard;
