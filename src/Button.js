
export default function Button(props) {
  return (
    <button style={{"color":props.bg,"backgroundColor":props.color,"width":"200px","height":"7vh","fontWeight":"900"}}>{props.lable}</button> 
  )
}
