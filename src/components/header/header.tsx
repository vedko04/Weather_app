import {Icon, IconButton, TextField, TextFieldInput} from "@vega-ui/react";
import {Sun, Search} from "@vega-ui/icons";
import './header.css';

const Header = () => {
    return (
        <div className='header'>
            <div className='logo'>
                <div className="point"></div>
                <h1 className="name">METEO</h1>
            </div>
            <div className='search_bar'>
                <TextField>
                    <Icon><Search/></Icon>
                    <TextFieldInput placeholder="Поиск города…"/>
                </TextField>
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