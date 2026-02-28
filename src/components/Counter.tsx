import { useState, type FC } from 'react';

export const Counter: FC = () => {
    const [count, setCount] = useState(0);
    const a = '33333';

    return (
        <div className="counter">
            <button onClick={() => setCount((c) => c + 1)}>count is {count + a}</button>
        </div>
    );
};
