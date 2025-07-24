import type { AxiosResponse } from "axios"

import { request } from "@/shared/services/api/index"

import type { RandomType } from "@/shared/types"

export const RANDOM_OPTIONS = {
  get(random: RandomType): Promise<AxiosResponse<string>> {
    const url = `random/${random}`
    return request.get(url)
  }
}
