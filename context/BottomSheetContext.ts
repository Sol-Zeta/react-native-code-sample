import { createContext } from 'react'

const BottomSheetContext = createContext({ isOpen: false, getIsOpen: (b: boolean)=>{}})
  
export default BottomSheetContext  