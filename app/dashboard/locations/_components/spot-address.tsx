import { useMySpotStore } from '@/store'
import { ListSpotPropsType } from '@/types'
import React, { useState } from 'react'

function SpotAddress({onNext}: ListSpotPropsType) {
    const mySpotStore = useMySpotStore()
    const [message, setMessage] = useState<string>("")

    function onSubmit() {
        if(mySpotStore.data.address) {
            onNext()
        }
        else{
            setMessage("Address is required")
        }
    }
  return (
     <div className="grid w-full gap-1 5">
            <h2 className="text-xl sm:text-2xl py-4 font-semibold">Address</h2>
     </div>
  )
}

export default SpotAddress