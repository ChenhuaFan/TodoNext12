import { NextApiHandler } from "next";
import { createTodo, getTodoById } from "../../queries/todo";

const handler: NextApiHandler = async (req, res) => {
    switch (req.method) {
        case 'GET':
            try {
                const todoLists = await getTodoById('1');
                res.status(200).json({
                    data: todoLists
                })
            } catch (error) {
                console.error("Error fetching todo lists:", error);
                res.status(500).json({
                    error: 'Internal  Error'
                })
            }
            break;
        case 'POST':
            try {
                // fix: receive a form data and get name from it
                const { name, parentId, todoListId } = req.body;
                const todoLists = await createTodo({
                    name,
                    parentId: '',
                    todoListId: ''
                });
                res.status(200).json({
                    data: todoLists
                })
            } catch (error) {
                console.error("Error fetching todo lists:", error);
                res.status(500).json({
                    error: 'Internal  Error'
                })
            }
            break
        default:
            res.status(404).json({ error: "Not Found" });
            break;
    }
}

export default handler;