import { FC, useRef } from "react";
import { useDrag, useDrop, DropTargetMonitor } from 'react-dnd'
import { XYCoord } from 'dnd-core'
import { ItemTypes } from "./ItemType";

import { HStack, Text } from "@chakra-ui/layout";
import { DragHandleIcon } from '@chakra-ui/icons'
import { useColorModeValue } from "@chakra-ui/color-mode";

const Audio: FC<{id: number, index: number, name: string, moveCard: (dragIndex: number, hoverIndex: number) => void}> = ({id, index, name, moveCard}) => {
    const bgColor = useColorModeValue("brand.400", "brand.700");

    const ref = useRef<HTMLDivElement>(null)
    const [{ isDragging }, drag] = useDrag(() => ({
        type: ItemTypes.Audio,
        item: () => {
            return { id, index }
        },
        end: (item, monitor) => {
            // const dropResult = monitor.getDropResult<DropResult>()
            // if (item && dropResult) {
            //     alert(`You dropped ${item.name} into ${dropResult.name}!`)
            // }
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
            handlerId: monitor.getHandlerId(),
        }),
    }))
    const [{ handlerId }, drop] = useDrop({
        accept: ItemTypes.Audio,
        collect(monitor) {
        return {
            handlerId: monitor.getHandlerId(),
        }
        },
        hover(item: {index: number}, monitor: DropTargetMonitor) {
        if (!ref.current) {
            return
        }
        const dragIndex = item.index
        const hoverIndex = index

        // Don't replace items with themselves
        if (dragIndex === hoverIndex) {
            return
        }

        // Determine rectangle on screen
        const hoverBoundingRect = ref.current?.getBoundingClientRect()

        // Get vertical middle
        const hoverMiddleX =
            (hoverBoundingRect.right - hoverBoundingRect.left) / 2

        // Determine mouse position
        const clientOffset = monitor.getClientOffset()

        // Get pixels to the top
        const hoverClientX = (clientOffset as XYCoord).x - hoverBoundingRect.left

        // Only perform the move when the mouse has crossed half of the items height
        // When dragging downwards, only move when the cursor is below 50%
        // When dragging upwards, only move when the cursor is above 50%

        // Dragging downwards
        if (dragIndex < hoverIndex && hoverClientX < hoverMiddleX) {
            return
        }

        // Dragging upwards
        if (dragIndex > hoverIndex && hoverClientX > hoverMiddleX) {
            return
        }

        // Time to actually perform the action
        moveCard(dragIndex, hoverIndex)

        // Note: we're mutating the monitor item here!
        // Generally it's better to avoid mutations,
        // but it's good here for the sake of performance
        // to avoid expensive index searches.
        item.index = hoverIndex
        },
    })
    drag(drop(ref));

    return (
        <HStack ref={ref} minW={{base: "200px", md: "300px"}} h={{base: "50px", md: "75px"}} borderRadius="20px" bgColor={bgColor}>
            <Text w="100%" paddingLeft="15px" fontWeight={600} textAlign="start">{name}</Text>
            <DragHandleIcon boxSize={7} padding="0 15px 15px 0" marginBottom="auto" />
        </HStack>
    )
}

export default Audio;