'use client';

import { useState, useEffect } from 'react';

export default function NuevoProducto() {
    const [data, setdata] = useState({ nombre: '', precio: 0, bar_code: '' });

    const handleChange = (e) => {
        setdata({ ...data, [e.target.name]: e.target.value });
        console.log(data);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await fetch('/api/productos', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const result = await res.json();
        console.log(result);
    };

    return (
        <>
            <div>
                <form className="boder rounded-md" onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <strong>Nombre del producto</strong>
                        <input
                            type="text"
                            className="border rounded-md text-black"
                            name="nombre"
                            onChange={handleChange}
                        />
                    </div>

                    <div className="mb-4">
                        <strong>Codigo de Barras</strong>
                        <input
                            type="text"
                            className="border rounded-md text-black"
                            name="bar_code"
                            onChange={handleChange}
                        />
                    </div>

                    <div className="mb-4">
                        <strong>Precio</strong>
                        <input
                            type="text"
                            className="border rounded-md text-black"
                            name="precio"
                            onChange={handleChange}
                        />
                    </div>

                    <button type="submit" className="inline-flex rounded-md bg-blue-400 py-2 px-3">
                        Guardar
                    </button>
                </form>
            </div>
        </>
    );
}
