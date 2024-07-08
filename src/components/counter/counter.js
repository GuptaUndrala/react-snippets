import React, { useState } from 'react';

function Counter() {
    const [count , setCount] = useState(0);

    function decrement() {
        setCount(count - 1);
    }

    function increment() {
        setCount(count + 1);
    }

    // const[city, setCity] = useEffect("Vizag");

    // useEffect(()=>{
    //     if(city === "Vizag"){
    //         setCity("Hyd")
    //     }else{
    //         setCity("Not updated")
    //     }
    // }, []);

    return (
        <div className="container">
            <div className="row justify-content-md-center">
                <div className="col-auto">
                    <div className="d-flex mb-5">
                        <button className="btn btn-danger" onClick={decrement}>Decrement value (-)</button>
                        <input className="form-control mx-2" value={count}/>
                        <button className="btn btn-success" onClick={increment}>Increment value (+)</button>
                    </div>
                </div>
            </div>

            {/* <div className='row'>
                <div className='col-12'>
                    <div className='city'>{city}</div>
                </div>
            </div> */}
        </div>
    );
}

export default Counter;