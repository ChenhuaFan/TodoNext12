import { Button, Input } from "@mui/joy"
import { ChangeEvent } from "react"

interface TodoFormProp {
    onSubmit: (event: ChangeEvent<HTMLFormElement>) => void;
    available: boolean
}

const TodoForm: React.FC<TodoFormProp> = ({ onSubmit, available }) => {

    return (
        <form onSubmit={onSubmit}>
            <Input
                name="content"
                id="content"
                placeholder="What do you want to do today?"
                endDecorator={
                    <Button
                        variant="solid"
                        color="primary"
                        disabled={!available}
                        type="submit"
                    >
                        Create
                    </Button>}
            />
        </form>
    )
}

export default TodoForm