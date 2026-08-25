export default function ReviewerInitials({
    name,
    className = undefined,
}) {
    if (!name) return null;

    return (

        <div className={`reviewerInitials ${className}`}>

            {name.split(" ").map((name, index) => (

                <span key={index}>{name.charAt(0)}</span>

            ))}

        </div>

    )

}