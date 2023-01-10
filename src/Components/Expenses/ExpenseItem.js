import { useState } from "react";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  
  const [title, setTitle]  = useState(props.title);
  const changeTitleHandler = () =>{
    if(title === "updated!!"){
      console.log("title")
      setTitle(props.title)
    }
    else{
      setTitle("updated!!")
    }
  }
  return (
    <Card className="expense-item">
      <div><ExpenseDate date={props.date}/></div>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
      <button onClick={changeTitleHandler}>change title</button>
    </Card>
  );
};

export default ExpenseItem;
