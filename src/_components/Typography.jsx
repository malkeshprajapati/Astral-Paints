export const PrimaryHeading = ({ title = '' }) => {
    return <h3 className="text-3xl my-3 font-bold tracking-wide">{title}</h3>
}

export const SecondaryHeading = ({ title = '' }) => {
    return <h6 className="text-lg font-semibold tracking-wide">{title}</h6>
}