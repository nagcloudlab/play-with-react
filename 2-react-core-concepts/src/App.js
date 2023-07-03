import {useState} from "react"


function App(props) {
    console.log("render");
    let {title, trainer}=props; // props ==> immutable data ( comes from parent-component
    const [message, setMessage] = useState("hello world") // state ==> mutable data ( exist in component )
    return (
        <>
            <div className="container">
                <div className="display-1">{title} by {trainer}</div>
                <hr/>
                <div className={"card"}>
                    <div className={"card-header"}>greetings</div>
                    <div className={"card-body"}>
                        {message}
                    </div>
                    <div className={"card-footer"}>
                        <div className="d-flex justify-content-around">
                            <button onClick={e=>setMessage("good morning")}
                                    className={"btn btn-primary"} >GM</button>
                            <button onClick={e=>setMessage("good noon")}
                                    className={"btn btn-primary"} >GN</button>
                            <button onClick={e=>setMessage("good evening")}
                                    className={"btn btn-primary"} >GE</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default App;
