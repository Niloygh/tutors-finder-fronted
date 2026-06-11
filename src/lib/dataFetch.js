export const allTutors = async (searchItem, startDate, endDate) => {
  const query = new URLSearchParams();

  if (searchItem) query.set('search', searchItem);
  if (startDate) query.set('startDate', startDate);
  if (endDate) query.set('endDate', endDate);

  console.log(query)
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/tutors?${query.toString()}`
  );

  const data = await res.json();
  return data || [];
};



export const myTutors = async (email) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/myTutors?email=${email ? email : ""}`)
    const data = await res.json()
    console.log(data)
    return data || []
}


export const limitTutor = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/limit-tutors`)
    const data = await res.json()
    return data || []
}
