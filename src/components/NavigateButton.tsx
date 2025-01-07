import { useNavigate } from 'react-router-dom';

type Props = {
    path: string,
    title: string,
}

const NavigateButton = (props: Props) => {
    const navigate = useNavigate();

    return (
        <div className='text-white font-headFont hover:cursor-pointer' onClick={() => {

            console.log(props.path);
            navigate(props.path);

        }}>
            {props.title}
        </div >

    )
}

export default NavigateButton