import React from 'react';

const FeatureCard = ({ feature, description }: any) => {
  return (
    <div className="bg-white p-6 rounded-lg ">
      <h3 className="text-xl font-semibold mb-2 text-black">{feature}</h3>
      <p className='text-black'>{description}</p>
    </div>
  );
};

export default FeatureCard;
