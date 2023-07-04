import {useEffect, useState} from "react";


function Posts(){

    const [resourceType, setResourceType] = useState("posts");
    const [resource, setResource] = useState("posts");


    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/"+resourceType)
          .then(res => res.json())
          .then(data => setResource(data))
    }, [resourceType])


    return (
        <div className={"card"}>
            <div className={"card-header"}>useEffect : {resourceType}</div>
            <div className={"card-body"}>
                <button className={"btn btn-primary"} onClick={() => setResourceType("posts")}>Posts</button>
                <button className={"btn btn-primary"} onClick={() => setResourceType("comments")}>Comments</button>
                <button className={"btn btn-primary"} onClick={() => setResourceType("todos")}>Todos</button>
                <hr/>
                {
                    JSON.stringify(resource)
                }
            </div>
        </div>
    )
}

export default Posts;