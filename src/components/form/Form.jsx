import React, {useState, useEffect} from 'react';
import './form.css';


const Form = (props) => {
    const { template } = props;
    const [data, setData] = useState(template);
    const { name, location, description, id } = data;
    const {display, showButton} = props.tools;
  

    const showForm = (e) => {
   props.showForm()
}


  let style = {"display" : display};
  let button;
 if(showButton){
     button = <button className="button is-link is-outlined"  onClick={showForm} >Create New Post</button>
 }


    useEffect(() => {
      setData( template )
    }, [template])
  
    const onSubmitForm = () => {
      props.saveForm(data)
    }
  
    const hendleFormChange = (event) => {
      const { target: { name, value } } = event;
      setData({
        ...data,
        [name]: value 
      })
    }

  return(
     <div className="forms">
           {button}
         <div className="form " style={style}>
         <div className="field">
  <div className="control">
    <input className="input is-danger" onChange={hendleFormChange}  value={name} name="name" type="text" placeholder="Name"></input>
  </div>
</div>
<div className="field">
  <div className="control">
    <input className="input is-danger" onChange={hendleFormChange} value={location} name="location" type="text" placeholder="Location"></input>
  </div>
</div>
<div className="field">
  <div className="control">
    <textarea className="textarea is-danger" onChange={hendleFormChange} name="description"  value={description} placeholder="Description"></textarea>
  </div>
</div>
     <button  onClick={onSubmitForm} className={` button is-${id ? 'success' : 'danger'} `}>{id ? 'Update' : 'Create'}</button>
         </div>
     </div>
  )

}

export default Form;

