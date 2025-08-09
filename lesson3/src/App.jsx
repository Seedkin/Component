import { useState } from 'react'
import styles from './app.module.css'

export const App = () => {
  const [operand1, setOperand1] = useState('')
  const [operator, setOperator] = useState('')
  const [operand2, setOperand2] = useState('')
  const [result, setResulr] = useState(false)

  const NUMS = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']

  function resultOperation() {
    const op1 = Number(operand1)
    const op2 = Number(operand2)
    let result = (operator === '+' ? op1 + op2 : op1 - op2).toString()
    return result
  }

  function handleClickOperator(value) {
    switch (value) {
      case '+':
        setOperator(() => (operand1 === '' ? '' : '+'))
        setResulr(false)
        break
      case '-':
        setOperator(() => (operand1 === '' ? '' : '-'))
        setResulr(false)
        break
      case 'C':
        setOperand1('')
        setOperator('')
        setOperand2('')
        setResulr(false)
        break
      case '=':
        setResulr(true)
        setOperand1(resultOperation)
        setOperator('')
        setOperand2('')
        break
      default:
        break
    }
  }

  function numbersBtn(num) {
    if (result === false && !operator) {
      setOperand1(operand1 + num)
    } else if (result === false && operator) {
      setOperand2(operand2 + num)
    }
  }

  return (
    <div className={styles.container}>
      <div>
        <span className={result ? `${styles.result}` : ''}>{operand1 == '' ? '0' : `${operand1}${operator}${operand2}`}</span>
      </div>
      <div className={styles.buttonContainer}>
        <button
          onClick={() => handleClickOperator('C')}
          className={`${styles.button} ${styles.buttonOperation}`}
        >
          C
        </button>
        <button
          onClick={() => handleClickOperator('-')}
          className={`${styles.button} ${styles.buttonOperation}`}
        >
          -
        </button>
        <button
          onClick={() => handleClickOperator('+')}
          className={`${styles.button} ${styles.buttonOperation}`}
        >
          +
        </button>
        {NUMS.map((num) => (
          <button
            onClick={() => numbersBtn(num)}
            className={styles.button}
            key={num}
          >
            {num}
          </button>
        ))}
        <button
          onClick={() => handleClickOperator('=')}
          className={`${styles.button} ${styles.buttonOperation}`}
        >
          =
        </button>
      </div>
      <p>Version-1</p>
    </div>
  )
}
