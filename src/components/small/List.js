

const List = (props) => {
    return (
        <ul className={props.class}>
            <a href="/" className={props.name}>explore</a>
            <a href="https://vote.beefy.finance/#/" target='blank' className={props.name1}>vote</a>
            <a href="https://dashboard.beefy.com/" target='blank' className={props.name1}>stats</a>
            <a href="https://beefy.com/articles/" target='blank' className={props.name1}>blog</a>
            <a href="https://docs.beefy.finance/" className={props.name1}>docs</a>
            <li className={props.name1}>buy</li>
        </ul>
    )
}

export default List