import { useState } from 'react';
import { Card } from './ui/card';
import { Input } from './ui/input';
import { Button } from './ui/button';



const TrainSearch = () => {
  const [formData, setFormData] = useState({
    source: '',
    destination: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      
      const response = await fetch(`/api/trains/availability?source=${formData.source}&destination=${formData.destination}`);
      const data = await response.json();
      console.log('Train search response:', data);
    } catch (error) {
      console.error('Error searching trains:', error);
    }
  };

  return (
    <Card>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          type="text"
          name="source"
          placeholder="Source"
          value={formData.source}
          onChange={handleChange}
        />
        <Input
          type="text"
          name="destination"
          placeholder="Destination"
          value={formData.destination}
          onChange={handleChange}
        />
        <Button type="submit">Search Trains</Button>
      </form>
    </Card>
  );
};

export default TrainSearch;
