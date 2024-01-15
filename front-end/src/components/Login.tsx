// Login.tsx
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginStart, loginSuccess, loginFailure } from '../authSlice';
import axios from 'axios';
import { RootState } from '../authSlice';

interface LoginProps {
  onCancel: () => void;
}

const Login: React.FC<LoginProps> = ({ onCancel }) => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state: RootState) => state.auth);

  interface FormData {
    username: string;
    password: string;
  }

  const [formData, setFormData] = useState<FormData>({
    username: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(loginStart());

    try {
      const response = await axios.post('http://localhost:4730/login', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 200) {
        dispatch(loginSuccess());
        // Handle successful login, e.g., redirect
      } else {
        dispatch(loginFailure('Invalid username or password'));
      }
    } catch (error) {
      dispatch(loginFailure('Error during login'));
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" name="username" value={formData.username} onChange={handleChange} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="password" value={formData.password} onChange={handleChange} />
        </label>
        <br />
        <button type="submit" disabled={loading}>
          Login
        </button>
        {error && <div>{error}</div>}
      </form>
    </div>
  );
};

export default Login;