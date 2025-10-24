const Source = ({ source }) => {
    return (
        <div>
            <a href={source.url}>{source.text}</a>
        </div>
    )
}

export default Source;