import { useEffect, useState } from "react"

import { Link } from "react-router-dom"

import { NUMBER_OPTIONS } from "@/module/results/services/api/number"
import { RANDOM_OPTIONS } from "@/module/results/services/api/random"

import useGlobalStore from "@/shared/store"

import Spiner from "@/shared/components/templates/spinner"

export default function ResultsMain() {
  const [data, setData] = useState<string>("")
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const { manualInput, random } = useGlobalStore()

  useEffect(() => {
    const fetchResult = async () => {
      setIsLoading(true)
      try {
        let response
        if (random === "") {
          response = await NUMBER_OPTIONS.get({
            number: manualInput.number,
            type: manualInput.type
          })
        } else {
          response = await RANDOM_OPTIONS.get(random)
        }

        setData(response.data)
      } catch (error) {
        console.error("Error fetching results:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchResult()
  }, [manualInput, random])

  return (
    <section className="container mx-auto flex flex-col gap-10 p-5">
      {isLoading ? (
        <Spiner />
      ) : (
        <>
          <Link
            to="/"
            className="w-fit rounded-[25px] border-2 border-[#7CFC00] px-4 py-2 text-[#7CFC00] uppercase transition-colors duration-300 ease-in-out hover:border-white hover:text-white">
            Back
          </Link>
          {manualInput.number && (
          <span className="text-[16px] text-white md:text-[20px]">
            Number: { manualInput.number }
          </span>
          )}
          <p className="text-[16px] text-[#7CFC00] md:text-[20px]">{data}</p>
        </>
      )}
    </section>
  )
}
