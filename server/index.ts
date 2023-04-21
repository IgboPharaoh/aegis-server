import cors from 'cors';

import express, { Application, Request, Response } from 'express';
import { Axios } from './axios';

const app: Application = express();
app.use(cors({ origin: '*' }));

app.get('/', (req: Request, res: Response) => {
    res.send(`server set up`);
});

app.get('/descriptor-address', async (req: Request, res: Response) => {
    const { descriptor } = req.params;
    try {
        // const response = await Axios('listunspent');
        const response = await Axios('deriveaddresses', descriptor);
        console.log(response.data.result);

        res.json({
            data: response.data.result,
        });
    } catch (error) {
        console.error(error);
    }
});

const GetUnspentUtxo = async () => {
    try {
        const response = await Axios('listunspent');
        console.log(response.data.result);
        return response.data.result;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

GetUnspentUtxo();

app.listen(3002, () => {
    console.log(`application is running at http://localhost:${3002}`);
});
