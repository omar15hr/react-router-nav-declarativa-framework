import { Link } from "react-router";

const TestingPage = () => {
  return (
    <div>
      <h1>Testing Page</h1>
      <Link to="/auth/login" className="text-blue-500 underline">Go Back</Link>
    </div>
  );
};

export default TestingPage;