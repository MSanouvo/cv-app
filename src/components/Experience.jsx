import "../styles/insert.css"

function Company() {
    return(
        <div>
            <label>Company:</label>
            <input type="text"/>
        </div>
    )
}

function Position() {
    return(
        <div>
            <label>Position:</label>
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

function Responsibilities() {
    return(
        <div>
            <label>Responsibilities</label>
            <textarea></textarea>
        </div>
    )
}

function Enter() {
    return(
        <button type="button">Enter</button>
    )
}

export default function Experience() {
    return(
        <div className="form">
            <h2 className="header">Insert Experience</h2>
            <Company />
            <Position />
            <DateStart />
            <DateEnd />
            <Responsibilities />
            <Enter />
        </div>
    )
}