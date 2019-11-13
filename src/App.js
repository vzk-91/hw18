import React, { useState } from 'react';
import Form from './components/form/Form';
import Card from './components/card/Card';
import { example, dummy } from './components/constant';

import './App.css';

function App() {
  const [state, setState] = useState({ events: [ ...dummy ], template: { ...example } })
  const { events, template } = state;
  const [tools, setTools] = useState({display : "none", showButton  : true })
  


  const showForm = () => {
    setTools({
      display : "block",
       showButton  : false
    })
}

  const saveForm = (data) => {
    if (data.id) {
      const newEvents = events.map((event) => {
        return event.id === data.id ? data : event
      })
      setState({
        events: [ ...newEvents ],
        template: { ...example  }
      })
    }
    const newEvent = {
      ...data,
      id: new Date().valueOf(),
    }
   if(data.name && data.description){
      setState({
      
        events: [ ...events, newEvent ],
        template: { ...example }
     })
    }
  }

  const handleRemove = (id) => {
    const filteredEvents = events.filter((event) => {
      return event.id !== id
    });
    setState({
      ...state,
      events: filteredEvents
    })
  }

  const handleUpdate = (id) => {
    const findEvent = events.find((event) => {
      return event.id === id
    });
    setState({
      ...state,
      template: findEvent
    })
  }
  return (
    <div className="App 
    ">
      <div className="cards">
        <Form template={template} saveForm={saveForm} showForm={showForm} tools={tools} />  
      </div>

      <div className="events-tabel">
        {events.map((event) => {
          return (
            <Card key={event.id} onRemove={handleRemove} onUpdate={handleUpdate} data={event} showForm={showForm} />
          )
        })}
      </div>      
    </div>
  );
}

export default App;
