import { NameType } from '../config'
import * as path from 'path'

export function reName(nameType: string, url: string): string {
  const fileName = path.basename(url)
  switch (nameType) {
    case NameType.timestamp:
      return `${Date.now()}-` + fileName.replace('.png', '.png.jpg')
    case NameType.none:
      return `${fileName}`.replace('.png', '.png.jpg')
    default:
      return `${fileName}`.replace('.png', '.png.jpg')
  }
}
