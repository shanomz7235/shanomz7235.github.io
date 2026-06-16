import { CSSProperties, ReactNode, Key } from 'react'

interface LogoNodeItem {
  node: ReactNode
  title?: string
  ariaLabel?: string
  href?: string
}

interface LogoImageItem {
  src: string
  srcSet?: string
  sizes?: string
  width?: number
  height?: number
  alt?: string
  title?: string
  href?: string
}

type LogoItem = LogoNodeItem | LogoImageItem

interface LogoLoopProps {
  logos: LogoItem[]
  speed?: number
  direction?: 'left' | 'right' | 'up' | 'down'
  width?: number | string
  logoHeight?: number
  gap?: number
  pauseOnHover?: boolean
  hoverSpeed?: number
  fadeOut?: boolean
  fadeOutColor?: string
  scaleOnHover?: boolean
  renderItem?: (item: LogoItem, key: Key) => ReactNode
  ariaLabel?: string
  className?: string
  style?: CSSProperties
}

declare const LogoLoop: React.NamedExoticComponent<LogoLoopProps>
export default LogoLoop
export { LogoLoop }
