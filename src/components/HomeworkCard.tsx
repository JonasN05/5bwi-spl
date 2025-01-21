import { SupabaseClient } from "@supabase/supabase-js";
import { Homework } from "../utils/types/types";
import DeleteHomeworkButton from "./DeleteHomeworkButton";

type Props = {
    homework: Homework;
    supabase: SupabaseClient;
};

const HomeworkCard = (props: Props) => {

    const deleteCard = async () => {
        // const response = await props.supabase.from('homework').delete().eq('id', props.homework.id);
        // console.log(response);
        console.log(props.homework.id);
    };

    return (
        <div className="relative min-h-32 rounded-lg bg-backgroundCard shadow-md">
            <DeleteHomeworkButton deleteHomework={deleteCard}></DeleteHomeworkButton>
            <div className="p-4">
                <div className="font-bold text-gray-800">{props.homework.subject}</div>
                <div className="mb-2 font-cardDescription text-gray-600">
                    Bis: {props.homework.date}
                </div>
                <div className="font-cardDescription text-gray-700">
                    {props.homework.content}
                </div>
            </div>
        </div>
    );
};

export default HomeworkCard;
