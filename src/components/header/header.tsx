import {Icon, IconButton, TextField, TextFieldInput} from "@vega-ui/react";
import {Sun, Search} from "@vega-ui/icons";
import './header.css';
import {useState} from "react";

interface HeaderProps{
    onSearch: (finalLocation: string) => void;
}

const Header = ({onSearch}: HeaderProps) => {

    const [localInput, setLocalInput] = useState<string>("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault(); // Теперь это сработает на теге <form>
        if (localInput.trim() === '') return;
        onSearch(localInput);
    };

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
                <IconButton>
                    <Icon>
                        <Sun/>
                    </Icon>
                </IconButton>
            </div>
        </div>
    );
};

export default Header;