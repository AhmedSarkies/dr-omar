import React from "react";

import photos from "../../assets/images/photos.svg";
import articles from "../../assets/images/articles.svg";
import books from "../../assets/images/books.svg";
import audio from "../../assets/images/audio.svg";

import "./category.css";

const categoryList = [
  {
    id: "1",
    img: photos,
    title: "صور",
  },
  {
    id: "2",
    img: articles,
    title: "مقالات",
  },
  {
    id: "3",
    img: books,
    title: "كتب",
  },
  {
    id: "4",
    img: audio,
    title: "صوتيات",
  },
];

const Category = () => {
  return (
    <div>
      <div className="category">
        {categoryList.map((item) => (
          <div className="category-item" key={item.id}>
            <img src={item.img} alt={item.title} />
            <h6>{item.title}</h6>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
