"use client";

import { Button, Description, FieldError, Form, Input, Label, Modal, TextField } from "@heroui/react";
import { Check } from "lucide-react";
import { FaWpforms } from "react-icons/fa";

export function ModalPage() {
  return (
    <Modal>
      <Button variant="outline">View Details</Button>
      <Modal.Backdrop
        className="bg-linear-to-t from-black/80 via-black/40 to-transparent dark:from-zinc-800/80 dark:via-zinc-800/40"
        variant="blur"
      >
        <Modal.Container>
          <Modal.Dialog className="sm:max-w-[360px]">
            <Modal.Header className="items-center text-center">
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                <FaWpforms className="size-5" />
              </Modal.Icon>
              <Modal.Heading>Book Session</Modal.Heading>
            </Modal.Header>
            <Modal>
              <p className="text-gray-500 text-md">
                Make changes to your profile here. Click save when you are done.
              </p>
            </Modal>

            <Form className="flex w-96 flex-col gap-4 my-10" >
              <TextField
                isRequired
                name="name"
                type="text"
              >
                <Label>Name</Label>
                <Input placeholder="Your Name" />
                <FieldError />
              </TextField>
              
              
              <TextField
                isRequired
                name="number"
                type="text"
              >
                <Label>Number</Label>
                <Input placeholder="Your Number" />
                <FieldError />
              </TextField>

              
              <TextField
                isRequired
                name="tutorName"
                value="Niloy"
                type="text"
                isReadOnly
              >
                <Label>Tutor Name</Label>
                <Input />
                <FieldError />
              </TextField>


              <TextField
                isRequired
                name="email"
                type="email"
                value="john@example.com"
                isReadOnly
                validate={(value) => {
                  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                    return "Please enter a valid email address";
                  }
                  return null;
                }}
              >
                <Label>Email</Label>
                <Input />
                
                <FieldError />
              </TextField>

            </Form>


            <Modal.Footer className="flex-col-reverse">
              <Button className="w-full bg-cyan-500" slot="close">
                Confirm Booking
              </Button>
              <Button className="w-full" slot="close" variant="secondary">
                Close
              </Button>
            </Modal.Footer>
            <Modal.CloseTrigger />
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}