import { Link } from "react-router-dom";

export default function Error() {
  return (
    <section className="text-white flex flex-col items-center justify-center text-center h-screen">
      <h1>Error! The request resource could not be found</h1>
      <Link to="/" className="btn">
        &larr; Back to Home Page
      </Link>
    </section>
  );
}
