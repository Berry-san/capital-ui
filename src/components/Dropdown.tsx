import { DropdownItems } from '../constants'
import { useState } from 'react'

interface DropdownProps {
  isOpen: boolean
  onMouseEnter: () => void // Add this prop
  onMouseLeave: () => void // Add this prop
}

const Dropdown: React.FC<DropdownProps> = ({
  isOpen,
  onMouseEnter,
  onMouseLeave,
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const handleItemMouseEnter = (index: number) => {
    setHoveredIndex(index)
  }

  const handleItemMouseLeave = () => {
    setHoveredIndex(null)
  }

  if (!isOpen) return null

  return (
    <ul
      className="w-[20rem] bg-white absolute mt-2 border border-gray-300 rounded-b-2xl shadow-lg"
      onMouseEnter={onMouseEnter} // Handle mouse enter on the dropdown
      onMouseLeave={onMouseLeave} // Handle mouse leave on the dropdown
    >
      {DropdownItems.map((item, index) => (
        <option
          key={index}
          className={`flex items-center justify-between px-4 py-2 h-16 cursor-pointer ${
            hoveredIndex === index
              ? 'bg-indigo-50 border-2 border-indigo-400 shadow text-blue-700 text-base font-medium leading-snug items-center flex'
              : 'hover:bg-gray-100'
          }`}
          onMouseEnter={() => handleItemMouseEnter(index)} // Handle item mouse enter
          onMouseLeave={handleItemMouseLeave} // Handle item mouse leave
        >
          <p>{item.label}</p>
          <span
            className={`px-2.5 py-0.5 bg-gray-100 rounded-2xl text-sm ${
              hoveredIndex === index && 'bg-violet-300'
            }`}
          >
            {item.no}
          </span>
        </option>
      ))}
    </ul>
  )
}

export default Dropdown
