import { useEffect, useState } from "react";
import Card from "./Card"

type Props = {}

type Person = {
    name: string,
    description: string,
    imageUrl: string
}

export default function PeopleContainer({ }: Props) {

    const [persons, setPersons] = useState<Person[]>([]);

    var url = "http://10.115.1.44:8055/items/people";

    useEffect(() => {
        fetch(url)
            .then((res) => res.json()
                .then((data: any) => {
                    console.log(data);
                    setPersons(data.data);
                })
                .catch((error) => {
                    console.error("Error fetching data:", error);
                })
            )
    }, []);


    return (
        <div className="grid gap-12 lg:grid-cols-4 md:grid-cols-2">
            {persons.map((person) => {
                return <Card name={person.name} description={person.description} imageUrl={`http://10.115.1.44:8055/assets/${person.imageUrl}`} />
            })}
        </div>
    )
}