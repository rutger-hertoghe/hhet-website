function LeftHandPanel({imageLink, children}){
  return(
    <>
      <div className="flex flex-col h-[400px] md:flex-row rounded-lg bg-white border border-gray-300 overflow-hidden">
        <div className="md:w-1/2 flex flex-col px-8 py-12">
          {children}
        </div>
        <div className="md:w-1/2">
          <img src={imageLink} alt = "Panel Image" className="w-full object-cover" />
        </div>
      </div>
    </>
  )
}

export default LeftHandPanel;