import { useParams } from "react-router-dom";

function StudentDetails() {
  const { id } = useParams();

  return (
    <div>
      <h2>Студент №{id}</h2>
    </div>
  );
}

export default StudentDetails;