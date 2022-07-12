import React, { useEffect, useState } from 'react';

const Dialogue = (props) => {
    const scripts = [
        "Welcome, buddy!",
        "Since you're here, let you come in and be my guest."
    ]
    const typeSpeed = 50
    const waitDuration = 1500

    const [line, updateLine] = useState('')
    const [scriptIndex, updateScriptIndex] = useState(0)

    function typeScript() {
        if (scriptIndex > scripts.length - 1) return
        if (line.length < scripts[scriptIndex].length) {
            updateLine(line.concat(scripts[scriptIndex].charAt(line.length)))
        }
    }

    function changeScript() {
        if (scriptIndex > scripts.length - 1) return
        if (line.length === scripts[scriptIndex].length) {
            updateLine('')
            updateScriptIndex(scriptIndex + 1)
        }
    }

    useEffect(() => {
        let timer = setTimeout(() => typeScript(), typeSpeed)
        return () => clearTimeout(timer)
    })

    useEffect(() => {
        let timer = setTimeout(() => changeScript(), waitDuration)
        return () => clearTimeout(timer)
    })

    return (
        <div id='intro-dialogue'>
            {line}
        </div>
    )
}

export default Dialogue