import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

const Login = () => {
    return (
        <div className="pt-24 pb-16 min-h-screen flex items-center justify-center bg-gray-50">
            <Card className="w-full max-w-md p-8">
                <div className="text-center mb-8">
                    <h1 className="font-playfair text-3xl font-bold text-secondary mb-2">Welcome Back</h1>
                    <p className="text-gray-600">Login to access your dashboard</p>
                </div>

                <form className="space-y-6">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                            placeholder="your@email.com"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                        <input
                            type="password"
                            id="password"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                            placeholder="••••••••"
                        />
                    </div>
                    <div className="flex items-center justify-between text-sm">
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" className="rounded text-primary focus:ring-primary" />
                            <span className="text-gray-600">Remember me</span>
                        </label>
                        <a href="#" className="text-primary hover:underline">Forgot password?</a>
                    </div>
                    <Button variant="primary" className="w-full">Login</Button>
                </form>

                <div className="mt-6 text-center text-sm text-gray-600">
                    Don't have an account? <Link to="/register" className="text-primary font-medium hover:underline">Register</Link>
                </div>
            </Card>
        </div>
    );
};

export default Login;
