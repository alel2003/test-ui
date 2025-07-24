import type { AxiosResponse } from "axios"

import { request } from "@/shared/services/api/index"

import type { ManualInput } from "@/shared/types"

export const NUMBER_OPTIONS = {
  get(filters: ManualInput): Promise<AxiosResponse<string>> {
    const { number, type } = filters
    const url = `${number}/${type}`
    return request.get(url)
  }
}
