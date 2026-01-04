import { useDispatch, useSelector, useStore } from 'react-redux'
import type { AppDispatch, RootState } from '@/store'

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector = <TSelected = unknown>(
  selector: (state: RootState) => TSelected,
  equalityFn?: (left: TSelected, right: TSelected) => boolean
) => useSelector<RootState, TSelected>(selector, equalityFn)
export const useAppStore = () => useStore<RootState>()

