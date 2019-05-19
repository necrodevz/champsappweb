import React from 'react'

import Parse from 'parse'



class App extends React.Component{
    render(){
        const Coaches = Parse.Object.extend("Coaches")
        const query =  Parse.Query(Coaches)
        let result =async () => await query.find()
        return(
            <div><ul>{this.result.map(coach => <li>{coach}</li>)}</ul></div>
        )
    }
}

export default App