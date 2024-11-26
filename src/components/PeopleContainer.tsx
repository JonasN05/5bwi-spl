import Card from "./Card"

type Props = {}

export default function PeopleContainer({ }: Props) {
    return (
        <div className="grid gap-12 lg:grid-cols-4 md:grid-cols-2">
            <Card name="Jonas" description="Schüler" imageUrl="https://picsum.photos/200/300" />
            <Card name="Diego" description="Schüler" imageUrl="https://picsum.photos/200/300" />
            <Card name="Diego" description="Schüler" imageUrl="https://picsum.photos/200/300" />
            <Card name="Diego" description="Schüler" imageUrl="https://picsum.photos/200/300" />
            <Card name="Diego" description="Schüler" imageUrl="https://picsum.photos/200/300" />
            <Card name="Diego" description="Schüler" imageUrl="https://picsum.photos/200/300" />
        </div>
    )
}