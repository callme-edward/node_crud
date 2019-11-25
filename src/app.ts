import express from 'express';
import morgan from 'morgan';
import exphbs from 'express-handlebars';
import path from 'path';

class Application {
    app: express.Application;

    constructor(){
        this.app  = express();
        this.setting();
        this.routes();
        this.middlewares();
       }
       setting(){
            this.app.set('port', 3000);
            this.app.set('views', path.join(__dirname, 'views'));
            this.app.engine('.hbs', exphbs({
                layoutsDir: path.join(this.app.get('views'), 'layouts'),
                partialsDir : path.join(this.app.get('views'),'partials')
            }))
       } 
       routes(){

       }  

       middlewares(){

       }
       start(){
            this.app.listen(this.app.get('port'),()=>{
                console.log('Server started on port ', this.app.get('port'));
                
            });
        }
        
}

export default Application;