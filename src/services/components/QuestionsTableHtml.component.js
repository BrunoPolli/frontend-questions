import React, { useEffect } from "react";

export const QuestionsTableHtml = (props) => {
  
  useEffect(()=>{
    console.log(">>> ")
  }, [])
  
  return(
    <table style={{"borderWidth": "1px", "borderColor": "#000", "borderStyle": "solid"}}>
      <thead>
        <tr>
          <td>Pergunta</td>
          <td>Iniciada em</td>
          <td>Status</td>
        </tr>
      </thead>
      <tbody>
        {props.rows.map((row) => (
          <tr key={row.id}>
            <td>{row.question}</td>
            <td>{row.startedAt}</td>
            <td>{row.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}