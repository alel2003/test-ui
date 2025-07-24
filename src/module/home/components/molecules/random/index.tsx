import { useNavigate } from "react-router-dom"

import useGlobalStore from "@/shared/store"

import { RANDOM_LIST } from "@/module/home/constants"

import type { RandomType } from "@/shared/types"

export default function HomeRandom() {
  const navigate = useNavigate()

  const { setManualInput, setRandom, random } = useGlobalStore()

  const handleRandom = (type: RandomType) => {
    setManualInput({ number: "", type: "" })
    setRandom(type)
    navigate("/results")
  }

  return (
    <div className="flex flex-col gap-5 px-0 py-5 md:px-8 md:py-0">
      <h2 className="text-[#7CFC00] uppercase">Random facts</h2>
      <div className="flex flex-col items-start gap-5 md:flex-row md:items-center">
        {RANDOM_LIST.map(({ id, title, type }) => (
          <button
            key={id}
            onClick={() => handleRandom(type)}
            className={`cursor-pointer rounded-[25px] border-2 px-5 py-2 uppercase ${random === type ? "border-white text-white" : "border-[#7CFC00] text-[#7CFC00]"} transition-colors duration-300 ease-in-out hover:border-white hover:text-white`}>
            {title}
          </button>
        ))}
      </div>
    </div>
  )
}
