import React from "react"

function searchComponent(){
    
    return (
        <form className="form">
            <label htmlFor="query" className="Label">
            movie name
            </label>

            <input 
                className="input"
                type="text" 
                name="query" 
                placeholder="i.e. Jurassic Park"/>
            

            <button className="button" type="submsits">Search</button>

        </form>
    )
}

export default searchComponent