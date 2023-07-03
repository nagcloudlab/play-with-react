import VotingItem from "./VotingItem";
import VotingTable from "./VotingTable";
import {useState} from "react";


function VotingBox() {

    const [items, setItems] = useState(["react.js", "angular.js", "vue.js"])
    const [votingLines, setVotingLines] = useState({})

    const handleVote = (vote) => {
        let {item, type} = vote
        let votingLine = votingLines[item]
        if (votingLine) {
            if (type === "like")
                votingLine.likes++
            else
                votingLine.dislikes++
        } else {
            if (type === "like")
                votingLine = {item, likes: 1, dislikes: 0}
            else
                votingLine = {item, likes: 0, dislikes: 1}
        }
        setVotingLines({...votingLines, [item]: votingLine})
    }

    const renderVotingItems = () => {
        return items.map((item, index) => (
            <VotingItem key={index} item={item} onVote={vote => handleVote(vote)}/>
        ))
    }

    return (
        <div className="card">
            <div className="card-header">Voting Box</div>
            <div className="card-body">
                <div className="d-flex justify-content-around">
                    {renderVotingItems()}
                </div>
                <hr/>
                <VotingTable votingLines={votingLines}/>
            </div>
        </div>
    )
}

export default VotingBox;