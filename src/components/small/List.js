

const List = (props) => {
    return (
        <ul className={props.class}>
            <li className={props.name}>explore</li>
            <li className={props.name1}>vote</li>
            <li className={props.name1}>stats</li>
            <li className={props.name1}>blog</li>
            <li className={props.name1}>docs</li>
            <li className={props.name1}>buy</li>
        </ul>
    )
}

export default List