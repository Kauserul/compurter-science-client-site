import React, { useEffect, useState } from 'react';

const DarkMode = () => {
    const [theme, setTheme] = useState('light-theme')

    const toggleTheme = () =>{
        if(theme === 'dark-theme'){
            setTheme('light-theme')
        }
        else{
            setTheme('dark-theme')
        }
    }

    useEffect( ()=>{
        document.body.className = theme
    }, [theme])
    return (
        <div>
            <a onClick={()=> toggleTheme()}>
                Toggle mode
            </a>
        </div>
    );
};

export default DarkMode;