
const Chip = ( {label, onDelete} ) => {
  return (
    <div className="flex w-full flex-wrap justify-center">
  <div
  onClick={onDelete}
    id="chips-initial"
    data-te-chips-initial
    className="mb-0 min-h-[45px] border-none pb-0 shadow-none outline-none transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)] hover:cursor-text"
    >
        {label}
    </div>
</div>
  )
}

export default Chip
