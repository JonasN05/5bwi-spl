type Props = {
    name: string,
    description: string,
    imageUrl: string,
    age?: number
}

export default function Card({ name, description, imageUrl }: Props) {
    return (
        <div className="min-h-96 rounded-lg bg-backgroundCard ">
            <div className="w-full ">
                <img src={imageUrl} alt="" className="w-full h-56 object-cover rounded-t-lg" />
            </div>

            <div className="p-2">
                <div className="font-bold mb-2 font-cardDescription">
                    {name}
                </div>
                <div className="font-cardDescription">
                    {description}
                </div>
            </div>


        </div>
    )
}