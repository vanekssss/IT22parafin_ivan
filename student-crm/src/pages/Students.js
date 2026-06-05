import { useEffect, useState } from "react";
import StudentList from "../components/StudentList";

function Students() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] =
    useState(true);
  const [error, setError] = useState("");

  const API =
    "http://localhost:5000/students";

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await fetch(API);
      const data = await response.json();
      setStudents(data);
    } catch {
      setError("Помилка завантаження");
    } finally {
      setLoading(false);
    }
  };

  const deleteStudent = async (id) => {
    await fetch(`${API}/${id}`, {
      method: "DELETE",
    });

    setStudents(
      students.filter(
        (student) => student.id !== id
      )
    );
  };

  if (loading)
    return <h2>Завантаження...</h2>;

  if (error) return <h2>{error}</h2>;

  return (
    <StudentList
      students={students}
      deleteStudent={deleteStudent}
    />
  );
}

export default Students;