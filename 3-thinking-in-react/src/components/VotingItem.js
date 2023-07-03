import styles from './VotingItem.module.css'

function VotingItem(props) {
    let item = props.item;
    let onVote = props.onVote;
    return (
        <div className={`card ${styles.item}`}>
            <div className={"card-body"}>
                <div className={"display-4"}>{item}</div>
                <hr/>
                <div className={"d-flex justify-content-around"}>
                    <button className={"btn btn-primary"}
                            onClick={e => onVote({item: item, type: "like"})}>
                        Like
                    </button>
                    <button className={"btn btn-danger"}
                            onClick={e => onVote({item: item, type: "dislike"})}>
                        Dislike
                    </button>
                </div>
            </div>
        </div>
    )
}

export default VotingItem;