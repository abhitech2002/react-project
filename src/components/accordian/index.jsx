import { useState } from "react"
import data from "./data"
import './style.css'

// Singal and multi selection accordian
export default function Accordian() {
    const [selected, setSelected] = useState(null)
    const [enableSelection, setEnableSelection] = useState(false)
    const [multiple, setMultiple] = useState([])

    function handleSingalSelection(getCurrentId) {
        // console.log(getCurrentId)
        setSelected(getCurrentId === selected ? null : getCurrentId)
    }

    function handleMultiSelection(getCurrentId) {
        let copyMultiple = [...multiple]
        const findIndex = copyMultiple.indexOf(getCurrentId)

        if (findIndex === -1) copyMultiple.push(getCurrentId)
        else copyMultiple.splice(findIndex, 1)

        setMultiple(copyMultiple)
    }

    console.log(selected, multiple)
    return (
        <div className="wrapper">
            <button onClick={() => setEnableSelection(!enableSelection)}>Enable MultiSelection Mode</button>
            <div className="accordian">
                {
                    data && data.length > 0 ?
                        data.map(dataItem => <div className="item">
                            <div className="title" onClick={enableSelection
                                ? () =>
                                    handleMultiSelection(dataItem.id) :
                                () =>
                                    handleSingalSelection(dataItem.id)}>
                                <h3>{dataItem.question}</h3>
                                <span>+</span>
                            </div>
                            {/* {
                                enableSelection ? 
                                multiple.indexOf(dataItem.id !== -1) && (
                                    <div className="content">
                                        {dataItem.answer}
                                    </div>
                                ) :
                                selected === dataItem.id && (
                                        <div className="content">{dataItem.answer}</div>
                                    )
                            } */}
                            {
                                selected === dataItem.id || multiple.indexOf(dataItem.id) !== -1 ? (
                                    <div className="content">{dataItem.answer}</div>
                                ): null
                            }
                        </div>)
                        : <div> No data found!</div>

                }
            </div>
        </div>
    )
}