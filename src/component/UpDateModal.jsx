"use client";

import { PencilToLine } from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  FieldGroup,
  Fieldset,
  Form,
  Input,
  Label,
  ListBox,
  Modal,
  Select,
  TextArea,
  TextField,
} from "@heroui/react";
import { toast } from "react-hot-toast";

export function UpDateModal({ myData }) {
  const handleUpdate = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const updateData = Object.fromEntries(formData.entries());

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/tutor/dataUp/${myData._id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updateData),
      }
    );

    const data = await res.json();

    if (data.modifiedCount > 0) {
      toast.success("Tutor Updated Successfully");
      window.location.reload();
    } else {
      toast.error("No changes were made");
    }
  };

  const formattedStartDate = myData?.session_start_date
    ? new Date(myData.session_start_date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
    : "";

  return (
    <Modal>
      <Button variant="secondary">
        <PencilToLine />
      </Button>

      <Modal.Backdrop>
        <Modal.Container placement="center">
          <Modal.Dialog className="w-[95vw] max-w-4xl max-h-[90vh] overflow-hidden rounded-xl mx-2">
            <Modal.CloseTrigger />

            <Modal.Header className="px-4 pt-5">
              <Modal.Heading className="text-center text-xl sm:text-2xl md:text-3xl font-bold">
                Update Tutor
              </Modal.Heading>
              <p className="mt-2 text-sm sm:text-base text-center text-muted">
                Make changes to your tutor info and click update.
              </p>
            </Modal.Header>

            <Modal.Body className="overflow-y-auto max-h-[75vh] p-3 sm:p-6">
              <Form
                onSubmit={handleUpdate}
                className="w-full mx-auto rounded-xl p-2 sm:p-4"
              >
                <Fieldset>
                  <FieldGroup className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    <TextField name="name" defaultValue={myData?.name}>
                      <Label>Tutor Name</Label>
                      <Input />
                      <FieldError />
                    </TextField>

                    <TextField name="image" defaultValue={myData?.image}>
                      <Label>Photo URL</Label>
                      <Input />
                      <FieldError />
                    </TextField>

                    <Select
                      name="category"
                      className="w-full"
                      placeholder="Select Subject"
                      isRequired
                    >
                      <Label>
                        Subject{" "}
                        <span className="text-cyan-500 font-normal">
                          (Currently: {myData?.category})
                        </span>
                      </Label>
                      <Select.Trigger>
                        <Select.Value />
                        <Select.Indicator />
                      </Select.Trigger>
                      <Select.Popover>
                        <ListBox>
                          <ListBox.Item id="Bangla">Bangla</ListBox.Item>
                          <ListBox.Item id="English">English</ListBox.Item>
                          <ListBox.Item id="Biology">Biology</ListBox.Item>
                          <ListBox.Item id="Chemistry">Chemistry</ListBox.Item>
                          <ListBox.Item id="Physics">Physics</ListBox.Item>
                          <ListBox.Item id="Mathematics">Mathematics</ListBox.Item>
                        </ListBox>
                      </Select.Popover>
                    </Select>

                    <TextField name="time_slot" defaultValue={myData?.time_slot}>
                      <Label>Available Time</Label>
                      <Input />
                    </TextField>

                    <TextField name="hourly_rate" defaultValue={String(myData?.hourly_rate ?? "")}>
                      <Label>Hourly Fee</Label>
                      <Input type="number" />
                    </TextField>

                    <TextField name="remaining_slot" defaultValue={String(myData?.remaining_slot ?? "")}>
                      <Label>Total Slot</Label>
                      <Input type="number" />
                    </TextField>

                    <TextField name="session_start_date" defaultValue={myData?.session_start_date}>
                      <Label>Start Date <span className="text-cyan-500 font-normal">(Currently: {formattedStartDate})</span></Label>
                      <Input type="date" />
                    </TextField>

                    <TextField name="institution" defaultValue={myData?.institution}>
                      <Label>Institution</Label>
                      <Input />
                    </TextField>

                    <TextField name="location" defaultValue={myData?.location}>
                      <Label>Location</Label>
                      <Input />
                    </TextField>

                    <Select
                      name="mode"
                      className="w-full"
                      placeholder="Select Mode"
                      isRequired
                    >
                      <Label>
                        Teaching Mode{" "}
                        <span className="text-cyan-500 font-normal">
                          (Currently: {myData?.mode})
                        </span>
                      </Label>
                      <Select.Trigger>
                        <Select.Value />
                        <Select.Indicator />
                      </Select.Trigger>
                      <Select.Popover>
                        <ListBox>
                          <ListBox.Item id="Online">Online</ListBox.Item>
                          <ListBox.Item id="Offline">Offline</ListBox.Item>
                          <ListBox.Item id="Both">Both</ListBox.Item>
                        </ListBox>
                      </Select.Popover>
                    </Select>

                    <div className="md:col-span-2">
                      <TextField name="experience" defaultValue={myData?.experience}>
                        <Label>Experience</Label>
                        <TextArea className="w-full min-h-32 resize-none rounded-lg p-3" />
                        <Description>Minimum 10 characters</Description>
                        <FieldError />
                      </TextField>
                    </div>
                  </FieldGroup>

                  <Fieldset.Actions className="flex gap-3 mt-8 justify-end">
                    <Button slot="close" variant="outline">
                      Cancel
                    </Button>
                    <Button type="submit" className="bg-cyan-500 text-white">
                      Update Tutor
                    </Button>
                  </Fieldset.Actions>
                </Fieldset>
              </Form>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}