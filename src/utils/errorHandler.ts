import { Response } from 'express';

const handleHTTP = (res: Response, err: String) => {
    res.status(500).json({ error: err });
}

export { handleHTTP }