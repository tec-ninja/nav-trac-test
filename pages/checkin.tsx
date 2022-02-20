import { useSaveInfo } from "../hooks/checkin"
import { CheckinLayout } from "@components/layouts/Checkin"
import InfoSection from "../components/checkin/InfoSection"
import { INFO_ITEMS } from "../constants"

export default function Checkin() {
    const { loading, message, pageIndex, setPageIndex, updateInfo, saveInfo } = useSaveInfo() 

    return (
        <CheckinLayout>
            <div className="w-96 hidden md:flex flex-col gap-2 border p-5 rounded">
                <p className="text-2xl">Add Contact Information</p>
                {INFO_ITEMS.map((item, index) => <InfoSection 
                    key={index} 
                    data={item} 
                    updateInfo={updateInfo} 
                />)}
                <button 
                    className="bg-blue-600 px-2 rounded-sm text-white" 
                    onClick={saveInfo}
                >
                    Submit
                </button>
            </div>

            <div className="w-full flex flex-col gap-2 p-5 rounded md:hidden">
                <p className="text-2xl">Add Contact Information</p>
                <InfoSection data={INFO_ITEMS[pageIndex]} updateInfo={updateInfo} />
                {pageIndex >=0 && pageIndex < INFO_ITEMS.length - 1 && 
                    <button 
                        className="mt-5 bg-blue-600 px-2 rounded-sm text-white" 
                        onClick={() => setPageIndex(pageIndex + 1)}
                    >
                        Next
                    </button>
                }
                {pageIndex > 0 && pageIndex <= INFO_ITEMS.length - 1 && 
                    <button 
                        className="mt-5 bg-blue-600 px-2 rounded-sm text-white" 
                        onClick={() => setPageIndex(pageIndex - 1)}
                    >
                        Back
                    </button>
                }
                {pageIndex === INFO_ITEMS.length - 1 && 
                    <button 
                        className="bg-blue-600 px-2 rounded-sm text-white" 
                        onClick={saveInfo}
                    >
                        Submit
                    </button>
                }
            </div>
        </CheckinLayout>
    )
}