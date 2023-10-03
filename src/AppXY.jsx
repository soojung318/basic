import React, {useState, useSyncExternalStore} from 'react';
import './AppXY.css'

export default function AppXY() {
    // const [x, setX] = useState(0);
    // const [y, setY] = useState(0);

    // 위의 두 객체를 한 번에 다룸
    const [position, setPosition] = useState({x: 0, y: 0,z:0});
    return (
        <div className='container' onPointerMove={(e) => {
            console.log(e.clientX, e.clientY);
            // setX(e.clientX);
            // setY(e.clientY);

            // 두객체를 한 번에 다룰 때
            // setPosition({x: e.clientX, y: e.clientY});

            // 만약 수평으로만 이동이 가능하다면?
            //setPosition((prev) => ({x: e.clientX, y: prev.y}));
            setPosition((prev)=>({ ...prev, x: e.clientX}));

        }}>
            <div className='pointer' style={{transform: `translate(${position.x}px, ${position.y}px)`}}></div>
        </div>
    );
}
