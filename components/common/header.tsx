type HeaderProps = {
    title: string
}

function Header({ title }: HeaderProps) {
    return (
        <div className="w-full px-5 py-2 bg-gray-600 text-white text-3xl">
            { title }
        </div>
    )
}

export default Header