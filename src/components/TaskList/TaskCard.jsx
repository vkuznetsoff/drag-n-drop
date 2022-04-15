import { Badge, Box, Flex, Text } from "@chakra-ui/react"
import { useDrag } from "react-dnd"
import ItemTypes from "../../utils/itemTypes"

const TaskCard = ({ title, category, details, id}) => {

    const [{ isDragging }, drag] = useDrag({

        type: ItemTypes.CARD,
        item: {
            id,
            text: title
        },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    })

    return (
        <>
            <Box ref={drag} opacity={isDragging ? 0.5 : 1}
                bg={"tomato"} p='3' boxShadow={"lg"} rounded="xl" minH={"100px"}>
                <Flex m="3" justifyContent={"space-between"} align={"baseline"}>
                    <Text fontSize="2xl" textAlign="center" >{title}</Text>
                    <Badge variant='solid' colorScheme={category === "job" ? "green" : "yellow"} >{category}</Badge>
                </Flex>
                <Text align={"center"}>{details ? details : "  "}</Text>
                {/* <Divider /> */}
            </Box></>
    )
}

export default TaskCard