import Source from "./Source";

function Footer({ sources }) {
    return (
        <div>
            <h4>sources:</h4>
            {sources.map((item, index) => (
                <Source key={index} source={item} />
            ))}
        </div>
    )
}

export default Footer;