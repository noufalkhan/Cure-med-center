import { IconArrowRight } from '@tabler/icons-react'
import React from 'react'

const AppointmentHistory = () => {
  return (
    <div className="flex flex-col h-screen ">

      <div className='text-xl p-5'>Appointment History</div>

      <div>
      <div
            
            className="bg-base-100 rounded-xl md:rounded-3xl   h-28 flex items-center justify-between px-5"
          >
            <div className="gap-5 flex items-center justify-center ">
              <div className="card bg-accent bg-opacity-20 h-20 w-20 flex items-center justify-center ">
              </div>
              <div className="flex flex-col gap-1+">
                <p className="text-xl">demo</p>
                <p className="text-sm">demo2</p>
              </div>
            </div>
            <div
             
            >
              <IconArrowRight />
            </div>
          </div>
      </div>
    </div>
  )
}

export default AppointmentHistory
