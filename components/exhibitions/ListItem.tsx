import Link from 'next/link'
import Image from 'next/image'
import { getDate } from '../../helpers/time'

export type ListItemProps = {
    id: number,
    title: string,
    image_url: string,
    description: string, 
    aic_start_at: Date,
    aic_end_at: Date
}

function ListItem(props: ListItemProps) {
    const { id, title, image_url, aic_start_at, aic_end_at } = props
    return (
        <div className="flex flex-col">
            <div className="relative w-full h-64">
                {image_url ? <Image src={image_url} alt='Picture' objectFit='cover' layout='fill' /> : <p className='italic'>No Picture to Display</p>}
            </div>
            <Link href={`/exhibitions/${id}`} passHref>
                <p className="font-bold cursor-pointer hover:text-blue-600">
                    {title}
                </p>
            </Link>
            <p className="text-sm">{`${getDate(aic_start_at)} - ${getDate(aic_end_at)}`}</p>
        </div>
    )
}

export default ListItem