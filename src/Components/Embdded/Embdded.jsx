import React from "react"
import { useLocation, useParams } from "react-router-dom"

export default function Embedded() {
  const { id } = useParams()
  const location = useLocation()
  const code = location.state?.code || ""

  return (
    <div className=" w-100 vh-100">
      <div className="text-center w-100 h-100">
        <h1>Embedded Component</h1>
        <div
          className="h-75 w-100"
          dangerouslySetInnerHTML={{
            __html: code,
          }}
        />
      </div>
    </div>
  )
}
