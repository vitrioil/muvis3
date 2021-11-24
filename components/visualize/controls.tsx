import { FC, useCallback, useState } from "react";

import { HStack, Box } from "@chakra-ui/layout";

import Effect from './effect';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import update from 'immutability-helper'

const Controls: FC<{fullSize?: boolean}> = ({fullSize}) => {
    const bgColor = "brand.700";
    const [items, setItems] = useState([{id: 1, name: "Vocals"}, {id: 2, name: "Accompaniment"}, {id: 3, name: "Other"}])
    const moveCard = useCallback(
      (dragIndex: number, hoverIndex: number) => {
        const dragCard = items[dragIndex]
        setItems(
          update(items, {
            $splice: [
              [dragIndex, 1],
              [hoverIndex, 0, dragCard],
            ],
          }),
        )
      },
      [items],
    )

    return (
        <DndProvider backend={HTML5Backend}>
            <Box maxW={{base: "85vw", lg: fullSize ? "85vw": "40vw"}} maxH={{base: 400, md: 250}} bg={bgColor} borderRadius={15} m={{base: 5, sm: 10}}>
                <HStack p={{base: "30px", lg: "40px"}} spacing={{base: "30px", lg: "40px"}} overflowX="auto">
                    {items.map((item, index) => <Effect key={index} id={item.id} index={index} name={item.name} moveCard={moveCard} />)}
                </HStack>
            </Box>
        </DndProvider>
    )
}

export default Controls