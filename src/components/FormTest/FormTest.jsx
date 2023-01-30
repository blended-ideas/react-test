import React, { useState } from 'react';
import useInput from './useInput';
import customUtils from './utils';

function FormTest({ prop1 }) {
  const [email, setEmail] = useInput('');
  const [password, setPassword] = useInput('');
  const [error, setError] = useState('');

  const handleOnSubmit = async (event) => {
    event.preventDefault();
    setError('');
    try {
      const data = await customUtils.login(email, password);
      alert(`Loggin Successful, UserID: ${data.userId}`);
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <>
      <h1>{prop1}</h1>
      <form onSubmit={handleOnSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input type="password" id="email" value={email} onChange={setEmail} />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" value={password} onChange={setPassword} />
        </div>

        <button type="submit" disabled={email.length === 0 || password.length < 6}>Submit</button>
      </form>

      {error ? (
        <div>
          Error: Login Failed
          {': '}
          {error}
        </div>
      ) : null}
    </>
  );
}

export default FormTest;
