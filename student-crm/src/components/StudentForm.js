import { useState } from "react";

function StudentForm({ addStudent }) {
  const [firstName, setFirstName] =
    useState("");
  const [lastName, setLastName] =
    useState("");
  const [group, setGroup] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !firstName ||
      !lastName ||
      !group ||
      !age
    ) {
      alert("Заповніть усі поля");
      return;
    }

    addStudent({
      firstName,
      lastName,
      group,
      age,
    });

    setFirstName("");
    setLastName("");
    setGroup("");
    setAge("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Ім'я"
        value={firstName}
        onChange={(e) =>
          setFirstName(e.target.value)
        }
      />

      <input
        placeholder="Прізвище"
        value={lastName}
        onChange={(e) =>
          setLastName(e.target.value)
        }
      />

      <input
        placeholder="Група"
        value={group}
        onChange={(e) =>
          setGroup(e.target.value)
        }
      />

      <input
        placeholder="Вік"
        value={age}
        onChange={(e) =>
          setAge(e.target.value)
        }
      />

      <button type="submit">
        Додати
      </button>
    </form>
  );
}

export default StudentForm;