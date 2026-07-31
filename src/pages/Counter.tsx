type counterProps = {
    trackCounter:number,
}

const Counter = ({trackCounter}:counterProps) => {
  return (
    <div className='bg-[#2e7d32] text-[#f5f5f5] text-xl w-36 mx-auto rounded-lg px-1 py-1 mb-8'>
      {`Riff ${trackCounter} of 15`}
    </div>
  )
}

export default Counter
