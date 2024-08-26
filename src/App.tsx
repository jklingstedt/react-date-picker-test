import { useState } from 'react'
import styled from 'styled-components'
import { DateRangePicker, RangeKeyDict } from 'react-date-range'
import { es } from 'date-fns/locale'

import 'react-date-range/dist/styles.css' // main style file
import 'react-date-range/dist/theme/default.css' // theme css file

const StyledWrapper = styled.div`
    max-width: 600px;
    margin: 0 auto;
    text-align: center;

    .rdrDefinedRangesWrapper {
        display: none;
    }
`

export const App = () => {
    const [startDate, setStartDate] = useState(new Date('08/05/2024'))
    const [endDate, setEndDate] = useState(new Date())

    const selectionRange = {
        startDate,
        endDate,
        key: 'selection',
    }

    const handleSelect = (ranges: RangeKeyDict) => {
        setStartDate(ranges.selection.startDate!)
        setEndDate(ranges.selection.endDate!)
    }
    return (
        <StyledWrapper>
            <h1>React Date Range</h1>
            <DateRangePicker
                locale={es}
                months={2}
                ranges={[selectionRange]}
                onChange={handleSelect}
                showMonthAndYearPickers={false}
                rangeColors={['#007C92']}
                editableDateInputs={true}
                dateDisplayFormat="M/d/yyyy"
            />
        </StyledWrapper>
    )
}

export default App
