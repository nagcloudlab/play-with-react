import React, {useContext, useState} from "react";

const CurrentUserContext = React.createContext({})
const ThemeContext = React.createContext({})

function Comp3() {
    const currentUser = useContext(CurrentUserContext)
    return (
        <div className={"card"}>
            <div className={"card-header"}>Comp3</div>
            <div className={"card-body"}>
                {JSON.stringify(currentUser)}
            </div>
        </div>
    )
}

function Comp2() {
    const theme = useContext(ThemeContext)
    return (
        <div className={"card"}>
            <div className={"card-header"}>Comp2</div>
            <div className={"card-body"}>
                {JSON.stringify(theme)}
                <Comp3/>
            </div>
        </div>
    )
}

function Comp1() {
    const [currentUser, setCurrentUser] = useState({
        name: "John Doe",
        age: 20,
        email: "envkt@example.com"
    })
    return (
        <div className={"card"}>
            <div className={"card-header"}>Comp1</div>
            <div className={"card-body"}>
                {JSON.stringify(currentUser)}
                <ThemeContext.Provider value={{theme: "dark"}}>
                    <CurrentUserContext.Provider value={currentUser}>
                        <Comp2/>
                    </CurrentUserContext.Provider>
                </ThemeContext.Provider>
                <Comp2/>
            </div>
        </div>
    )
}

function UseContextHook() {
    return (
        <div className={"card"}>
            <div className={"card-header"}>useContext</div>
            <div className={"card-body"}>
                <Comp1/>
            </div>
        </div>
    )
}

export default UseContextHook;