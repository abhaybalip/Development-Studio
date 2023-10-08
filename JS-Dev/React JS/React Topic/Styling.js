import React from 'react';
import styles from './my-componenets/style.module.css'; 

class App extends React.Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div id='main-div'>
                <div className={styles.text}>
                    Hello this is div tag
                </div>
            </div>
        )
    }
}
export default App;