import type { PlantData } from './types'
import type { Writable } from 'svelte/store'
import { writable, derived } from 'svelte/store'

export const stagedImage = writable<PlantData | undefined>(undefined)
export const images = writable<PlantData[]>([])
export const searchFilter = writable<string>('')

export const filteredImages = derived<[Writable<PlantData[]>, Writable<string>], PlantData[]>(
	[images, searchFilter],
	([$images, $searchFilter]) => {
		if ($searchFilter === '') {
      return $images
    }

		return $images.filter((item: PlantData) => {
			return JSON
				.stringify(item)
				.toLowerCase()
				.includes($searchFilter.toLowerCase())
		})
	})
