import { Link } from "react-router-dom";

function NotFoundScreen() {
  return (
    <div className="flex flex-col justify-center items-center   text-4xl font-semibold gap-2">
      404 Not Found
      <Link to="/">Go to Home From Link</Link>
    </div>
  );
}

export default NotFoundScreen;
