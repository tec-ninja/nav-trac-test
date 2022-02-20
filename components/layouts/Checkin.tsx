import { ReactNode } from 'react'
import Header from '../common/header'

type CheckinLayoutProps = {
    children: ReactNode
}

function CheckinLayout(props: CheckinLayoutProps) {
    return (
        <div className="w-screen h-screen flex flex-col">
            <Header title="CHECK IN" />
            <div className="flex-1 flex items-center justify-center">
                {props.children}
            </div>
        </div>
    )
}

export {
    CheckinLayout,
}