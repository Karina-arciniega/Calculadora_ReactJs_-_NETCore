
const Buttons = (props) => {

    function add() {
        let result = document.getElementById("result").innerHTML
        let total = parseInt( result) + 1;
        document.getElementById("result").innerHTML = total
    }

    function subtract() {
        let result = document.getElementById("result").innerHTML
        let total = parseInt(result) - 1;
        document.getElementById("result").innerHTML = total
    }

    function multiply() {
        let result = document.getElementById("result").innerHTML
        let total = parseInt(result) * 1;
        document.getElementById("result").innerHTML = total
    }

    function divide() {
        let result = document.getElementById("result").innerHTML
        let total = parseInt(result) / 1;
        document.getElementById("result").innerHTML = total
    }

    function begin() {

        const value = props.url;
        console.log(value)
        switch (value) {

            case "add":
                add()
                break;
            case "subtract":
                subtract()
                break;
            case "multiply":
                multiply()
                break;
            case "divide":
                divide()
                break;
            default:
        }
    }

    return (
        <button type="button" className="operator btn btn-info" onClick={() => begin()}  >{props.title}</button>
    )
}

export default Buttons