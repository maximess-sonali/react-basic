/** @format */

import React, {useState} from 'react'

import ExpenseItem from './ExpenseItem'
import ExpensesFilter from './ExpensesFilter'
import './Expenses.css'
import Card from '../UI/Card'

const Expenses=(props)=> {

  const [filteredYear, setfilteredYear]=useState("2022")

  const filterChangeHandler=(selectedYear)=>{
    setfilteredYear(selectedYear)
  }

  return (
    <div>
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
      {props.items.map((expense)=>{
        return(
          <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
        )   
      })
      }
    </Card>
    </div>
  )
}

export default Expenses
