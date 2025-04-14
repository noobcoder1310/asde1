import React, { useEffect,useState } from "react";
import { Link } from "react-router-dom";
// Adjust the path as needed
import Card from "./Card";
import axios from "axios"

function Course({ list }) {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book"); // 👈 your backend route
        setBook(res.data);
      } catch (error) {
        console.error("Error fetching books:", error.message);
      }
    };

    getBook();
  }, []);
  const filteredBooks = book.filter(
    (item) => item.category?.trim().toLowerCase() === "free"
  );

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
      <div className="mt-28 items-center justify-center text-center">
        <h1 className="text-2xl font-semibold md:text-4xl">
          We are delighted to have you{" "}
          <span className="text-pink-500">Here!</span>
        </h1>
        <p className="mt-12">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non tempore
          earum quidem minus ex magni consequatur beatae? Sapiente, temporibus
          esse, dolor eveniet, consectetur beatae neque rerum laborum eum
          nostrum ipsa.
        </p>
        <Link to="/">
          <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration">
            Back
          </button>
        </Link>
      </div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
        {filteredBooks.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Course;
