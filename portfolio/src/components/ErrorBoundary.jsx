import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.error("ErrorBoundary caught an error:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return this.props.fallback || (
                <div className="h-screen w-full flex flex-col items-center justify-center bg-[#030303] text-white p-8 text-center">
                    <h2 className="text-2xl font-bold mb-4">Something went wrong.</h2>
                    <p className="text-gray-400 mb-8 max-w-md">The component failed to load, possibly due to a 3D rendering error. Please refresh the page.</p>
                    <button 
                        onClick={() => window.location.reload()}
                        className="px-6 py-3 bg-sky-500 rounded-full font-semibold hover:bg-sky-400 transition-colors"
                    >
                        Refresh Page
                    </button>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
