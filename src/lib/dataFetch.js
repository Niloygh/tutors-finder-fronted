export const allTutors = async (searchItem) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tutors?search=${searchItem ? searchItem : ""}`)
    const data = await res.json()
    console.log(data)
    return data || []
}



export const limitTutor = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/limit-tutors`)
    const data = await res.json()
    return data || []
}
