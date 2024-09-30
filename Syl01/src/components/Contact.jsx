import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [isPopupVisible, setPopupVisible] = useState(false); // Estado para el popup

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes manejar el envío del mensaje, como enviarlo a una API o a un servicio de backend.
        console.log('Mensaje enviado:', formData);
        
        // Mostrar el popup de confirmación
        setPopupVisible(true);

        // Limpiar el formulario después de enviar
        setFormData({
            name: '',
            email: '',
            message: '',
        });
    };

    const handleClosePopup = () => {
        setPopupVisible(false); // Ocultar el popup
    };

    return (
        <div className="contact-container">
            <h2>CONTACTO</h2>
            <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                    <label htmlFor="name">Nombre:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Correo Electrónico:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Mensaje:</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button className="botoncontacto" type="submit">Enviar Mensaje</button>
            </form>

            {/* Popup de Confirmación */}
            {isPopupVisible && (
                <div className="popup">
                    <div className="popup-content">
                        <h3>¡Mensaje Enviado!</h3>
                        <br></br>
                        <p>Te daremos una respuesta lo más pronto posible al correo que ingresaste.</p>
                        <br></br>
                        <p>¡Ten un lindo dia!</p>
                        <button onClick={handleClosePopup}>Cerrar</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Contact;
