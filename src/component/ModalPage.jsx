"use client";

import { authClient, useSession } from "@/lib/auth-client";
import {
  Button,
  FieldError,
  Form,
  Input,
  Label,
  Modal,
  TextField,
} from "@heroui/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { FaWpforms } from "react-icons/fa";

export function ModalPage({ tutor }) {
  const router = useRouter()

  const userData = authClient.useSession()
  const user = userData?.data?.user
  // console.log(user, "user")

  const { data: session } = useSession()
  // console.log(session)

  const handleEnroll = async (e) => {
    
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const registerData = Object.fromEntries(formData.entries())
    // console.log(registerData)

    const { data: jwtData } = await authClient.token();
    const token = jwtData?.token
    // console.log(token)
    if (!token) {
      toast.error("authentication failed. Enrollment not add.")
      return;
    }
   

    const upDateData = {
      userId: session?.user?.id,
      studentName: registerData?.name,
      studentEmail: registerData?.email,
      studentNumber: registerData?.number,
      tutorName: registerData?.tutorName,
      session_start_date: tutor.session_start_date,
    }

    const res = await fetch(
  `${process.env.NEXT_PUBLIC_API_URL}/enrollment/${tutor?._id}`,
  {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(upDateData),
  }
);

const data = await res.json();

console.log("Status:", res.status);
console.log("Response:", data);

if (!res.ok) {
  toast.error(data.message);
  return;
}

toast.success(data.message);

router.push("/my-booked-sessions");


  }

  return (
    <Modal>
      <Button variant="outline">Book Session</Button>

      <Modal.Backdrop
        className="bg-linear-to-t from-black/80 via-black/40 to-transparent"
        variant="blur"
      >
        <Modal.Container>
          <Modal.Dialog className="max-w-100 max-h-[90vh] overflow-y-auto">
            <Modal.Header className="items-center text-center">
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                <FaWpforms className="size-5" />
              </Modal.Icon>

              <Modal.Heading>Book Session</Modal.Heading>
            </Modal.Header>

            <p className="text-gray-500 text-sm px-6">
              Make changes to your profile here. Click save when you are done.
            </p>

            <Form onSubmit={handleEnroll} className="w-full flex flex-col gap-4 px-6 py-4">
              <TextField isRequired name="name" type="text">
                <Label>Name</Label>
                <Input placeholder="Your Name" />
                <FieldError />
              </TextField>

              <TextField isRequired name="number" type="text">
                <Label>Number</Label>
                <Input placeholder="Your Number" />
                <FieldError />
              </TextField>

              <TextField
                isRequired
                name="tutorName"
                defaultValue={tutor?.name}
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
                defaultValue={user?.email || "john@example.com"}
                isReadOnly
              >
                <Label>Email</Label>
                <Input />
                <FieldError />
              </TextField>

              <div className="flex gap-2 ">
                <Button
                  type="submit"
                  className="w-full bg-cyan-500 text-white">
                  Confirm Booking
                </Button>

                <Button
                  className="w-full"
                  slot="close"
                  variant="secondary"
                >
                  Close
                </Button>
              </div>

            </Form>

            <Modal.Footer className="flex gap-2 px-6 pb-6">

            </Modal.Footer>

            <Modal.CloseTrigger />
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}