import React from "react";

const ExpensesFilter = ({setYear, selectedYear}) => {
  
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div>
        <h3 style={{color:"white"}}>Filter by year</h3>
      </div>
      <div>
        <select id="years" name="years" onChange={(e)=> setYear(e.target.value)} style={{fontSize:'2rem'}}>
          <option value="2019">2019</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
