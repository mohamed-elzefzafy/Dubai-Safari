

const SelectBox = ({Items , label}) => {
  return (
    <div className="select-box">
        <label className="select-box-label">{label}</label>
        <select className="select-box-input">
         {Items.map((lan) => {
          return (
            <option key={lan.id} value={lan.value}>{lan.value}</option>
          )
         })}
         
        </select>
      </div>
  )
}

export default SelectBox