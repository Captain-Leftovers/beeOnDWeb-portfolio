import { useEffect, useState } from "react";



export default function useThemeSwitcher() {

    const preferDarkQuery = '(prefers-color-scheme: dark)';

    const [mode, setMode] = useState<'light' | 'dark'>(
        () => (localStorage.getItem('color-mode') as 'light' | 'dark') || 'light'
    );

    useEffect(() => {
        const mediaQuery = window.matchMedia(preferDarkQuery);
        const handleChange = () => {    
            setMode(mediaQuery.matches ? 'dark' : 'light');
        };
        mediaQuery.addEventListener('change', handleChange);
        return () => mediaQuery.removeEventListener('change', handleChange);
    }, []);

    useEffect(() => {
        localStorage.setItem('color-mode', mode);
    }, [mode]);




  return (
    <div>useThemeSwitcher</div>
  )
}