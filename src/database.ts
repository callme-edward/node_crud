import mongoose from 'mongoose';

async function connect(){
    try
    {
        mongoose.connect('mongoddb://localhost/ts-app-tutorial');  
    } 
    catch (error) 
    {
        
    }
}