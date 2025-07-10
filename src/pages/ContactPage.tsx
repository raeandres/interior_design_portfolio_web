import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { MapPin, Phone, Mail, Send } from "lucide-react";

import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../components/ui/form";
import { Card, CardContent } from "../components/ui/card";
import { Alert, AlertDescription } from "../components/ui/alert";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().regex(/^[0-9+\-\s]{10,15}$/, {
    message: "Please enter a valid phone number.",
  }),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const ContactPage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log("Form submitted:", data);
    setIsSubmitted(true);
    form.reset();

    // Reset success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 py-6">
          <Link to="/" className="text-2xl font-light tracking-wider">
            SECTOR D
          </Link>
        </div>
      </header>

      <div className="max-w-7xl mx-auto p-6 md:p-12">
        <h1 className="text-4xl md:text-5xl font-light mb-8 text-center">
          Contact Us
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <h2 className="text-2xl font-light mb-6">Get in Touch</h2>
            <p className="text-gray-600 mb-8">
              We'd love to hear from you. Whether you're looking to transform
              your space or have questions about our services, our team is ready
              to assist you.
            </p>

            <Card className="border-0 shadow-md">
              <CardContent className="p-6 space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-5 w-5 text-gray-500 mt-1" />
                  <div>
                    <h3 className="font-medium">Our Location</h3>
                    <p className="text-gray-600">
                      123 Design Avenue, Suite 500
                      <br />
                      New York, NY 10001
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="h-5 w-5 text-gray-500 mt-1" />
                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="h-5 w-5 text-gray-500 mt-1" />
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-gray-600">info@sectord.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="mt-8">
              <h3 className="text-xl font-light mb-4">Business Hours</h3>
              <p className="text-gray-600">
                Monday - Friday: 9:00 AM - 6:00 PM
              </p>
              <p className="text-gray-600">Saturday: 10:00 AM - 4:00 PM</p>
              <p className="text-gray-600">Sunday: Closed</p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-light mb-6">Send Us a Message</h2>

            {isSubmitted && (
              <Alert className="mb-6 bg-green-50 text-green-800 border-green-200">
                <AlertDescription>
                  Thank you for your message! We'll get back to you shortly.
                </AlertDescription>
              </Alert>
            )}

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="Your email address"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number</FormLabel>
                      <FormControl>
                        <Input placeholder="Your phone number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message (Optional)</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell us about your project or inquiry"
                          className="min-h-[120px]"
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full">
                  <Send className="mr-2 h-4 w-4" /> Send Message
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
