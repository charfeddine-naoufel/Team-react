import React from "react";
import TeamMember from "./TeamMember";
import members from "./members";

function Team(){
   const memberss=members

const info= memberss.map(member =>{

    return (
        <TeamMember 
            key={member.id}
            name={member.name} 
            position={member.position} 
            img={member.img} 
            phone={member.phone} 
            email={member.email} 
           
         />
    )
}

    
    )
    return(
        <div className="row mt-5">
            {info}
        </div>
    )
}

export default Team;