import { SupabaseClient } from '@supabase/supabase-js'
import { Homework } from '../utils/types/types'
import CreateHomeworkCard from './CreateHomeworkCard'
import HomeworkCard from './HomeworkCard'

type Props = {
    homeworks: Homework[],
    supabase: SupabaseClient;
}

function HomeworkContainer(props: Props) {

    return (
        <div>
            <div>
                <CreateHomeworkCard supabase={props.supabase}></CreateHomeworkCard>
            </div>
            <div className="grid gap-12 lg:grid-cols-4 md:grid-cols-2">
                {props.homeworks.map((homework) => (
                    <HomeworkCard homework={homework}></HomeworkCard>
                ))}
            </div>
        </div>
    )
}

export default HomeworkContainer