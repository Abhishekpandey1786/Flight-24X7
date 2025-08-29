import React from "react";
import { useParams } from "react-router-dom";
import PhoneConversion from "./PhoneConversion";

const pageData = {
  about: {
    title: "About Flight 24X7",
    content: (
      <>
        <section className="space-y-6 text-[16px] leading-relaxed">
          <div>
            <h2 className="text-red-500 font-semibold mb-1">
              Committed to Empower the Traveler
            </h2>
            <p>
              Flight 24X7 is a one-stop destination to purchase flight tickets
              at an affordable price. Being the leading player in the online
              flight booking, we offer exclusive deals and great discounts to
              make your trip budget-friendly. While booking the flight ticket
              with us, you can expect the ultimate travel experience and that
              too without shaking your budget.
            </p>
          </div>

          <div>
            <h2 className="text-red-500 font-semibold mb-1">
              Fly with Flight 24X7 like Never Before
            </h2>
            <p>
              We are all set to tailor your trip by offering suitable flight
              options. Travelers can easily book airline tickets with us and
              enjoy their journey beyond expectation. Our travel agency always
              focuses on providing exceptional flying experience to the
              passengers so that they can reach their destination with much ease
              and comfort.
            </p>
          </div>

          <div>
            <h2 className="text-red-500 font-semibold mb-1">Why choose us?</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>We allow you to make a hassle-free flight booking.</li>
              <li>We are reliable and trustworthy.</li>
              <li>Our agents are available round the clock to assist you.</li>
              <li>
                We offer jaw-dropping discounts and deals on flight tickets.
              </li>
              <li>We are providing a simple-to-use search engine.</li>
            </ul>
          </div>
        </section>
      </>
    ),
  },

  contactus: {
    title: "Contact us",
    content: (
      <div className="flex flex-col lg:flex-row justify-between items-start gap-8 px-4 py-8 bg-gray-50 rounded-lg shadow-md">
        {/* Left: Contact Info */}
        <div className="w-full lg:w-1/2 space-y-4 text-[16px] leading-relaxed">
          <p>
            Looking for Help? Connect with our travel agents right away and get
            your queries solved in no time. We have a team of professionals who
            would love to assist you. If you are facing any trouble regarding
            the flight booking process, deals and discounts, or anything else,
            feel free to contact us as we would love to hear from you.
          </p>

          <div>
            <p className="text-red-500 font-semibold">
              We are just one phone call away
            </p>
            <p>
              Phone: <div className="text-2xl font-bold text-green-700 mb-4 animate-pulse">
        <p>
            <PhoneConversion /> 
          </p>
      </div>
            </p>
          </div>

          <div>
            <p className="text-red-500 font-semibold">
              For queries regarding flight booking, email us at:
            </p>
            <p className="text-black font-semibold">
              reservations@flight24x7.com
            </p>
          </div>

          <div>
            <p className="text-red-500 font-semibold">Address</p>
            <p>8 The Green Suite 10150, Dover, Delaware 19901, United States</p>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="w-full lg:w-1/2 bg-white p-6 rounded-lg shadow-md">
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full px-4 py-2 border border-gray-300 rounded"
              required
            />
            <input
              type="text"
              placeholder="Contact No"
              className="w-full px-4 py-2 border border-gray-300 rounded"
              required
            />
            <input
              type="text"
              placeholder="Website (if any)"
              className="w-full px-4 py-2 border border-gray-300 rounded"
              required
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full px-4 py-2 border border-gray-300 rounded"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    ),
  },
  faqs: {
    title: "Frequently Asked Questions",
    content: (
      <>
        <section className="space-y-6 text-[16px] leading-relaxed">
          <div>
            <h2 className="text-red-500 font-semibold mb-1">
              What does the Price Match Challenge (PMC) mean?
            </h2>
            <p>
              While using our website, users are sure that they are getting the
              best deal for their travel; however, if they find the identical
              booking at the lower price, then on the Major Competitor’s website
              on the same day of the booking up to 10:00 pm, then they can
              inform us about the same. We will check that price and will match
              the same by refunding the price difference. Also, if you would
              like to terminate your bookings, then we will provide you with a
              full refund. <br />
              <p>
                It is important to note that the ‘same itinerary’ means that all
                the elements will be similar such as the flight number, airline,
                type of seat, date, total number of travelers, and itinerary.
              </p>
            </p>
          </div>

          <div>
            <h2 className="text-red-500 font-semibold mb-1">
              Can I hold my booking?
            </h2>
            <p>
              Flight 24X7 cannot hold your bookings, as per the airlines’
              policy. So, you are advised to make your reservations as soon as
              you find the discounted airfares.
            </p>
          </div>
          <div>
            <h2 className="text-red-500 font-semibold mb-1">
              What is the procedure to make bookings for an infant?
            </h2>
            <p>
              Before proceeding further, it is important to understand that a
              child below the age of 24 months is known as an infant. If you are
              flying within the United States, then the infants can travel on
              the flight for free until they are seated on the adult’s lap.
              Also, one adult can carry only one infant in the lap.
            </p>{" "}
            <br />
            <p>
              However, if you are traveling to an international destination,
              then you will have to pay a certain amount of fare plus taxes. In
              addition to this, a paper ticket is mandatory to carry even if the
              infant is traveling on the adult’s lap. You can easily purchase a
              ticket for infants online.
            </p>{" "}
            <br />
            <p>
              Connect with our customer support team to book an infant ticket.
            </p>
          </div>
          <div>
            <h2 className="text-red-500 font-semibold mb-1">
              Can I request a special meal on the flight?
            </h2>
            <p>
              This depends on the airline with which you are flying. Some
              airlines offer complimentary meals while others charge for the
              same. Sometimes, the airline doesn’t provide an in-flight meal
              facility. So, you are requested to check this option before making
              the final bookings. <br />
              <p>
                If the airline offers an option to request a special meal, then
                you can generally pre-order your meal up to 24 hours before the
                flight take-off. Travelers can either request the same online at
                the time of booking or by calling the airline’s authority. The
                acceptance of such requests totally depends on the airline.
              </p>
            </p>
          </div>
          <div>
            <h2 className="text-red-500 font-semibold mb-1">
              Is seat selection possible on the flights?
            </h2>
            <p>
              I Sure. Travelers can easily select their preferred seats while
              booking their flight tickets. To know more about the same or to
              book your favorite seat, you can reach out to our customer
              service.
            </p>
          </div>
          <div>
            <h2 className="text-red-500 font-semibold mb-1">
              Does Flight24X7 offer a flight booking facility for last-minute
              travel?
            </h2>
            <p>
              I There are certain bookings that may require up to three business
              days, so in that case, we are unable to offer you a last-minute
              flight booking facility. You can call our customer care
              representative for further assistance.
            </p>
          </div>
          <div>
            <h2 className="text-red-500 font-semibold mb-1">
              Will you email a quote for flights?
            </h2>
            <p>
              Airfare changes every minute and thus, there is no guarantee for
              the discounted price until ticketed. Due to this, we are unable to
              email a quote for flights. Please stay in touch with our customer
              support team to get updated with the latest fares and special
              discounts.
            </p>
          </div>
          <div>
            <h2 className="text-red-500 font-semibold mb-1">
              How can I connect with Flight 24X7 directly to make bookings?
            </h2>
            <p>
              You can either call Flight24X7 at +1-860-294-8281 or drop an email
              at reservations@kemeltravels.com. We offer round the clock
              assistance to travelers and you can connect with our customer
              support team at any time.
            </p>
          </div>
          <div>
            <h2 className="text-red-500 font-semibold mb-1">
              Is it possible to book an itinerary with the stopover?
            </h2>
            <p>
              Of course. All you need is to click on the Multi-City option on
              the flight search screen and proceed accordingly.
            </p>
          </div>
          <div>
            <h2 className="text-red-500 font-semibold mb-1">
              How can I book my flight if I am arriving in one city and
              returning from another?
            </h2>
            <p>
              Well, in that case, you can opt for the Multi-City option
              available on the flight search screen. However, you need to check
              the availability first. To know more, connect with us at any time.
            </p>
          </div>
          <div>
            <h2 className="text-red-500 font-semibold mb-1">
              If I get the pop-up message of ‘Sold Out’ even if the flight shows
              available on the flight listing page. What does it mean?
            </h2>
            <p>
              This generally happens due to the high demand for flight tickets.
              It might be possible that the flight ticket has been sold out
              while you are searching for the same. To facilitate the travelers,
              we always monitor such changes closely and keep our fares updated
              as current as possible.
            </p>
          </div>
          <div>
            <h2 className="text-red-500 font-semibold mb-1">
              Why am I getting an error message while using the credit card for
              making flight bookings?
            </h2>
            <p>
              This generally happens when you insert the wrong information while
              entering the car details. Information like name of the cardholder,
              address, zip code, and the credit card number must be identical
              with that of mentioned in the Credit Card company’s record. You
              can either check the information entered or use the different
              cards to make the flight bookings.
            </p>
          </div>
          <div>
            <h2 className="text-red-500 font-semibold mb-1">
              I want to book a flight ticket for an unaccompanied minor on
              TripChef. Is it possible?
            </h2>
            <p>
              To avoid any hassle, we suggest you contact the airline’s
              authority directly to know more about the unaccompanied minor
              policy, fee, restrictions, and other rules. Contact us to make the
              flight reservations.
            </p>
          </div>

          <div>
            <h2 className="text-red-500 font-semibold mb-1">
              Do you offer any guarantee for airfares?
            </h2>
            <p>
              Airfares are subject to change at any time without any
              notification; hence, we cannot offer any guarantee for the same,
              until the tickets have been booked. If owing to the technical
              error, wrong fares are displayed on the website, then we have the
              right to suggest you on the correct airfare within three business
              days of your reservation. It’s your choice whether you want to
              accept that new fare or wish to terminate the booking.
            </p>
          </div>

          <div>
            <h2 className="text-red-500 font-semibold mb-1">
              Are taxes involved in the fares mentioned on the site?
            </h2>
            <p>
              Yes, generally all the airfares listed on the site include the
              base fare as well as taxes, as applicable.
            </p>
          </div>

          <div>
            <h2 className="text-red-500 font-semibold mb-1">
              Can I modify my existing booking? If yes, then how?
            </h2>
            <p>
              Yes. To do the same, you can contact our customer support team at
              any time. However, it is important to know that an additional fee
              per ticket including the fare difference, if applicable, will be
              required to make changes in your booking. Also, it depends on the
              flight on which you have made reservations.
            </p>{" "}
            <br />
            <p>
              Additional conditions may apply for modifying your bookings such
              as
            </p>
            <li>Certain airlines won’t allow making changes even for a fee</li>
            <li>The traveler’s name cannot be altered.</li>
            <li>The same airline must be used.</li>
            <li>
              Changes might not be possible in the case of dates, route, and
              time.
            </li>
            <li>
              You need to terminate the actual booking before departure date and
              time.{" "}
            </li>
          </div>

          <div>
            <h2 className="text-red-500 font-semibold mb-1">
              What if I lose my paper ticket?
            </h2>
            <p>
              Most of the time, the airline requires you to purchase a
              replacement ticket at the current fare. However, if your original
              flight ticket is not used for up to a certain time, generally 6 to
              12 months, then the airline will offer you the credit for the
              purchase price of the replacement ticket after subtracting the
              application fee. This fee is usually $100 per traveler but it
              depends on the airline. <br /> <br />
              It is important to note that such policies are subject to change
              from time to time and thus, you are advised to check the same
              before making the flight bookings. Also, you can file a lost
              ticket application by connecting with our customer support team.
            </p>
          </div>

          <div>
            <h2 className="text-red-500 font-semibold mb-1">
              How much fee will be charged for modifying the flight tickets?
            </h2>
            <p>
              While making changes to your existing booking, you will be
              charged:
              <li>The penalty imposed by the airline</li>
              <li>
                Fare difference if you have booked the new ticket at a higher
                price.
              </li>
              <li>TripChef service fee</li>
            </p>
          </div>
          <div>
            <h2 className="text-red-500 font-semibold mb-1">
              Will I get any refund If I terminate my existing booking?
            </h2>
            <p>
              If you have booked discounted airline tickets, then they are
              generally non-refundable; however, it varies from one airline to
              another. Guidelines related to the cancelation and refund are
              mentioned on our website and you are suggested to go through our
              Terms and Conditions before getting your bookings done with us.
            </p>
          </div>
          <div>
            <h2 className="text-red-500 font-semibold mb-1">
              What should I do if the Flight Confirmation Page shows the wrong
              itinerary date?
            </h2>
            <p>
              In that case, you should contact our customer service team as
              early as possible to know the appropriate solution for the same.
            </p>
          </div>
          <div>
            <h2 className="text-red-500 font-semibold mb-1">
              If the booking confirmation email shows that the airline doesn’t
              guarantee the booking, what does it mean?
            </h2>
            <p>
              It simply means that the airline hasn’t confirmed your booking yet
              and your booking status is still pending. You get the email with a
              confirmed itinerary once your credit card will be charged with the
              amount.
            </p>
          </div>
          <div>
            <h2 className="text-red-500 font-semibold mb-1">
              When and how should I re-confirm my reservations?
            </h2>
            <p>
              You can get in touch with the airline at least 72 hours before the
              scheduled departure to re-confirm your reservation and to
              re-confirm your return flight.
            </p>
          </div>
          <div>
            <h2 className="text-red-500 font-semibold mb-1">
              What if I miss my departure flight?
            </h2>
            <p>
              The final outcome will be based on the situation in which you have
              missed your departure flight:
              <li>
                If you miss your departure flight due to your fault, then the
                airline has a complete right to mark you in the category of
                No-Show and it will make your flight ticket null and void.
              </li>
              <li>
                However, if you are on the way to the airport and feel that you
                might miss your flight, then call the airline immediately to
                avoid the no-show problem
              </li>
              <li>
                If you have boarded the departure but missed the connecting
                flight or subsequent flight, then you can immediately visit the
                nearest ticket counter and they will offer you a reservation in
                the very next available flight.
              </li>
            </p>
          </div>
          <div>
            <h2 className="text-red-500 font-semibold mb-1">
              Let me know the baggage limitations for the flight I book.
            </h2>
            <p>
              To know about the baggage guidelines for the flight you’ll be
              going to book, contact the airline’s authority directly. Airlines
              generally update their policies for cabin and checked baggage
              along with the additional fee, therefore, it is good to learn
              about every single thing before getting your seats done.
            </p>
          </div>
          <div>
            <h2 className="text-red-500 font-semibold mb-1">
              What essential documents are needed for travel?
            </h2>
            <p>
              The list of essential documents depends on various factors like
              the city from which you are leaving, destination, stopovers (if
              any), and the country for which your passport has been issued. To
              know the exact documentation, you can connect with the airline
              with which you are flying. It is your duty to carry all important
              documents and neither TripChef nor the airline will be held liable
              for that.
            </p>
          </div>
          <div>
            <h2 className="text-red-500 font-semibold mb-1">
              What will happen to my checked luggage when I change the flight?
            </h2>
            <p>
              If your airline has a baggage agreement, then your baggage will be
              checked all the way through to your final destination. However, if
              no baggage agreement is there, then it is your sole duty to the
              Baggage Claim at the first airport where you land to change the
              flight to claim your bag. Thereafter, you need to check-in your
              bag again for the next flight.{" "}
            </p>
          </div>
          <div>
            <h2 className="text-red-500 font-semibold mb-1">
              What does Prepaid Ticket Advice (PTA) mean and how it works?
            </h2>
            <p>
              PTA is a system with which a message is sent to the airline about
              the issuance of paper tickets at the airport. If the paper ticket
              can’t be delivered to the traveler location due to the rules &
              regulations of some countries and the traveler’s address, then
              this system is used. After your reservation, the PTA will be sent
              to the airline and we will send an email to you after that. This
              email will contain the PTA number for all fliers involved in the
              booking. To obtain the paper ticket at the airport, show this
              number at the ticket-counter during the check-in process. <br />
              Please note that in addition to “Airline fees and taxes,” a PTA
              service fee of $150 will be charged.{" "}
            </p>
          </div>
          <div>
            <h2 className="text-red-500 font-semibold mb-1">
              Are there any restrictions on traveling with pets?
            </h2>
            <p>
              If any traveler is planning to fly with his.her furry friend, then
              he/she must connect to the airline to learn more about the same.
              Some common guidelines for traveling with pets are mentioned below
              <li>
                Don’t forget to carry the health certificate of the pet for air
                travel.
              </li>
              <li>
                Every airline has different restrictions on the allowed number
                and size of the pet. Connect the airline to enlighten yourself
                with these guidelines.
              </li>
              <li>
                Traveling with pets requires special handling of it by crew
                members; that’s why an additional fee will be charged as per the
                airline’s policy.
              </li>
              <li>
                Many airlines have a limitation on the breed of dogs, so go
                through it before flying.
              </li>
              <li>
                If you are flying with your pet, you must meet the criteria for
                it. Check out the restrictions for cages and other shipping
                containers.
              </li>
              <li>
                Your pet can also fly in the baggage compartment of the flight,
                but there are some restrictions based on temperature. Don’t
                forget to check it.{" "}
              </li>
            </p>
          </div>
          <div>
            <h2 className="text-red-500 font-semibold mb-1">
              What are the different flight options and service classes on the
              flight?
            </h2>
            <p>
              Below-mentioned is the most common names used by airlines to
              describe its travel classes, though it can differ from airline to
              airline.
              <li>
                First Class - It is the most expensive class available on the
                flight and it is situated very close to the front part of the
                flight. Though the seats are limited but are very comfortable.
                Upgraded meals are also offered in this travel class. Some of
                the other perks of choosing First Class include access to the
                airport business lounge of the airline and shorter check-in
                queues. Please note that this kind of seating is not guaranteed
                in every airline.
              </li>
              <li>
                Business Class - Seats of this service class are very spacious
                and offer extra legroom for the comfort of passengers. They can
                easily recline farther and stretch their legs. It also provides
                upgraded meals. Tickets of this travel class are less than the
                First Class and costly than the Economy Class.
              </li>
              <li>
                Economy Class - This seating is available in the main cabin area
                and is the most economical.
              </li>
            </p>
            <p>
              These are the different classes of service available on every
              flight. Available flight options are- <br />
              <li>
                Connecting flights - Sometimes to reach the final destination,
                passengers may have to take more than one flight. It includes
                more than one departures and landings. De-board the flight and
                take another one to travel to the final location.
              </li>
              <li>
                Nonstop flights - As the name is suggesting, these are the ones,
                which don’t stop at any location before reaching the final
                destination.
              </li>
              <li>
                Stops but no change flights - These flights may stop somewhere
                in between, but you will not know this while making a booking.
                Passengers are not permitted to change the flight at the
                in-between stops.
              </li>
            </p>
          </div>
          <div>
            <h2 className="text-red-500 font-semibold mb-1">
              What does Secure flight mean?
            </h2>
            <p>
              It is a pre-screening program conducted by the US Department of
              Homeland Security (DHS). This program simplifies the security
              watch list matching process. To enhance the travel experience of
              every passenger, this program may collect some data from them.{" "}
            </p>
          </div>
          <div>
            <h2 className="text-red-500 font-semibold mb-1">
              What is the purpose of the secure flight program?
            </h2>
            <p>This program is implemented to-</p>
            <li>Facilitate passengers with smooth and safe flight</li>
            <li>Safeguard the privacy of passengers</li>
            <li>Detect suspected and known terrorists</li>
            <li>
              Detect whether a selected individual is allowed to board the
              flight or not
            </li>
            <li>Stop passengers of the No Fly List from taking the flight</li>
          </div>
          <div>
            <h2 className="text-red-500 font-semibold mb-1">
              What kind of traveler information is needed to implement a Secure
              Flight Program?
            </h2>
            <p>
              The following data will be required for this program.
              <li>Gender</li>
              <li>Date of birth</li>
              <li>
                Full name as shown in the government-issued ID proof that you
                are carrying
              </li>
              <li>Redress number (if available)</li>
              Connect to our customer support team if you have any issues
              pertaining to the required documents.
            </p>
          </div>
          <div>
            <h2 className="text-red-500 font-semibold mb-1">
              What is the meaning of Redress Number?
            </h2>
            <p>
              It is basically a unique number that will be assigned by the
              Department of Homeland Security (DHS) to a traveler who has been
              at the airport screening earlier.{" "}
            </p>
          </div>
          <div>
            <h2 className="text-red-500 font-semibold mb-1">
              What are the rules and regulations of the ticket?
            </h2>
            <p>
              <li>
                Flight 24X7 shall not be held responsible for the travel service
                suppliers’ failure, including but not limited to tour operators,
                car rental agencies, railroads, steamship lines, hotels,
                airlines, and consolidators.
              </li>
              <li>
                Flight 24X7 is only a service bureau that offers value-added
                service to retail travel agents.
              </li>
              <li>
                We shall not be held liable for any change in flight or
                fluctuation in the price of any service once the payment of such
                services has been done.
              </li>
              <li>
                Flight 24X7 does not ensure or guarantee the services, which
                will be provided by any supplier. In any case, if the supplier
                defaults before delivering the service to you, the sole
                responsibility of the refund is of the supplier.
              </li>
              <li>
                Flight 24X7 is not responsible for any loss, injury, accident,
                omission, error, act, irregularity, nonperformance, delay,
                damage, or any consequence, which may happen due to the default,
                neglect, or any other action of the supplier.
              </li>
              <li>
                Discounts that are published on our site may vary based on some
                factors like time of year, destination, class of service,
                airlines utilized, minimum stay requirements fulfilled, advance
                notice provided, and flight load.
              </li>
              <li>
                Flight 24X7 guarantees that it offers the highest standard of
                services. These services are selected with appropriate care to
                protect passengers from any default.
              </li>
              <li>
                Flight 24X7 has no liability for actions related to the travel
                services that are beyond its and its employees’ control.
              </li>
            </p>
          </div>
          <div>
            <h2 className="text-red-500 font-semibold mb-1">
              Who should I contact for help while traveling?
            </h2>
            <p>
              If you have any queries, reach out to the selected airline
              directly or the service provider.
            </p>
          </div>
          <div>
            <h2>
              What is the meaning of “Consolidator Fare” used in the aviation
              industry?
            </h2>
            <p>
              Consolidator Fares are basically 20-50% discounted fares than the
              originally posted fares. These fares may have the same or more
              restrictions on it. In this case, changes and cancelations are
              usually more restricted. If you are sure about your traveling
              dates, you don’t have to worry about the rules and regulations
              associated with Consolidator Fares.
            </p>
          </div>
          <div>
            <h2 className="text-red-500 font-semibold mb-1">
              Are Consolidator Fares offered on Flight 24X7?
            </h2>
            <p>
              Yes, you may view these fares as “Exclusive Fares” on our site.
            </p>
          </div>
          <div>
            <h2 className="text-red-500 font-semibold mb-1">
              What is the position of Flight 24X7 in comparison to other online
              travel portals?
            </h2>
            <p>
              Flight 24X7 offers amazing deals and guarantees low fares. We are
              not associated with any single airline, and we offer an unbiased
              listing of fares.
            </p>
          </div>
        </section>
      </>
    ),
  },

  disclaimer: {
    title: "Disclaimer",
    content: (
      <section className="space-y-6 text-[16px] leading-relaxed">
        <div>
          <h3 className="text-red-500 font-semibold mb-1">General Terms</h3>
          <p>
            FLIGHT 24X7.COM LLC reserves the authority to amend the terms,
            conditions, and notices under which the website functions. By
            continuing with your booking, you agree to abide by our Terms and
            Conditions.
          </p>
        </div>

        <div>
          <h3 className="text-red-500 font-semibold mb-1">
            Liability Disclaimer
          </h3>
          <p>
            We are not responsible for any additional fees charged by
            third-party agencies at the time of booking, or any loss or damage
            arising from the use of information on our website.
          </p>
        </div>

        <div>
          <h3 className="text-red-500 font-semibold mb-1">
            Pricing and Accuracy
          </h3>
          <p>
            We do not guarantee the accuracy of product or service information
            on our website. Flight 24X7 reserves the right to correct pricing
            errors and cancel pending bookings made under incorrect prices
            without penalty.
          </p>
        </div>

        <div>
          <h3 className="text-red-500 font-semibold mb-1">
            Independent Contractors
          </h3>
          <p>
            Carriers and service providers listed on our website act as
            independent contractors and are not employees of Flight 24X7.com.
          </p>
        </div>

        <div>
          <h3 className="text-red-500 font-semibold mb-1">
            Ratings and Availability
          </h3>
          <p>
            Ratings shown are general guidelines. We do not guarantee the
            accuracy or availability of any product or service listed. Both
            parties may update website content at any time without notice.
          </p>
        </div>

        <div>
          <h3 className="text-red-500 font-semibold mb-1">Force Majeure</h3>
          <p>
            Flight 24X7 is not liable for refunds or compensation due to flight
            delays, cancellations, strikes, or events beyond our control.
          </p>
        </div>
      </section>
    ),
  },

  terms: {
    title: "Terms & Conditions",
    content: (
      <section className="space-y-6 text-[16px] leading-relaxed">
        <div>
          <p>
            The website of Flight 24X7 is created to facilitate travelers all
            over the world in making flight reservations, booking hotels, and
            hiring car rentals to any destination throughout the world. If you
            are looking for any of the facilities mentioned above, we will find
            the best price for you as well as refund you the difference.
            However, before availing the services, you are suggested to go
            through the terms and conditions given here and accept them set
            henceforth. If you proceed to use the website, then it evidently
            signifies your acceptance to these Terms & Conditions. These clauses
            are linked with all booking-related transactions and other services
            offered on www.flight24x7.com and are sanctioned under the legal
            obligations.
          </p>
          <h3 className="text-red-500 font-semibold mb-1">
            Applicability of an Agreement
          </h3>
          <p>
            In these Terms & Conditions, words like ‘we’, ‘us’, and ‘our’ refers
            to the TripChef and its affiliates; whereas, ‘you’, ‘user’, ‘their’,
            and ‘customer’ signify those who are using the website with the
            intent to find, compare, book the flights tickets, hotel bookings
            and fetch other travel offers available on this website.
          </p>

          <h3 className="text-red-500 font-semibold mb-1">
            General Disclaimer
          </h3>
          <p></p>
        </div>
        If you make the use of our website, then it indicates your acceptance of
        the fares available through www.flight24x7.com and its affiliates. You
        also agree to the fares showcased on our travel portal which is an
        outcome of an arrangement between Flight 24X7 and associated Travel
        Suppliers. Keep in mind that these fares might include a certain fee
        charged by us for rendering these services. <br /> <br /> If you are
        booking airline tickets and making hotel reservations with any of our
        Travel Suppliers through this website, then it simply means that you
        have allowed Flight 24X7 in your sole discretion to book the travel
        services on your behalf with the travel supplier that you have selected
        for the given amount that includes fees, applicable charges, and taxes
        for the services you are willing to enjoy. <br />
        <br /> We are not responsible for any error appearing on this site as we
        are operating as an independent platform. We have no control over the
        fare changes made by the end travel suppliers. Along with that, we are
        also not liable for the failure of the end travel supplier whom you have
        selected to avail of the services through our website. <br />
        <br /> Flight 24X7 serves as an independent travel platform and thus, we
        have no interference in the functioning of the end travel supplier
        comprising airlines, car rentals, and hotels. We have no control over
        the situation if the end travel supplier is unable to offer the services
        you desire, owing to any adverse conditions like government orders,
        curfew, bad weather conditions, strike, or any natural calamity. We
        shall not be held accountable for any refund from any harm; however,
        occurred by using any of the content, links, or offers to other websites
        embedded in this site. <br />
        <br /> If the supplier fails to provide you with the services after
        confirming your booking and you have made payment for the same, then we
        are not responsible for any refund. The refunds and other insurances
        will be initiated from the travel suppliers’ end or according to the
        applicable law. Flight 24X7 is not liable to answer any of the
        undertaking carried out by the end travel supplier which is beyond our
        control. <br />
        <br /> In addition to this, we are not held responsible for any error,
        damage, injury, loss, omission, non-performance, or any consequence that
        happened because of the negligence of the end travel supplier but not
        limited to the hotels and airlines. <br />
        <br /> We have no control over the modifications of the fares,
        accommodation, flight schedule, and other services offered by the end
        travel supplier post confirmation of the payment. Moreover, Flight 24X7
        is not liable for any cancelation done because of the adverse weather
        conditions, natural calamity, or any other unforeseen reason that
        influences your travel booking made with us. We have the right not to
        mention the elements included in the travel products and services
        offered by our end travel suppliers but not limited to the offers,
        ratings, photographs, and discounts. <br />
        <br /> We are not accountable for the currency conversion fee or the
        final currency price that you will have to pay for any international
        booking made through our website. You must have to agree to the fact
        that currency rates are subject to the change and are updated on a
        regular basis according to the economic conditions. The fares showcased
        on our website are in the native currency. <br />
        <br /> Many tickets are non-refundable or else a certain cancelation fee
        will be charged while terminating the flight tickets and, therefore, you
        are suggested not to cancel your booking once the payment has been made.
        The refund entirely depends on the service provider. We hold no control
        on the airfares mentioned on the flight tickets that comprise tickets
        reserved under the particular fare and bulk price. <br />
        <br /> Deals and discounts available on our website depend on the
        destination, airline, travel class, advance notice, and the travel
        season. We are not taking any guarantee about the advertiser’s products
        and services that are mentioned and promoted on our website.
        <br />
        <br /> Keep in mind the fact that when you make bookings through our
        website, an agreement will be established between you and the end travel
        supplier. As a result, additional terms and conditions may be applicable
        to your flight bookings and hotel reservations. For this, we suggest you
        go through the Terms & Conditions mentioned on the end travel supplier’s
        website to avoid any hassle later on. <br />
        <br />
        When you click ‘I have read and agree to the Terms and Conditions’ while
        browsing, registering or using the website with the objective to book
        the services available on the website, it means that you acknowledge
        that:
        <li>
          You authorize TripChef to make payment for the concerned services
          available on our website.
        </li>
        <li>You are a potential service user.</li>
        <li>
          You will be going to abide by all the rules embedded in these Terms &
          Conditions and any other reference document mentioned herein.
        </li>
        <li>You are authorized to submit these Terms & Conditions.</li>
        <p>
          Certain suppliers might ask you to show the credit or deposit the cash
          while checking-in to compensate for the additional cost applicable
          during your stay or while using any of the booking-related services
          available through the website. Such payments will not be showcased on
          the invoice received by us for the services booked like flights, car
          rental, and hotels. Any breach made against the rules of the end
          travel suppliers might make your bookings null and void. The supplier
          has the right to deny you from availing the services you have booked.
          Also, the refund entirely depends on the supplier’s policy.
        </p>
        <div>
          <h3 className="text-red-500 font-semibold mb-1">
            Restrictions of Disclaimer
          </h3>
          <p>
            Under any circumstance, we and our collaborators shall not be held
            accountable for any damage including the virus attack on your
            computer, data loss or any technical fault while using your account
            or while browsing and downloading of text, video, audio, images or
            any other information from our website or from the data linked to
            the mail sent by Flight 24X7. <br /> <br /> Also, we are not
            responsible for any injury, direct or indirect damage, claim, loss,
            consequential or incidental damage of any type, be it already given
            in the contract or that happens out of or in any way linked to the
            use or inability to make the use of the website or services or
            flight tickets booked through Flight 24X7. <br /> <br /> Keep in
            mind the fact that our distributors and collaborators’
            responsibilities will never go beyond the total fee set forth in the
            trip itinerary that might result in such accountability. Any such
            claim that is an outcome of your access and use of the products and
            services from this website that was presented within 180 days from
            the date on which such action arose or transaction was completed.{" "}
            <br /> <br /> The laws that are already set forth might not include
            the limitation of the liability of such incidental damages. Thus,
            this limitation mentioned here above may not be applicable in your
            case. <br /> <br /> We are not directly associated with the end
            travel suppliers. Flight 24X7 is only responsible for promoting,
            sailing, and accepting reservations of the travel products and
            services including hotels, flights, meals travel insurance, cruises,
            and a lot more. We are not responsible for any issue concerning the
            products and services offered by the travel supplier through our
            website.
          </p>
        </div>
        <div>
          <h3 className="text-red-500 font-semibold mb-1">Privacy</h3>
          <p>
            Maintaining your confidential information is our utmost priority and
            we are ready to go the extra mile to achieve this objective. We
            assure you that the personal information shared by you at the time
            of registering or availing the services like name, gender, contact
            information, marital status, address, payment details are all secure
            and imparted using SSL encryption. <br /> <br />
            We have drafted a Privacy Policy for the customers that describes
            the way in which our company gathers information from you when you
            browse our website. In addition to this, the Privacy Policy also
            mentions all the practices in which handle your personal data that
            is entitled to confidentiality. You are advised to go through our
            Privacy Policy before using our website as your use of this site
            shows your acceptance to the clauses mentioned in the Privacy Policy
            set henceforth.
          </p>
        </div>
        <div>
          <h3 className="text-red-500 font-semibold mb-1">
            Ensuring your Security
          </h3>
          <p>
            To assure the security of your personal information and payment
            details and to ensure that your credit and debit card are not being
            used without your permission, our agent might call you to verify the
            details like the name on the card, address, registered contact
            information. These details are being collected just to avoid the
            breach caused by any third-party. When you accept Terms and
            Conditions with us, it clearly indicates that you authorize us to
            begin the authentication process as given here.
          </p>
          <p>
            By agreeing to the verification process, you accept the fact that
            whatever personal information we are gathering from you might be
            shared with the registered credit card agency that might save your
            data as a record. You can rest assured that the credit card
            information collected by us is just with the objective to verify
            your identity to avoid any loss in the future. This process will
            never affect your credit ratings at all. All the details given by
            you will be safely processed at our end by abiding all laws of the
            Data Protection Act of 1998.
          </p>
        </div>
        <div>
          <h3 className="text-red-500 font-semibold mb-1">
            Limitations of Responsibility
          </h3>
          <p>Flight 24X7 holds no liability for:</p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Fare or service changes by end suppliers</li>
            <li>
              Failure of service due to weather, curfew, government action,
              strike, or natural calamities
            </li>
            <li>
              Errors, delays, omissions, or non-performance caused by travel
              suppliers
            </li>
            <li>
              Refunds in case of supplier failure — refunds must be sought from
              the supplier
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-red-500 font-semibold mb-1">
            Service Modifications & Cancelations
          </h3>
          <p>
            Flight 24X7 has no control over changes in fare, flight schedules,
            hotel availability, or car rental services once the booking is
            confirmed. Any cancelation due to weather or unforeseen events is
            not our responsibility.
          </p>
          <p>
            We reserve the right not to display details such as images, star
            ratings, discounts, or amenities which are controlled by our
            suppliers.
          </p>
        </div>
      </section>
    ),
  },
  privacypolicy: {
    title: "Privacy Policy",
    content: (
      <section className="space-y-6 text-[16px] leading-relaxed">
        <div>
          <p>
            Flight 24X7 understands the importance of users' privacy and
            maintains the confidentiality of the details provided by them. The
            Privacy Policy is provided to secure and handle users' personal
            information by Flight 24X7 and its subsidiaries. The policy is
            applicable to every person who buys, intends to buy, or inquires
            about any services made available by this site. It is highly
            suggested to read the Privacy Policy of the company and check out
            the terms and conditions before proceeding further.
          </p>
        </div>

        <div>
          <h3 className="text-red-500 font-semibold mb-1">Cookie Policy</h3>
          <p>
            When a user lands at Flight 24X7, our site may drop a cookie
            directly or through any third-party service. The purpose is:
          </p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>
              Displaying advertisements related to your past searches or
              location
            </li>
            <li>Improving website performance</li>
            <li>Enhancing your browser experience</li>
            <li>Learning your browser history</li>
          </ul>
          <p>
            For travel reservations, we may also use location tools to support
            booking processes.
          </p>
        </div>

        <div>
          <h3 className="text-red-500 font-semibold mb-1">
            Personal Details We May Gather
          </h3>
          <p>
            We use SSL (Secure Socket Layer) to save all the information
            collected from the user, ensuring the security of online
            communications and transactions.
          </p>
          <p>
            However, we may share your details with third-party providers like
            hotels, airlines, rental companies, and others for successful
            bookings.
          </p>
        </div>

        <div>
          <h3 className="text-red-500 font-semibold mb-1">
            Personal Information
          </h3>
          <p>Details we may collect include:</p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Search history</li>
            <li>IP Address</li>
            <li>Access Time</li>
            <li>Operating System</li>
            <li>URL and Browser</li>
            <li>Cookie Identifiers</li>
          </ul>
          <p>And additional details like:</p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Trip details</li>
            <li>Name of the traveler</li>
            <li>Credit card information</li>
            <li>Billing Address</li>
            <li>Email Address</li>
            <li>Passport Number</li>
            <li>Telephone Number</li>
          </ul>
          <p>
            By sharing this information, you confirm that the data is complete
            and accurate. By accessing or using Flight 24X7, you accept this
            Privacy Policy and the terms herein.
          </p>
        </div>

        <div>
          <h3 className="text-red-500 font-semibold mb-1">
            How We Collect Your Data
          </h3>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Via website and social media</li>
            <li>Phone (through agents or support)</li>
            <li>Forms and subscriptions</li>
            <li>Emails and in-person interactions</li>
            <li>Third-party cookies</li>
          </ul>
        </div>

        <div>
          <h3 className="text-red-500 font-semibold mb-1">
            Newsletters, Discounts & Policy Modifications
          </h3>
          <p>
            Flight 24X7 regularly sends promotional emails with offers and
            deals. Users may unsubscribe anytime. If any change is made to this
            Privacy Policy, users will be notified.
          </p>
        </div>

        <div>
          <h3 className="text-red-500 font-semibold mb-1">
            Children Below 18 Years
          </h3>
          <p>
            Individuals under 18 cannot book or transact with us. A guardian or
            parent must handle the booking.
          </p>
        </div>

        <div>
          <h3 className="text-red-500 font-semibold mb-1">
            Bank or Credit Card Charges
          </h3>
          <p>
            Flight 24X7 respects your privacy and advises users not to make
            payments after e-ticket generation. If you receive suspicious calls
            or emails asking for payments on behalf of Flight 24X7, verify that
            the email comes from www.flight24x7.com before proceeding.
          </p>
        </div>
      </section>
    ),
  },
  cancellationpolicy: {
    title: "Cancellation & Refund Policy",
    content: (
      <section className="space-y-6 text-[16px] leading-relaxed">
        <p>
          Like our transaction service fees (booking fees), all post-ticketing
          service fees are non-refundable and are subject to change without
          notice. Our fees are in addition to any airline and/or other supplier
          imposed fees and charges.
        </p>

        <p>
          Most of our airline tickets are non-refundable. Airline Refunds/Future
          credits are subject to airline fare rules, policies and procedures.
        </p>

        <p>
          Travelers will be charged the processing fee for all permitted
          cancellations and we clearly indicate that the flight tickets and
          entire service fee will not be refundable.
        </p>

        <p>
          We allow you to make flight cancellation over the phone but it is
          imperative for you to fulfill a particular criteria for availing this
          facility. Those flight tickets that fall under the "No-Show" category
          are not entitled to a refund. In addition to this, your refund will be
          accepted only if you have initially applied for the flight
          cancellation and refund with us. Moreover, travelers must know that
          air tickets will be subject to cancellation only if the airline allows
          us to do the same.
        </p>

        <p>
          Our objective is to save the waiver from the airline to process
          cancellation and refund requests.
        </p>

        <p>
          Managing the large number of refund requests at once is surely a
          challenging task and, therefore, Flight 24X7 doesn't provide an exact
          date or time for the refund. You will have to contact our customer
          service agent and put forward the notice to begin the refund process.
          Our team will get back to you within a short while to confirm your
          refund request. However, that reply is merely an acknowledgment of the
          refund request as you are not qualified directly for any kind of
          compensation.
        </p>

        <p>
          Once we receive the refund request, we will approach the respective
          airline to get the refund as per their policy as we entirely depend on
          them for this waived amount. We will also keep you informed about the
          estimation. The refunded money will be credited back to your account
          immediately after the approval of the airlines.
        </p>
      </section>
    ),
  },
  whychooseus: {
  title: "Why Choose Us?",
  content: (
    <section className="space-y-6 text-[16px] leading-relaxed">
      <div>
        <p>
          Flight 24X7 is your trusted partner in air travel, committed to making your journey seamless, secure, and affordable. Whether you're booking a quick domestic flight or a long-haul international trip, we offer unbeatable deals, easy bookings, and 24/7 customer support to help you travel with peace of mind.
        </p>
      </div>

      <div>
        <h3 className="text-red-500 font-semibold mb-1">24x7 Customer Support</h3>
        <p>
          Our travel experts are available round the clock to assist you with booking, cancellation, changes, or queries — whenever you need us, we’re just a call or message away.
        </p>
      </div>

      <div>
        <h3 className="text-red-500 font-semibold mb-1">Affordable Deals</h3>
        <p>
          We offer flight tickets at competitive prices with exclusive offers and cashback. Whether it’s an early bird discount or last-minute deal, you’ll always get the best value with Flight 24X7.
        </p>
      </div>

      <div>
        <h3 className="text-red-500 font-semibold mb-1">Quick & Secure Booking</h3>
        <p>
          Our fast and user-friendly booking process, backed by advanced security encryption (SSL), ensures your transactions and personal details remain safe.
        </p>
      </div>

      <div>
        <h3 className="text-red-500 font-semibold mb-1">Wide Range of Options</h3>
        <p>
          We bring you hundreds of flight options from top airlines around the globe, letting you compare and choose the flight that suits your schedule and budget perfectly.
        </p>
      </div>

      <div>
        <h3 className="text-red-500 font-semibold mb-1">Trusted by Thousands</h3>
        <p>
          With a growing base of satisfied customers and positive reviews, Flight 24X7 is steadily becoming one of the most preferred platforms for booking flights across India and the world.
        </p>
      </div>

      <div>
        <h3 className="text-red-500 font-semibold mb-1">Transparent Policies</h3>
        <p>
          No hidden charges. All our service fees, cancellation rules, and policies are clearly stated upfront. You book knowing exactly what you’re paying for.
        </p>
      </div>

      <div>
        <h3 className="text-red-500 font-semibold mb-1">One-Stop Travel Partner</h3>
        <p>
          From flights to customer support, cancellations, rescheduling, and refund processing, we take care of everything so you can focus on your travel goals.
        </p>
      </div>
    </section>
  ),
}
};

function Fottercont() {
  const { name } = useParams();
  const page = pageData[name?.toLowerCase()];

  if (!page) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center text-red-600 font-bold text-lg">
        Sorry, no content available for "{name}"
      </div>
    );
  }

  return (
    <div className="min-h-screen px-6 py-12 max-w-5xl mx-auto text-[#1a1a1a]">
      <h1 className="text-3xl font-bold text-center text-red-500 mb-4">
        {page.title}
      </h1>
      <div className="w-24 h-1 bg-black mx-auto mb-8 rounded"></div>
      {page.content}
    </div>
  );
}

export default Fottercont;
