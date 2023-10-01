import file from '../assets/svgs/file.svg'
import { useState } from 'react'

interface AccordionDataItem {
  title: string
  content: string
}

function Accordion() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const toggleAccordion = (index: number) => {
    if (activeIndex === index) {
      setActiveIndex(null) // Close the accordion if it's already open
    } else {
      setActiveIndex(index) // Open the clicked accordion
    }
  }

  const accordionData: AccordionDataItem[] = [
    {
      title: 'Personal Information',
      content:
        'Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.',
    },
    {
      title: 'Education',
      content:
        'Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.',
    },
    {
      title: 'Work Experience',
      content:
        'The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages. However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds. Learn more about these technologies:',
    },
    {
      title: 'Activity Filter',
      content:
        'The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages. However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds. Learn more about these technologies:',
    },
  ]

  return (
    <div>
      {accordionData.map((item, index) => (
        <div key={index}>
          <button
            onClick={() => toggleAccordion(index)}
            className={`flex items-center justify-between w-full p-4 font-medium text-left border-b border-off-white`}
          >
            <div className="flex items-center">
              <img src={file} alt="" />
              <span className="text-black ml-2 text-sm font-normal leading-7">
                {item.title}
              </span>
            </div>
            {activeIndex === index ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="16"
                height="16"
              >
                <path
                  d="M11.9997 10.8284L7.04996 15.7782L5.63574 14.364L11.9997 8L18.3637 14.364L16.9495 15.7782L11.9997 10.8284Z"
                  fill="rgba(29,78,216,1)"
                ></path>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="16"
                height="16"
              >
                <path
                  d="M11.9997 13.1714L16.9495 8.22168L18.3637 9.63589L11.9997 15.9999L5.63574 9.63589L7.04996 8.22168L11.9997 13.1714Z"
                  fill="rgba(29,78,216,1)"
                ></path>
              </svg>
            )}
          </button>
          {activeIndex === index && (
            <div className="py-5 border-b border-off-white">
              <p className="mb-2 text-black px-4 text-sm font-normal leading-7">
                {item.content}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default Accordion
