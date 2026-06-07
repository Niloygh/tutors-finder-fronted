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

export function UpDateModal() {
  return (
    <Modal>
      <Button variant="secondary">
        <PencilToLine />
      </Button>

      <Modal.Backdrop>
        <Modal.Container placement="center">
          <Modal.Dialog
            className="
              w-[95vw]
              max-w-4xl
              max-h-[90vh]
              overflow-hidden
              rounded-xl
              mx-2
            "
          >
            <Modal.CloseTrigger />

            <Modal.Header className="px-4 pt-5">
              <Modal.Heading
                className="
                  text-center
                  text-xl
                  sm:text-2xl
                  md:text-3xl
                  font-bold
                "
              >
                Book Session
              </Modal.Heading>

              <p className="mt-2 text-sm sm:text-base text-center text-muted">
                Make changes to your profile here. Click save when you are
                done.
              </p>
            </Modal.Header>

            <Modal.Body
              className="
                overflow-y-auto
                max-h-[75vh]
                p-3
                sm:p-6
              "
            >
              <Form
                className="
                  w-full
                  mx-auto
                  bg-white
                  rounded-xl
                  p-2
                  sm:p-4
                "
              >
                <Fieldset>
                  <FieldGroup className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    {/* Tutor Name */}
                    <TextField isRequired name="name" type="text">
                      <Label>Tutor Name</Label>
                      <Input placeholder="Tutor Name" />
                      <FieldError />
                    </TextField>

                    {/* Photo URL */}
                    <TextField isRequired name="image" type="url">
                      <Label>Photo URL</Label>
                      <Input placeholder="https://example.com/photo.jpg" />
                      <FieldError />
                    </TextField>

                    {/* Subject */}
                    <Select
                      name="category"
                      className="w-full"
                      placeholder="Select Subject"
                    >
                      <Label>Subject</Label>

                      <Select.Trigger>
                        <Select.Value />
                        <Select.Indicator />
                      </Select.Trigger>

                      <Select.Popover>
                        <ListBox>
                          <ListBox.Item id="Bangla">
                            Bangla
                            <ListBox.ItemIndicator />
                          </ListBox.Item>

                          <ListBox.Item id="English">
                            English
                            <ListBox.ItemIndicator />
                          </ListBox.Item>

                          <ListBox.Item id="Biology">
                            Biology
                            <ListBox.ItemIndicator />
                          </ListBox.Item>

                          <ListBox.Item id="Chemistry">
                            Chemistry
                            <ListBox.ItemIndicator />
                          </ListBox.Item>

                          <ListBox.Item id="Physics">
                            Physics
                            <ListBox.ItemIndicator />
                          </ListBox.Item>

                          <ListBox.Item id="Mathematics">
                            Mathematics
                            <ListBox.ItemIndicator />
                          </ListBox.Item>
                        </ListBox>
                      </Select.Popover>
                    </Select>

                    {/* Available Time */}
                    <TextField isRequired name="time_slot">
                      <Label>Available Days & Time</Label>
                      <Input placeholder="Sun-Thu 5:00 PM - 8:00 PM" />
                      <FieldError />
                    </TextField>

                    {/* Hourly Fee */}
                    <TextField isRequired name="hourly_rate" type="number">
                      <Label>Hourly Fee</Label>
                      <Input placeholder="1000" />
                      <FieldError />
                    </TextField>

                    {/* Total Slot */}
                    <TextField isRequired name="remaining_slot" type="number">
                      <Label>Total Slot</Label>
                      <Input placeholder="50" />
                      <FieldError />
                    </TextField>

                    {/* Start Date */}
                    <TextField
                      isRequired
                      name="session_start_date"
                      type="date"
                    >
                      <Label>Session Start Date</Label>
                      <Input />
                      <FieldError />
                    </TextField>

                    {/* Institution */}
                    <TextField isRequired name="institution">
                      <Label>Institution</Label>
                      <Input placeholder="Dhaka University" />
                      <FieldError />
                    </TextField>

                    {/* Location */}
                    <TextField isRequired name="location">
                      <Label>Location (Area/City)</Label>
                      <Input placeholder="Dhaka" />
                      <FieldError />
                    </TextField>

                    {/* Teaching Mode */}
                    <Select
                      name="mode"
                      className="w-full"
                      placeholder="Select Mode"
                    >
                      <Label>Teaching Mode</Label>

                      <Select.Trigger>
                        <Select.Value />
                        <Select.Indicator />
                      </Select.Trigger>

                      <Select.Popover>
                        <ListBox>
                          <ListBox.Item id="Online">
                            Online
                            <ListBox.ItemIndicator />
                          </ListBox.Item>

                          <ListBox.Item id="Offline">
                            Offline
                            <ListBox.ItemIndicator />
                          </ListBox.Item>

                          <ListBox.Item id="Both">
                            Both
                            <ListBox.ItemIndicator />
                          </ListBox.Item>
                        </ListBox>
                      </Select.Popover>
                    </Select>

                    {/* Experience */}
                    <div className="md:col-span-2">
                      <TextField
                        isRequired
                        name="experience"
                        validate={(value) => {
                          if (value.length < 10) {
                            return "Experience must be at least 10 characters";
                          }
                          return null;
                        }}
                      >
                        <Label>Experience</Label>

                        <TextArea
                          className="
                            w-full
                            min-h-32
                            resize-none
                            rounded-lg
                            p-3
                          "
                          placeholder="Describe your teaching experience..."
                        />

                        <Description>
                          Minimum 10 characters
                        </Description>

                        <FieldError />
                      </TextField>
                    </div>
                  </FieldGroup>

                  <Fieldset.Actions
                    className="
                      flex
                      flex-col
                      sm:flex-row
                      gap-3
                      mt-8
                      sm:justify-end
                    "
                  >
                    <Button
                      slot="close"
                      variant="outline"
                      className="w-full sm:w-auto"
                    >
                      Cancel
                    </Button>

                    <Button
                      slot="close"
                      className="w-full sm:w-auto bg-cyan-500 text-white"
                    >
                      Confirm Booking
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