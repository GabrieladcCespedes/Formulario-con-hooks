import { useState } from "react";

const FormularioPersona = (props) => {

    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [email, setEmail] = useState("");
    const [contrasena, setContrasena] = useState("");
    const [repetirContrasena, setRepetirContrasena] = useState("");

    const enviarFormularioPersona = (e) => {
        e.preventDefault();
        const nuevaPersona = {
            nombre, apellido, email, contrasena, repetirContrasena
        }
        props.actualizarListaPersonas(nuevaPersona);
        setNombre("");
        setApellido("");
        setEmail("");
        setContrasena("");
        setRepetirContrasena("");
    }

    return(
        <>
            <h2> Agregar nueva Persona </h2>
            <form onSubmit={enviarFormularioPersona}>
                <div>
                    <label htmlFor="nombre">
                        Nombre:
                    </label>
                    <input type="text"
                        id="nombre"
                        name="nombre"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="apellido">
                        Apellido:
                    </label>
                    <input type="text"
                        id="apellido"
                        name="apellido"
                        value={apellido}
                        onChange={(e) => setApellido(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="email">
                        Email:
                    </label>
                    <input type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="contrasena">
                        Contraseña:
                    </label>
                    <input type="password"
                        id="contrasena"
                        name="contrasena"
                        value={contrasena}
                        onChange={(e) => setContrasena(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="repetirContrasena">
                        Repetir Contraseña:
                    </label>
                    <input type="password"
                        id="repetirContrasena"
                        name="repetirContrasena"
                        value={repetirContrasena}
                        onChange={(e) => setRepetirContrasena(e.target.value)} />
                </div>
                
                <button> Agregar </button>
            </form>
        </>
    );
}

export default FormularioPersona;