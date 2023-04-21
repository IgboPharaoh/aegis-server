import axios from 'axios';
import cors from 'cors';

export const Axios = async (method?: string, parameter?: any) => {
    const USER = 'test';
    const PASS = 'test';
    const TESTNET_PORT = 19832;

    const RPC_URL = `http://127.0.0.1:${TESTNET_PORT}/`;
    const body = {
        jsonrpc: '1.0',
        id: 'curltext',
        method: method,
        params: parameter,
    };

    try {
        const response = await axios.post(RPC_URL, JSON.stringify(body), {
            auth: {
                username: USER,
                password: PASS,
            },
        });
        return response;
    } catch (error) {
        throw error;
    }
};
