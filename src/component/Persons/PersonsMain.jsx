import { personsList } from "../../library/data";
import PersonCard from "./PersonCard";

const PersonsMain = ()=>{
    console.log(1);
    return(
        <div className="persons">
            {personsList.map((person, index)=>{
                return( 
                    <PersonCard 
                    key={person.name || index}
                    image={person.image}
                    name={person.name}
                    about={person.about}
                    life={person.life}
                    place={person.place}
                    contribution={person.contribution}
                    who={person.who}
                ></PersonCard>
            )
            })}
        </div>
    )
}   

export default PersonsMain;