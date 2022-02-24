type InfoSectionProps = {
    data: {
        caption: string,
        items: {
            label: string,
            key: string,
            showCases: boolean[]
        }[]
    },
    updateInfo: (e: React.FormEvent<HTMLInputElement>) => void,
    showCase: boolean
}

export default function InfoSection({ data, updateInfo, showCase }: InfoSectionProps) {
    return (
        <div className="mt-2">
            <p className="text-lg underline">{data.caption}</p>
            <div className="flex flex-col gap-2">
                {data.items.filter(item => item.showCases.includes(showCase)).map(item => (
                    <div key={item.key} className="flex flex-col gap-1">
                        <label>{item.label}</label>
                        <input className="border" name={item.key} onChange={updateInfo} />
                    </div>)
                )}
            </div>
        </div>
    ) 
}

