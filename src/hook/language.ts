import {useEffect, useState} from "react";

const languages = [
    { hello: 'hello', today: 'today' },
    { hello: 'hola', today: 'hoy' },
    { hello: 'olá', today: 'hoje' },
    { hello: 'hallo', today: 'heute' },
    { hello: 'hej', today: 'i dag' },
    { hello: '你好', today: '今天' },
];

const numLanguages = languages.length;
const timeoutMillis = 3_000;

function randomInt(exclusiveMax: number): number {
    const realRandom = Math.random() * exclusiveMax;
    const intRandom = Math.floor(realRandom);
    return intRandom;
}

export default function useLanguage() {

    const [index, setIndex] = useState(randomInt(numLanguages));

    const pickNextIndex = () => {
        const timeout = setTimeout(() => {
            const nextIndex = (index + 1) % numLanguages;
            setIndex(nextIndex);
        }, timeoutMillis);
        return () => clearTimeout(timeout);
    };

    useEffect(pickNextIndex, [index]);

    return languages[index];
}