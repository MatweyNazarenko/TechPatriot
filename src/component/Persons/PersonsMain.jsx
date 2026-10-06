
import { personsList } from "../../library/data";
import PersonCard from "./PersonCard";
import DetailedCard from "./DetailedCard";
import { useState } from "react";

const PersonsMain = () => {

    const [selectedId, setSelectedId] = useState(null);
        
    return (
        <>
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

            <DetailedCard selectedId={selectedId}></DetailedCard>
        </>

    )
}

export default PersonsMain;