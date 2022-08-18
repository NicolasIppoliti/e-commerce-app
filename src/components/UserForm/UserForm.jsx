import { useState } from 'react'

const UserForm = () => {
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    })

    const handleSubmit = (evt) => {
        evt.preventDefault();
        // console.log(userData);
    }

    const inputChangeHandler = (evt) => {
        const input = evt.target;

        const value = input.value;
        const inputName = input.name;

        let copyUserData = {...userData};

        copyUserData[inputName] = value;
        setUserData(copyUserData);
    }

    const handleReset = (evt) => {
        evt.preventDefault();
        setUserData({
            name: '',
            email: '',
            phone: '',
            message: '',
        })
    }

    return (
        <div className="container mx-auto mt-24">
            <div className="max-w-2xl p-5 mx-auto my-10 bg-white rounded-md shadow-sm">
                <div className="text-center mb-6">
                    <h1 className="my-3 text-3xl font-semibold text-gray-700">¿Tuviste un problema con tu compra?</h1>
                    <p className="text-gray-400">Rellena el siguiente formulario para enviarnos un mensaje.</p>
                </div>
            <div>
            <form onSubmit={handleSubmit}>
            <div className="mb-6">
                    <label htmlFor="name" className="block mb-2 text-sm text-gray-600">Nombre Completo</label>
                    <input value={userData.name} onChange={inputChangeHandler} type="text" name="name" placeholder="Elon Musk" required className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"/>
                </div>
                <div className="mb-6">
                    <label htmlFor="email" className="block mb-2 text-sm text-gray-600">Correo Electronico</label>
                    <input value={userData.email} onChange={inputChangeHandler} type="email" name="email" placeholder="ejemplo@email.com" required className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"/>
                </div>
                <div className="mb-6">
                    <label htmlFor="phone" className="text-sm text-gray-600">Numero de Telefono</label>
                    <input value={userData.phone} onChange={inputChangeHandler} type="text" name="phone" placeholder="2932-12-3456" required className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"/>
                </div>
                <div className="mb-6">
                    <label htmlFor="message" className="block mb-2 text-sm text-gray-600">Tu Mensaje</label>
                    <textarea value={userData.message} onChange={inputChangeHandler} rows="5" name="message" placeholder="Ingrese su mensaje" className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300" required></textarea>
                </div>
                <div className="mb-6">
                    <button onClick={handleReset} type="submit" className="w-full px-2 py-4 text-white bg-indigo-500 rounded-md  focus:bg-indigo-600 focus:outline-none">Enviar Mensaje</button>
                </div>
            </form>
            </div>
        </div>
    </div>
)}

export default UserForm;