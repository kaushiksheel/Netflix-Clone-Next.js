import React,{ReactNode} from 'react'

interface PropsI{
    children:ReactNode
}

export const Container = ({children}:PropsI) => {
  return (
    <div className='relative z-10 max-w-[1300px] m-auto px-6'>{children}</div>
  )
}
