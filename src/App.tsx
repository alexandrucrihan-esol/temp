import React, { useState } from 'react';
import { useFormPartialForm } from "./useFormPartialForm";
import { Person, usePerson } from "./usePerson";
import { FormBuilder } from "./form/FormBuilder";


function App() {

  const [data, setData] = useState<string>("");

  const form = useFormPartialForm<Person>({
    id: "",
    lastName: "",
    name: ""
  });
  const personService = usePerson();
  return (
    <div className="App">
      <header className="App-header">
        <FormBuilder.Root state={form.state} onChange={form.setFormState}>
          <FormBuilder.Input name={"lastName"}/>
        </FormBuilder.Root>
        <pre>Hello world {JSON.stringify(form.state, null, 2)}</pre>
        <form onSubmit={async (e: any) => {
          e.preventDefault()
          await personService.set(form.state);
          personService.all().then(value => setData(JSON.stringify(value, null, 2)))
        }}>
          <input onChange={e => form.setForm("id")(e.target.value)}/>
          <input onChange={e => form.setForm("lastName")(e.target.value)}/>
          <input onChange={e => form.setForm("name")(e.target.value)}/>
          <input type="submit"/>
        </form>
        <pre>{data}</pre>
      </header>
    </div>
  );
}

export default App;
