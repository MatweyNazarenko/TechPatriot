import Comb from "./Comb";

const Combs = ()=>{
    return(
        <div className="combs">
            {/* <Comb titleBack="titleBack" descBack="rem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lor">Title</Comb> */}
            <div className="combs__content">
                <Comb to="/view" titleBack="3D Просмотр" descBack="Интерактивные 3D-модели изобретений ВОВ и факты о них">3D Просмотр</Comb>
                <Comb to="/timeline" titleBack="Хронология" descBack="Лента времени из ключевых открытий и разработок Второй Мировой войны">Хронология</Comb>
                <Comb to="/persons" titleBack="Личности" descBack="Выдающиеся конструкторы, ученые и медики, чья работа сыграла важную роль в Великой Отечественной войне">Личности</Comb>
                {/* <Comb to="/statement" titleBack="Правда или ложь" descBack="">Правда или ложь</Comb> */}
            </div>
        </div>
    )
}

export default Combs;