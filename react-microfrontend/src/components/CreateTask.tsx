import { ChangeEvent, FormEvent, useState } from 'react';
import { v4 as uuid } from 'uuid';
// @ts-ignore
import { emitEvent, SHARED_SSPA_EVENTS } from '@leonardorick/utils';
// import default from '1'
// Parcel is a react component exported by the single-spa lib
// That understands how to render another parcels
// When using the Parcel component on your jsx, the name of the imported
// project passed as a config to it, is the name you settle on your
// root-config project importmap:
// <Parcel config={() => System.import('@leonardorick/react-parcel')}/>
// you can also pass props just inserting it as <Parcel prop="prop1" ...></Parcel>
import Parcel from 'single-spa-react/parcel';

function CreateTask() {
  const [task, updateTask] = useState('');
  const handleChange = ($event: ChangeEvent<HTMLInputElement>) => {
    updateTask($event.target.value);
  };

  const handleSubmit = ($event: FormEvent) => {
    $event.preventDefault();
    emitEvent(SHARED_SSPA_EVENTS.ADD_TASK, {
      id: uuid(),
      desc: task,
    });
    updateTask('');
  };

  return (
    <>
      <h3>Create Task</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={task} />
        <button>Add</button>
      </form>
      <Parcel config={() => System.import('@leonardorick/react-parcel')} />
    </>
  );
}
export default CreateTask;
