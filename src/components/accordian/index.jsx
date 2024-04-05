import { useState } from "react"
import data from "./data"
import './style.css'

// Singal and multi selection accordian
export default function Accordian() {
    const [selected, setSelected] = useState(null)

    function handleSingalSelection(getCurrentId) {
        // console.log(getCurrentId)
        setSelected(getCurrentId === selected ? null : getCurrentId)
    }

    console.log(selected)
    return (
        <div className="wrapper">
            <div className="accordian">
                {
                    data && data.length > 0 ?
                        data.map(dataItem => <div className="item">
                            <div className="title" onClick={() => handleSingalSelection(dataItem.id)}>
                                <h3>{dataItem.question}</h3>
                                <span>+</span>
                            </div>
                            {
                                selected === dataItem.id ?
                                    <div className="content">
                                        {dataItem.answer}
                                    </div>
                                    : null
                            }
                        </div>)
                        : <div> No data found!</div>

                }
            </div>
        </div>
    )
}