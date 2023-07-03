
function VotingTable(props) {
    let {votingLines} = props;
    let votingLinesCount = Object.keys(votingLines).length;
    const renderVotingLines = () => {
        return Object.keys(votingLines).map((item, index) => {
            let line = votingLines[item];
            return (
                <tr key={index}>
                    <td>{line.item}</td>
                    <td>{line.likes}</td>
                    <td>{line.dislikes}</td>
                </tr>
            )
        })
    }
    const renderVotingLinesTable = () => {
        if (votingLinesCount !== 0) {
            return (
                <div className={"card"}>
                    <div className={"card-body"}>
                        <table className={"table table-striped"}>
                            <thead>
                            <tr>
                                <th>Item</th>
                                <th>Likes</th>
                                <th>Dislikes</th>
                            </tr>
                            </thead>
                            <tbody>
                            {renderVotingLines()}
                            </tbody>
                        </table>
                    </div>
                </div>
            )
        }
    }
    return renderVotingLinesTable()
}

export default VotingTable;