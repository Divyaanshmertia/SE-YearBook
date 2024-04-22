import React from 'react';
import StudentCard from './components/StudentCard';

const students = [
  { id: 1, name: 'Divyaansh Mertia', bio: 'Your Perception may not be my reality ;)', image: '/images/Divyaansh.jpeg', resume: '/resumes/Divyaansh_resume.pdf' },
  { id: 2, name: 'Abhishek Rai', bio: 'Enjoys basketball and coding', image: 'https://via.placeholder.com/150', resume: 'https://www.linkedin.com/in/divyaansh-mertia/'},
  { id: 3, name: 'Dipan Mandal', bio: 'Loves coding and photography', image: 'https://via.placeholder.com/150' },
  { id: 4, name: 'Soumen Maity', bio: 'Loves coding and photography', image: 'https://via.placeholder.com/150' },

];


function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-blue-600 text-white p-4 text-center">
        <h1>Software Engineering Class of 2024 Yearbook</h1>
      </header>
      <main className="grid grid-cols-1 md:grid-cols-2 gap-2 p-2">
        {students.map(student => (
          <StudentCard key={student.id} student={student} />
        ))}
      </main>
      <footer className="bg-blue-600 text-white p-4 text-center mt-auto">
        Made with ♥ by SE Class of'24
      </footer>
    </div>
  );
}

export default App;
