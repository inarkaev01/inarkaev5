import "./style.css";
//Задание 3
function SomeBlock() {
    const dark = false;
    let classResult;
    dark ? classResult ="dark" : classResult = "light";
    return(

        <div className={classResult}>
            Hello, ternary operator!
        </div>
    );
};
export default SomeBlock