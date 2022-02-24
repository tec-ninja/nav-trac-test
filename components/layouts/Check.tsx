import { ReactNode } from 'react'
import Header from '../common/Header'

type CheckLayoutProps = {
    children: ReactNode
}

function CheckLayout(props: CheckLayoutProps) {
    return (
        <div className="w-screen h-screen flex flex-col">
            <Header title="CHECKIN / CHECKOUT" />
            <div className="flex-1 flex flex-col items-center gap-2 mt-12">
                {props.children}
            </div>
        </div>
    )
}

export {
    CheckLayout,
}