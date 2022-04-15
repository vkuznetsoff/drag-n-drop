import { Badge, Box, Divider, Flex, Grid, GridItem, SimpleGrid, Stack, Text } from "@chakra-ui/react"
import { useState } from "react"
import { DndProvider } from "react-dnd"
import BoxTarget from "./BoxTarget"
import TaskCard from "./TaskCard"

const TaskList = () => {

    const [taskList, setTaskList] = useState([
        {
            id: (Math.random() * 100).toFixed(0),
            status: "wip",
            title: "Buy food! 🍓",
            category: "chorus",
            details: "2kg meet, bread, fruits"
        },
        {
            id: (Math.random() * 100).toFixed(0),
            status: "wip",
            title: "Whatch film",
            category: "chores",
            details: "Transformers"
        },
        {
            id: (Math.random() * 100).toFixed(0),
            status: "wip",
            title: "Make react-project 💻",
            category: "job",
            details: "React-DnD"
        },
        {
            id: (Math.random() * 100).toFixed(0),
            status: "done",
            title: "done",
            category: "job",
            details: "details"
        },

    ])

    return (
        <>
            <Grid gap={6} templateColumns='repeat(2, 1fr)' width={"80vw"}>
                <Box rounded={"md"} boxShadow="md" bg={"blue.100"} >
                    <Stack spacing={5} m={5} >
                        <Box>
                            <Text margin={5} fontSize="2xl" textAlign="center" fontWeight={"bold"} >WIP Tasks</Text>
                            <Divider />
                        </Box>

                        {taskList.filter(card => card.status === 'wip').map(card => {
                            return <>
                                <TaskCard id={card.id} key={card.id} title={card.title} category={card.category} details={card.details} />
                            </>
                        })}

                    </Stack>
                </Box>

                <Box rounded={"md"} boxShadow="md" bg={"green.200"} >
                    <Stack spacing={1} >
                        <Box>
                            <Text
                                margin={5}
                                fontSize="2xl"
                                textAlign="center"
                                fontWeight={"bold"} >Done Tasks</Text>
                            <Divider />
                        </Box>

                        <BoxTarget />


                    </Stack>
                </Box>

            </Grid>
        </>
    )
}


export default TaskList
