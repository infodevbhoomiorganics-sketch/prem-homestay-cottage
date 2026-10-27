import { useState, type ChangeEvent, type FormEvent } from "react";
import { CalendarCheck, MessageCircle, Phone, Send } from "lucide-react";
import {
  createWhatsAppEnquiry,
  EMPTY_ENQUIRY,
  HOMESTAY,
  todayISO,
  validateEnquiry,
  type EnquiryForm,
} from "@/lib/homestay";

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return (
    <p role="alert" className="mt-1.5 text-xs font-medium text-destructive">
      {message}
    </p>
  );
}

const inputClass =
  "mt-1.5 w-full rounded-xl border border-input bg-card px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/70 focus:border-ring focus:ring-2 focus:ring-ring/40 focus-visible:outline-none";

export default function BookingEnquiry() {
  const [form, setForm] = useState<EnquiryForm>(EMPTY_ENQUIRY);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const today = todayISO();

  function update(
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = event.target;
    setForm((prev) => ({
      ...prev,
      [name]:
        name === "adults" || name === "children" || name === "rooms"
          ? Number(value)
          : value,
    }));
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const nextErrors = validateEnquiry(form);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;
    window.open(createWhatsAppEnquiry(form), "_blank", "noopener,noreferrer");
  }

  return (
    <section id="enquiry" className="scroll-mt-24 bg-beige py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 rounded-4xl bg-card p-6 shadow-lg sm:p-10 lg:grid-cols-[1.5fr_1fr]">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-forest-soft/60 px-4 py-1.5 text-xs font-semibold tracking-wide text-forest-deep uppercase">
              <CalendarCheck className="h-4 w-4" aria-hidden="true" />
              Booking Enquiry
            </span>
            <h2 className="mt-4 font-display text-3xl font-semibold text-forest-deep sm:text-4xl">
              Plan Your Dates, We'll Take It From There
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              Fill in your travel details and send the enquiry straight to the
              property on WhatsApp. Sending an enquiry is only the first step —
              your stay is confirmed only when the property confirms it with
              you directly.
            </p>

            <form onSubmit={handleSubmit} noValidate className="mt-8 grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="text-sm font-medium text-foreground">
                  Guest name <span aria-hidden="true">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  maxLength={100}
                  value={form.name}
                  onChange={update}
                  aria-invalid={Boolean(errors.name)}
                  placeholder="Your full name"
                  className={inputClass}
                />
                <FieldError message={errors.name} />
              </div>

              <div>
                <label htmlFor="phone" className="text-sm font-medium text-foreground">
                  Phone number <span aria-hidden="true">*</span>
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  inputMode="tel"
                  maxLength={20}
                  value={form.phone}
                  onChange={update}
                  aria-invalid={Boolean(errors.phone)}
                  placeholder="e.g. 98765 43210"
                  className={inputClass}
                />
                <FieldError message={errors.phone} />
              </div>

              <div>
                <label htmlFor="checkIn" className="text-sm font-medium text-foreground">
                  Check-in date <span aria-hidden="true">*</span>
                </label>
                <input
                  id="checkIn"
                  name="checkIn"
                  type="date"
                  min={today}
                  value={form.checkIn}
                  onChange={update}
                  aria-invalid={Boolean(errors.checkIn)}
                  className={inputClass}
                />
                <FieldError message={errors.checkIn} />
              </div>

              <div>
                <label htmlFor="checkOut" className="text-sm font-medium text-foreground">
                  Check-out date <span aria-hidden="true">*</span>
                </label>
                <input
                  id="checkOut"
                  name="checkOut"
                  type="date"
                  min={form.checkIn ? form.checkIn : today}
                  value={form.checkOut}
                  onChange={update}
                  aria-invalid={Boolean(errors.checkOut)}
                  className={inputClass}
                />
                <FieldError message={errors.checkOut} />
              </div>

              <div>
                <label htmlFor="adults" className="text-sm font-medium text-foreground">
                  Adults
                </label>
                <select
                  id="adults"
                  name="adults"
                  value={form.adults}
                  onChange={update}
                  className={inputClass}
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                    <option key={n} value={n}>
                      {n}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="children" className="text-sm font-medium text-foreground">
                  Children
                </label>
                <select
                  id="children"
                  name="children"
                  value={form.children}
                  onChange={update}
                  className={inputClass}
                >
                  {[0, 1, 2, 3, 4, 5, 6].map((n) => (
                    <option key={n} value={n}>
                      {n}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="rooms" className="text-sm font-medium text-foreground">
                  Rooms
                </label>
                <select
                  id="rooms"
                  name="rooms"
                  value={form.rooms}
                  onChange={update}
                  className={inputClass}
                >
                  {[1, 2, 3, 4, 5].map((n) => (
                    <option key={n} value={n}>
                      {n}
                    </option>
                  ))}
                </select>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground">
                  Message or special request
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  maxLength={1000}
                  value={form.message}
                  onChange={update}
                  placeholder="Anything the property should know — travel plans, group details, questions about rates…"
                  className={inputClass}
                />
              </div>

              <div className="flex flex-col gap-3 sm:col-span-2 sm:flex-row">
                <button
                  type="submit"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-md transition-colors hover:bg-forest-deep focus-visible:outline-2 focus-visible:outline-ring"
                >
                  <Send className="h-4 w-4" aria-hidden="true" />
                  Send Enquiry on WhatsApp
                </button>
                <a
                  href={`tel:${HOMESTAY.phoneDial}`}
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-primary bg-card px-6 py-3 text-sm font-semibold text-forest transition-colors hover:bg-forest-soft/50 focus-visible:outline-2 focus-visible:outline-ring"
                >
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  Call to Confirm Availability
                </a>
              </div>
            </form>
          </div>

          <aside className="flex flex-col justify-center gap-6 rounded-3xl bg-forest-deep p-8 text-cream">
            <div>
              <h3 className="font-display text-2xl font-semibold">
                Enquire Directly, Stay Confidently
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-cream/85">
                Your details open in WhatsApp so you keep the conversation
                directly with the property. No booking is confirmed by this
                website — rates and availability are always finalised with
                Prem Homestay Cottage itself.
              </p>
            </div>
            <div className="rounded-2xl bg-white/10 p-5">
              <p className="text-xs font-semibold tracking-wide text-sun uppercase">
                Call the property
              </p>
              <a
                href={`tel:${HOMESTAY.phoneDial}`}
                className="mt-1 block font-display text-xl font-semibold underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-ring"
              >
                {HOMESTAY.phoneDisplay}
              </a>
            </div>
            <div className="rounded-2xl bg-white/10 p-5">
              <p className="text-xs font-semibold tracking-wide text-sun uppercase">
                Prefer messaging?
              </p>
              <a
                href={createWhatsAppEnquiry(EMPTY_ENQUIRY)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 inline-flex items-center gap-2 text-sm font-medium underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-ring"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                Start a WhatsApp chat
              </a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
