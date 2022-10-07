import React from 'react'
import PropTypes from 'prop-types';
import { FilterBox, FormLabel, FormInput } from "./Filter.styled"


export default function Filter({filterId,filter,handleChange}) {
  return (
      <FilterBox>
          <FormLabel htmlFor={filterId}>Find contacts by name</FormLabel>
        <FormInput
          id={filterId}
          type="text"
          name="filter"
          value={filter}
          onChange={handleChange}
        />
    </FilterBox>
  )
}

Filter.propTypes = {
  filterId: PropTypes.string.isRequired,
  filter: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
}
