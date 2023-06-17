import { useEffect, useState } from "react";



export default function useThemeSwitcher() {

    const preferDarkQuery = '(prefers-color-scheme: dark)';

    const [mode, setMode] = useState<'light' | 'dark'>()

    useEffect(() => {
        const mediaQuery = window.matchMedia(preferDarkQuery);
        const usePref = window.localStorage.getItem('theme') as 'light' | 'dark' | null;
        const handleChange = () => {
            if (usePref) {
                let check = usePref === 'dark' ? 'dark' : 'light';
                setMode(check as 'light' | 'dark')
                if (check === 'dark') {
                    document.documentElement.classList.add('dark');
                }
                else {
                    document.documentElement.classList.remove('dark');
                }
            }
            else {
                let check = mediaQuery.matches ? 'dark' : 'light';
                setMode(check as 'light' | 'dark')
                if (check === 'dark') {
                    document.documentElement.classList.add('dark');
                }
                else {
                    document.documentElement.classList.remove('dark');
                }
            }
        }
        mediaQuery.addEventListener('change', handleChange);
        handleChange();
        return () => mediaQuery.removeEventListener('change', handleChange);
    }, [])

    const toggleTheme = () => {
        if (mode === 'dark') {
            window.localStorage.setItem('theme', 'light');
            setMode('light');
            document.documentElement.classList.remove('dark');
        }
        else {
            window.localStorage.setItem('theme', 'dark');
            setMode('dark');
            document.documentElement.classList.add('dark');
        }
    }



  return [mode, toggleTheme] 
}