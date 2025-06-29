import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import auth from '../config/firebase';

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
           auth.onAuthStateChanged(function (user) {
      if (user) {
        // User is signed in, you can access user details here
        navigate('/home'); // Redirect to home if already logged in
      } 
    });
    }, []);

    const handleLogin = async (e) => {
        e.preventDefault();
        setError(''); // Clear previous errors
        setLoading(true);

        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            console.log('User logged in successfully:', user);
            
            // Only navigate on successful login
            navigate('/home');
        } catch (error) {
            const errorCode = error.code;
            let errorMessage = error.message;
            
            // Provide user-friendly error messages
            switch (errorCode) {
                case 'auth/user-not-found':
                    errorMessage = 'No account found with this email address.';
                    break;
                case 'auth/wrong-password':
                    errorMessage = 'Incorrect password.';
                    break;
                case 'auth/invalid-email':
                    errorMessage = 'Invalid email address.';
                    break;
                case 'auth/user-disabled':
                    errorMessage = 'This account has been disabled.';
                    break;
                case 'auth/too-many-requests':
                    errorMessage = 'Too many failed attempts. Please try again later.';
                    break;
                default:
                    errorMessage = 'Login failed. Please check your credentials.';
            }
            
            console.error('Error logging in:', errorCode, error.message);
            setError(errorMessage);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <form onSubmit={handleLogin} className="p-10 bg-white rounded-lg shadow-md" style={{ width: "75%" }}>
                <h2 className="text-2xl font-bold mb-5 text-gray-800">Login</h2>
                
                <div className="mb-4">
                    <label className="block text-gray-700">Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        disabled={loading}
                        className="mt-1 p-2 w-full border rounded focus:border-blue-500 focus:outline-none"
                    />
                </div>
                
                <div className="mb-4">
                    <label className="block text-gray-700">Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        disabled={loading}
                        className="mt-1 p-2 w-full border rounded focus:border-blue-500 focus:outline-none"
                    />
                </div>
                
                {error && (
                    <p className='text-red-600 my-2 text-sm'>{error}</p>
                )}
                
                <p 
                    className='text-blue-600 cursor-pointer my-2 hover:underline' 
                    onClick={() => !loading && navigate("/signup")}
                >
                    New user? Register here
                </p>
                
                <button 
                    type="submit" 
                    disabled={loading}
                    className={`w-full py-2 px-4 rounded transition duration-200 ease-in-out ${
                        loading 
                            ? 'bg-gray-400 cursor-not-allowed' 
                            : 'bg-blue-500 hover:bg-blue-600'
                    } text-white`}
                >
                    {loading ? 'Logging in...' : 'Login'}
                </button>
            </form>
        </div>
    );
}

export default Login;