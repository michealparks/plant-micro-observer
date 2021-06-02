import type { PlantData } from './types'
import type { Writable } from 'svelte/store'
import { writable, derived } from 'svelte/store'
import { SEARCHABLE_DATA } from './constants'

/**
 * Holds either a new image about to be added to the database,
 * or an existing image that is being updated
 */
export const stagedImage = writable<PlantData | undefined>(undefined)

/**
 * All images in the database
 */
export const images = writable<PlantData[]>([])

/**
 * The current filter entered in the search bar
 */
export const searchFilter = writable<string>('')

/**
 * Images that have data that match the search query.
 * It currently matches any value, which can be useful for searching
 * group, notes, annotations, dates,
 * but adding more specific additional filters would be more user friendly.
 * 
 * Search fields are currently stringified to allow annotations to be searchable
 * We could make this less gross by using a query language against a DB :)
 */
export const filteredImages = derived<[Writable<PlantData[]>, Writable<string>], PlantData[]>(
	[images, searchFilter],
	([$images, $searchFilter]) => {
		const filter = $searchFilter.toLowerCase()

		if (filter === '') {
			return $images
		}

		return $images.filter((item: PlantData) => {
			for (const field of SEARCHABLE_DATA) {
				if (JSON.stringify(item[field]).toLowerCase().includes(filter)) {
					return true
				}
			}

			return false
		})
	})
