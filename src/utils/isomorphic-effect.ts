import { useEffect, useLayoutEffect } from 'react'

const useIsomorphicEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect

export default useIsomorphicEffect
