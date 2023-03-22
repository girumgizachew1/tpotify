import React from 'react';

const Loader: React.FC<{title?: string}> = ({ title }) => (
  <div className="flex flex-col items-center justify-center h-screen">
    <div className="flex justify-center items-center space-x-2 animate-pulse text-white">
      <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v.01M6.47 6.88l-.708-.708M17.53 6.88l.708-.708M4 12h.01M20 12h-.01M6.47 17.12l-.708.708M17.53 17.12l.708.708M12 20v-.01" />
      </svg>
      <h1 className="font-bold text-2xl">{title || 'Loading'}</h1>
    </div>
  </div>
);

export {Loader};
