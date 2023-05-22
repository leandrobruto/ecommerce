import { Link } from "react-router-dom";
import { Container } from "./styles";
import { FaArrowLeft } from 'react-icons/fa';

export default function SuccessPage() {
  return (
    <Container>
      <div id="error-page">
        <h1>Congratulations!</h1>
        <p>Successful purchase.</p>
        <p>
          ;D
        </p>
      </div>
      <div>
      <button>
        <Link to="/">Back to Home</Link>
        <FaArrowLeft />
      </button>
      </div>
    </Container>
  );
}