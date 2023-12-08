import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const firstVideoTask = (num: number): number => {
    if (num <= 0)
      return 0
    else if (num <= 1)
      return 1
    else
      return num * firstVideoTask(num - 1)
  }
  console.log(`Factorial 10: ${firstVideoTask(10)}`)

  const secondVideoFirstTask = (x0: number, y0: number, x1: number, y1: number) => {
    return Math.hypot(x1 - x0, y1 - y0)
  }

  console.log(`Distance 1: ${secondVideoFirstTask(10, 10, 20, 20)}`)

  const secondVideoSecondTask = (x: Array<number>, y: Array<number>): number => {
    if (x.length !== y.length) {
      throw new Error("Arrays must have the same length");
    }

    return Math.hypot(...x.map((_, i) => y[i] - x[i]));
  };

  console.log(`Distance 2: ${secondVideoSecondTask([10,1,5], [20,3,15])}`)


  const thirdVideoTask = (num: number) => {
    const boundary = Math.floor(Math.sqrt(num))
    for (let i = 2; i <= boundary; i++) {
      if (num % i === 0)
        return false
    }
    return num >= 2
  }

  console.log(`Number is simple: ${thirdVideoTask(11)}`)


  const fourthVideoTask = (n: number, k: number) => {
    if (k < 0 || k > n)
      return 0
    if (k === 0 || k === n)
      return 1
    if (k === 1 || k === n - 1)
      return n
    if (n - k < k) {
      k = n - k
      let res = n
      for (let i = 2; i <= k; i++) {
        res *= (n - i + 1) / i
      }
      return Math.round(res)
    }
  }

  console.log(`Fourth video task: ${fourthVideoTask(5,3)}`)


  const fifthVideoTask = (num1: number, num2: number) => {
    return ((num1 ^ num2).toString(2).match(/1/g) || "").length
  }

  console.log(`Fifth video task: ${fifthVideoTask(33,22)}`)


  const sixthVideoTask = (...arr: number[]) => {
    const nod = (x: number, y: number): number => (!y ? x : nod(y, x % y))
    const _nok = (x: number, y: number): number => (x * y) / nod (x, y)
    return [...arr].reduce((a: number, b: number) => _nok(a, b))
  }

  console.log(`Sixth video task: ${sixthVideoTask(9,12)}`)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
