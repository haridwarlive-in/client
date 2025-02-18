"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
  return (
    <div>
      <div className="container mx-auto px-4 pt-28 pb-8">
        <h1 className="text-4xl max-md:text-3xl border-l-4 py-6 px-8 border-l-yellow-300 text-left mb-8">
          Contact Us
        </h1>
        <div className="grid md:grid-cols-2 gap-0">
          <Card className="rounded-none shadow-none border border-black max-md:border-b-0 border-r-0">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
              <form className="space-y-3">
                <div>
                  <Input type="text" placeholder="John Doe" />
                </div>
                <div>
                  <Input type="email" placeholder="example@gmail.com" />
                </div>
                <div className="flex flex-row items-center">
                  <div className="p-2 bg-yellow-300 text-semibold rounded-l-md">
                    +91
                  </div>
                  <Input
                    className="rounded-l-none border-l-0"
                    type="number"
                    placeholder="Phone Number"
                  />
                </div>
                <div>
                  <Input type="text" placeholder="Subject" />
                </div>
                <div>
                  <Textarea placeholder="Your Message" className="h-32" />
                </div>
                <Button className="w-full cursor-pointer bg-yellow-300 hover:bg-yellow-300/80 text-black">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="bg-yellow-300 border border-black max-md:border-t-0 md:border-l-0">
            <Card className="bg-transparent border-none shadow-none">
              <CardContent className="p-6 text-[#343333]">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6  mt-1" />
                    <div>
                      <h3 className="font-semibold">Address</h3>
                      <p className="">
                        Tourism Office, Haridwar
                        <br />
                        Uttarakhand, India
                      </p>
                      <Button
                        variant={"outline"}
                        className="mt-2 px-8 bg-[#343333] text-yellow-500 border-none"
                      >
                        Maps
                      </Button>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Phone className="h-6 w-6 mt-1" />
                    <div>
                      <h3 className="font-semibold">Phone</h3>
                      <p className="">+91 1234567890</p>
                      <Button
                        variant={"outline"}
                        className="mt-2 px-8 bg-[#343333] text-yellow-500 border-none"
                      >
                        Call
                      </Button>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Mail className="h-6 w-6 mt-1" />
                    <div>
                      <h3 className="font-semibold">Email</h3>
                      <p className="">info@haridwar-tourism.com</p>
                      <Button
                        variant={"outline"}
                        className="mt-2 px-8 bg-[#343333] text-yellow-500 border-none"
                      >
                        Mail
                      </Button>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Clock className="h-6 w-6 mt-1" />
                    <div>
                      <h3 className="font-semibold">Office Hours</h3>
                      <p className="">
                        Monday - Saturday
                        <br />
                        9:00 AM - 6:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
