import StudentCard from "./StudentCard";

function StudentList({
  students,
  deleteStudent,
}) {
  return (
    <>
      {students.map((student) => (
        <StudentCard
          key={student.id}
          student={student}
          deleteStudent={deleteStudent}
        />
      ))}
    </>
  );
}

export default StudentList;