'use client';
import { useEffect, useState } from 'react';

export default function Productos() {
    const [data, setdata] = useState([]);

    useEffect(() => {
        fetch('/api/productos')
            .then((res) => res.json())
            .then((data) => setdata(data));
    }, []);

    return (
        <>
            <div className="pb-10">
                <h1 className="text-4xl text-center">Productos</h1>
                <a href="/productos/nuevo" className="inline-flex rounded-md bg-blue-400 py-2 px-3">
                    Crear Nuevo
                </a>
            </div>
            <di className="flex justify-start pb-2">
                <table class="table-auto">
                    <thead>
                        <tr>
                            <th>Barcode</th>
                            <th>Nombre</th>
                            <th>Precio</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data &&
                            data.map((producto) => {
                                return (
                                    <tr key={producto._id}>
                                        <td>{producto.bar_code}</td>
                                        <td>{producto.nombre}</td>
                                        <td>{producto.precio}</td>
                                    </tr>
                                );
                            })}
                    </tbody>
                </table>
            </di>
        </>
    );
}
