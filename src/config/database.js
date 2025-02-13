import { connect } from "mongoose";

export default function connectionDb() {
    connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,      
    })
    .then(() => console.log('Conectado a MongoDB'))
    .catch((err) => console.error('Error de conexión:', err));
}