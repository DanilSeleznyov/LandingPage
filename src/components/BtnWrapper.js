function BtnWrapper() {
    const options = ['Battery Images','Spare Parts Images','Charging Cable Images',]
  return (
    <div className="gallery_btn_wrapper">
        {options.map((el, id) =>(
            <button className="gallery_btn" key={id}>{el}</button>
        ))}
    </div>
  )
}

export default BtnWrapper