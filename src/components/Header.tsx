import NavigateButton from './NavigateButton';

type Props = {
    path: string,
    title: string,
};

const Header = (props: Props) => {

    return (
        <header className="flex flex-col-reverse justify-center items-center h-20 p-20 md:justify-between md:flex-row lg:justify-between lg:flex-row">
            <div className='mt-4 hover:cursor-pointer md:mt-0 lg:mt-0'><NavigateButton path={props.path} title={props.title}></NavigateButton></div>
            <div className="text-white text-5xl font-headFont md:text-7xl lg:text-7xl">
                HTL Dornbirn 5bWI
            </div>
        </header >
    )
}

export default Header;