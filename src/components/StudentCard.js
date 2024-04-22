import React from 'react';

function truncateBio(bio, maxLength) {
  return bio.length > maxLength ? bio.substring(0, maxLength) + '...' : bio;
}

function StudentCard({ student }) {
  // Function to show resume / linkedin
  const openResumePDF = () => {
    window.open(student.resume, '_blank', 'noopener,noreferrer');
  };

  return (
    <div 
      className="cursor-pointer flex flex-col items-center bg-white rounded-lg border shadow-xl overflow-hidden transition duration-300 ease-in-out transform hover:scale-105 sm:flex-row sm:max-w-xl"
      onClick={openResumePDF} 
      role="button" 
      tabIndex="0" 
      onKeyDown={(event) => { if(event.key === 'Enter') openResumePDF(); }} 
    >
      <div className="flex-none bg-cover rounded-t sm:rounded-t-none sm:rounded-l text-center overflow-hidden" style={{ width: '300px', height: '400px', backgroundImage: `url('${student.image}')` }}>
        {/* The image is set as a background here */}
      </div>
      <div className="flex flex-col justify-between p-4 leading-normal w-full">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{student.name}</h5>
        <p className="mb-3 font-normal text-gray-700">{truncateBio(student.bio, 150)}</p>
      </div>
    </div>
  );
}

export default StudentCard;
