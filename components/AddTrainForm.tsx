
import { useState } from 'react';
import { Button } from './ui/button';

const AddTrainForm = () => {
  const [trainName, setTrainName] = useState('');
  const [source, setSource] = useState('');
  const [destination, setDestination] = useState('');
  const [seatCapacity, setSeatCapacity] = useState('');
  const [arrivalTimeAtSource, setArrivalTimeAtSource] = useState('');
  const [arrivalTimeAtDestination, setArrivalTimeAtDestination] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', trainName, source, destination, seatCapacity, arrivalTimeAtSource, arrivalTimeAtDestination);
  };

  return (
    <form onSubmit={handleSubmit} className='border-2 border-solid rounded-lg  p-2'>
      <div className='flex flex-col pl-2 space-x-2'>

        <div className='pl-2 pb-2'>
          <label className='pr-2'>Train Name:</label>
          <input type="text" className='border rounded-sm'  value={trainName} onChange={(e) => setTrainName(e.target.value)} required />

        </div>
        <div className='pb-2'>

          <label className='pr-2'>Source:</label>
          <input type="text" className='border rounded-sm' value={source} onChange={(e) => setSource(e.target.value)} required />
        </div>
        <div className='pb-2'>

          <label className='pr-2'>Destination:</label>
          <input type="text" className='border rounded-sm' value={destination} onChange={(e) => setDestination(e.target.value)} required />
        </div>
        <div className='pb-2'>

          <label className='pr-2'>Seat Capacity:</label>
          <input type="number" className='border rounded-sm' value={seatCapacity} onChange={(e) => setSeatCapacity(e.target.value)} required />
        </div>
        <div className='pb-2'>

          <label className='pr-2'>Arrival Time at Source:</label>
          <input type="time" className='border rounded-sm' value={arrivalTimeAtSource} onChange={(e) => setArrivalTimeAtSource(e.target.value)} required />
        </div>
        <div className='pb-2'>

          <label className='pr-2'>Arrival Time at Destination:</label>
          <input type="time" className='border rounded-sm' value={arrivalTimeAtDestination} onChange={(e) => setArrivalTimeAtDestination(e.target.value)} required />
        </div>
        <Button type="submit" className='rounded px-4 py-2'>Add Train</Button>
      </div>
    </form>
  );
};

export default AddTrainForm;
