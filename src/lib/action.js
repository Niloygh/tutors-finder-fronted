"use server"

import { revalidatePath } from "next/cache"

export const addTutor = async (formData, email) => {
    const newTutor = Object.fromEntries(formData.entries())

    const modifiedData = {
        name: newTutor.name,
        image: newTutor.image,
        category: newTutor.category,
        institution: newTutor.institution,
        experience: newTutor.experience,
        location: newTutor.location,
        mode: newTutor.mode,
        time_slot: newTutor.time_slot,
        hourly_rate: newTutor.hourly_rate,
        remaining_slot: parseInt(newTutor.remaining_slot),
        session_start_date: newTutor.session_start_date,
        userEmail: email
    }
    console.log(modifiedData)

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tutors`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(modifiedData)
    })
    const data = await res.json()
    if (!res.ok) {
        return
    }
    revalidatePath('/tutors')


    return data

}