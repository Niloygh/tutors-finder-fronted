"use client";

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

export default function AddTutorPage() {
    const onSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const data = {};

        // Convert FormData to plain object
        formData.forEach((value, key) => {
            data[key] = value.toString();
        });

        console.log(data);

        alert("Form submitted successfully!");
    };

    return (
        <div className="px-5">
            <Form className="w-full max-w-96" onSubmit={onSubmit}>
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
                            <Input placeholder="John Doe" />
                            <FieldError />
                        </TextField>

                        {/* Email */}
                        <TextField
                            isRequired
                            name="email"
                            type="email"
                        >
                            <Label>Email</Label>
                            <Input placeholder="john@example.com" />
                            <FieldError />
                        </TextField>


                        {/* Photo  */}
                        <TextField
                            isRequired
                            name="Photo"
                            type="url"
                        >
                            <Label>Photo URL</Label>
                            <Input placeholder="John Doe" />
                            <FieldError />
                        </TextField>


                        <Select className="w-[256px]" placeholder="Select one">
                            <Label>State</Label>
                            <Select.Trigger>
                                <Select.Value />
                                <Select.Indicator />
                            </Select.Trigger>
                            <Select.Popover>
                                <ListBox>
                                    <ListBox.Item id="florida" textValue="Florida">
                                        Bangla 
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>
                                    <ListBox.Item id="delaware" textValue="Delaware">
                                        English
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>
                                    <ListBox.Item id="california" textValue="California">
                                        Biology
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>
                                    <ListBox.Item id="texas" textValue="Texas">
                                        Chemistry
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>
                                    <ListBox.Item id="new-york" textValue="New York">
                                        Physics
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>
                                    <ListBox.Item id="washington" textValue="Washington">
                                        Mathematics
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>
                                </ListBox>
                            </Select.Popover>
                        </Select>


                        {/* date  */}
                        <TextField
                            isRequired
                            name="availableData"
                            type="date"
                        >
                            <Label>Available Days and Time</Label>
                            <Input />
                            <FieldError />
                        </TextField>


                        {/* fee  */}
                        <TextField
                            isRequired
                            name="Fee"
                            type="number"
                        >
                            <Label>Hourly Fee</Label>
                            <Input placeholder="Fee" />
                            <FieldError />
                        </TextField>


                        {/* slot  */}
                        <TextField
                            isRequired
                            name="slot"
                            type="number"
                        >
                            <Label>Total Slot</Label>
                            <Input placeholder="Total Slot" />
                            <FieldError />
                        </TextField>



                        {/* Start Date  */}
                        <TextField
                            isRequired
                            name="startDate"
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
                            <Input placeholder="Institution" />
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




                        {/* Bio */}
                        <TextField
                            isRequired
                            name="bio"
                            validate={(value) => {
                                if (value.length < 10) {
                                    return "Bio must be at least 10 characters";
                                }

                                return null;
                            }}
                        >
                            <Label>Bio</Label>

                            <TextArea placeholder="Tell us about yourself..." />

                            <Description>
                                Minimum 10 characters
                            </Description>

                            <FieldError />
                        </TextField>

                        <Select className="w-[256px]" placeholder="Select one">
                            <Label>State</Label>
                            <Select.Trigger>
                                <Select.Value />
                                <Select.Indicator />
                            </Select.Trigger>
                            <Select.Popover>
                                <ListBox>
                                    <ListBox.Item id="florida" textValue="Florida">
                                        Online 
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>
                                    <ListBox.Item id="delaware" textValue="Delaware">
                                        Offline
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>
                                    <ListBox.Item id="california" textValue="California">
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