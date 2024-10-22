type Props = {
    name: string,
    description: string,
    imageUrl: string,
    age?: number
}

export default function Card({ name, description, imageUrl }: Props) {
    return (
        <div>
            {name}
            {description}
            <img src={imageUrl} alt="" />
        </div>
    )
}