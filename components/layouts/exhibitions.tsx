import { ReactNode } from 'react'
import Header from "@components/common/header";

type ExhibitionLayoutProps = {
    children: ReactNode
}

function ExhibitionListLayout(props: ExhibitionLayoutProps) {
    return (
        <div>
            <Header title="Exhibitions" />
            <div className="p-5">
                {props.children}
            </div>
        </div>
    )
}

function ExhibitionDetailLayout(props: ExhibitionLayoutProps) {
    return (
        <div>
            <Header title="Exhibition Detail" />
            <div className="p-5">
                {props.children}
            </div>
        </div>
    )
}

export {
    ExhibitionListLayout,
    ExhibitionDetailLayout
};