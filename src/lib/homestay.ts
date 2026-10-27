/**
 * Verified property details and shared helpers for Prem Homestay Cottage.
 * Only information supplied by the owner/listing lives here.
 */

export const HOMESTAY = {
  name: "Prem Homestay Cottage",
  addressLine:
    "Prem Home Stays Cottage, Village Hawani, Post Office Sundernagar-1, Tehsil Sundernagar, District Mandi, Himachal Pradesh 175018, India",
  phoneDisplay: "+91 98177 00026",
  phoneDial: "+919817700026",
  whatsappNumber: "919817700026",
  directionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=Prem%20Homestay%20Cottage%2C%20Village%20Hawani%2C%20Sundernagar%2C%20Mandi%2C%20Himachal%20Pradesh%20175018",
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3400.983880502116!2d76.87137791123118!3d31.524602674104514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390519b3148584e7%3A0x346503e000c39d51!2sPrem%20Homestay%20Cottage!5e0!3m2!1sen!2sin!4v1793071477003!5m2!1sen!2sin",
  reportedRating: "3.9/5",
  reportedReviewCount: 137,
  indicativePrice: "₹739",
} as const;

export type EnquiryForm = {
  name: string;
  phone: string;
  checkIn: string;
  checkOut: string;
  adults: number;
  children: number;
  rooms: number;
  message: string;
};

export const EMPTY_ENQUIRY: EnquiryForm = {
  name: "",
  phone: "",
  checkIn: "",
  checkOut: "",
  adults: 2,
  children: 0,
  rooms: 1,
  message: "",
};

/** Local calendar date (YYYY-MM-DD) for "today". */
export function todayISO(): string {
  const now = new Date();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${now.getFullYear()}-${month}-${day}`;
}

/**
 * Client-side validation for the booking enquiry form.
 * Returns an object of field -> error message; empty object means valid.
 */
export function validateEnquiry(form: EnquiryForm): Record<string, string> {
  const errors: Record<string, string> = {};

  if (!form.name.trim()) {
    errors.name = "Please enter your name.";
  }

  const digits = form.phone.replace(/\D/g, "");
  if (!digits) {
    errors.phone = "Please enter your phone number.";
  } else if (digits.length < 10 || digits.length > 15) {
    errors.phone = "Enter a valid phone number with 10–15 digits.";
  }

  if (!form.checkIn) {
    errors.checkIn = "Please choose a check-in date.";
  } else if (form.checkIn < todayISO()) {
    errors.checkIn = "Check-in cannot be in the past.";
  }

  if (!form.checkOut) {
    errors.checkOut = "Please choose a check-out date.";
  } else if (form.checkIn && form.checkOut <= form.checkIn) {
    errors.checkOut = "Check-out must be after check-in.";
  }

  return errors;
}

/** Builds a wa.me deep link with the enquiry details pre-filled. */
export function createWhatsAppEnquiry(form: EnquiryForm): string {
  const message = [
    "Hello Prem Homestay Cottage,",
    "I would like to enquire about a stay.",
    `Name: ${form.name.trim() || "Not provided"}`,
    `Phone: ${form.phone.trim() || "Not provided"}`,
    `Check-in: ${form.checkIn || "Not selected"}`,
    `Check-out: ${form.checkOut || "Not selected"}`,
    `Adults: ${form.adults ?? 2}`,
    `Children: ${form.children ?? 0}`,
    `Rooms: ${form.rooms ?? 1}`,
    `Message: ${
      form.message.trim() ||
      "Please share current availability and rates."
    }`,
  ].join("\n");

  return `https://wa.me/${HOMESTAY.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
