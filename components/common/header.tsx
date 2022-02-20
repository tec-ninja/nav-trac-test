import React from 'react'

type HeaderProps = {
    title: string
}

function Header({ title }: HeaderProps) {
    return (
        <div className="w-full px-5 py-2 bg-blue-600 text-white text-2xl">
            { title }
        </div>
    )
}

export default Header