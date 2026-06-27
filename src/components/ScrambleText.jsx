import { useState, useEffect } from "react";

export default function ScrambleText({text}){
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*"

    const randomStart = Array.from({length: text.length} , () =>  chars[Math.floor(Math.random() * chars.length)]).join('')
    const [displayText, setDisplayText] = useState(randomStart)
    useEffect(() => {
        let ticks = 0
        const interval = setInterval(() =>{
            
            ticks++
            if (ticks >= text.length * 6){
                setDisplayText(text)
                clearInterval(interval)
                return
            }
            const shuffled = Array.from({length: text.length} , () => chars[Math.floor(Math.random() * chars.length)]).join('')
            setDisplayText(shuffled)
        }, 50)
        return () => clearInterval(interval)
    },[])
    return(<span>{displayText}</span>)
}