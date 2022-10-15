import { SearchInput } from "./Filter.styled"


export const Filter = ({ value, onChange }) => {
    return (
        <label htmlFor="">
            Find contacts by name <SearchInput type="text" value={value} onChange={onChange} />
          </label>
    )
}
