import { Box } from "@chakra-ui/react"
import { useDrop } from "react-dnd"
import ItemTypes from "../../utils/itemTypes"

const BoxTarget = () => {
    const [{isOver}, drop] = useDrop({
        accept: ItemTypes.CARD,
        drop: (item) => console.log(item),
        collect: monitor => ({
            isOver: !!monitor.isOver()
        })
    })

    return <Box ref={drop} minH="100px" w={"100%"} bg={isOver ? 'blackAlpha.400' : undefined } >

    </Box>
}

export default BoxTarget