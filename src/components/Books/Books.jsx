import React from "react";

import icon from "../../assets/images/Vector (1).svg";
import book1 from "../../assets/images/book1.png";
import book2 from "../../assets/images/book2.png";
import book3 from "../../assets/images/book3.png";
import book4 from "../../assets/images/book4.png";

import "./books.css";

const booksList = [
  {
    id: "1",
    img: book1,
    title: "book1",
  },
  {
    id: "2",
    img: book2,
    title: "book2",
  },
  {
    id: "3",
    img: book3,
    title: "book3",
  },
  {
    id: "4",
    img: book4,
    title: "book4",
  },
  {
    id: "5",
    img: book1,
    title: "book5",
  },
  {
    id: "6",
    img: book2,
    title: "book6",
  },
  {
    id: "7",
    img: book3,
    title: "book7",
  },
  {
    id: "8",
    img: book4,
    title: "book8",
  },
  {
    id: "9",
    img: book1,
    title: "book9",
  },
];

const Books = () => {
  return (
    <section className="books">
      <span className="prev">
        <i class="ri-arrow-left-fill"></i>
      </span>
      <span className="next">
        <i class="ri-arrow-right-fill"></i>
      </span>
      <div className="books-header d-flex justify-content-between align-items-center mb-4">
        <div className="left-side">
          <a href="/">عرض المزيد</a>
        </div>
        <div className="right-side d-flex justify-content-center align-items-center gap-2">
          اصدارات جديدة
          <span className="icon">
            <img src={icon} alt="icon" />
          </span>
        </div>
      </div>
      <div className="books-container">
        {booksList.map((item) => (
          <div className="books-item" key={item.id}>
            <img src={item.img} alt={item.title} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Books;
