const CHECK_IN = true
const CHECK_OUT = false
export const INFO_ITEMS = [
    {
        caption: 'Driver Information',
        items:[
            {
                label: 'Name',
                key: 'name',
                regex: '[A-z| ]+',
                message: 'Name can contain only A-Z, a-z and space',
                showCases: [CHECK_IN]
            },
            {
                label: 'Phone Number',
                key: 'phoneNumber',
                regex: '(+)?[0-9]+',
                message: 'Phone Number can contain only + sign and numbers',
                showCases: [CHECK_IN, CHECK_OUT]
            },
            {
                label: 'Hauling Company',
                key: 'company',
                regex: '[A-z|0-9| ]+',
                message: 'Hauling company name can contain only A-Z, a-z, numbers and space',
                showCases: [CHECK_IN]
            },
            {
                label: 'Time of Departure',
                key: 'departureTime',
                regex: '[0-9|/|-]',
                message: 'Container number can contain only A-Z, a-z, numbers and space',
                showCases: [CHECK_OUT]
            }
        ], 
    },
    {
        caption: 'Hauling Company Information',
        items: [
            {
                label: 'Load/Booking Number',
                key: 'loadNumber',
                regex: '[A-z|0-9]+',
                message: 'Booking number can contain only A-Z, a-z and numbers',
                showCases: [CHECK_IN, CHECK_OUT]
            },
            {
                label: 'Customer Name',
                key: 'customerName',
                regex: '[A-z| ]+',
                message: 'Customer name can contain only A-Z, a-z and space',
                showCases: [CHECK_IN]
            },
            {
                label: 'Container Number',
                key: 'containerNumber',
                regex: '[A-z|0-9| ]+',
                message: 'Container number can contain only A-Z, a-z, numbers and space',
                showCases: [CHECK_IN]
            },
        ]
    }
]
