import { useState } from "react"

import { useNavigate } from "react-router-dom"

import { useForm } from "react-hook-form"

import type { SubmitHandler } from "react-hook-form"

import ErrorMessage from "@/module/home/components/atoms/error"

import useGlobalStore from "@/shared/store"

import { RADIO_LIST } from "@/module/home/constants"

import type { HomeForm } from "@/module/home/types"

export default function HomeForm() {
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const navigate = useNavigate()

  const { setManualInput, setRandom } = useGlobalStore()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<HomeForm>({
    defaultValues: {
      number: "",
      type: "math"
    }
  })

  const onSubmit: SubmitHandler<HomeForm> = async (data) => {
    setIsLoading(true)
    try {
      setRandom("")
      setManualInput(data)
      reset()
      navigate("/results")
    } catch (error) {
      console.error("Error submitting form:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-[#7CFC00] uppercase">Entering a number</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-10">
        <div className="flex flex-col gap-3">
          <label className="text-[#7CFC00]" htmlFor="number">
            Number:
          </label>
          <input
            id="number"
            type="text"
            placeholder="enter a numeric format"
            {...register("number", {
              required: "Field is required",
              pattern: { value: /^\d+$/, message: "Enter a number" }
            })}
            className="rounded-[25px] border-2 border-[#7CFC00] px-4 py-2 text-[#7CFC00] outline-none focus:border-white"
          />
          {errors.number && <ErrorMessage message={errors.number.message} />}
        </div>

        <div className="flex items-center gap-5">
          {RADIO_LIST.map(({ id, type, title }) => (
            <div key={id} className="flex items-center gap-2">
              <input
                id={`type-${id}`}
                className="size-5 cursor-pointer accent-[#7CFC00]"
                type="radio"
                value={type}
                {...register("type")}
              />
              <label
                htmlFor={`type-${id}`}
                className="text-[16px] font-normal text-[#7CFC00]">
                {title}
              </label>
            </div>
          ))}
        </div>

        <button
          type="submit"
          className="w-fit cursor-pointer rounded-[25px] border-2 border-[#7CFC00] px-6 py-1 text-[16px] text-[#7CFC00] transition-colors duration-300 ease-in-out hover:border-white hover:text-white md:text-[20px]">
          {isLoading ? "Shipping" : "Send"}
        </button>
      </form>
    </div>
  )
}
