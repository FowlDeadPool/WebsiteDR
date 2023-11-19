import React, { useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";

export default function ML_model(){
    const [respred,setrespred] = useState('');
    const navigate = useNavigate();
    const model_predict = () => {
        axios.post('http://127.0.0.1:5000/predict' ,{
            respred: respred
        })
        .then(function (response) {
            console.log(response);       
            navigate("/")
        })
    }
    return ( 
    <div>
        <h3> Result</h3>
        <form>
            <div> <input type="respred" value={respred} onChange={(e) => setrespred(e.target.value)}/></div>
            <div>
                <button type="button" onClick={model_predict}>Predict</button>
            </div>
        </form>
    </div>
    );
}
