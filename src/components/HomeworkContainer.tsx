import { SupabaseClient } from '@supabase/supabase-js'
import { Homework } from '../utils/types/types'
import CreateHomeworkCard from './CreateHomeworkCard'
import HomeworkCard from './HomeworkCard'

type Props = {
    homeworks: Homework[],
    supabase: SupabaseClient,
    isChanged: Function;
}

function HomeworkContainer(props: Props) {

    return (
        <div>
            <div className='mb-32'>
                <CreateHomeworkCard supabase={props.supabase} isChanged={props.isChanged}></CreateHomeworkCard>
            </div>
            <div className="grid gap-12 lg:grid-cols-4 md:grid-cols-2">
                {props.homeworks.map((homework) => (
                    <HomeworkCard homework={homework} supabase={props.supabase} isChanged={props.isChanged}></HomeworkCard>
                ))}
            </div>
        </div>
    )
}

export default HomeworkContainer