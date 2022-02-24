import React from 'react'
import cn from 'classnames'

type ToggleProps = {
    checked: boolean,
    labels: string[],
    changeHandler: (val: boolean) => void
}

function Toggle({checked, labels, changeHandler}: ToggleProps) {
    return (
        <div className="w-fit bg-gray-200 text-sm text-gray-500 leading-none border-2 border-gray-200 rounded-full inline-flex">
            { labels.map((label, index) => (
                <button 
                    key={label} 
                    className={cn(
                        'inline-flex items-center transition-colors duration-300 ease-in focus:outline-none hover:text-white px-2 py-1 rounded-full',
                        {'text-white bg-blue-600': checked === !index }
                    )}
                    onClick={() => changeHandler(index === 0)}
                >
                    {label}
                </button>
            ))}
        </div>
    )
}

export default Toggle