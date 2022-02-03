import Link from 'next/link'
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
    const { id, title, image_url, aic_start_at, aic_end_at } = props;
    return (
        <div className="flex flex-col">
            <img src={image_url} alt='No Picture to display' className="w-full object-cover h-64" />
            <Link href={`/exhibitions/${id}`}>
                <p className="font-bold cursor-pointer hover:text-blue-600">
                    {title}
                </p>
            </Link>
            <p className="text-sm">{`${getDate(aic_start_at)} - ${getDate(aic_end_at)}`}</p>
        </div>
    );
}

export default ListItem;