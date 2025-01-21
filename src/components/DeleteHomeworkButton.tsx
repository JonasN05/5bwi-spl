type Props = {
    deleteHomework: () => void;
}

const DeleteHomeworkButton = (props: Props) => {
    return (
        <button
            onClick={props.deleteHomework}
            className="absolute top-2 right-2 rounded-full bg-gray-100 p-1 hover:bg-gray-200"
        >
            <img
                src="../../public/close.png"
                alt="Close"
                className="h-4 w-4"
            />
        </button>
    )
}

export default DeleteHomeworkButton