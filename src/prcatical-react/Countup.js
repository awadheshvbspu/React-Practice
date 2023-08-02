import React from 'react';
import CountUp,{useCountUp} from 'react-countup';

export default function Countup() {
//    const{CountUp,start,pauseResume,reset,update} = useCountUp({duration:5, end:10000})
  return (
    <>
    <div>
    {/* <div>
        <h1>{CountUp}</h1>
        <button onClick={start}>start</button>
        <button onClick={reset}>Reset</button>
        <button onClick={pauseResume}>Pause</button>
        <button onClick={()=>update(2000)}>update to 2000</button>
    </div> */}
          <h1>
        <CountUp end={200} />
        </h1>
        <br/>
        <h1>
        <CountUp end={200} duration={5} />
        </h1>
        <br/>
        <h1>
        <CountUp  end={1000} duration={5} prefix='$' decimals={2} />
        </h1>
        <h1>
        <CountUp  end={1000} duration={5} suffix='USD' decimals={2} />
        </h1>
        </div>
        </> 
  )
}
