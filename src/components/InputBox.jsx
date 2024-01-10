import { useId } from "react"
function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = 'usd',
    amountDisbled = false,
    currencyDisbled = false
}) {
    const currencyInputId = useId()
    return (
        <div className="grid">
            <div className="column">
                <label htmlFor={currencyInputId}>{label}</label>
                <input id={currencyInputId} type="number" placeholder="Amount" value={amount} disabled={amountDisbled} onChange={e => onAmountChange && onAmountChange(e.target.value)} />
            </div>
            <div className="column">
                <label>Select Currency</label>
                <select onChange={e => onCurrencyChange && onCurrencyChange(e.target.value)} disabled={currencyDisbled} value={selectCurrency}>
                    {currencyOptions.map(currency => <option key={currency} value={currency}>{currency}</option>)}
                </select>
            </div>
        </div>
    )
}

export default InputBox