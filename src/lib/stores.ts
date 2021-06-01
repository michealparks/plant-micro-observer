import type { ImageDataObject } from './types'
import { writable } from 'svelte/store'

export const images = writable<ImageDataObject[]>([])

