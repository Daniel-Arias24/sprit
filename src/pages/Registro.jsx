import { useState } from "react";

function Registro() {
    const [formData, setFormData] = useState({
        nombre: "",
        correo: "",
        telefono: "",
        contrasena: "",
        confirmarContrasena: "",
    });

    const [formErrors, setFormErrors] = useState({});
    const [mensajeColor, setMensajeColor] = useState("green");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        let errors = {};

        if (!formData.nombre) errors.nombre = "El nombre es obligatorio";
        if (!formData.correo) errors.correo = "El correo es obligatorio";
        if (!formData.telefono) errors.telefono = "El teléfono es obligatorio";
        if (!formData.contrasena)
            errors.contrasena = "La contraseña es obligatoria";
        if (formData.contrasena !== formData.confirmarContrasena) {
            errors.confirmarContrasena = "Las contraseñas no coinciden";
        }

        if (Object.keys(errors).length > 0) {
            setFormErrors(errors);
            setMensajeColor("red");
        } else {
            setFormErrors({ general: "Registro exitoso 🎉" });
            setMensajeColor("green");
            setFormData({
                nombre: "",
                correo: "",
                telefono: "",
                contrasena: "",
                confirmarContrasena: "",
            });
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-500 to-purple-600">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center">Registro</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Nombre */}
                    <div className="mb-4">
                        <label
                            className="block text-sm font-medium mb-1"
                            htmlFor="nombre"
                        >
                            Nombre Completo
                        </label>
                        <input
                            type="text"
                            id="nombre"
                            name="nombre"
                            value={formData.nombre}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Ingresa tu nombre completo"
                        />
                        {formErrors.nombre && (
                            <p className="text-red-500 text-sm mt-1">{formErrors.nombre}</p>
                        )}
                    </div>

                    {/* Correo */}
                    <div className="mb-4">
                        <label
                            className="block text-sm font-medium mb-1"
                            htmlFor="correo"
                        >
                            Correo Electrónico
                        </label>
                        <input
                            type="email"
                            id="correo"
                            name="correo"
                            value={formData.correo}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Ingresa tu correo electrónico"
                        />
                        {formErrors.correo && (
                            <p className="text-red-500 text-sm mt-1">{formErrors.correo}</p>
                        )}
                    </div>

                    {/* Teléfono */}
                    <div className="mb-4">
                        <label
                            className="block text-sm font-medium mb-1"
                            htmlFor="telefono"
                        >
                            Teléfono
                        </label>
                        <input
                            type="tel"
                            id="telefono"
                            name="telefono"
                            value={formData.telefono}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Ingresa tu número de teléfono"
                        />
                        {formErrors.telefono && (
                            <p className="text-red-500 text-sm mt-1">{formErrors.telefono}</p>
                        )}
                    </div>

                    {/* Contraseña */}
                    <div className="mb-4">
                        <label
                            className="block text-sm font-medium mb-1"
                            htmlFor="contrasena"
                        >
                            Contraseña
                        </label>
                        <input
                            type="password"
                            id="contrasena"
                            name="contrasena"
                            value={formData.contrasena}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Ingresa tu contraseña"
                        />
                        {formErrors.contrasena && (
                            <p className="text-red-500 text-sm mt-1">
                                {formErrors.contrasena}
                            </p>
                        )}
                    </div>

                    {/* Confirmar contraseña */}
                    <div className="mb-4">
                        <label
                            className="block text-sm font-medium mb-1"
                            htmlFor="confirmarContrasena"
                        >
                            Confirmar Contraseña
                        </label>
                        <input
                            type="password"
                            id="confirmarContrasena"
                            name="confirmarContrasena"
                            value={formData.confirmarContrasena}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Confirma tu contraseña"
                        />
                        {formErrors.confirmarContrasena && (
                            <p className="text-red-500 text-sm mt-1">
                                {formErrors.confirmarContrasena}
                            </p>
                        )}
                    </div>
                    {formErrors.general && (
                        <p
                            className={`text-${mensajeColor}-500 text-sm mt-1 text-center`}
                        >
                            {formErrors.general}
                        </p>
                    )}

                    <button
                        type="submit"
                        className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                    >
                        Registrarse
                    </button>
                </form>

                <p className="mt-4 text-center">
                    ¿Ya tienes una cuenta?{" "}
                    <a href="/login" className="text-blue-600 hover:underline">
                        Inicia sesión
                    </a>
                </p>
            </div>
        </div>
    );
}

export default Registro;