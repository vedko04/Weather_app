import {Icon, IconButton, TextField, TextFieldInput} from "@vega-ui/react";
import {Sun, Search, Moon} from "@vega-ui/icons";
import './header.css';
import {useState} from "react";

interface HeaderProps{
    onSearch: (finalLocation: string) => void;
}

type themeIcon = 'light' | 'dark';

const themeIcons: Record<string, React.ComponentType> = {
    dark: Sun,
    light: Moon,
}

const Header = ({onSearch}: HeaderProps) => {

    const [localInput, setLocalInput] = useState<string>("");

    const [theme, setTheme] = useState<themeIcon>('light');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (localInput.trim() === '') return;
        onSearch(localInput);
    };

    const changeIcon = () =>{
        setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
    }

    const CurrentIcon = themeIcons[theme];

    return (
        <div className='header'>
            <div className='logo'>
                <div className="point"></div>
                <h1 className="name">METEO</h1>
            </div>
            <div className='search_bar'>
                <form onSubmit={handleSubmit}>
                    <TextField>
                        <Icon><Search/></Icon>
                        <TextFieldInput placeholder="Поиск города…" value={localInput} onChange={(e) => setLocalInput(e.target.value)}/>
                    </TextField>
                </form>
                <IconButton onClick={changeIcon}>
                    <Icon>
                        <CurrentIcon/>
                    </Icon>
                </IconButton>
            </div>
        </div>
    );
};

export default Header;