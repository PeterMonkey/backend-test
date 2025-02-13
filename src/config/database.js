import { connect } from "mongoose";

export default function connectionDb() {
    connect('mongodb://localhost:27018/dbTest', {
        useNewUrlParser: true,
        useUnifiedTopology: true,      
    })
    .then(() => console.log('Conectado a MongoDB'))
    .catch((err) => console.error('Error de conexión:', err));
}