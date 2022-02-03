import { getDate } from '../../helpers/time'

export type DetailItemProps = {
    title: string,
    image_url: string,
    description: string, 
    aic_start_at: Date,
    aic_end_at: Date
}

function DetailItem(props: DetailItemProps) {
    const { title, image_url, description, aic_start_at, aic_end_at } = props;
    return (
        <div className='flex flex-col gap-2'>
            <div className='flex gap-3 items-end'>
                <p className='text-3xl'>{title}</p>
                <p className="text-sm">{`${getDate(aic_start_at)} - ${getDate(aic_end_at)}`}</p>
            </div>
            <div className="flex gap-3">
                <img src={image_url} className="w-full object-cover w-80 h-64" />
                <p className="flex-1">{description ? description : 'No description!'}</p>
            </div>
        </div>
    );
}

export default DetailItem;