"use client";

import { addTutor } from "@/lib/action";
import { authClient } from "@/lib/auth-client";
import { FloppyDisk } from "@gravity-ui/icons";
import {
    Button,
    Description,
    FieldError,
    FieldGroup,
    Fieldset,
    Form,
    Input,
    Label,
    TextArea,
    TextField,
    Select,
    ListBox,
} from "@heroui/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";



export default function AddTutor({user}) {
    const router = useRouter()
    // const userData = authClient.useSession()
    //     const user = userData?.data?.user
    //     // console.log(user)
        const {email} = user;
        // console.log(email)

    const handleSubmit = async(formData)=> {
        
        formData.userEmail= user?.email
        const data = await addTutor(formData, user?.email);
        console.log(formData)
        if(data?.insertedId){
            toast.success("Tutor Added")
            router.push('/tutors')  
        } else{
            console.error("Failed to insert tutor")
        }
    }



    // const onSubmit = (e) => {
    //     e.preventDefault();

    //     const formData = new FormData(e.currentTarget);
    //     const data = {};

    //     // Convert FormData to plain object
    //     formData.forEach((value, key) => {
    //         data[key] = value.toString();
    //     });

    //     console.log(data);

    //     alert("Form submitted successfully!");
    // };

    return (
        <div className="">
            <Form action={handleSubmit} className="px-5 w-full max-w-4xl mx-auto shadow pb-10 ">
                <Fieldset>
                    <Fieldset.Legend className="font-bold text-center text-3xl py-10">Add Tutor</Fieldset.Legend>

                    <FieldGroup>
                        {/* Name */}
                        <TextField
                            isRequired
                            name="name"
                            type="text"
                        >
                            <Label>Tutor Name</Label>
                            <Input placeholder="Tutor name" />
                            <FieldError />
                        </TextField>

                        {/* Photo  */}
                        <TextField
                            isRequired
                            name="image"
                            type="url"
                        >
                            <Label>Photo URL</Label>
                            <Input placeholder="Your Photo URL" />
                            <FieldError />
                        </TextField>

                        {/* category */}
                        <Select name="category" className="max-w-[256px]" placeholder="Select one">
                            <Label>State</Label>
                            <Select.Trigger>
                                <Select.Value />
                                <Select.Indicator />
                            </Select.Trigger>
                            <Select.Popover>
                                <ListBox>
                                    <ListBox.Item id="Bangla" textValue="Bangla">
                                        Bangla
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>
                                    <ListBox.Item id="English" textValue="English">
                                        English
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>
                                    <ListBox.Item id="Biology" textValue="Biology">
                                        Biology
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>
                                    <ListBox.Item id="Chemistry" textValue="Chemistry">
                                        Chemistry
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>
                                    <ListBox.Item id="Physics" textValue="Physics">
                                        Physics
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>
                                    <ListBox.Item id="Mathematics" textValue="Mathematics">
                                        Mathematics
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>
                                </ListBox>
                            </Select.Popover>
                        </Select>

                        {/* date  */}
                        <TextField
                            isRequired
                            name="time_slot"
                            type="text"
                        >
                            <Label>Available Days and Time</Label>
                            <Input placeholder="5.00 PM - 8.00 PM" />
                            <FieldError />
                        </TextField>

                        {/* fee  */}
                        <TextField
                            isRequired
                            name="hourly_rate"
                            type="number"
                        >
                            <Label>Hourly Fee</Label>
                            <Input placeholder="Fee" />
                            <FieldError />
                        </TextField>

                        {/* slot  */}
                        <TextField
                            isRequired
                            name="remaining_slot"
                            type="number"
                        >
                            <Label>Total Slot</Label>
                            <Input placeholder="Total Slot" />
                            <FieldError />
                        </TextField>

                        {/* Start Date  */}
                        <TextField
                            isRequired
                            name="session_start_date"
                            type="date"
                        >
                            <Label>Session Start Date</Label>
                            <Input />
                            <FieldError />
                        </TextField>

                        {/* institution  */}
                        <TextField
                            isRequired
                            name="institution"
                            type="text"
                        >
                            <Label>Institution</Label>
                            <Input placeholder="Your Institution Name" />
                            <FieldError />
                        </TextField>

                        {/* location  */}
                        <TextField
                            isRequired
                            name="location"
                            type="text"
                        >
                            <Label>Location(Area/City)</Label>
                            <Input placeholder="Location(Area/City)" />
                            <FieldError />
                        </TextField>

                        {/* Experience */}
                        <TextField
                            isRequired
                            name="experience"
                            validate={(value) => {
                                if (value.length < 10) {
                                    return "Bio must be at least 10 characters";
                                }

                                return null;
                            }}
                        >
                            <Label>Experience</Label>

                            <TextArea
                                className="min-h-25 resize-none w-full rounded-md border border-gray-300 p-3"
                                placeholder="Tell us about experience..."
                            />

                            <Description>
                                Minimum 10 characters
                            </Description>

                            <FieldError />
                        </TextField>

                        <Select name="mode" className="w-[256px]" placeholder="Select one">
                            <Label>Status</Label>
                            <Select.Trigger>
                                <Select.Value />
                                <Select.Indicator />
                            </Select.Trigger>
                            <Select.Popover>
                                <ListBox>
                                    <ListBox.Item id="Online" textValue="Online">
                                        Online
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>
                                    <ListBox.Item id="Offline" textValue="Offline">
                                        Offline
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>
                                    <ListBox.Item id="both" textValue="Both">
                                        Both
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>
                                </ListBox>
                            </Select.Popover>
                        </Select>

                    </FieldGroup>

                    <Fieldset.Actions>
                        <Button type="submit" className={'bg-cyan-500'}>
                            <FloppyDisk />
                            Save
                        </Button>

                        <Button
                            type="reset"
                            variant="outline"
                        >
                            Reset
                        </Button>
                    </Fieldset.Actions>
                </Fieldset>
            </Form>
        </div>
    );
}