import { Homework } from '../utils/types/types'
import HomeworkCard from './HomeworkCard'

type Props = {
    homeworks: Homework[],
}

function HomeworkContainer(props: Props) {

    return (
        <div className="grid gap-12 lg:grid-cols-4 md:grid-cols-2">
            {props.homeworks.map((homework) => (
                <HomeworkCard homework={homework}></HomeworkCard>
            ))}
        </div>
    )
}

export default HomeworkContainer