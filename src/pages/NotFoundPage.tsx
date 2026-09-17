import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export function NotFoundPage() {
  return (
    <section className="not-found page-frame">
      <span>404 / ROUTE NOT FOUND</span>
      <h1>This system is not on the map.</h1>
      <Link to="/">RETURN HOME <ArrowUpRight /></Link>
    </section>
  );
}
