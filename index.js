const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://admin:admin@apijz9.m89wce2.mongodb.net/miapp?retryWrites=true&w=majority')

// Crear modelo  /// NOMBRE - MODELO
const User = mongoose.model('User', {
    username: String,
    edad: Number,
})

// Los modelos se escriben con mayuscula, las instancias con minuscula \

const Crear = async () => {
    const user = new User ({username: 'Chanchito Triste', edad: 25 })
    const savedUser = await user.save(); // Await espera la promesa.
    console.log(savedUser);
}
//Crear();


const BuscarTodo = async () => {
    const users = await User.find();
    console.log(users)
}

//BuscarTodo();

const Buscar = async () => {
    const user = await User.find({username: 'Chanchito Feliz'}) // Devuelve un arreglo, hay que sacar el elemento para trabajarlo.
    console.log(user);
}

// Buscar();


const BuscarUno = async () => {
    const user = await User.findOne({username: 'Chanchito Feliz'})
    console.log(user);
}

//BuscarUno();

const actualizar = async () => {
    const user = await User.findOne({ usuario: 'Chanchito Triste'});
    console.log(user);
    user.edad = 30;
    await user.save();
}

//actualizar();
//actualizar();

// Eliminar
const Eliminar = async () => {
    const user = await User.findOne({username: 'Chanchito Triste'});
    console.log(user);
    if(user){
        await user.remove();
    }
}
//Eliminar();
//Eliminar();