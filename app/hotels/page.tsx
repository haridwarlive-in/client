"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail } from "lucide-react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogFooter,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { BookingDialogFormTypes } from "@/types";
import { useForm, Controller } from "react-hook-form";
import axios from 'axios';

const hotels = [
  // Repeat similar objects with different details to make 30 hotels.
  ...Array(30)
    .fill(0)
    .map((_, index) => ({
      _id: "6797d0d17066e196c70d6a72",
      name: `Hotel ${index + 1}`,
      description: `This is a description of Hotel ${
        index + 1
      }. Perfect for your stay.`,
      image: `https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80`,
      location: `Location ${index + 1}`,
      phone: `+91-98765432${index}`,
      email: `hotel${index + 1}@example.com`,
    })),
];

export default function Hotels() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  const totalPages = Math.ceil(hotels.length / itemsPerPage);

  const paginatedHotels = hotels.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
    scrollTo({ top: 0, behavior: "smooth" });
  };

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
    scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-32">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl max-md:text-3xl border-l-yellow-300 py-6 px-8 border-l-4 mb-8">
          Places to Stay in <span className="font-bold">Haridwar</span>
        </h1>
        <div className="space-y-6">
          {paginatedHotels.map((hotel, index) => (
            <Card
              key={index}
              className="flex flex-col md:flex-row max-md:pb-4 md:items-start bg-white shadow-sm rounded-lg overflow-hidden"
            >
              <Image
                src={hotel.image}
                alt={hotel.name}
                className="w-full md:w-1/3 h-full object-cover md:rounded-l-lg"
                loading="lazy"
                width={400}
                height={300}
              />
              <div className="flex flex-col justify-between md:flex-1">
                <CardHeader>
                  <CardTitle className="text-xl font-bold">
                    {hotel.name}
                  </CardTitle>
                  <div className="flex items-center text-gray-500 mt-2">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>{hotel.location}</span>
                  </div>
                </CardHeader>
                <CardContent className="py-0">
                  <p className="text-gray-600 mb-4">{hotel.description}</p>
                  <div className="flex items-center text-gray-500 mb-2">
                    <Phone className="h-4 w-4 mr-2" />
                    <span>{hotel.phone}</span>
                  </div>
                  <div className="flex items-center text-gray-500 mb-4">
                    <Mail className="h-4 w-4 mr-2" />
                    <span>{hotel.email}</span>
                  </div>

                  {/** Booking Dialog Trigger */}
                  <BookingDialog hotelId={hotel._id} />
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
        {/* Pagination Controls */}
        <div className="flex justify-between items-center mt-8">
          <Button
            disabled={currentPage === 1}
            onClick={handlePrevious}
            className="bg-gray-300 hover:bg-gray-400 text-black"
          >
            Previous
          </Button>
          <span className="text-gray-700">
            Page {currentPage} of {totalPages}
          </span>
          <Button
            disabled={currentPage === totalPages}
            onClick={handleNext}
            className="bg-gray-300 hover:bg-gray-400 text-black"
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}

const BookingDialog = ({ hotelId }: { hotelId: string }) => {
  
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<BookingDialogFormTypes>({
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
      date: '',
      totalDays: 0,
      hotelId: hotelId
    }
  });

  const onSubmit = async (data: BookingDialogFormTypes) => {
    console.log('Form submitted', data);
    // Handle form submission (e.g., send data to API, etc.)
    await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/bookings`, data, {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json'
      }
    })
    reset(); // Reset form after submission
  };


  return (
    <Dialog>
      <DialogTrigger className="w-fit py-2 px-4 rounded-full bg-yellow-300 hover:bg-yellow-300/80 text-[#343333] text-sm font-medium">
        Book now
      </DialogTrigger>
      <DialogContent className="p-4 max-md:w-[95vw]">
        <DialogHeader>
          <DialogTitle>Request Room Booking Now!</DialogTitle>
          <DialogDescription>
            Send a booking request, and we will contact you shortly for
            confirmation.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Name Field */}
          <div>
            <Label>Name</Label>
            <Controller
              control={control}
              name="name"
              rules={{ required: 'Name is required' }}
              render={({ field }) => <Input {...field} />}
            />
            {errors.name && <p className="text-red-600 text-xs mt-1">{errors.name.message}</p>}
          </div>

          {/* Phone Field */}
          <div>
            <Label>Phone</Label>
            <Controller
              control={control}
              name="phone"
              rules={{ required: 'Phone number is required' }}
              render={({ field }) => <Input {...field} />}
            />
            {errors.phone && <p className="text-red-600 text-xs mt-1">{errors.phone.message}</p>}
          </div>

          {/* Email Field */}
          <div>
            <Label>Email</Label>
            <Controller
              control={control}
              name="email"
              rules={{
                required: 'Email is required',
                pattern: {
                  value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
                  message: 'Invalid email address'
                }
              }}
              render={({ field }) => <Input {...field} />}
            />
            {errors.email && <p className="text-red-600 text-xs mt-1">{errors.email.message}</p>}
          </div>

          {/* Check-in Date */}
          <div>
            <Label>Check-in Date</Label>
            <Controller
              control={control}
              name="date"
              rules={{ required: 'Date is required' }}
              render={({ field }) => <Input type="date" {...field} />}
            />
            {errors.date && <p className="text-red-600 text-xs mt-1">{errors.date.message}</p>}
          </div>

          {/* Total Days of Stay */}
          <div>
            <Label>Total Days of Stay</Label>
            <Controller
              control={control}
              name="totalDays"
              rules={{ required: 'Total days is required' }}
              render={({ field }) => <Input type="number" {...field} />}
            />
            {errors.totalDays && <p className="text-red-600 text-xs mt-1">{errors.totalDays.message}</p>}
          </div>

          {/* Message Field */}
          <div>
            <Label>Message</Label>
            <Controller
              control={control}
              name="message"
              render={({ field }) => <Textarea rows={2} placeholder="Optional" {...field} />}
            />
          </div>

          {/* Submit Button */}
          <DialogFooter>
            <Button
              type="submit"
              className="bg-yellow-300 text-[#343333] text-sm hover:bg-yellow-300/80 w-full mt-4"
            >
              Send Booking Request
            </Button>
          </DialogFooter>
        </form>

      </DialogContent>
    </Dialog>
  );
};
