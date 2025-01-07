import { Homework } from '../utils/types/types';

type Props = {
    homework: Homework,
}

const HomeworkCard = (props: Props) => {
    return (
        <div className="min-h-32 rounded-lg bg-backgroundCard ">


            <div className="p-4">
                <div className="font-bold">
                    {props.homework.subject}
                </div>
                <div className=" mb-2 font-cardDescription">
                    Bis: {props.homework.date}
                </div>
                <div className="font-cardDescription">
                    {props.homework.content}
                </div>
            </div>
        </div>
    )
}

export default HomeworkCard;