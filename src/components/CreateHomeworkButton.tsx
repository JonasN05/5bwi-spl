
type Props = {
    onSave: () => void;
};

const CreateHomeworkButton = ({ onSave }: Props) => {
    return (
        <div
            onClick={onSave}
            className="cursor-pointer bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
            Hausaufgabe erstellen
        </div>
    );
};

export default CreateHomeworkButton;
