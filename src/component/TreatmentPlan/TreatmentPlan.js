import React, { useState } from 'react'
import { withStyles } from '@material-ui/core/styles'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Checkbox,
  Chip
} from '@material-ui/core'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import { tableBody, tableIds } from './tableBody'

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const StyledTableCell = withStyles((theme) => ({
  root: {
    textAlign: 'center',
    borderBottom: '2px dotted',
    '&:not(:last-child)': {
      borderRight: '2px dotted'
    },
    padding: '5px',
  },
}))(TableCell);

const tableHeader = ['Localisation', 'Soins / acte', 'Catégorie', 'Durée', 'Devis', 'Praticien']

const TreatmentPlan = () => {
  const [tableData, setTableData] = useState(tableIds.map(item => tableBody[item]))
  const [ids, setIds] = useState(tableIds)

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result

    if (!destination) {
      return
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return
    }

    const firstIndex = tableData.findIndex(item => item.id === 'item-1')
    const lastIndex = tableData.findIndex(item => item.id === 'item-5')

    const newTableIds = Array.from(ids)
    newTableIds.splice(source.index, 1)
    newTableIds.splice(firstIndex <= destination.index && destination.index <= lastIndex ? source.index < firstIndex ? lastIndex : firstIndex : destination.index, 0, draggableId)

    setIds(newTableIds)
    setTableData(newTableIds.map(item => tableBody[item]))
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              {tableHeader.map((item, index) => (
                <StyledTableCell style={{ fontWeight: 'bold' }} key={index}>{item}</StyledTableCell>
              ))}
            </TableRow>
          </TableHead>
          <Droppable droppableId='table'>
            {(provided) => (
              <TableBody
                innerRef={provided.innerRef}
                {...provided.droppableProps}
              >
                {tableData.map((item, index) => (
                  <Draggable key={item.id} draggableId={item.soins.color !== 'lightgreen' ? item.id : false} index={index}>
                    {(provided) => (
                      <StyledTableRow
                        {...provided.dragHandleProps}
                        {...provided.draggableProps}
                        innerRef={provided.innerRef}
                      >
                        <StyledTableCell style={{ width: '10%' }}>{item.local}</StyledTableCell>
                        <StyledTableCell
                          style={{
                            backgroundColor: item.soins?.color,
                            width: '50%'
                          }}
                        >
                          {item.soins.value}
                        </StyledTableCell>

                        <StyledTableCell style={{ width: '10%' }}>
                          <Chip
                            label={item.category.text}
                            style={{
                              borderRadius: 1,
                              width: '100%',
                              backgroundColor: item.category.backgroundColor,
                              color: item.category.color,
                              textTransform: 'uppercase'
                            }}
                          />
                        </StyledTableCell>

                        <StyledTableCell>{item.duration}</StyledTableCell>

                        <StyledTableCell style={{ width: '5%' }}>
                          <Checkbox checked={item.devis} />
                        </StyledTableCell>

                        <StyledTableCell>{item.praticien}</StyledTableCell>
                      </StyledTableRow>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </TableBody>
            )}
          </Droppable>
        </Table>
      </TableContainer>
    </DragDropContext>
  )
}

export default TreatmentPlan
