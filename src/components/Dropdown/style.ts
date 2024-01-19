export const selectStyles = {
    control: (baseStyles, state) => {
        return ({
            ...baseStyles,
            backgroundColor: 'none',
            borderColor: '#393F45',
            // fontFamily: 'regular',
            // textTransform: 'capitalize',
            '&:hover': {
                borderColor: '#393F45',
            },
            borderRadius: '6px',
            boxShadow: 'none',
            overflow: 'hidden',
            width: '132px'
        })
    },
    singleValue: (styles) => {
        return ({
            ...styles,
            color: '#fff',
            gridArea: '1',
            width: '132px',
            fontSize: '14px'
        })
    },
    indicatorSeparator: (styles) => ({display:'none'}),
    menu: base => ({
        ...base,
        backgroundColor: '#1F1F1F',
        borderRadius: '8px',
        marginTop: 9,
        paddingTop: 8,
        paddingBottom: 8,
        boxShadow: 'none'
    }),
    menuList: base => ({
        ...base,
        padding: 0
    }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
        return {
            ...styles,
            backgroundColor: '#1F1F1F',//isDisabled ? '#' : 'blue',
            fontSize: '14px',
            // fontFamily: 'regular',
            // textTransform: 'lowercase',
            color: !isSelected ? '#fff' : '#8F8F8F',
            opacity: isSelected ? '50' : '100',
        };
    },

}
