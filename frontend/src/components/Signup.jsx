import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import auth from '../config/firebase';

function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const validatePassword = (password) => {
        if (password.length < 6) {
            return 'Password must be at least 6 characters long';
        }
        return null;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(''); // Clear previous errors
        setLoading(true);

        // Validate passwords match
        if (password !== confirmPassword) {
            setError('Passwords do not match');
            setLoading(false);
            return;
        }

        // Validate password strength
        const passwordError = validatePassword(password);
        if (passwordError) {
            setError(passwordError);
            setLoading(false);
            return;
        }

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            console.log('User created successfully:', userCredential.user);
            
            // Sign out the user immediately after registration
            await auth.signOut();
            
            // Navigate to login page so they can sign in manually
            navigate('/login');
        } catch (error) {
            const errorCode = error.code;
            let errorMessage = error.message;
            
            // Provide user-friendly error messages
            switch (errorCode) {
                case 'auth/email-already-in-use':
                    errorMessage = 'An account with this email already exists.';
                    break;
                case 'auth/invalid-email':
                    errorMessage = 'Invalid email address.';
                    break;
                case 'auth/weak-password':
                    errorMessage = 'Password is too weak. Please choose a stronger password.';
                    break;
                case 'auth/operation-not-allowed':
                    errorMessage = 'Email/password accounts are not enabled.';
                    break;
                default:
                    errorMessage = 'Registration failed. Please try again.';
            }
            
            console.error('Error creating user:', errorCode, error.message);
            setError(errorMessage);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        window.scrollTo(0, 0);
        // Check if user is already logged in
                 auth.onAuthStateChanged(function (user) {
      if (user) {
        // User is signed in, you can access user details here
        navigate('/home'); // Redirect to home if already logged in
      } 
    });
    // eslint-disable-next-line
  }, []);  
    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <form onSubmit={handleSubmit} className="p-10 bg-white rounded-lg shadow-lg" style={{ width: "70%" }}>
                <h2 className="text-2xl font-bold mb-5 text-gray-800">Sign Up</h2>
                
                <div className="mb-4">
                    <label className="block text-gray-700">Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        disabled={loading}
                        className="mt-1 p-2 w-full border rounded focus:border-orange-500 focus:outline-none"
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
                        className="mt-1 p-2 w-full border rounded focus:border-orange-500 focus:outline-none"
                    />
                    <p className="text-gray-500 text-xs mt-1">Password must be at least 6 characters long</p>
                </div>
                
                <div className="mb-4">
                    <label className="block text-gray-700">Confirm Password:</label>
                    <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                        disabled={loading}
                        className="mt-1 p-2 w-full border rounded focus:border-orange-500 focus:outline-none"
                    />
                </div>
                
                {error && (
                    <p className="text-red-500 text-sm mb-4">{error}</p>
                )}
                
                <p 
                    className='text-blue-600 cursor-pointer my-2 hover:underline' 
                    onClick={() => !loading && navigate("/login")}
                >
                    Already have an account? Login here
                </p>
                
                <button 
                    type="submit" 
                    disabled={loading}
                    className={`w-full py-2 px-4 rounded transition duration-200 ease-in-out ${
                        loading 
                            ? 'bg-gray-400 cursor-not-allowed' 
                            : 'bg-orange-400 hover:bg-orange-600'
                    } text-white`}
                >
                    {loading ? 'Creating Account...' : 'Register'}
                </button>
            </form>
        </div>
    );
}

export default Signup;