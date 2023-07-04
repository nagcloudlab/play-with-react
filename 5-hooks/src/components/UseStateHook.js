import {useState} from "react"




function UseStateHook() {
    console.log("Counter:render()")

    const [count, setCount] = useState(0)
    const [foo, setFoo] = useState("bar")
    const [user, setUser] = useState({
        name: "John Doe",
        age: 39,
        email: "envkt@example.com",
        images: ["images/avatar.png"]
    })

    // const handleNameChange = (e) => {
    //     setUser({...user, name: e.target.value})
    // }

    // const handleAgeChange = (e) => {
    //     setUser({...user, age: e.target.value})
    // }

    const handleChange=(e)=>{
        let {name:fieldName, value} = e.target
        setUser({...user, [fieldName]: value})
    }

    const handleIncrement = () => {
        setCount(count+1)
    }

    const handleIncrementAsync = () => {
        setTimeout(() => {
            setCount(prevCount => prevCount + 1)
        }, 3000)
    }

    return (
        <div className={"card"}>
            <div className={"card-header"}>useState</div>
            <div className={"card-body"}>
                User Name : <span>{user.name}</span>
                <br/>
                Age : <span>{user.age}</span>
                <br/>
                Email : <span>{user.email}</span>
                <br/>
                Image : <span>{user.images[0]}</span>
                <hr/>
                Name : <input name={"name"} onChange={handleChange}/>
                Age  : <input name={"age"} onChange={handleChange}/>
                <hr/>
                <div className={"d-flex justify-content-around"}>
                    <button onClick={handleIncrement} className={"btn btn-primary"}>
                        Increment
                    </button>
                    <button onClick={handleIncrementAsync} className={"btn btn-primary"}>
                        Increment Async
                    </button>
                    <span className={"display-6"}>{count}</span>
                    <span className={"display-6"}>{foo}</span>
                </div>
                <hr/>
            </div>
        </div>
    )
}

export default UseStateHook;