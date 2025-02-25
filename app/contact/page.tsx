"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import axios from "axios";
import { MapPin, Phone, Mail } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Contact() {

  const [queryData, setQueryData] = useState({})

  const handleSubmit = async () => {
    try{
      await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/queries`, queryData);
      alert("Message sent successfully.")
    }
    catch(e){
      alert("Some error occured.")
    }
  }


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
                  <Input onChange={(e)=>{setQueryData({...queryData, name: e.target.value})}} type="text" placeholder="John Doe" />
                </div>
                <div>
                  <Input onChange={(e)=>{setQueryData({...queryData, email: e.target.value})}} type="email" placeholder="example@gmail.com" />
                </div>
                <div className="flex flex-row items-center">
                  <div className="p-2 bg-yellow-300 text-semibold rounded-l-md">
                    +91
                  </div>
                  <Input
                    className="rounded-l-none border-l-0"
                    type="number"
                    placeholder="Phone Number"
                    onChange={(e)=>{setQueryData({...queryData, phone: e.target.value})}}
                  />
                </div>
                <div>
                  <Input onChange={(e)=>{setQueryData({...queryData, subject: e.target.value})}} type="text" placeholder="Subject" />
                </div>
                <div>
                  <Textarea onChange={(e)=>{setQueryData({...queryData, message: e.target.value})}} placeholder="Your Message" className="h-32" />
                </div>
                <Button onClick={handleSubmit} className="w-full cursor-pointer bg-yellow-300 hover:bg-yellow-300/80 text-black">
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
                        Style and Glamour store, Gaba Complex, Bahadrabad, Haridwar
                        <br />
                        Uttarakhand, India
                      </p>
                      <Link href={"https://maps.app.goo.gl/8vyfmLHS6uPbM6fq8"}>
                        <Button
                          variant={"outline"}
                          className="mt-2 px-8 bg-[#343333] text-yellow-500 border-none"
                        >
                          Maps
                        </Button>
                      </Link>
                      
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Phone className="h-6 w-6 mt-1" />
                    <div>
                      <h3 className="font-semibold">Phone</h3>
                      <p className="">+91 6395438784</p>
                      <a href="tel:+916395438784">
                      <Button
                        variant={"outline"}
                        className="mt-2 px-8 bg-[#343333] text-yellow-500 border-none"
                      >
                        Call
                      </Button>
                      </a>
                      
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Mail className="h-6 w-6 mt-1" />
                    <div>
                      <h3 className="font-semibold">Email</h3>
                      <p className="">haridwarlive06@gmail.com</p>
                      <a href="mailto:haridwarlive06@gmail.com">
                        <Button
                          variant={"outline"}
                          className="mt-2 px-8 bg-[#343333] text-yellow-500 border-none"
                        >
                          Mail
                        </Button>
                      </a>
                      
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
