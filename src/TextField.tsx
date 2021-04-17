import React, { useState, useRef } from "react";

interface Person {
    first_name: string;
    last_name: string; 
}

interface Props {
    text: string;
    i?: number;
    ok?: boolean;
    fn?: (name:string) => string;
    person: Person;
    handleChange: () => void;
};

export const TextField:React.FC<Props> = ({handleChange}) => {
    // const [ count, setCount ] = useState<Number | null>(5);
    const inputRef = useRef<HTMLInputElement>(null);
    const divRef = useRef<HTMLDivElement>(null);
    // setCount(11);
    return (
        <div ref={divRef}>
            <input ref={inputRef} onChange={handleChange}/>
        </div>
    );
};