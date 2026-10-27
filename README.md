# Prem Homestay Cottage

# Build a Beautiful Single-Page Website for Prem Homestay Cottage

Act as a professional React developer and hospitality UI/UX designer. Build a modern, premium-looking, fully responsive **single-page homepage only** for Prem Homestay Cottage, located in Village Hawani, Sundernagar, Mandi district, Himachal Pradesh.

The website should feel peaceful, welcoming, nature-inspired, and suitable for a Himachali homestay. Create one long homepage with detailed content, attractive sections, smooth scrolling, booking enquiries, WhatsApp integration, and Google Maps.

## 1. MANDATORY: NO JSON IMAGES

**Do not use JSON images under any circumstances.**

- Do not create `images.json`, `image.json`, `gallery.json`, or JSON-based image mappings.
- Do not store image paths or image URLs inside JSON arrays or objects.
- Do not use Base64 images, external stock photos, Unsplash, Pexels, or random internet images.
- Do not fetch images automatically.
- Use only the real photographs I provide.
- Import my supplied images directly from `src/assets/` using JavaScript ES module imports.
- Use the imported image variables directly inside JSX.
- Use only filenames that actually exist in the project.
- Never invent image filenames or import missing files.
- If I have not supplied photographs, create a beautiful image-free design using CSS backgrounds, gradients, icons, typography, and neutral placeholders. Do not insert random photos.

Example of the required approach:

```jsx
import cottagePhoto from "../assets/cottage.webp";
import roomPhoto from "../assets/room.webp";

function HomestayImages() {
  return (
    <section>
      <img src={cottagePhoto} alt="Prem Homestay Cottage" />
      <img src={roomPhoto} alt="Guest room at Prem Homestay Cottage" />
    </section>
  );
}

export default HomestayImages;
```

These filenames are examples only. Use them only if the exact files are supplied and exist in `src/assets/`.

**Final check:** Do not leave any JSON-based image system, random photos, remote image URLs, or fabricated image paths anywhere in the project.

## 2. Homestay Information

Use these supplied details throughout the website:

- **Name:** Prem Homestay Cottage
- **Address:** Prem Home Stays Cottage, Village Hawani, Post Office Sundernagar-1, Tehsil Sundernagar, District Mandi, Himachal Pradesh 175018, India
- **Phone:** +91 98177 00026
- **Reported Rating:** 3.9/5 from 137 reviews, as supplied in the listing.
- **Reported Listing Price:** Approximately ₹739, subject to dates, room type, availability, and booking conditions.
- **Setting:** Rural surroundings near Sundernagar in the Mandi district of Himachal Pradesh.
- **Nearby Areas and Attractions:** Sundernagar Lake, Suket Valley, and routes toward Kullu and Manali.
- **Travel Context:** Accessible from the Chandigarh–Manali highway corridor, according to the supplied description.

Do not invent the number of rooms, room sizes, bed types, check-in/check-out timings, amenities, owner names, email address, or social media accounts.

Display the supplied price as indicative only. Tell visitors to contact the property to confirm the final rate and availability.

## 3. Technology and Project Structure

Use React with Vite, JavaScript, and Tailwind CSS or clean custom CSS.

Suggested structure:

```text
src/
  assets/
    [only actual owner-provided photographs]
  components/
    Navbar.jsx
    Hero.jsx
    BookingEnquiry.jsx
    AboutSection.jsx
    StaySection.jsx
    ExperienceSection.jsx
    AttractionsSection.jsx
    LocationSection.jsx
    FAQSection.jsx
    Footer.jsx
  App.jsx
  main.jsx
  index.css
```

Keep the project simple and maintainable. Build only one homepage. All navigation items should scroll to sections on that page.

Do not create a JSON image file or image mapping system.

## 4. Design Direction

Create a peaceful, premium Himachali homestay design.

**Color palette:**
- Forest green.
- Warm cream.
- Soft beige.
- White.
- Earthy brown accents.

**Visual style:**
- Elegant headings and readable body typography.
- Spacious sections with a clear visual hierarchy.
- Rounded cards and subtle shadows.
- Beautiful nature-inspired decorative shapes.
- Smooth scrolling and light animations.
- Attractive mobile layout.
- Clear booking and contact buttons.

Use actual homestay photos only when provided. Without photos, build an appealing CSS-based hero with nature-inspired colors, shapes, icons, and typography.

## 5. Homepage Sections

### A. Navigation Bar

Create a sticky navigation bar with:

- Prem Homestay Cottage wordmark.
- Home.
- About.
- Stay Experience.
- Nearby Places.
- Location.
- Contact.
- “Enquire Now” button.

Each link should smoothly scroll to its matching section. On mobile, use a clean responsive menu.

### B. Hero Section

Create a beautiful first impression.

**Main heading:**

“Find Your Peaceful Stay in the Hills of Himachal”

**Supporting text:**

“Welcome to Prem Homestay Cottage, nestled in the tranquil surroundings of Village Hawani near Sundernagar, Mandi. A welcoming base for travelers exploring Himachal Pradesh or journeying toward the Kullu and Manali valleys.”

Add three buttons:

- **Enquire About Your Stay**
- **WhatsApp Us**
- **Explore the Location**

Add small highlight labels:
- Village Hawani, Sundernagar.
- Mandi district, Himachal Pradesh.
- A peaceful rural setting.

Use a real property photograph imported from `src/assets/` only if supplied. Otherwise, use a well-designed CSS hero with forest-green and cream tones. Do not use random images.

### C. Booking Enquiry Form

Place a neat booking form directly below the hero.

Fields:
- Guest name.
- Phone number.
- Check-in date.
- Check-out date.
- Number of adults.
- Number of children.
- Number of rooms.
- Message or special request.

Requirements:
- Validate required fields.
- Prevent past check-in dates.
- Ensure the check-out date is later than the check-in date.
- Show clear error messages.
- Provide a “Send Enquiry on WhatsApp” button.
- Provide a “Call to Confirm Availability” button.

Do not claim a reservation is confirmed just because the guest submitted an enquiry.

### D. About Prem Homestay Cottage

Write a detailed, welcoming introduction to the property using the supplied information.

Explain that the cottage is located in Village Hawani, near Sundernagar, in the Mandi district of Himachal Pradesh. Emphasize its rural setting and suitability as a base for exploring the surrounding region.

Suggested heading:

**“A Relaxed Stay in the Heart of Mandi District”**

Use natural, warm language. Do not invent a property history, ownership story, awards, or facilities.

Use a two-column layout with an actual supplied photo if available. If no photo exists, use a decorative CSS panel.

### E. Stay and Accommodation Section

Create an attractive section introducing the stay experience.

Heading:

**“Make Your Himachal Journey Comfortable”**

Explain that guests can contact the property directly to ask about available accommodation, current rates, room facilities, and booking conditions.

Create attractive information cards for:
- Stay Enquiries.
- Family and Group Enquiries.
- Travel Stopover Enquiries.

These are enquiry categories, not claims about guaranteed room types or special services.

Do not invent specific room categories, bed configurations, occupancy limits, room sizes, heating facilities, attached bathrooms, Wi-Fi, parking, food services, or other amenities.

Add a prominent **“Ask About Available Rooms”** button.

### F. Homestay Experience Section

Create a nature-inspired section explaining the appeal of staying in the Sundernagar region.

Use these themes:
- A rural setting in Village Hawani.
- Discovering the Mandi district.
- Taking a break during a journey through Himachal Pradesh.
- Exploring nearby lakes, valleys, and local surroundings.

Keep descriptions informative and grounded. Do not promise mountain views from the property, riverside access, private gardens, balconies, bonfires, or specific experiences unless the owner confirms them.

### G. Nearby Places to Explore

Create a visually attractive section with cards for:

**Sundernagar Lake**  
Introduce the lake as a nearby area of interest for visitors exploring Sundernagar. Do not invent the exact distance or travel time from the property.

**Suket Valley**  
Mention the surrounding regional landscape as an option for travelers interested in exploring the Mandi area.

**Mandi**  
Present Mandi as a regional destination for visitors traveling through the district.

**Kullu and Manali Route**  
Mention the property's potential as a stopover for travelers continuing toward Kullu and Manali.

Use icons, typography, and CSS decoration. Only use real photos if the owner supplies them. Do not use external attraction images.

Do not claim that these places are within walking distance or give exact journey times without verified information.

### H. Why Contact Prem Homestay Cottage?

Create four attractive feature cards:

- **Peaceful Setting:** Located in the rural surroundings of Village Hawani.
- **Regional Exploration:** A starting point for exploring Sundernagar and the Mandi district.
- **Direct Enquiries:** Contact the property to discuss availability and rates.
- **Journey Planning:** Ask about a stay when traveling through the region.

Use clear icons and elegant card styling. Avoid unsupported claims about luxury, guaranteed privacy, cleanliness, or service quality.

### I. Location and Google Maps

Display the full property address:

**Prem Home Stays Cottage, Village Hawani, Post Office Sundernagar-1, Tehsil Sundernagar, District Mandi, Himachal Pradesh 175018, India.**

Add:
- Responsive Google Maps embed.
- “Get Directions” button.
- “Call the Property” button.
- “WhatsApp Enquiry” button.

Use this exact supplied Google Maps embed URL:

```text
https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3400.983880502116!2d76.87137791123118!3d31.524602674104514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390519b3148584e7%3A0x346503e000c39d51!2sPrem%20Homestay%20Cottage!5e0!3m2!1sen!2sin!4v1793071477003!5m2!1sen!2sin
```

Use a responsive iframe with `loading="lazy"`, a descriptive title, and accessible markup. Do not replace the supplied location with another map.

### J. Guest Rating and Price Information

If displaying the supplied listing details, show:

- **Reported Rating:** 3.9/5 from 137 reviews.
- **Indicative Listing Price:** Approximately ₹739.

Make clear that these are supplied listing details, not guaranteed live information.

Do not invent guest testimonials, reviewer names, exact discounts, or additional review statistics.

Include a short note that prices and availability may change and should be confirmed directly with the property.

### K. Frequently Asked Questions

Add an accordion section with these questions:

**Where is Prem Homestay Cottage located?**  
The property is listed at Village Hawani, near Sundernagar, in Mandi district, Himachal Pradesh 175018.

**How can I enquire about a stay?**  
Call +91 98177 00026 or use the website's WhatsApp enquiry form.

**How much does a stay cost?**  
The supplied listing shows an indicative price of approximately ₹739. Contact the property to confirm the current rate for your dates.

**Can I enquire about room facilities?**  
Yes. Contact the property directly to confirm available room types, facilities, and occupancy details.

**Is the property suitable for a stopover?**  
Its location near Sundernagar and the Chandigarh–Manali highway corridor may be convenient for some travelers. Plan your route and confirm access before traveling.

**What are the check-in and check-out times?**  
Contact the property to confirm current timings.

### L. Final Call to Action

Create a strong, attractive final section.

**Heading:**  
“Plan Your Stay Near Sundernagar”

**Supporting text:**  
“Contact Prem Homestay Cottage to enquire about available rooms, current rates, and details for your travel dates.”

Buttons:
- Call +91 98177 00026.
- Send Enquiry on WhatsApp.
- Get Directions.

### M. Footer

Include:
- Prem Homestay Cottage name.
- Full address.
- Click-to-call phone number.
- Internal navigation links.
- A simple copyright notice with the current year.

Do not invent an email address, website domain, or social media profile.

## 6. WhatsApp Integration

Use this phone number in international format:

`919817700026`

Create a reusable JavaScript function that prepares a WhatsApp message from the enquiry form.

Example:

```jsx
const HOTEL_PHONE = "919817700026";

function createWhatsAppEnquiry(form) {
  const message = [
    "Hello Prem Homestay Cottage,",
    "I would like to enquire about a stay.",
    `Name: ${form.name || "Not provided"}`,
    `Phone: ${form.phone || "Not provided"}`,
    `Check-in: ${form.checkIn || "Not selected"}`,
    `Check-out: ${form.checkOut || "Not selected"}`,
    `Adults: ${form.adults ?? 2}`,
    `Children: ${form.children ?? 0}`,
    `Rooms: ${form.rooms ?? 1}`,
    `Message: ${form.message || "Please share current availability and rates."}`
  ].join("\n");

  return `https://wa.me/${HOTEL_PHONE}?text=${encodeURIComponent(message)}`;
}
```

Adapt this function to the real form state and validate the guest's details.

Add WhatsApp enquiry buttons in the hero, booking form, location section, and footer. A floating WhatsApp button may also be included if it does not cover other controls.

Do not claim that WhatsApp messages have been sent automatically or that a booking is confirmed.

Use this call link:

`tel:+919817700026`

Use this directions link:

`https://www.google.com/maps/dir/?api=1&destination=Prem%20Homestay%20Cottage%2C%20Village%20Hawani%2C%20Sundernagar%2C%20Mandi%2C%20Himachal%20Pradesh%20175018`

## 7. SEO Requirements

Optimize the single homepage naturally for:
- Prem Homestay Cottage.
- Homestay near Sundernagar.
- Cottage stay in Mandi, Himachal Pradesh.
- Accommodation in Village Hawani.
- Homestay near Sundernagar Lake.

Implement:
- A descriptive page title.
- Meta description.
- One clear H1.
- Proper H2/H3 hierarchy.
- Open Graph metadata.
- Descriptive alt text for supplied photos.
- Clean internal anchor links.
- Local business structured data using only verified information.
- `robots.txt` and `sitemap.xml` if appropriate for deployment.

Do not invent a website domain, email address, or unverified business information. Do not promise guaranteed search rankings.

## 8. Responsive Design and Final Checks

Ensure:
- Excellent mobile, tablet, and desktop layouts.
- Smooth section scrolling.
- A working mobile navigation menu.
- Functional booking enquiry form validation.
- Correct telephone, WhatsApp, and directions links.
- Responsive Google Maps.
- Accessible labels and visible keyboard focus states.
- No horizontal overflow.
- Good loading performance.
- No broken imports or missing dependencies.

**Final non-negotiable checklist:**
1. Only one homepage is created.
2. The website has detailed, attractive content.
3. No JSON images are used.
4. No `images.json`, `image.json`, or JSON image mappings exist.
5. No random or external photographs are used.
6. Owner-provided images are imported directly from `src/assets/`.
7. If photos have not been supplied, the website uses CSS-based design elements and placeholders instead.
8. The WhatsApp number, phone number, address, and supplied map location are correct.
9. No fake booking confirmation or unverified amenities are shown.

**Deliver a complete, polished React single-page homepage for Prem Homestay Cottage. Never use JSON images or random photos. Only import the actual images supplied by the owner.**

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/61ef1b55-3b6e-4a6c-bcbf-0f6b90fddf95).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
