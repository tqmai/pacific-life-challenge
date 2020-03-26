import React from 'react';

function ColorSelector({ filterColor, changeFilterColor }) {
  // filterColor: string
  // changeFilterColor: function

  // component will be a drop down menu
  return (
    <div>
      <form>
        <label>
          Select filter color:
          <select value={filterColor} onChange={(event) => changeFilterColor(event.target.value)}>
            <option value="none">
              Choose a color
            </option>
            <option value="red">
              Red
            </option>
            <option value="blue">
              Blue
            </option>
            <option value="green">
              Green
            </option>
          </select>
        </label>
      </form>
    </div>
  );
}

export default ColorSelector;
