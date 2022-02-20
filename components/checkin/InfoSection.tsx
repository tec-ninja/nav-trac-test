type InfoSectionProps = {
    data: {
        caption: string,
        items: Array<{
            label: string,
            key: string
        }>
    },
    updateInfo: (e: React.FormEvent<HTMLInputElement>) => void
}

export default function InfoSection({ data, updateInfo }: InfoSectionProps) {
    return (
        <div className="mt-2">
            <p className="text-lg underline">{data.caption}</p>
            <div className="flex flex-col gap-2">
                {data.items.map(item => (
                    <div key={item.key} className="flex flex-col gap-1">
                        <label>{item.label}</label>
                        <input className="border" name={item.key} onChange={updateInfo} />
                    </div>)
                )}
            </div>
        </div>
    ) 
}

