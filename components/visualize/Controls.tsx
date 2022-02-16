import { FC, useCallback, useState } from "react";

import { HStack, Box, Text } from "@chakra-ui/layout";

import Effect from './Effect';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import update from 'immutability-helper'
import { useColorModeValue } from "@chakra-ui/color-mode";

const Controls: FC = () => {
  const bgColor = useColorModeValue("brand.400", "brand.700");

  const [items, setItems] = useState([{id: 1, name: "Accompaniment", path: "/overkill_accompaniment.mp3", effectName: "line"},
                                      {id: 2, name: "Vocals", path: "/overkill_vocal.mp3", effectName: "sphere"}]);
  console.log(items)
  const moveCard = useCallback(
    (dragIndex: number, hoverIndex: number) => {
      const dragCard = items[dragIndex];
      const dragEffect = dragCard.effectName;
      const hoverEffect = items[hoverIndex].effectName;
      setItems(update(items, {
          [hoverIndex]: {$apply: function(x) {return {...x, effectName: dragEffect}}},
          [dragIndex]: {$apply: function(x) {return {...x, effectName: hoverEffect}}}
      }));
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
          {items.map((item, index) => 
            <Effect key={index} id={item.id} index={index}
                    name={item.name} path={item.path} moveCard={moveCard}
                    effectName={item.effectName} />)}
        </HStack>
      </Box>
    </DndProvider>
  )
}

export default Controls