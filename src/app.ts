import express from 'express';
import { start } from 'repl';

class Application {
    app: express.Application;

    constructor(){
        this.app  = express();

       }   
       start(){
            this.app.listen(3000,()=>{
                console.log('Server started');
                
            });
        }
        
}

export default Application;