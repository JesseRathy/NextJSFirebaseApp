export function getHeaders(data: Object[]) {
    let headers: string[] = [];
    let titles: string[] = Object.keys(data[0]);
    for (let title of titles ){
        headers.push(title);
    }
    return headers;
}

export function changeDate(date:Date) :string {
    const dateFormat ={
        weekday: "short",
        month: "short",
        day: "numeric",
        year: "numeric"
    } as const
    const dateFormatting = new Intl.DateTimeFormat("en",dateFormat);
    let formattedDate:string = dateFormatting.format(date);
    return formattedDate
}