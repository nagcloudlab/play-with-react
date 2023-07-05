import {useEffect, useRef, useState} from "react";

// controlled
// uncontrolled

function Form() {
    console.log("render")

    // const [firstName, setFirstName] = useState("");
    // const [lastName, setLastName] = useState("");
    const [fullName, setFullName] = useState("");
    //
    const firstNameRef=useRef({})
    const lastNameRef=useRef({})
    //
    // useEffect(() => {
    //     setFullName(firstName + " " + lastName)
    // }, [firstName, lastName])

    // const fullName = firstName+" "+lastName;

    const handleSubmit = () => {
        const fullName = firstNameRef.current.value + " " + lastNameRef.current.value;
        setFullName(fullName);
    }

    return (
        <div>
            <hr/>
            {fullName}
            <hr/>
            FirstName :<input ref={firstNameRef}/>
            <br/>
            LastName :<input ref={lastNameRef}/>
            <hr/>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Form;