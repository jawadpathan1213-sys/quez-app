import React, { useContext, useEffect, useState } from "react";
import { computerQuestions, historyQuestions, gkQuestions, natureQuestions } from "../question/questions";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ScoreContext } from "../context/ScoreContext";
import { FaArrowLeft } from "react-icons/fa";

const Questions = () => {
  const [questions, setquestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();

  const {setResult}  = useContext(ScoreContext)
  const [value, setValue] = useState(0)
  setResult(value)

  useEffect(() => {
    if (location.pathname === "/computer") setquestions(computerQuestions);
    if (location.pathname === "/history") setquestions(historyQuestions);
    if (location.pathname === "/knowledge") setquestions(gkQuestions);
    if (location.pathname === "/nature") setquestions(natureQuestions);
  }, [location]);

  const handleNext = () => setCurrentIndex((prev) => prev + 1);

  useEffect(() => {
    if (currentIndex >= questions.length && questions.length > 0) {
      setResult(value)
      navigate("/result");
    }
  }, [currentIndex, questions, navigate, value, setResult]);

  // ✅ THIS SHOULD BE OUTSIDE useEffect
  if (questions.length === 0) return <p>Loading questions...</p>;

  const currentQuestions = questions[currentIndex];
  if (!currentQuestions) return null;

  return (
    <div className="px-[5vw] pt-3 pb-5 text-xs sm:text-base" >
      <Link to='/menu'><h1 className="text-gray-200 text-xl font-light rounded-full p-2 hover:bg-[#297d99] w-10 h-10 flex items-center "><FaArrowLeft/></h1></Link>
      <h1 className="font-semibold text-xl pt-5 text-center">Question {currentIndex} of 10</h1>

      <h1 className="bg-[#0096c7] p-3 mt-3 rounded-[10px] sm:rounded-xl h-[90px] sm:h-[100px]">
        Q{currentIndex + 1}: {currentQuestions.question}
      </h1>

      <h1 className="text-xl font-semibold text-center mt-5 mb-2">Answers</h1>

      {currentQuestions.answers.map((item, index) => (
        <li
          key={index}
          className="bg-[#0096c7] hover:bg-[#0f6785] text-white list-none text-center p-2 sm:p-5 rounded-[10px] sm:rounded-xl mb-5 cursor-pointer"
          onClick={() => {
            if (item===currentQuestions.correct) {
              setValue((prev) => prev + 1);
            }
            handleNext();
          }}
        >
          {item}
        </li>
      ))}
    </div>
  );
};

export default Questions;
