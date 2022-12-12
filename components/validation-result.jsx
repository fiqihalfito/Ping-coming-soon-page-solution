
function ValidationResult(props) {
    return (
        <div>
            <p className="text-sm text-red-500 ml-8 italic">{props.warning}</p>
        </div>
    )
}

export default ValidationResult