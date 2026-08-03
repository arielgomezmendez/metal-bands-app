type counterProps = {
    trackCounter:number,
    totalRiffs:number
}

const Counter = ({trackCounter,totalRiffs}:counterProps) => {
  return (
    <p className='bg-[#2e7d32] text-[#f5f5f5] text-xl w-40 mx-auto mb-8 rounded-lg px-2 py-2 '>
      {`Riff ${trackCounter} of ${totalRiffs}`}
    </p>
  )
}

export default Counter
