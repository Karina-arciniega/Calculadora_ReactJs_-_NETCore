import "bootstrap/dist/css/bootstrap.min.css"
import "./css/styleFile.css"

import $ from 'jquery';
import { useState } from "react"

const App = () => {

    /*    creación de un hook   */

    const [result,setResult] = useState(0)

    /*  
     *      result : es el estado de la variable 
     *      setResult : actualiza el estado de la variable
    */

    $(document).ready(function () {
      
            let body = document.querySelector('body');
            let result = document.querySelector('#result');

            let dark_mode_btn = document.querySelector('.dark_mode_btn');
            let clear = document.querySelector('#clear');
            let history = document.querySelector('#history');
            let equalTo = document.querySelector('#equalTo');
            let delete_single_num = document.querySelector('#delete_single_num');

            let Normal_btn = document.querySelectorAll('#Normal_btn');


            let initial_value = "";

            Normal_btn.forEach((Normal_btn, index) => {
                Normal_btn.addEventListener('click', function () {
                    let text = this.innerHTML;
                    initial_value += text;
                    result.innerHTML = initial_value;
                });
            });

            /*equal to button action*/
            equalTo.addEventListener('click', function () {
                if (result.innerHTML != "") {
                    history.innerHTML = result.innerHTML;
                    result.innerHTML = eval(result.innerHTML);
                    initial_value = eval(result.innerHTML);
                } else {
                    alert('please enter any Number');
                }
            });

            /*clear all number*/
            clear.addEventListener('click', function () {
                result.innerHTML = "";
                initial_value = "";
                history.innerHTML = "";
            });

            /*delete single number*/
        delete_single_num.addEventListener('click', function () {
            var actual = result.innerHTML;
            console.log("actual" + actual)
            if (actual != "") {
                actual = result.innerHTML.substring(0, result.innerHTML.length - 1);
                result.innerHTML = actual;
            }
            initial_value = result.innerHTML;
            });

    });

    return (
        <div>
            <h5> Welcome to Personal Calculator </h5>
            <br></br>
            <div className="main">
               
                <div className="display">
                    <div id="result" style={{ background: "gray", borderRadius: "10px" }} ></div>
                    
                    <p id="history"><i className="fa fa-history" aria-hidden="true"></i>history</p>
                    
                   
                </div>

                <div className="buttons">

                    <button id="clear">AC</button>
                    <button id="delete_single_num"><i  aria-hidden="true" ></i>DEL</button>
                    <button id="Normal_btn">/</button>
                    <button id="Normal_btn">*</button> </div>

                <div className="buttons">

                    <button id="Normal_btn">7</button>
                    <button id="Normal_btn">8</button>
                    <button id="Normal_btn">9</button>
                    <button id="Normal_btn">-</button>

                </div>

                <div className="buttons">

                    <button id="Normal_btn">4</button>
                    <button id="Normal_btn">5</button>
                    <button id="Normal_btn">6</button>
                    <button id="Normal_btn">+</button>

                </div>

                <div className="buttons">

                    <button id="Normal_btn">1</button>
                    <button id="Normal_btn">2</button>
                    <button id="Normal_btn">3</button>
                    <button id="Normal_btn">.</button>

                </div>

                <div className="buttons">

                    <button id="Normal_btn">0</button>
                    <button id="Normal_btn">00</button>
                    <button id="equalTo">=</button>

                </div>
                <br></br>
            </div> 
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            
            Created app with ReactJs and AspNetCore
        </div>
    )
}

export default App;

