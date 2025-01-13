import "../styles/insert.css"

function School() {
    return(
        <div>
            <label>School:</label>
            <input type="text"/>
        </div>
    )
}

function Degree() {
    return(
        <div>
            <label>Degree:</label>
            <input type="text"/>
        </div>
    )
}

function DateStart() {
    return(
        <div>
            <label>Date Started:</label>
            <input type="date"/>
        </div>
    )
}

function DateEnd() {
    return(
        <div>
            <label>Date Ended:</label>
            <input type="date"/>
        </div>
    )
}

function Enter() {
    return(
        <button type="button">Enter</button>
    )
}

export default function Education() {
    return(
        <div className="form">
            <h2 className="header">Insert Education</h2>
            <School />
            <Degree />
            <DateStart />
            <DateEnd />
            <Enter />
        </div>
    )
}