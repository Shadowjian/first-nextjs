import { useState } from "react"

const useHooks = () => {
  const [isSelected, setIsSelected] = useState("healthcare")

  return { isSelected, setIsSelected }
}

export default useHooks
