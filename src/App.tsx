import React from 'react';
import './style.scss';

interface Props { }
const App:React.FC<Props> = () => (
    <div className="box">
        Hello, React.
        <span>I am Jack. I am a React dev：）~~~</span>
    </div>
);

export default App;
