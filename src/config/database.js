import { connect } from "mongoose";

export default function connection() {
    connect('mongodb://localhost:27017/dbTest', {
        useNewUrlParser: true,
        useUnifiedTopology: true,      
    })
    .then(() => console.log('Conectado a MongoDB'))
    .catch((err) => console.error('Error de conexión:', err));
}