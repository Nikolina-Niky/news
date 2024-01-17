export const getFormatedDate = (D: string) => {
    const date = new Date(D);
    const formattedDate = date.toLocaleDateString("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric"
    })

    return formattedDate;
}