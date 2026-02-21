import React, { useEffect, useState } from 'react'

export const Hero = () => {
    const [time, setTime] = useState("");

    useEffect(() => {
        const updateTime = () => {
            const t = new Date();
            t.setMinutes(t.getMinutes() + 10);

            setTime(
                t.toLocaleTimeString([], {
                    hour: "numeric",
                    minute: "2-digit",
                }).toLowerCase()
            );
        };

        updateTime();
        const interval = setInterval(updateTime, 60000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className='hero-root'>
            <div className='badge'>
                <span>Delaware franchise taxes are due by March 1</span>
                <svg width="16" height="16" fill="none">
                    <path stroke="#1E1F25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeOpacity=".5"
                        strokeWidth="1.25"
                        d="M8 4.75 11.25 8m0 0L8 11.25M11.25 8h-6.5">
                    </path>
                </svg>
            </div>
            <h1 className='hero-title'>Magically simplify <br />accounting and taxes</h1>
            <p className='hero-subtitle'>Automated bookkeeping. Effortless tax filing. Financial clarity. <br /> Set up in 10 mins. Back to building by {time}.</p>
            <div className='hero-cta'>
                <button className='btn'>Get started</button>
                <button className='btn btn-secondary'>
                    <span>Pricing</span>
                    <svg width="16" height="16" fill="none">
                        <path stroke="#1E1F25"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeOpacity=".5"
                            strokeWidth="1.25"
                            d="M8 4.75 11.25 8m0 0L8 11.25M11.25 8h-6.5">
                        </path>
                    </svg>
                </button>
            </div>
            <p className='hero-footer'>For US-based startups.</p>
        </div>
    )
}
