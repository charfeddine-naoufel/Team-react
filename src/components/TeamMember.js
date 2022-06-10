import React from "react";

function TeamMember(props){
    return(
        <div className="col-md-4 col-sm-6">
            <div className="card mt-5 shadow-lg">
                <div className="card-header"><img className="w-100" src={props.img} alt='img'/> </div>
                <div className="card-body">
                    <h3>name : {props.name} </h3>
                    <h5>position : {props.position}</h5>
                <p>phone : {props.phone}</p>
                <p>email : {props.email}</p>
                     </div>
                
                
            </div>
           </div>
    )
}

export default TeamMember;