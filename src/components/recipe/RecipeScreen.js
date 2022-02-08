import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useForm } from "../hooks/useForm";

export const RecipeScreen = () => {
  const { _id } = useParams();
  const navigate = useNavigate();

  const [recipes, setRecipes] = useState(null);
  const [comments, setComments] = useState(null);
  const [myComment, setMyComment] = useState(null);

  const [formValues, handleInputChange, reset] = useForm({
    author: "",
    comment: "",
  });

  const { author, comment } = formValues;

  const [msgError, setMsgError] = useState(null);

  const newComment = {
    author: author,
    comment: comment,
    recipe_id: _id,
  };

  const postData = () => {
    axios
      .post("https://recipes-api-carlos.herokuapp.com/api/comments", newComment)
      .then((response) => {
        console.log(response);
        reset();
        setMyComment({
          author: author,
          comment: comment,
        });
      })
      .catch((error) => console.log(error));
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      postData();
    }
  };

  const isFormValid = () => {
    if (author.trim().length === 0) {
      setMsgError("Name is required");
      return false;
    } else if (comment.trim().length === 0) {
      setMsgError("Write a comment");
      return false;
    }
    setMsgError(null);
    return true;
  };
  useEffect(() => {
    axios
      .get("https://recipes-api-carlos.herokuapp.com/api/recipes/")
      .then((response) =>
        setRecipes(response.data.recipes.filter((res) => res._id === _id))
      );
  }, [_id]);

  useEffect(() => {
    axios
      .get(`https://recipes-api-carlos.herokuapp.com/api/comments/${_id}`)
      .then((response) => {
        setComments(response.data.comments);
      });
  }, [_id]);

  const handleReturn = () => {
    navigate(-1);
  };

  if (!recipes || !comments) {
    return null;
  }

  return (
    <>
      <div className="font-sans antialiased text-gray-900 leading-normal tracking-wider bg-cover ">
        <div className="max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto my-32 lg:my-0 ">
          <div
            id="profile"
            className="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 mx-6 lg:mx-0"
          >
            <div className="p-4 md:p-12 text-center lg:text-left">
              <h1 className="text-3xl font-bold pt-8 lg:pt-0">
                {recipes[0].title}
              </h1>
              <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>
              <p className="pt-2 text-base font-bold flex items-center justify-center lg:justify-start text-green-600">
                {recipes[0].category}
              </p>
              <p className="pt-2 text-gray-600 text-xs lg:text-sm flex items-center justify-center lg:justify-start">
                Description: {recipes[0].description}
              </p>
              <p className="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">
                Ingredients:
              </p>
              <p className="pt-1 text-sm">{recipes[0].ingredients}</p>
              <p className="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">
                Process:
              </p>
              <p className="pt-1 text-sm">{recipes[0].process}</p>
              <div className="pt-12 pb-8">
                <button
                  className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded-full"
                  onClick={handleReturn}
                >
                  Go back
                </button>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-2/5">
            <img
              src={recipes[0].image}
              alt={recipes[0].title}
              className="rounded-none lg:rounded-lg shadow-2xl lg:block"
            />
          </div>
          <div className="max-w-4xl flex items-center h-auto lg:h-screen mx-auto my-32">
            <div className="w-full lg:w-5/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 mx-6 lg:mx-0">
              <div className="p-4 md:p-12 text-center lg:text-left">
                <h1 className="text-3xl font-bold pt-1 lg:pt-4">Comments</h1>
                <div className="p-4 md:p-12 text-center lg:text-left">
                  <form onSubmit={handleRegister}>
                    <input
                      className="border-gray-300 mb-4 w-96 border-solid border rounded py-2 px-4"
                      type="text"
                      placeholder="Name"
                      name="author"
                      value={author}
                      onChange={handleInputChange}
                    />
                    <input
                      className="border-gray-300 mb-4 w-96 border-solid border rounded py-2 px-4"
                      type="text"
                      placeholder="Write a comment"
                      name="comment"
                      value={comment}
                      onChange={handleInputChange}
                    />
                    {msgError && (
                      <div className="bg-red-700 text-white flex justify-center">
                        {msgError}
                      </div>
                    )}

                    <div className="pt-4 pb-8 pl-3">
                      <button
                        className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded-full"
                        type="submit"
                      >
                        Save
                      </button>
                    </div>
                  </form>
                </div>
                <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>
                {myComment && (
                  <div className="">
                    <h2>{myComment.author}</h2>
                    <h2>{myComment.comment}</h2>
                    <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>
                  </div>
                )}
                {comments.length === 0
                  ? !myComment && (
                      <div className="justify-center">
                        <h2>No comments yet</h2>
                      </div>
                    )
                  : comments.map((comment) => (
                      <div key={comment._id} className="">
                        <h2>{comment.author}</h2>
                        <h2>{comment.comment}</h2>
                        <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>
                      </div>
                    ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
