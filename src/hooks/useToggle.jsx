import React from "react"
import useUpdate from './useUpdate'

export default function useToggle(initialValue = false, onToggle = () => {}) {
    const [on, setOn] = React.useState(initialValue)

    function toggle() {
        setOn(prevOn => !prevOn)
    }

    useUpdate(onToggle, [on])
    return [on, toggle]
}

