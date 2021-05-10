export const OPTIONS = [
    {value: 1, label: 'Programming'},
    {value: 2, label: 'Food'},
    {value: 3, label: 'Beauty'},
    {value: 4, label: 'Sports'},
]

export const convertToSelect = options => options.map(
    option => OPTIONS[option - 1]
)

export const convertFromSelect = options => options.map(
    option => option.value
)