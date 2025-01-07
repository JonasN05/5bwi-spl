import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { Homework } from "../utils/types/types";
import HomeworkContainer from "../components/HomeworkContainer";

const supabase = createClient(
    "https://btkmuguyjwlqgwwrvlkv.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ0a211Z3V5andscWd3d3J2bGt2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzM4MjIyNzMsImV4cCI6MjA0OTM5ODI3M30.mn36BuQWTix4sIyJ-VI7Jm1DCM-bJxlF7YKbhpU2Fyw"
);

type Props = {
}



function HomeworkPage(props: Props) {
    const [homeworks, setHomeworks] = useState<Homework[]>([]);

    useEffect(() => {
        getHomework();
    }, []);

    async function getHomework() {
        const { data, error } = await supabase.from("homework").select("*");
        console.log(data);
        if (error) {
            console.error("Error fetching homework:", error);
        } else {
            data.sort((a, b) => a.date.localeCompare(b.date));
            setHomeworks(data || []);
        }
    }

    return (
        <div className="w-full p-20">
            <HomeworkContainer homeworks={homeworks}></HomeworkContainer>
        </div>
    );
}

export default HomeworkPage;