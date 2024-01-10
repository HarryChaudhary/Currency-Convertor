import { useEffect, useState } from 'react'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import './App.css'

function App() {
  const [from, setFrom] = useState('usd')
  const [to, setTo] = useState('npr')
  const [amount, setAmount] = useState('')
  const [convertedAmount, setConvertedAmount] = useState('')
  const currency = useCurrencyInfo(from)
  const options = Object.keys(currency)

  const onSwipe = () => {
    setFrom(to)
    setTo(from)
    setAmount(convertedAmount)
    setConvertedAmount(amount)
  }

  useEffect(() => {
    setConvertedAmount(Number(amount * currency[to]).toFixed(2))
  }, [amount, currency, to])

  return (
    <>
      <h1>Currency Convertor</h1>
      <form onSubmit={e => { e.preventDefault() }}>
        <InputBox label='From' currencyOptions={options} selectCurrency={from} onCurrencyChange={(from) => setFrom(from)} amount={amount} onAmountChange={(amount) => { setAmount(amount) }} />
        <InputBox label='To' currencyOptions={options} selectCurrency={to} amount={convertedAmount} onCurrencyChange={(to) => setTo(to)} amountDisbled />

        <button type='button' onClick={onSwipe}>Swap Currency</button>
        <p>Converting Currency <strong> {from.toUpperCase()}</strong> to <strong>{to.toUpperCase()}</strong></p>
      </form>
    </>
  )
}

export default App

