import { NextApiHandler } from "next";
import { getTodos } from '../../../queries/todos';

const handler: NextApiHandler = async (req, res) => {
    if (req.method === 'GET') {
        try {
            const todoLists = await getTodos();
            res.status(200).json({
                data: todoLists
            })
        } catch (error) {
            console.error("Error fetching todo lists:", error);
            res.status(500).json({
                error: 'Internal  Error'
            })
        }
    } else {
        res.status(404).json({ error: "Not Found" });
    }
}

export default handler;