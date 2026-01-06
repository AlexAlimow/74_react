import './styles.css';

function Button({ name, onButtonClick }) {
    return (
        <button className="button" onClick={onButtonClick}>
            {name}
        </button>
    )
}

export default Button;

// props - это объект, который содержит все параметры, переданные в компонент при его вызове.
// В данном случае мы передаем параметр "name", который используется для отображения текста на кнопке.
// Например, при вызове <Button name="plus" /> в компонент Button передается объект props = { name: "plus" }.
