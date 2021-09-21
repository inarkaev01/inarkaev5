import React from 'react';
//Задание 2
//Пропсы невозможно вставить под условию (только через переменных)
function BadComponent(props) {
    //const x = props.hours ==="ничего"
    return (
        <div>
            {props ? "первый текст" : "второй текст"}
        </div>
    );
};
BadComponent()

export default BadComponent;