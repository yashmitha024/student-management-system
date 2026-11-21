import { useEffect, useState } from 'react'; 
import Navbar from './components/Navbar'; 
import HomePage from './pages/HomePage'; 
import StudentsPage from './pages/StudentsPage'; 
import StudentFormPage from './pages/StudentFormPage'; 
import './App.css'; 
 
// This is the name used to save our student list in the browser. 
const STORAGE_KEY = 'student-management-students'; 
 
function App() { 
  // Read saved students when the app starts. If there are none, use an empty list. 
  const [students, setStudents] = useState(() => { 
    const savedStudents = localStorage.getItem(STORAGE_KEY);
      return savedStudents ? JSON.parse(savedStudents) : []; 
  }); 
 
  // Keep the browser's saved copy in sync whenever the list changes. 
  useEffect(() => { 
    localStorage.setItem(STORAGE_KEY, JSON.stringify(students)); 
  }, [students]); 
 
  // The URL path tells us which simple page to display. 
  const path = window.location.pathname; 
  const editMatch = path.match(/^\/edit\/([^/]+)$/); 
  const studentToEdit = editMatch 
    ? students.find((student) => student.id === editMatch[1]) 
    : null; 
 
  // Add a unique id, save the new list, then show the students page. 
  function addStudent(studentDetails) { 
    const updatedStudents = [ 
      ...students, 
      { ...studentDetails, id: Date.now().toString() }, 
    ]; 
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedStudents)); 
    setStudents(updatedStudents); 
    window.location.href = '/students'; 
    console.log('add students data:', updateStudents);
  } 
 
  // Replace the matching student while keeping the rest of the list. 
  function updateStudent(updatedStudent) { 
    const updatedStudents = students.map((student) => 
      student.id === updatedStudent.id ? updatedStudent : student, 
    ); 
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedStudents)); 
    setStudents(updatedStudents); 
    window.location.href = '/students'; 
    
  } 
 
  // Ask for confirmation, then make a new list without the deleted student. 
  function deleteStudent(id) { 
    if (window.confirm('Delete this student?')) { 
      setStudents(students.filter((student) => student.id !== id)); 
    } 
  } 
 
  // Choose a page based on the current URL. 
  let page; 
  if (path === '/students') { 
    page = <StudentsPage students={students} onDelete={deleteStudent} />; 
  } else if (path === '/add-student') { 
    page = <StudentFormPage onSave={addStudent} />; 
  } else if (editMatch && studentToEdit) { 
    page = <StudentFormPage student={studentToEdit} onSave={updateStudent} />; 
  } else { 
    page = <HomePage studentCount={students.length} />; 
  } 
  console.log('students data:',students);
 
  // The navbar is shared by every page; the selected page appears below it. 
  return ( 
    <> 
      <Navbar /> 
      {page} 
    </> 
  ); 
} 
 
export default App;