
import { useState } from "react";
import CreateHomeworkButton from "./CreateHomeworkButton";
import { SupabaseClient } from "@supabase/supabase-js";

type Props = {
    supabase: SupabaseClient,
};

const CreateHomeworkCard = (props: Props) => {

    const [subject, setSubject] = useState("");
    const [content, setContent] = useState("");
    const [date, setDate] = useState("");


    const handleSaveHomework = async () => {
        console.log("Fach:", subject);
        console.log("Inhalt:", content);
        console.log("Datum:", date);

        // const { error } = await props.supabase
        //     .from('homework')
        //     .insert({ subject: subject, content: content, date: date });
    };

    return (
        <div className="min-h-32 rounded-lg bg-backgroundCard p-6 shadow-md">
            <h2 className="mb-4 text-xl font-bold text-gray-800">Neue Hausaufgabe erstellen</h2>
            <div className="space-y-4">
                <input
                    type="text"
                    placeholder="Fach"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full rounded-md border border-gray-300 bg-white p-2 text-gray-800 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
                <textarea
                    placeholder="Inhalt"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    className="w-full rounded-md border border-gray-300 bg-white p-2 text-gray-800 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
                    rows={4}
                ></textarea>
                <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full rounded-md border border-gray-300 bg-white p-2 text-gray-800 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
                <CreateHomeworkButton onSave={handleSaveHomework} />
            </div>
        </div>
    );
};

export default CreateHomeworkCard;
