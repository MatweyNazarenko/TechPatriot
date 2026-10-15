
import { personsList } from "../../library/data";
import PersonCard from "./PersonCard";
import DetailedCard from "./DetailedCard";
import { useContext } from "react";
import { CardContext } from "../../context/CardContext";

const PersonsMain = () => {

    const {selectedId, setSelectedId} = useContext(CardContext);

    const chosenPerson = personsList.find((item) => item.id === selectedId)


    console.log(chosenPerson);

    return (
        <>
            {!selectedId && (
                <div className="persons">
                    {personsList.map((person, index) => {
                        return (
                            <PersonCard
                                key={person.id || index}
                                image={person.image}
                                name={person.name}
                                about={person.about}
                                life={person.life}
                                place={person.place}
                                contribution={person.contribution}
                                id={person.id}
                                setSelectedId={setSelectedId}
                            ></PersonCard>
                        )
                    })}
                </div>
            )}


            <DetailedCard
                selectedId={selectedId}
                setSelectedId={setSelectedId}
                image={chosenPerson?.image}
                person={chosenPerson}
            ></DetailedCard>
        </>

    )
}

export default PersonsMain;