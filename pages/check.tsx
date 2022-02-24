import { useState } from "react"
import cn from 'classnames'
import { useSaveInfo } from "../hooks/check"
import Toggle from "../components/common/Toggle"
import { CheckLayout } from "../components/layouts/Check"
import InfoSection from "../components/check/InfoSection"
import { INFO_ITEMS } from "../constants"

export default function Checkin() {
    const { loading, message, pageIndex, setPageIndex, updateInfo, saveInfo } = useSaveInfo() 
    const [ isCheckIn, setIsCheckIn ] = useState(true)

    return (
        <CheckLayout>
            <div className="w-full p-5 md:p-0 md:w-96 flex justify-between">
                <p className="text-lg">SELECT MODE:</p>
                <Toggle 
                    checked={isCheckIn} 
                    labels={['CHECKIN', 'CHECKOUT']} 
                    changeHandler={(checked) => setIsCheckIn(checked)} 
                />
            </div>
            <div className={cn('flex-col gap-2 p-5 rounded', {'md:flex hidden w-96 border': isCheckIn, 'flex w-full md:w-96 md:border': !isCheckIn})}>
                <p className="text-2xl">Add Contact Information</p>
                {INFO_ITEMS.map((item, index) => <InfoSection 
                    key={index} 
                    data={item} 
                    updateInfo={updateInfo} 
                    showCase={isCheckIn}
                />)}
                <button 
                    className="mt-5 bg-blue-600 px-2 rounded-sm text-white hover:bg-blue-700" 
                    onClick={saveInfo}
                >
                    Submit
                </button>
            </div>

            <div className={cn('w-full flex-col gap-2 p-5 rounded', {'flex md:hidden': isCheckIn, 'hidden': !isCheckIn})}>
                <p className="text-2xl">Add Contact Information</p>
                <InfoSection 
                    data={INFO_ITEMS[pageIndex]} 
                    updateInfo={updateInfo} 
                    showCase={isCheckIn}
                />
                {pageIndex >=0 && pageIndex < INFO_ITEMS.length - 1 && 
                    <button 
                        className="mt-5 bg-blue-600 px-2 rounded-sm text-white hover:bg-blue-700" 
                        onClick={() => setPageIndex(pageIndex + 1)}
                    >
                        Next
                    </button>
                }
                {pageIndex > 0 && pageIndex <= INFO_ITEMS.length - 1 && 
                    <button 
                        className="mt-5 bg-blue-600 px-2 rounded-sm text-white hover:bg-blue-700" 
                        onClick={() => setPageIndex(pageIndex - 1)}
                    >
                        Back
                    </button>
                }
                {pageIndex === INFO_ITEMS.length - 1 && 
                    <button 
                        className="bg-blue-600 px-2 rounded-sm text-white hover:bg-blue-700" 
                        onClick={saveInfo}
                    >
                        Submit
                    </button>
                }
            </div>
        </CheckLayout>
    )
}