import './Characteristics.css';

interface Characteristics {
    name: string,
    discription: string,
    mainParameters: number | string,
    minorParameters: string,
}

const CharacteristicCell = ({mainParameters, minorParameters, name, discription} : Characteristics) => {
    return (
        <li className="characteristics_item">
            <div className="icon_name">
                <p className="name_characteristics">{name}</p>
            </div>
            <div className="number_name_characteristics">
                <h3 className="number number_characteristics">{mainParameters}</h3>
                <p className='underNumber'>{discription}</p>
            </div>
            <p className="zaglushka">{minorParameters}</p>
        </li>
    );
};

export default CharacteristicCell;