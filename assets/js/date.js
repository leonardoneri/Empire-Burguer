
export const date = () =>{
    const now = dayjs()
    const dayOfWeek = now.format('dddd')
    const hours = now.hour()
 

    return {
        dayOfWeek: dayOfWeek,
        hours: hours
    }
}
