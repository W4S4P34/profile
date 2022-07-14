import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


const IntroDialogue = (props) => {
    const scripts = [
        "Welcome, buddy!",
        "Since you're here, let you come in and be my guest."
    ]

    // Auto-scripting
    // const typeSpeed = 70
    // const waitDuration = 1000
    // const trimDuration = 500

    // const [script, setScript] = useState('')
    // const [end, setEnd] = useState(false)
    // const [index, setIndex] = useState(0)

    // function typeScript() {
    //     setScript(script.concat(scripts[index].charAt(script.length)))
    // }

    // function endScript() {
    //     setEnd(true)
    //     setScript('')
    // }

    // function changeScript() {
    //     setEnd(false)
    //     setIndex(index + 1)
    // }

    // useEffect(() => {
    //     if (index > scripts.length - 1) return

    //     let timerType, timerWait, timerTrim

    //     if (script.length < scripts[index].length && end === false) {
    //         timerType = setTimeout(() => typeScript(), typeSpeed)
    //     }
    //     if (script.length === scripts[index].length && end === false) {
    //         timerWait = setTimeout(() => endScript(), waitDuration)
    //     }
    //     if (script.length < scripts[index].length && end === true) {
    //         timerTrim = setTimeout(() => changeScript(), trimDuration)
    //     }
    //     return () => {
    //         clearTimeout(timerType)
    //         clearTimeout(timerWait)
    //         clearTimeout(timerTrim)
    //     }
    // })

    // Manual-scripting
    const navigate = useNavigate()

    const typeSpeed = 70

    const [script, setScript] = useState('')
    const [index, setIndex] = useState(0)

    function typeScript() {
        if (script.length < scripts[index].length) {
            setScript(script.concat(scripts[index].charAt(script.length)))
        }
    }

    function completeScript() {
        if (script.length < scripts[index].length) {
            setScript(scripts[index])
        }
        else if (script.length === scripts[index].length && index < scripts.length - 1) {
            setScript('')
            setIndex(index + 1)
        }
        else if (index === scripts.length - 1) {
            navigate('/home')
        }
    }

    useEffect(() => {
        let timerType = setTimeout(() => typeScript(), typeSpeed)
        return () => clearTimeout(timerType)
    })

    return (
        <div id='dialogue-container' className='d-flex flex-column justify-content-between' onClick={() => completeScript()}>
            <Link to='/home'
                id='skip-button'
                className='d-flex pt-4 ps-auto pe-4 align-self-end text-reset text-decoration-none user-select-none'>
                Skip &gt;
            </Link>
            <div className='d-flex px-4 align-self-center user-select-none'>
                {script}
            </div>
            <div
                id='continue-label'
                className='d-flex pb-4 ps-auto pe-4 align-self-end user-select-none'>
                Click anywhere to continue
            </div>
        </div>
    )
}

export default IntroDialogue