import axios from "axios"
import * as React from "react"
import { useEffect } from "react"
import Customercard from "./customercard"


const Customer = () => {
  const [data, setdata] = React.useState([])

  console.log(data)
  useEffect(() => {
    axios
      .get("https://admin.tomedes.com/api/v1/get-reviews?page=1")
      .then(res => setdata(res.data.data))
      .catch(err => console.log(err))

    return () => {}
  }, [])

  return (
    <div className="mt-40">
      <h1 className="text-[#003B79] font-bold text-4xl my-5">What Our Customers Say</h1>

      <div className="flex  gap-4 overflow-x-auto scroll-smooth">
        {data.map(item => {
          return (
            <div key={item.ID}>
              <Customercard reviews={item} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Customer
