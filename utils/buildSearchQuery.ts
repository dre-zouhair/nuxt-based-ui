// It will be available as buildSearchQuery() (camelCase of file name without extension)

export default function (arr: Array<{
    name: string,
    value: string | number | boolean,

}>): string {
    const query = new URLSearchParams(window.location.search);

    for (let arrElement of arr) {
        query.append(arrElement.name, String(arrElement.value))
    }
    return query.toString()
}