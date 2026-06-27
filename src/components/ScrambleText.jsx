import { useState, useEffect } from "react";

export default function ScrambleText({text}){
    const chars = "!@#$%&*abcdefghijklmnopqrstuvwxyz"

    const randomStart = Array.from({length: text.length} , () =>  chars[Math.floor(Math.random() * chars.length)]).join('')
    const [displayText, setDisplayText] = useState(randomStart)
    useEffect(() => {
        let revealIndex = 0
        let tickCounter = 0
        const interval = setInterval(() =>{
            
            if (revealIndex >= text.length){
                setDisplayText(text)
                clearInterval(interval)
                return
            }
            const scrambled = text.split('').map((char, i ) => i < revealIndex ? char : char[Math.floor(Math.random() * chars.length)]).join('')
            setDisplayText(scrambled)
            tickCounter++
            if (tickCounter % 8 == 0){
                revealIndex++
            }
        }, 40)
        return () => clearInterval(interval)
    },[])
    return(<span>{displayText}</span>)
}