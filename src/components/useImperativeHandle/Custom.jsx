import React, { forwardRef, useRef, useState, useImperativeHandle } from 'react'

const Custom = forwardRef((props, ref) => {
    const inputRef = useRef()
    const [value, setValue] = useState('')

    useImperativeHandle(ref, () => ({
        focus: () => {
            inputRef.current.focus()
        },
        clear: () => {
            setValue('')
            inputRef.current.focus()
        },
        getValue: () => value
    }))

    return (
        <input
            ref={inputRef}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            {...props}
        />
    )
})

export default Custom