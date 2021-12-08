export const usersAdapter = (data) => {
    return {
        currentPage: data.page,
        itemsOnPage: data.per_page,
        totalItems: data.total,
        totalPages: data.total_pages,
        users: data.data.map(elem => {
            return {
                _id: elem._id,
                firstName: elem.first_name,
                lastName: elem.last_name,
                email: elem.email,
                avatar: elem.avatar,
                updatedAt: elem.updatedAt,
                __v: elem.__v,
            }
        }),
    };
};

export const convertDate = (milliseconds) => {
    
    const date = new Date(+milliseconds)

    const getDoubleDigitValue = (value) => {
        return value < 10 ? '0' + value : value
    }

    return `
        ${
            getDoubleDigitValue(date.getDate())
            + '.' + getDoubleDigitValue(date.getMonth())
            + '.' + date.getFullYear() 
            + ' в ' + getDoubleDigitValue(date.getHours())
            + ':' + getDoubleDigitValue(date.getMinutes())
            + ':' + getDoubleDigitValue(date.getSeconds())
        }
    `;
}