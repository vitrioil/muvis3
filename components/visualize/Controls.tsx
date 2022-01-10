import { FC, useCallback, useState, Dispatch, SetStateAction } from "react";

import { HStack, Box, Text } from "@chakra-ui/layout";

import Effect from './Effect';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import update from 'immutability-helper'
import { useColorModeValue } from "@chakra-ui/color-mode";

const Controls: FC<{fullSize?: boolean,
                  setLineSpeed: Dispatch<SetStateAction<number>>,
                  setSphereSpeed: Dispatch<SetStateAction<number>>}> = ({fullSize, setLineSpeed, setSphereSpeed}) => {
    const bgColor = useColorModeValue("brand.400", "brand.700");
    const [items, setItems] = useState([{id: 1, name: "Vocals", path: "/overkill_accompaniment.mp3", setter: setLineSpeed}, {id: 2, name: "Accompaniment", path: "/overkill_vocal.mp3", setter: setSphereSpeed}])//, {id: 3, name: "Other"}])
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
            <Box bg={bgColor} borderRadius={15}>
            <Text px="10px" fontSize="2xl">
              Stems
            </Text>
                <HStack p="10px" spacing="40px" overflowX="auto">
                    {items.map((item, index) => <Effect key={index}
                                                        id={item.id} index={index} name={item.name}
                                                        path={item.path} moveCard={moveCard}
                                                        setSpeed={item.setter} />)}
                </HStack>
            </Box>
        </DndProvider>
    )
}

export default Controls