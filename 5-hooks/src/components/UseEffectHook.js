import {useEffect, useMemo, useState} from "react";


function UseEffectHook() {
    console.log("UseEffectHook:render")
    const [number, setNumber] = useState(0)
    const [name, setName] = useState("Unknown")
    const [user, setUser] = useState({
        name: "Unknown",
        age: 0,
        email: ""
    })
    const memoUser=useMemo(()=>{
        return {
            name: user.name,
            age: user.age
        }
    },[user.name,user.age])

    useEffect(() => {
        console.log("The 'number' state changed, useEffect runs")
        // document.title = `You clicked ${number} times`
        document.title = "React Hooks"
    }, [number])

    useEffect(() => {
        console.log("The 'user' state changed, useEffect runs")
    }, [memoUser])

    useEffect(()=>{

        console.log("effect")
        let intervalId=setInterval(()=>{
            // console.log("tick",number)
            setNumber(prevState => prevState+1)
        },1000)

        return ()=>{
            console.log("clearing effect")
            clearInterval(intervalId)
            console.log("clearing effect done")
        }

    },[name])

    const handleNameChange = (e) => {
        setUser({...user, name: "Nag"})
    }
    const handleAgeChange = (e) => {
        setUser({...user, age: 45})
    }

    return (
        <div className={"card"}>
            <div className={"card-header"}>useEffect</div>
            <div className={"card-body"}>
                <hr/>
                <div className={"display-2"}>{number}</div>
                <hr/>
                Name : {user.name}, Age : {user.age} <br/>
                <button onClick={handleNameChange} className={"btn btn-primary"}>Change Name</button>
                &nbsp;
                <button onClick={handleAgeChange} className={"btn btn-primary"}>Change Age</button>
                <hr/>
                <span> You clicked {number} times</span>
                <br/>
                <button className={"btn btn-primary"}
                        onClick={() => setNumber((prev) => prev + 1)}>
                    Increment
                </button>
                <hr/>
                <input onChange={e => setName(e.target.value)}/>
                <br/>
                Hello {name}
            </div>
        </div>
    )
}

export default UseEffectHook;
