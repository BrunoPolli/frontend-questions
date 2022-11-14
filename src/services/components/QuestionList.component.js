import React, { useState, useEffect } from "react";
import { getAllQuestions } from "../questions-http.service";
import { QuestionsTableHtml } from "./QuestionsTableHtml.component";

const QuestionList = () => {
  const [ rows, setRows ] = useState([]);

  useEffect(() => {
    getAllQuestions().then(res => {
      console.log("> ")
      setRows(res.data)
    }).catch(err => console.log("ERROR > ", err));
    
  }, []);

  return(
    <QuestionsTableHtml rows={rows} />
  );
}

export default QuestionList;