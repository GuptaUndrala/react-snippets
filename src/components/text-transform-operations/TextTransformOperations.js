import React, { useState } from 'react';


function TextTransformOperations() {
    const [text, setText] = useState('mani');

    function btnHandllerUpperCase() {
        setText(text.toUpperCase());
    }

    function btnHandllerCamleCase() {
        setText((preText) => {
            const capText =
                preText.substring(0, 1).toUpperCase() +
                preText.substring(1).toLowerCase();
            return capText;
        });
    }

    function btnHandllerLowerCase() {
        setText(text.toLowerCase());
    }

    return (
        <div className='container'>
            <div className="row">
                <div className="col-12">
                    <h3>Text transform opreations</h3>
                </div>

                <div className="col-4">
                    <button className="btn btn-primary my-2" onClick={btnHandllerUpperCase}>
                        Upper case
                    </button>
                    <button
                        className="btn btn-secondary my-2"
                        onClick={btnHandllerCamleCase}
                    >
                        Capitalization
                    </button>
                    <button className="btn btn-success" onClick={btnHandllerLowerCase}>
                        Lower case
                    </button>
                </div>

                <div className="col-8 mt-3">
                    <div className="card p-5">
                        <h4 className="text">{text}</h4>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TextTransformOperations;
