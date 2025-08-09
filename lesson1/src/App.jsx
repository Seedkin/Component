import { useState } from 'react'
import styles from './app.module.css'

function App() {
  const [value, setValue] = useState('')
  const [list, setList] = useState([])
  const [error, setError] = useState('')
  const [showError, setshowError] = useState(true)
  const [isValueVaild, setIsValueVaild] = useState(false)

  function onInputButtonClick() {
    let promptValue = prompt('Ввод значения', '')
    if (promptValue.length > 3) {
      setValue(promptValue)
      setError('')
      setshowError(!showError)
      setIsValueVaild(true)
    } else {
      setError('Введенное значение должно содержать минимум 3 символа')
      setIsValueVaild(false)
    }
  }

  function onAddButtonClick() {
    if (isValueVaild) {
      setValue('')
      setError('')
      setIsValueVaild(false)
      const updatedList = [...list, { id: Date.now(), value, time: new Date().toLocaleString() }]
      setList(updatedList)
    }
  }

  return (
    <div className={styles.app}>
      <h1 className={styles.pageHeading}>Ввод значения</h1>
      <p className={styles.noMarginText}>
        Текущее значение <code>value</code>: "<output className={styles.currentValue}>{value}</output>"
      </p>
      {error !== '' ? <div className={styles.error}>{error}</div> : showError}
      <div className={styles.buttonsContainer}>
        <button
          className={styles.button}
          onClick={onInputButtonClick}
        >
          Ввести новое
        </button>
        <button
          className={styles.button}
          disabled={!isValueVaild}
          onClick={onAddButtonClick}
        >
          Добавить в список
        </button>
      </div>
      <div className={styles.listContainer}>
        <h2 className={styles.listHeading}>Список:</h2>

        <ul className={styles.list}>
          {list.length === 0 ? (
            <p className={styles.noMarginText}>Нет добавленных элементов</p>
          ) : (
            list.map(({ id, value, time }) => (
              <li
                className={styles.listItem}
                key={id}
              >
                {value}
                <>
                  <span>{time}</span>
                </>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  )
}

export default App
