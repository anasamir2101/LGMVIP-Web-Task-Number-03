import React, { useState } from 'react';
import './index.css';

const App = () => {
  const [students, setStudents] = useState([]);
  const [studentInfo, setStudentInfo] = useState({
    name: '',
    regNumber: '',
    university: '',
    city: '',
    country: '',
    phoneNumber: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setStudents([...students, studentInfo]);
    setStudentInfo({
      name: '',
      regNumber: '',
      university: '',
      city: '',
      country: '',
      phoneNumber: '',
    });
  };

  return (
    <div>
      <div className='w-1/2 p-8 mx-auto'>
        <h1 className='text-2xl font-semibold mb-4 text-center'>
          Student Information Form
        </h1>
        <form onSubmit={handleSubmit} className='space-y-4 text-center'>
          <input
            type='text'
            placeholder='Please Enter Name'
            value={studentInfo.name}
            onChange={(e) =>
              setStudentInfo({ ...studentInfo, name: e.target.value })
            }
            className='lg:w-full  p-2 border rounded'
            required
          />
          <input
            type='text'
            placeholder='Please Enter Reg Number'
            value={studentInfo.regNumber}
            onChange={(e) =>
              setStudentInfo({ ...studentInfo, regNumber: e.target.value })
            }
            className='lg:w-full  p-2 border rounded'
            required
          />

          <input
            type='text'
            placeholder='Please Enter University'
            value={studentInfo.university}
            onChange={(e) =>
              setStudentInfo({ ...studentInfo, university: e.target.value })
            }
            className='lg:w-full  p-2 border rounded'
            required
          />
          <input
            type='text'
            placeholder='Please Enter City'
            value={studentInfo.city}
            onChange={(e) =>
              setStudentInfo({ ...studentInfo, city: e.target.value })
            }
            className='lg:w-full  p-2 border rounded'
            required
          />
          <input
            type='text'
            placeholder='Please Enter Country'
            value={studentInfo.country}
            onChange={(e) =>
              setStudentInfo({ ...studentInfo, country: e.target.value })
            }
            className='lg:w-full  p-2 border rounded'
            required
          />
          <input
            type='tel'
            placeholder='Please Enter Phone Number'
            value={studentInfo.phoneNumber}
            onChange={(e) =>
              setStudentInfo({ ...studentInfo, phoneNumber: e.target.value })
            }
            className='lg:w-full p-2 border rounded'
            required
          />

          <button
            type='submit'
            className='bg-blue-500 text-white px-4 py-2 rounded'
          >
            Submit
          </button>
        </form>
      </div>
      <div className='w-full p-8 bg-gray-100'>
        <h2 className='text-lg font-semibold mb-4 text-blue-600 text-center'>
          Students Information
        </h2>
        <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center'>
          {students.map((student, index) => (
            <li key={index} className='mb-2'>
              <h1 className='font-bold'>{student.name}</h1>
              <h3>Reg Number: {student.regNumber}</h3>
              <h3>University: {student.university}</h3>
              <h3>City: {student.city}</h3>
              <h3>Country: {student.country}</h3>
              <h3>Mobile Number: {student.phoneNumber}</h3>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
