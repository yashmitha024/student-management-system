import Button from './Button';
export default function StudentTable({ students, onDelete }) { 
  // Show a helpful message instead of an empty table when there are no records. 
  if (students.length === 0) 
    return ( 
      <p className="empty-state"> 
        No students yet. Add your first student to get started. 
      </p> 
    ); 
 
  return ( 
    <div className="table-wrap"> 
      <table> 
        <thead> 
          <tr> 
            <th>Name</th> 
            <th>Email</th> 
            <th>Course</th> 
            <th>Year</th> 
            <th>Actions</th> 
          </tr> 
        </thead> 
        <tbody> 
          {students.map((student) => ( 
            <tr key={student.id}> 
              <td>{student.name}</td> 
              <td>{student.email}</td> 
              <td>{student.course}</td> 
              <td>{student.year}</td> 
              <td className="actions"> 
                <Button
  text="Edit"
  color="orange"
  onClick={() => onEdit(student)}
/>

<Button
  text="Delete"
  color="red"
  onClick={() => onDelete(student.id)}
/>
              </td> 
            </tr> 
          ))} 
        </tbody> 
      </table> 
    </div> 
  ); 
} 