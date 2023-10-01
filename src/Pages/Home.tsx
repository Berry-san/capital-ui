import React, { useState, ChangeEvent } from 'react'
import { Candidates } from '../constants'
import searchIcon from '../assets/svgs/search.svg'
import warning from '../assets/svgs/warning.svg'
import file from '../assets/svgs/file.svg'
import Accordion from '../components/Accordion'

const Home: React.FC = () => {
  const [search, setSearch] = useState<string>('')
  const [filteredData, setFilteredData] = useState<Candidate[]>(Candidates)
  const [activeTab, setActiveTab] = useState<string>('Qualified')
  const [selectAllChecked, setSelectAllChecked] = useState<boolean>(false)
  const [checkboxesChecked, setCheckboxesChecked] = useState<
    Record<number, boolean>
  >({})

  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName)
  }

  const tabs = ['Qualified', 'Task', 'Disqualified']

  interface Candidate {
    id: number
    firstName: string
    lastName: string
    exps: string[]
    tag: string
    city: string
    edu: string
  }

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value.toLowerCase()
    setSearch(searchValue)
    const filtered = Candidates.filter(
      (item) =>
        item.firstName.toLowerCase().includes(searchValue) ||
        item.lastName.toLowerCase().includes(searchValue) ||
        item.tag.toLowerCase().includes(searchValue)
    )
    setFilteredData(filtered)
  }

  const toggleSelectAll = () => {
    setSelectAllChecked(!selectAllChecked)
    const updatedCheckboxesChecked: Record<number, boolean> = {}
    filteredData.forEach((candidate) => {
      updatedCheckboxesChecked[candidate.id] = !selectAllChecked
    })
    setCheckboxesChecked(updatedCheckboxesChecked)
  }

  const handleCheckboxChange = (candidateId: number) => {
    const updatedCheckboxesChecked = { ...checkboxesChecked }
    updatedCheckboxesChecked[candidateId] =
      !updatedCheckboxesChecked[candidateId]
    setCheckboxesChecked(updatedCheckboxesChecked)

    // Check if all checkboxes are selected
    const allSelected = Object.values(updatedCheckboxesChecked).every(
      (isChecked) => isChecked
    )
    setSelectAllChecked(allSelected)
  }

  return (
    <div className="grid grid-cols-10 gap-5 text-stone-900 font-poppins mb-5">
      <div className="col-span-10 md:col-span-3">
        <div className="space-y-6">
          <form className="relative flex items-center w-full">
            <input
              type="search"
              name="search"
              autoComplete="off"
              value={search}
              onChange={handleSearchChange}
              placeholder="Search by name, edu, exp or #tag"
              className="w-full py-2 transition border-none rounded-md shadow px-9 focus:outline-none"
            />
            <span className="absolute left-3 ">
              <img src={searchIcon} alt="" />
            </span>
            <span className="absolute right-3">
              <img src={warning} alt="" />
            </span>
          </form>
          <div className="flex flex-col bg-white rounded-lg">
            <div className="flex items-center justify-between border-b p-4">
              <span className="font-semibold">Filters</span>
              <span>0 selected</span>
            </div>
            <Accordion />
            <span className="text-black text-sm font-normal leading-7 p-4 space-x-2 border-b flex items-center">
              <img src={file} alt="" />
              <p>Advanced Filter</p>
            </span>
          </div>
        </div>
      </div>
      <div className="col-span-10 px-2 py-5 bg-white rounded-2xl md:col-span-7">
        <div className="flex items-center justify-between border-b border-off-white">
          <div className="py-2 space-x-8">
            <input
              type="checkbox"
              name=""
              id="selectAll"
              checked={selectAllChecked}
              onChange={toggleSelectAll}
            />
            <label className="text-blue">247 Candidates</label>
          </div>
          <div className="space-x-3 text-sm font-medium leading-snug">
            {tabs.map((tabName) => (
              <span
                key={tabName}
                className={`cursor-pointer ${
                  activeTab === tabName ? 'text-blue-700' : ''
                }`}
                onClick={() => handleTabClick(tabName)}
              >
                {tabName}
              </span>
            ))}
          </div>
        </div>
        <ul className="flex flex-col">
          {filteredData.map((candidate, index) => {
            const { firstName, lastName, exps, tag, city, edu, id } = candidate
            return (
              <li
                key={id}
                className="flex items-center py-5 pl-1 space-x-6 border-b border-off-white"
              >
                <input
                  type="checkbox"
                  name={`candidate_${id}`}
                  checked={checkboxesChecked[id] || false}
                  onChange={() => handleCheckboxChange(id)}
                />
                <div className="flex">
                  <div className="w-14 h-14 px-3.5 pt-3 pb-3.5 bg-indigo-50 rounded-full justify-center items-center inline-flex">
                    <div className="text-blue-100 text-xl font-semibold">
                      {firstName.charAt(0)}
                      {lastName.charAt(0)}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col space-y-2">
                  <span className="text-sm font-semibold text-black">
                    {firstName} {lastName}
                  </span>
                  <div className="text-xs font-medium text-black">{city}</div>
                  <div className="text-xs font-light text-black">{edu}</div>
                  <span className="flex space-x-5">
                    <p className="text-blue-700 text-xs font-normal">{tag}</p>
                    <p className="text-blue-700 text-xs font-normal">{tag}</p>
                  </span>
                  <div className="flex items-center gap-x-5">
                    {exps.map((exp, expIndex) => (
                      <span
                        key={expIndex}
                        className="text-cyan-700 text-xs font-medium px-2.5 py-0.5 bg-slate-50 rounded-2xl"
                      >
                        {exp}
                      </span>
                    ))}
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default Home
