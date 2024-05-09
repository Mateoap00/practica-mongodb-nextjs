import db from '@mongodb-nextjs/utils/db';
import { NextResponse } from 'next/server';

export const GET = async (req) => {
    try {
        const { pathname } = new URL(req.url); // Obtener la ruta de la URL
        const barcode = pathname.split('/').pop(); // Obtener el último segmento de la ruta como el parámetro
        console.log(barcode);
        const connection = await db();
        const data = await connection.collection('productos').find({ bar_code: barcode }).toArray();
        return NextResponse.json(data);
    } catch (error) {
        console.error(error);
        return NextResponse.error(500);
    }
};
