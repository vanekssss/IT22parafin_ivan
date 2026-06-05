import StudentForm from "../components/StudentForm";

function AddStudent() {
  const API =
    "http://localhost:5000/students";

  const addStudent = async (student) => {
    await fetch(API, {
      method: "POST",
      headers: {
        "Content-Type":
          "application/json",
      },
      body: JSON.stringify(student),
    });
  };

  return (
    <StudentForm addStudent={addStudent} />
  );
}

export default AddStudent;