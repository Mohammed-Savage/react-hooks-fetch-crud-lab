import React, { useEffect, useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

const BaseAPI = "http://localhost:4000/questions"

function App() {
  const [page, setPage] = useState("List");

  // useEffect(() => fetch(BaseAPI)
  //   .then(response => response.json())
  //   // .then(console.log)
  //   .then(setPage)
  // , []);  

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm /> : <QuestionList />}
    </main>
  );
}

export default App;
