import React, {useState} from 'react';



import './card.css'


const Card = props => {
    const { name, location, description, id } =props.data;
    const showForm = () =>{
        props.showForm()
    }
   
  return (
    <div className="events-tabel ">
    <div  className="card">
   <div className="card-body">
  <h5 className="card-title">Name : {name}</h5>
     <h5 className="card-subtitle mb-2 text-muted">Location : {location} </h5>
     <p className="card-text">Description : {description} </p>
     <button type="button" onClick={() => {  props.onUpdate(id); showForm() }}  className="btn btn-success">Update</button>
     <button type="button" onClick={props.onRemove.bind(null, id)} className="btn btn-danger">Remove</button>
   </div>
 </div>
</div>
  );
};


export default Card;

