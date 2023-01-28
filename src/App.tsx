import React, {FC, useEffect, useState} from 'react';

const App: FC = () => {

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setInterval(() => setIsVisible(true), 1000);
    }, []);

    const opacityClass = isVisible ? "opacity-100" : "opacity-0";

    return (
        <div className="flex h-screen w-screen bg-gradient-to-br from-cyan-400 to-blue-600 justify-center items-center">
            <h1 className="text-white text-7xl">
                <span className={`${opacityClass} transition-opacity ease-in-out duration-1000`}>
                    Welcome to Trolá!
                </span>
            </h1>
        </div>
    );
};

export default App;
