import Image from 'next/image'
import { getDate } from '../../helpers/time'

export type DetailItemProps = {
    title: string,
    image_url: string,
    description: string, 
    aic_start_at: Date,
    aic_end_at: Date
}

function DetailItem(props: DetailItemProps) {
    const { title, image_url, description, aic_start_at, aic_end_at } = props
    return (
        <div className='flex flex-col gap-2'>
            <div className='flex gap-3 items-end'>
                <p className='text-3xl'>{title}</p>
                <p className="text-sm">{`${getDate(aic_start_at)} - ${getDate(aic_end_at)}`}</p>
            </div>
            <div className="flex gap-3">
                <div className="relative w-96 h-72">
                    {image_url ? <Image src={image_url} alt='Picture' objectFit='cover' layout='fill' /> : <p className='italic'>No Picture to Display</p>}
                </div>
                <p className="flex-1">{description ? description : 'No description!'}</p>
            </div>
        </div>
    )
}

export default DetailItem