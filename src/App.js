import React, { useState, useEffect } from 'react'

const App = () => {
    // -----  1'st Part of useEffect ----- 
    // const [resourceType, setResourceType] = useState('posts')
    // const [items, setItem] = useState([])

    // console.log('render')
    
    // useEffect(() => {
    //     console.log('change');
    // }, [resourceType])

    // useEffect(() => {
    //     console.log('change');
    // }, [])

    // useEffect(() => {
    //     // console.log('change');
    //     fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
    //         .then(response => response.json())
    //         .then(json => {
    //             console.log(json);
    //             setItem(json)
    //         })
    // }, [resourceType])

    // ------ end of 1'st Part (useEffect) --------

    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    const handleWindowWidth = () => {
        setWindowWidth(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener('resize', handleWindowWidth)

        // to remove the event listeners, before any further processing for event
        return () => {
            window.removeEventListener('resize', handleWindowWidth)
        }
    }, [])

    return (
        // -----  1'st Part of useEffect ----- 
        // <>
        //     <div>
        //         <button onClick={() => setResourceType('posts')}>Posts</button>
        //         <button onClick={() => setResourceType('users')}>Users</button>
        //         <button onClick={() => setResourceType('comments')}>Comments</button>
        //     </div>
        //     <h1>{resourceType}</h1>
        //     {
        //         items.map(item => {
        //             return <pre>{JSON.stringify(item)}</pre>
        //         })
        //     }
        // </>

        // ------ end of 1'st Part (useEffect) --------

        <div>{windowWidth}</div>
    )
}

export default App
