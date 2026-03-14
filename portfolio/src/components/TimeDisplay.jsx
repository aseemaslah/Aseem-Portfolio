import { useState, useEffect } from 'react';

const TimeDisplay = () => {
    const [time, setTime] = useState('');

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            setTime(now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', timeZone: 'Asia/Kolkata' }).toUpperCase());
        };
        updateTime();
        const timer = setInterval(updateTime, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <span className="text-xs font-mono tracking-widest text-gray-300 group-hover:text-white transition-colors">
            {time || '...'}
            <span className="text-sky-500/70 ml-1">IST</span>
        </span>
    );
};

export default TimeDisplay;
