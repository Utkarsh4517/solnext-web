import React from 'react';

const FeatureCard = ({ feature, description }: any) => {
  return (
    <div className="bg-white/20 p-6 rounded-lg backdrop-blur-md">
      <h3 className="text-xl font-semibold mb-2">{feature}</h3>
      <p>{description}</p>
    </div>
  );
};

export default FeatureCard;
