export type NumberType = "math" | "" | "data"
export type RandomType = "trivia" | "year" | "date" | "math" | ""

export interface ManualInput {
  number: number | string
  type: NumberType
}

export interface GlobalStore {
  manualInput: ManualInput
  random: RandomType
  setManualInput: (data: Partial<ManualInput>) => void
  setRandom: (random: Partial<RandomType>) => void
}
