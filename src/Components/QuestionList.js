import React from 'react'

function QuestionList({question,options,handleClick,CurrentAnswer}) {
  return (
    <div>
        <h2>{question}</h2>
        <ul>
            {options.map((options,i)=>(
             <li key={i} onClick={()=>handleClick(options)} className={CurrentAnswer === options ? "selected" : ""}>{options}</li>
            ))}
        </ul>
    </div>
  )
}

export default QuestionList