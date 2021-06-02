import type { ImageDataObject } from './types'
import { writable } from 'svelte/store'

export const stagedImage = writable<ImageDataObject | undefined>(undefined)
export const images = writable<ImageDataObject[]>([])
export const searchFilter = writable<string>('')
