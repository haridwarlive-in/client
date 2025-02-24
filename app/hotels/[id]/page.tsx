"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
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
import { BookingDialogFormTypes, Hotel } from "@/types";
import Link from "next/link";
import { useForm, Controller } from "react-hook-form";
import { useEffect, useState } from "react";
import ShareButton from "@/components/ShareButton";
import axios from "axios";
import { Button } from "@/components/ui/button";

export default function HotelDetailPage() {
  const params = useParams();
  const id = params.id;
  
  const [hotels, setHotels] = useState<Hotel[]>([]);
  const [selectedHotel, setSelectedHotel] = useState<Hotel | null>(null);
  const [otherHotels, setOtherHotels] = useState<Hotel[] | null>([]);

  const fetchHotels = async () => {
    const {data} = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/hotels?limit=8`);
    setHotels(data);
  };

  const fetchSelectedHotel = async () => {
    const {data} = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/hotels/${id}`);
    setSelectedHotel(data);
  };

  useEffect(() => {
    fetchHotels();
    fetchSelectedHotel();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (hotels.length > 0) {
      setOtherHotels(hotels.filter((item) => item._id !== id));
    }
  }, [hotels, id]);

  if (!selectedHotel) {
    return <main className="min-h-screen"></main>;
  }

  const fullUrl = typeof window !== "undefined" ? window.location.href : "";

  return (
    <div className="container mx-auto px-4 pt-32 pb-10 flex flex-col lg:flex-row gap-8">
      <div className="lg:w-2/3">
        <Image
          src={selectedHotel?.image as string ?? null}
          alt={selectedHotel?.title as string}
          className="w-full h-96 object-cover rounded-md"
          priority
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkAAIAAAoAAv/lxKUAAAAASUVORK5CYII="
          width={1200}
          height={600}
        />

        <ShareButton url={fullUrl} />

        <div className="py-6">
          <h1 className="md:text-4xl text-2xl font-semibold mb-4">{selectedHotel?.title}</h1>
          <p className="text-gray-600 text-sm mb-2">📍 {selectedHotel?.address}</p>
          <a href={selectedHotel?.locationUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 mb-2 block">View on Map</a>

          <BookingDialog hotelId={selectedHotel?._id}/>
          <p className="text-gray-700 mb-2 border p-2 w-fit rounded-md">Rooms Available: <strong>{selectedHotel?.roomsAvailable}</strong></p>

          <p className="text-lg mb-4">{selectedHotel?.description}</p>
          <h3 className="text-lg font-semibold mb-2">Amenities</h3>
          <ul className="list-disc pl-5 mb-6">
            {selectedHotel?.amenities.map((amenity, index) => (
              <li key={index}>{amenity}</li>
            ))}
          </ul>
          <h3 className="text-lg font-semibold mb-2">Contact</h3>
          <p>📞 Phone: {selectedHotel?.contact.phone}</p>
          <p>📧 Email: <a href={`mailto:${selectedHotel?.contact.email}`} className="text-blue-500">{selectedHotel?.contact.email}</a></p>
          <p>🌐 Website: <a href={selectedHotel?.contact.website} target="_blank" rel="noopener noreferrer" className="text-blue-500">{selectedHotel?.contact.website}</a></p>
        </div>
      </div>
      <div className="lg:w-1/3">
        <h2 className="text-xl font-bold mb-4">More Hotels to Stay in</h2>
        <ul className="space-y-4">
          {otherHotels?.map((item) => (
            <li key={item._id}>
              <Link href={`/hotels/${item._id}`} className="flex items-center gap-4">
                <Image
                  src={item.image as string ?? null}
                  alt={item.title}
                  className="w-16 h-16 object-cover rounded-md"
                  priority
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkAAIAAAoAAv/lxKUAAAAASUVORK5CYII="
                  width={64}
                  height={64}
                />
                <div>
                  <h3 className="text-lg max-md:text-sm font-medium">{item.title}</h3>
                  <p className="text-sm text-gray-500">📍 {item.address}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
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
      <DialogTrigger className="w-fit py-2 px-8 my-4 rounded-lg bg-yellow-300 hover:bg-yellow-300/80 text-[#343333] text-md font-medium">
        Book now
      </DialogTrigger>
      <DialogContent className="md:py-6 md:px-4 p-4 max-md:w-[95vw]">
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
