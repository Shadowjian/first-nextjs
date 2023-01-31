import { useState } from "react"

const useHooks = () => {
  const [isSelected, setIsSelected] = useState("building/construction")

  return { isSelected, setIsSelected }
}

export default useHooks
