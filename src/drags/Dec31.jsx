import { memo } from 'react'
import { useDrop } from 'react-dnd'
import { useDrag } from 'react-dnd'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'


const style = {
    height: '12rem',
    width: '12rem',
    marginRight: '1.5rem',
    marginBottom: '1.5rem',
    color: 'white',
    padding: '1rem',
    textAlign: 'center',
    fontSize: '1rem',
    lineHeight: 'normal',
    float: 'left',
}

const Dustbin = () => {
    const [{ canDrop, isOver }, drop] = useDrop(() => ({
        accept: 'box',
        drop: () => ({ name: 'Dustbin' }),
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        }),
    }))
    const isActive = canDrop && isOver
    let backgroundColor = '#222'
    if (isActive) {
        backgroundColor = 'darkgreen'
    } else if (canDrop) {
        backgroundColor = 'darkkhaki'
    }
    return (
        <div ref={drop} style={{ ...style, backgroundColor }} data-testid="dustbin">
            {isActive ? 'Release to drop' : 'Drag a box here'}
        </div>
    )
}




const styleB = {
    border: '1px dashed gray',
    backgroundColor: 'white',
    padding: '0.5rem 1rem',
    marginRight: '1.5rem',
    marginBottom: '1.5rem',
    cursor: 'move',
    float: 'left',
}
export const Box = function Box({ name }) {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: 'box',
        item: { name },
        end: (item, monitor) => {
            const dropResult = monitor.getDropResult()
            if (item && dropResult) {
                alert(`You dropped ${item.name} into ${dropResult.name}!`)
            }
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
            handlerId: monitor.getHandlerId(),
        }),
    }))
    const opacity = isDragging ? 0.4 : 1
    return (
        <div ref={drag} style={{ ...styleB, opacity }} data-testid={`box`}>
            {name}
        </div>
    )
}






const Dec31 = memo(function Dec31() {
    return (
        <DndProvider backend={HTML5Backend}>
            <div style={{ overflow: 'hidden', clear: 'both' }}>
                <Dustbin />
            </div>
            <div style={{ overflow: 'hidden', clear: 'both' }}>
                <Box name="Glass" />
                <Box name="Banana" />
                <Box name="Paper" />
            </div>
        </DndProvider>
    )
})

export default Dec31;



