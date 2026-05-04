import {clsx, type ClassValue} from 'clsx'

import {twMerge} from 'tailwind-merge'

export function classMerge(...input: ClassValue[]) {
    return twMerge(clsx(...input))
}