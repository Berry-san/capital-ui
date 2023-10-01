import tag from '../../assets/svgs/tag.svg'
import user1 from '../../assets/svgs/user1.svg'
import user2 from '../../assets/svgs/user2.svg'
import user3 from '../../assets/svgs/user3.svg'
import message from '../../assets/svgs/message.svg'
import down from '../../assets/svgs/down.svg'

import { useState } from 'react'
import Dropdown from '../../components/Dropdown'
import { DropdownItems } from '../../constants'

interface DropdownItem {
  label: string
  no: number
}

const Topbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false)
  const [selectedOption, setSelectedOption] = useState<string>('')

  const handleSelect = (option: string) => {
    setSelectedOption(option)
    setIsDropdownOpen(false)
  }

  const handleMouseEnter = () => {
    setIsDropdownOpen(true)
  }

  const handleMouseLeave = () => {
    setIsDropdownOpen(false)
  }
  return (
    <div className="grid justify-between grid-cols-10 py-8 gap-x-8 font-poppins">
      <div className="col-span-3">
        <p className="text-xl font-semibold text-darkBlue">
          London Internship Program
        </p>
        <p className="pt-2">London</p>
      </div>
      <div className="flex items-start justify-between col-span-7">
        <div className="relative inline-block">
          <div
            className="cursor-pointer w-[20rem] bg-white outline-none px-4 py-2 border rounded-2xl flex justify-between items-center"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            {selectedOption ? (
              <span className="text-darkBlue font-semibold">
                {selectedOption}
              </span>
            ) : (
              <span className="text-darkBlue font-semibold">
                {DropdownItems[0].label}
              </span>
            )}
            <svg
              className={`w-4 h-4 transition-transform transform ${
                isDropdownOpen ? 'rotate-180' : 'rotate-0'
              }`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          {isDropdownOpen && (
            <div
              className="absolute left-0 mt-2 w-[20rem] bg-white border rounded-md shadow-lg"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {DropdownItems.map((item) => (
                <div
                  key={item.label}
                  className="cursor-pointer p-2 flex justify-between items-center hover:bg-gray-200"
                  onClick={() => handleSelect(item.label)}
                >
                  <span>{item.label}</span>
                  <span className="text-gray-500">{item.no}</span>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="flex items-start">
          <div className="flex space-x-2 pr-2 border-r-2 border-off-white">
            <div className="p-2 bg-white border rounded-lg border-off-white">
              <img src={tag} alt="" />
            </div>
            <div className="p-2 bg-white border rounded-lg border-off-white">
              <img src={user1} alt="" />
            </div>
            <div className="p-2 bg-white border rounded-lg border-off-white">
              <img src={user2} alt="" />
            </div>
            <div className="p-2 bg-white border rounded-lg border-off-white">
              <img src={user3} alt="" />
            </div>
            <div className="p-2 bg-white border rounded-lg border-off-white">
              <img src={message} alt="" />
            </div>
          </div>
          <div className="flex items-center pl-2">
            <button className="py-2 px-4 text-white bg-darkBlue rounded-tl-xl rounded-bl-xl">
              Move To Video Interview I
            </button>
            <button className="ml-0.5 py-2 px-2 bg-darkBlue rounded-tr-xl rounded-br-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 16 16"
                fill="none"
              >
                <g clip-path="url(#clip0_1073_2623)">
                  <path
                    d="M11.06 5.72668L8 8.78002L4.94 5.72668L4 6.66668L8 10.6667L12 6.66668L11.06 5.72668Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1073_2623">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Topbar
