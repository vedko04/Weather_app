import './Characteristics.css';

const Characteristics = () => {
    return (
        <section className="Characteristics">
            <div className="container">
                <h3 className="name">Характерисики</h3>
                <p className="data">сейчас</p>
            </div>
            <div className="container_grid">
                <ul className="characteristics_list">
                    <li className="characteristics_item">
                        <div className="icon_name">
                            <p className="name_characteristics">Ветер</p>
                        </div>
                        <div className="number_name_characteristics">
                            <h3 className="number number_characteristics">4</h3>
                            <p>m/s</p>
                        </div>
                        <p className="zaglushka">Северо-западный</p>
                    </li>
                    <li className="characteristics_item">
                        <div className="icon_name">
                            <p className="name_characteristics">Влажность</p>
                        </div>
                        <div className="number_name_characteristics">
                            <h3 className="number number_characteristics">62</h3>
                            <p>%</p>
                        </div>
                        <p className="zaglushka">bar</p>
                    </li>
                    <li className="characteristics_item">
                        <div className="icon_name">
                            <p className="name_characteristics">Давление</p>
                        </div>
                        <div className="number_name_characteristics">
                            <h3 className="number number_characteristics">748</h3>
                            <p>mm</p>
                        </div>
                        <p className="zaglushka">Стабильное</p>
                    </li>
                    <li className="characteristics_item">
                        <div className="icon_name">
                            <p className="name_characteristics">УФ-индекс</p>
                        </div>
                        <div className="number_name_characteristics">
                            <h3 className="number number_characteristics">3</h3>
                        </div>
                        <p className="zaglushka">bar</p>
                    </li>
                    <li className="characteristics_item">
                        <div className="icon_name">
                            <p className="name_characteristics">Видимость</p>
                        </div>
                        <div className="number_name_characteristics">
                            <h3 className="number number_characteristics">10</h3>
                            <p>km</p>
                        </div>
                        <p className="zaglushka">Отличная</p>
                    </li>
                    <li className="characteristics_item">
                        <div className="icon_name">
                            <p className="name_characteristics">Осадки</p>
                        </div>
                        <div className="number_name_characteristics">
                            <h3 className="number number_characteristics">30</h3>
                            <p>%</p>
                        </div>
                        <p className="zaglushka">bar</p>
                    </li>
                    <li className="characteristics_item">
                        <div className="icon_name">
                            <p className="name_characteristics">Восход</p>
                        </div>
                        <div className="number_name_characteristics">
                            <h3 className="number number_characteristics">05:42</h3>
                        </div>
                        <p className="zaglushka">День 16ч 28м</p>
                    </li>
                    <li className="characteristics_item">
                        <div className="icon_name">
                            <p className="name_characteristics">Закат</p>
                        </div>
                        <div className="number_name_characteristics">
                            <h3 className="number number_characteristics">22:10</h3>
                        </div>
                        <p className="zaglushka">Сумерки 23:05</p>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Characteristics;