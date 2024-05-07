import { useState } from 'react';

const SignUpForm= () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="container mx-auto px-4 py-8 border-2 rounded-lg">
      <h2 className='font-extrabold'>Signup</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="username" className="block mb-2">Username</label>
          <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} className="border border-gray-300 rounded px-4 py-2" required />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2">Email</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="border border-gray-300 rounded px-4 py-2" required />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block mb-2">Password</label>
          <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} className="border border-gray-300 rounded px-4 py-2" required />
        </div>
        <button type="submit" className="bg-black hover:bg-gray-600 text-white px-4 py-2 rounded">Sign up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
