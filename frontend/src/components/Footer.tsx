import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-custgreen py-10">
      <div className="container mx-auto flex justify-between items-center">
        <span className="text-3xl text-white font-bold tracking-tight">
          DevVoyages
        </span>
        <span className=" text-white font-bold tracking-tight flex gap-4">
          <p>
            {" "}
            Created by{" "}
            <Link
              to="https://github.com/HarshitAditya27"
              className="cursor-pointer underline"
            >
              Harshit Aditya
            </Link>
          </p>
        </span>
      </div>
    </div>
  );
};

export default Footer;
