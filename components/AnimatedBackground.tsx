import React from 'react';

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10">
      <div className="absolute inset-0 bg-gradient-to-r from-black via-purple-900 to-black opacity-70" />
      <div className="absolute inset-0 animate-pulse">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900 via-indigo-900 to-purple-800 opacity-30 blur-3xl" />
      </div>
      <div className="absolute inset-0 animate-pulse animation-delay-2000">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900 via-purple-900 to-black opacity-30 blur-3xl" />
      </div>
      <div className="absolute inset-0 animate-pulse animation-delay-4000">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-purple-950 to-indigo-900 opacity-30 blur-3xl" />
      </div>
    </div>
  );
};

export default AnimatedBackground;