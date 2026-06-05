import { Link } from "react-router-dom";

function StudentCard({ student, deleteStudent }) {
  return (
    <div>
      <h3>
        {student.firstName} {student.lastName}
      </h3>

      <p>{student.group}</p>

      <Link to={`/students/${student.id}`}>
        Детальніше
      </Link>

      <button
        onClick={() =>
          deleteStudent(student.id)
        }
      >
        Видалити
      </button>
    </div>
  );
}

export default StudentCard;