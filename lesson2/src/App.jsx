import { useState } from 'react'
import styles from './app.module.css'
import data from './data.json'

export const App = () => {
  const [steps, setSteps] = useState(data)
  const [activeIndex, setActiveIndex] = useState(0)

  function prev() {
    if (activeIndex == 0) {
      setActiveIndex(0)
    } else {
      setActiveIndex((prev) => prev - 1)
    }
  }
  function next() {
    if (activeIndex === data.length - 1) {
      setActiveIndex(() => data.length - 1)
    } else {
      setActiveIndex((prev) => prev + 1)
    }
  }
  function reset() {
    setActiveIndex(0)
  }

  const firstStep = activeIndex === 0
  const lastStep = activeIndex === steps.length - 1

  function dinamicClass(index) {
    if (index >= 0 && index > activeIndex) {
      return styles['steps-item']
    } else if (index === activeIndex) {
      return styles['steps-item'] + ' ' + styles.done + ' ' + styles.active
    } else {
      return styles['steps-item'] + ' ' + styles.done
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1>Инструкция по готовке пельменей</h1>
        <div className={styles.steps}>
          <div className={styles['steps-content']}>{steps[activeIndex].content}</div>
          <ul className={styles['steps-list']}>
            {steps.map(({ id, title }, index) => (
              <li
                onClick={() => setActiveIndex(Number(id) - 1)}
                key={id}
                className={dinamicClass(index)}
              >
                <button className={styles['steps-item-button']}>{Number(id)}</button>
                {title}
              </li>
            ))}
          </ul>
          <div className={styles['buttons-container']}>
            <button
              onClick={prev}
              className={styles.button}
              disabled={firstStep}
            >
              Назад
            </button>
            <button
              onClick={lastStep ? reset : next}
              className={styles.button}
            >
              {lastStep ? 'Начать сначала' : 'Далее'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
