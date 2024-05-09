import db from '@mongodb-nextjs/utils/db';
import { NextResponse, NextRequest } from 'next/server';

export const GET = async () => {
    try {
        const connection = await db();
        const data = await connection.collection('productos').find().toArray();
        console.log(data);
        return NextResponse.json(data);
    } catch (error) {
        console.error(error);
        return NextResponse.error();
    }
};

export const POST = async (NextRequest) => {
    try {
        const datos = await NextRequest.json();
        const connection = await db();
        const returndata = await connection.collection('productos').insertOne(datos);
        return NextResponse.json(returndata);
    } catch (error) {
        console.error(error);
        return NextResponse.error(error);
    }
};

export const PUT = async (NextRequest) => {
    try {
        const datos = await NextRequest.json();
        const connection = await db();
        const returndata = await connection
            .collection('productos')
            .updateOne({ nombre: datos.nombre }, { $set: { precio: datos.precio } });
        return NextResponse.json(returndata);
    } catch (error) {
        console.error(error);
        return NextResponse.error(error);
    }
};

export const DELETE = async (NextRequest) => {
    try {
        const datos = await NextRequest.json();
        const connection = await db();
        const returndata = await connection
            .collection('productos')
            .deleteOne({ nombre: datos.nombre });
        return NextResponse.json(returndata);
    } catch (error) {
        console.error(error);
        return NextResponse.error(error);
    }
};
