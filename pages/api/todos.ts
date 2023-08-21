import { NextApiHandler } from "next";
import { getAllTodos } from "../../queries/todo";

const handler: NextApiHandler = async (req, res) => {
    console.log('todos called');
    if (req.method === 'GET') {
        try {
            const todoLists = await getAllTodos();
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