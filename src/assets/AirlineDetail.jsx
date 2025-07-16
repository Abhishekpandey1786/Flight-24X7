import React from "react";
import { useParams } from "react-router-dom";
import Footer from "./Footer";

const airlineDetails = {
  Aeromexico: {
    title: "Aeromexico Flight Reservations with 24X7",
    about: `Aeromexico, also known as Aerovías de México is the flag carrier of Mexico headquartered at Torre MAPFRE, Mexico City. The primary hub of the airline is Mexico City International Airport from where it connects passengers to the rest of Latin America and with other major destinations like Canada, U.S., Asia, and Europe. With a fleet size of 70 Boeing aircraft, Aeromexico operates in over 100 destinations including London, Paris, Copenhagen, Frankfurt, Santiago, and Sau Paulo. It has codeshare agreements with several airlines such as Aeroflot, Air Europa, Air France, Avianca, Copa Airlines, KLM, Korean Air, LATAM Chile, Garuda Indonesia, and others.`,
    amenities: [
      "Flying with Aeromexico gives you a different experience. From onboard facilities to exceptional hospitality, the airline has it all. The range of services include:",
      "Multiple choices in travel classes like Main Cabin Economy, AM Plus, and Clase Premier for a higher level of comfort.",
      "Seatback silver screens with unlimited options in music, movies, and games.",
      "A wide selection of meals including breakfast, lunch, dinner, snacks, special meals, and alcoholic and non-alcoholic beverages.",
      "In-flight Wi-Fi and onboard magazines",
    ],
    checkin: `The online check-in service of Aeromexico for international flights is available 24 hours before the scheduled departure while for domestic flights, it starts 48 hours before the take-off. You can either do online check-in using the Aeromexico app on your smartphone or through its website.`,
    tips: [
      "24X7 is an online flight booking platform which specializes in unique offers and deals on domestic and international flights. With over 450 airlines in our portfolio, you get to choose your preferred flights and you can make bookings at a lower price.",
      "Be flexible with your travel dates",
      "Try booking an indirect flight as direct flights are costlier",
      "Subscribe to the newsletter of 24X7 to get the latest updates on new offers and exclusive Aeromexico deals",
    ],
  },
  Emirates: {
    title: "Emirates Flight Reservations with 24X7",
    about: `Emirates is the largest airline in the Middle East and one of the fastest growing airlines in the world. It is based in Dubai, United Arab Emirates and operates over 3,600 flights per week to more than 150 destinations across 80 countries.`,
    amenities: [
      "Private suites in First Class with sliding doors, personal minibars, and mood lighting.",
      "Flat-bed seats in Business Class with direct aisle access and personal entertainment systems.",
      "Comfortable Economy Class seats with personal entertainment systems.",
      "Gourmet meals, fine wines, and in-flight entertainment.",
      "Wi-Fi, duty-free shopping, and excellent service on board.",
    ],
    checkin: `Online check-in opens 48 hours before the scheduled departure time and closes 90 minutes before departure. You can check in via the Emirates website or mobile app.`,
    tips: [
      "Book your flight in advance to secure the best fares.",
      "Be flexible with your travel dates to take advantage of lower fares.",
      "Sign up for Emirates Skywards to earn miles and benefits.",
      "Watch for special promotions on the Emirates website or newsletter.",
    ],
  },
  Singapore: {
    title: "Singapore Airlines Flight Reservations with 24X7",
    about: `Singapore Airlines is the flag carrier of Singapore and one of the world's leading airlines. It is known for its exceptional service, luxurious amenities, and extensive network of destinations.`,
    amenities: [
      "Spacious and comfortable seats in all classes.",
      "Lie-flat beds in Business and First Class.",
      "Personal entertainment systems with movies, TV, games.",
      "Gourmet meals with fine wine and spirits.",
      "Wi-Fi connectivity and excellent hospitality.",
    ],
    checkin: `Online check-in opens 48 hours before departure and closes 1 hour before departure. You can check in via their website or app.`,
    tips: [
      "Book your flight in advance for best prices.",
      "Be flexible with your travel dates.",
      "Join the KrisFlyer frequent flyer program.",
      "Look out for promotions on the Singapore Airlines website.",
    ],
  },
  
  Alaska: {
    title: "Alaska Airlines Flight Reservations with 24X7",
    about: `Alaska Airlines is a major American airline headquartered in Seattle, Washington. It operates flights to over 115 destinations across the United States, Canada, Mexico, and Costa Rica.`,
    amenities: [
      "Comfortable seating with ample legroom.",
      "In-flight entertainment options including movies and TV shows.",
      "Complimentary snacks and beverages.",
      "Wi-Fi available on most flights.",
      "Mileage Plan for frequent flyers.",
    ],
    checkin: `Online check-in opens 24 hours before departure and closes 60 minutes before departure. You can check in via their website or app.`,
    tips: [
      "Book early for the best fares.",
      "Join the Mileage Plan for rewards and benefits.",
      "Check for special offers on the Alaska Airlines website.",
      "Be flexible with your travel dates for better deals.",
    ],
  },
  Delta_Airlines: {
  title: "Delta Airlines Flight Reservations with 24X7",
  about: `Delta Air Lines is one of the major airlines of the United States, headquartered in Atlanta, Georgia. It operates a vast network of domestic and international flights across six continents and serves over 300 destinations.`,
  amenities: [
    "Spacious seating and multiple cabin classes including Delta One and Comfort+.",
    "In-flight entertainment system with movies, TV, and music.",
    "Free snacks, meals, and non-alcoholic beverages on most flights.",
    "Wi-Fi available on most aircraft.",
    "SkyMiles loyalty program for frequent flyers.",
  ],
  checkin: `Online check-in begins 24 hours before departure and closes 60 minutes before for domestic flights. Passengers can check in via the Delta website, mobile app, or airport kiosks.`,
  tips: [
    "Sign up for the SkyMiles program to earn miles and enjoy exclusive benefits.",
    "Use the Fly Delta app for a smoother travel experience.",
    "Book in advance and remain flexible to get better prices.",
    "Check baggage policies in advance to avoid extra fees.",
  ],
},

  Flights_To_Canada: {
    title: "Flights to Canada Reservations with 24X7",
    about: `Flights to Canada offer a wide range of options for travelers looking to explore this vast and diverse country. From the bustling cities of Toronto and Vancouver to the natural beauty of Banff and Jasper, Canada has something for everyone.`,
    amenities: [
      "Direct flights to major Canadian cities.",
      "In-flight entertainment options including movies and TV shows.",
      "Complimentary snacks and beverages.",
      "Wi-Fi available on select flights.",
      "Baggage allowance varies by airline.",
    ],
    checkin: `Online check-in opens 24 hours before departure and closes 60 minutes before departure. You can check in via the airline's website or app.`,
    tips: [
      "Book early for the best fares.",
      "Check for special offers on the airline's website.",
      "Be flexible with your travel dates for better deals.",
      "Ensure you have the necessary travel documents for entry into Canada.",
    ],
  },
  Southwest_Airlines: {
    title: "Southwest Airlines Flight Reservations with 24X7",
    about: `Southwest Airlines is a major American airline known for its low-cost fares and no-frills service. It operates flights to over 100 destinations across the United States, Mexico, and the Caribbean.`,
    amenities: [
      "No assigned seating; first-come, first-served boarding.",
      "Free checked bags (up to two per passenger).",
      "In-flight entertainment options including movies and TV shows.",
      "Complimentary snacks and beverages.",
      "Rapid Rewards frequent flyer program.",
    ],
    checkin: `Online check-in opens 24 hours before departure and closes 60 minutes before departure. You can check in via their website or app.`,
    tips: [
      "Book early for the best fares.",
      "Join the Rapid Rewards program for rewards and benefits.",
      "Check for special offers on the Southwest Airlines website.",
      "Be flexible with your travel dates for better deals.",
    ],
  },
  Vuelos_Baratos: {
    title: "Vuelos Baratos Flight Reservations with 24X7",
    about: `Vuelos Baratos is a travel agency specializing in affordable flights to various destinations. They offer a wide range of options for travelers looking for budget-friendly air travel.`,
    amenities: [
      "Access to discounted flight fares.",
      "Flexible booking options.",
      "Customer support for travel inquiries.",
      "Special deals and promotions on flights.",
    ],
    checkin: `Online check-in policies vary by airline. Check the specific airline's website for details.`,
    tips: [
      "Book early to secure the best deals.",
      "Sign up for newsletters to receive exclusive offers.",
      "Be flexible with your travel dates for better prices.",
      "Compare prices across different airlines for the best fare.",
    ],
  },
  Allegiant_Airlines: {
    title: "Allegiant Air Flight Reservations with 24X7",
    about: `Allegiant Air is an American low-cost airline that operates scheduled and charter flights. It is known for its affordable fares and no-frills service, making it a popular choice for budget travelers.`,
    amenities: [
      "Low-cost fares with no hidden fees.",
      "Optional add-ons for baggage, seat selection, and in-flight services.",
      "Limited in-flight entertainment options.",
      "Complimentary snacks and beverages on select flights.",
    ],
    checkin: `Online check-in opens 24 hours before departure and closes 45 minutes before departure. You can check in via their website or app.`,
    tips: [
      "Book early for the best fares.",
      "Be aware of additional fees for baggage and services.",
      "Check for special offers on the Allegiant Air website.",
      "Be flexible with your travel dates for better deals.",
    ],
  },
  Spirit_Airlines: {
    title: "Spirit Airlines Flight Reservations with 24X7",
    about: `Spirit Airlines is an American ultra-low-cost carrier known for its budget-friendly fares and no-frills service. It operates flights to over 75 destinations across the United States, Latin America, and the Caribbean.`,
    amenities: [
      "Low-cost fares with optional add-ons for baggage and services.",
      "Limited in-flight entertainment options.",
      "Complimentary snacks and beverages available for purchase.",
      "Spirit Club membership for frequent flyers.",
    ],
    checkin: `Online check-in opens 24 hours before departure and closes 60 minutes before departure. You can check in via their website or app.`,
    tips: [
      "Book early for the best fares.",
      "Be aware of additional fees for baggage and services.",
      "Check for special offers on the Spirit Airlines website.",
      "Be flexible with your travel dates for better deals.",
    ],
  },
  WestJet_Airlines: {
    title: "WestJet Airlines Flight Reservations with 24X7",
    about: `WestJet Airlines is a Canadian low-cost airline that operates scheduled and charter flights to over 100 destinations in North America, Central America, the Caribbean, and Europe.`,
    amenities: [
      "Comfortable seating with ample legroom.",
      "In-flight entertainment options including movies and TV shows.",
      "Complimentary snacks and beverages.",
      "Wi-Fi available on select flights.",
      "WestJet Rewards frequent flyer program.",
    ],
    checkin: `Online check-in opens 24 hours before departure and closes 60 minutes before departure. You can check in via their website or app.`,
    tips: [
      "Book early for the best fares.",
      "Join the WestJet Rewards program for rewards and benefits.",
      "Check for special offers on the WestJet Airlines website.",
      "Be flexible with your travel dates for better deals.",
    ],
  },
  American_Airlines: {
    title: "American Airlines Flight Reservations with 24X7",
    about: `American Airlines is one of the largest airlines in the world, headquartered in Fort Worth, Texas. It operates flights to over 350 destinations in more than 50 countries.`,
    amenities: [
      "Comfortable seating with various classes available.",
      "In-flight entertainment options including movies and TV shows.",
      "Complimentary snacks and beverages.",
      "Wi-Fi available on most flights.",
      "AAdvantage frequent flyer program for rewards and benefits.",
    ],
    checkin: `Online check-in opens 24 hours before departure and closes 60 minutes before departure. You can check in via their website or app.`,
    tips: [
      "Book early for the best fares.",
      "Join the AAdvantage program for rewards and benefits.",
      "Check for special offers on the American Airlines website.",
      "Be flexible with your travel dates for better deals.",
    ],
  },
  Frontier_Airlines: {
    title: "Frontier Airlines Flight Reservations with 24X7",
    about: `Frontier Airlines is an American ultra-low-cost carrier headquartered in Denver, Colorado. It operates flights to over 100 destinations across the United States, Mexico, and the Caribbean.`,
    amenities: [
      "Low-cost fares with optional add-ons for baggage and services.",
      "Limited in-flight entertainment options.",
      "Complimentary snacks and beverages available for purchase.",
      "Frontier Miles frequent flyer program.",
    ],
    checkin: `Online check-in opens 24 hours before departure and closes 60 minutes before departure. You can check in via their website or app.`,
    tips: [
      "Book early for the best fares.",
      "Be aware of additional fees for baggage and services.",
      "Check for special offers on the Frontier Airlines website.",
      "Be flexible with your travel dates for better deals.",
    ],
  },
 
  Canada: {
    title: "Flights to Canada Reservations with 24X7",
    about: `Flights to Canada offer a wide range of options for travelers looking to explore this vast and diverse country. From the bustling cities of Toronto and Vancouver to the natural beauty of Banff and Jasper, Canada has something for everyone.`,
    amenities: [
      "Direct flights to major Canadian cities.",
      "In-flight entertainment options including movies and TV shows.",
      "Complimentary snacks and beverages.",
      "Wi-Fi available on select flights.",
      "Baggage allowance varies by airline.",
    ],
    checkin: `Online check-in opens 24 hours before departure and closes 60 minutes before departure. You can check in via the airline's website or app.`,
    tips: [
      "Book early for the best fares.",
      "Check for special offers on the airline's website.",
      "Be flexible with your travel dates for better prices.",
      "Ensure you have the necessary travel documents for entry into Canada.",
    ],
  },
  
  Sweden: {
    title: "Flights to Sweden Reservations with 24X7",
    about: `Flights to Sweden offer a chance to explore the stunning landscapes, rich history, and vibrant culture of this Scandinavian country. From the bustling capital city of Stockholm to the picturesque countryside, Sweden has something for every traveler.`,
    amenities: [
      "Direct flights to major Swedish cities.",
      "In-flight entertainment options including movies and TV shows.",
      "Complimentary snacks and beverages.",
      "Wi-Fi available on select flights.",
      "Baggage allowance varies by airline.",
    ],
    checkin: `Online check-in opens 24 hours before departure and closes 60 minutes before departure. You can check in via the airline's website or app.`,
    tips: [
      "Book early for the best fares.",
      "Check for special offers on the airline's website.",
      "Be flexible with your travel dates for better prices.",
      "Ensure you have the necessary travel documents for entry into Sweden.",
    ],
  },
  Thailand: {
    title: "Flights to Thailand Reservations with 24X7",
    about: `Flights to Thailand offer a gateway to one of Southeast Asia's most popular tourist destinations, known for its stunning beaches, vibrant cities, and rich cultural heritage. From the bustling streets of Bangkok to the serene islands of Phuket and Koh Samui, Thailand has something for every traveler.`,
    amenities: [
      "Direct flights to major Thai cities.",
      "In-flight entertainment options including movies and TV shows.",
      "Complimentary snacks and beverages.",
      "Wi-Fi available on select flights.",
      "Baggage allowance varies by airline.",
    ],
    checkin: `Online check-in opens 24 hours before departure and closes 60 minutes before departure. You can check in via the airline's website or app.`,
    tips: [
      "Book early for the best fares.",
      "Check for special offers on the airline's website.",
      "Be flexible with your travel dates for better prices.",
      "Ensure you have the necessary travel documents for entry into Thailand.",
    ],
  },
  Tokyo: {
    title: "Flights to Tokyo Reservations with 24X7",
    about: `Flights to Tokyo offer a gateway to Japan's bustling capital, known for its unique blend of traditional culture and modern technology. From historic temples to futuristic skyscrapers, Tokyo has something for every traveler.`,
    amenities: [
      "Direct flights to Narita International Airport (NRT) or Haneda Airport (HND).",
      "In-flight entertainment options including movies and TV shows.",
      "Complimentary snacks and beverages.",
      "Wi-Fi available on select flights.",
      "Baggage allowance varies by airline.",
    ],
    checkin: `Online check-in opens 24 hours before departure and closes 60 minutes before departure. You can check in via the airline's website or app.`,
    tips: [
      "Book early for the best fares.",
      "Check for special offers on the airline's website.",
      "Be flexible with your travel dates for better prices.",
      "Ensure you have the necessary travel documents for entry into Japan.",
    ],
  },
  Vancouver: {
    title: "Flights to Vancouver Reservations with 24X7",
    about: `Flights to Vancouver offer a gateway to Canada's stunning west coast, known for its breathtaking natural beauty, vibrant culture, and outdoor activities. From the majestic mountains to the Pacific Ocean, Vancouver has something for every traveler.`,
    amenities: [
      "Direct flights to Vancouver International Airport (YVR).",
      "In-flight entertainment options including movies and TV shows.",
      "Complimentary snacks and beverages.",
      "Wi-Fi available on select flights.",
      "Baggage allowance varies by airline.",
    ],
    checkin: `Online check-in opens 24 hours before departure and closes 60 minutes before departure. You can check in via the airline's website or app.`,
    tips: [
      "Book early for the best fares.",
      "Check for special offers on the airline's website.",
      "Be flexible with your travel dates for better prices.",
      "Ensure you have the necessary travel documents for entry into Canada.",
    ],
  },
  Denver: {
    title: "Flights to Denver Reservations with 24X7",
    about: `Flights to Denver offer a gateway to the stunning Rocky Mountains and a vibrant city known for its outdoor activities, cultural attractions, and craft breweries.`,
    amenities: [
      "Direct flights to Denver International Airport (DEN).",
      "In-flight entertainment options including movies and TV shows.",
      "Complimentary snacks and beverages.",
      "Wi-Fi available on select flights.",
      "Baggage allowance varies by airline.",
    ],
    checkin: `Online check-in opens 24 hours before departure and closes 60 minutes before departure. You can check in via the airline's website or app.`,
    tips: [
      "Book early for the best fares.",
      "Check for special offers on the airline's website.",
      "Be flexible with your travel dates for better prices.",
      "Ensure you have the necessary travel documents for entry into the United States.",
    ],
  },
  London: {
    title: "Flights to London Reservations with 24X7",
    about: `Flights to London offer a gateway to one of the world's most iconic cities, known for its rich history, vibrant culture, and diverse attractions. From the historic Tower of London to the modern Shard, London has something for every traveler.`,
    amenities: [
      "Direct flights to major London airports (Heathrow, Gatwick, Luton).",
      "In-flight entertainment options including movies and TV shows.",
      "Complimentary snacks and beverages.",
      "Wi-Fi available on select flights.",
      "Baggage allowance varies by airline.",
    ],
    checkin: `Online check-in opens 24 hours before departure and closes 60 minutes before departure. You can check in via the airline's website or app.`,
    tips: [
      "Book early for the best fares.",
      "Check for special offers on the airline's website.",
      "Be flexible with your travel dates for better prices.",
      "Ensure you have the necessary travel documents for entry into the United Kingdom.",
    ],
  },
  Paris: {
    title: "Flights to Paris Reservations with 24X7",
    about: `Flights to Paris offer a gateway to the romantic capital of France, known for its iconic landmarks, world-class museums, and vibrant culture. From the Eiffel Tower to the Louvre, Paris has something for every traveler.`,
    amenities: [
      "Direct flights to Charles de Gaulle Airport (CDG).",
      "In-flight entertainment options including movies and TV shows.",
      "Complimentary snacks and beverages.",
      "Wi-Fi available on select flights.",
      "Baggage allowance varies by airline.",
    ],
    checkin: `Online check-in opens 24 hours before departure and closes 60 minutes before departure. You can check in via the airline's website or app.`,
    tips: [
      "Book early for the best fares.",
      "Check for special offers on the airline's website.",
      "Be flexible with your travel dates for better prices.",
      "Ensure you have the necessary travel documents for entry into France.",
    ],
  },
  Copenhagen: {
    title: "Flights to Copenhagen Reservations with 24X7",
    about: `Flights to Copenhagen offer a gateway to Denmark's capital, known for its rich history, vibrant culture, and stunning architecture. From the historic Nyhavn harbor to the modern Opera House, Copenhagen has something for every traveler.`,
    amenities: [
      "Direct flights to Copenhagen Airport (CPH).",
      "In-flight entertainment options including movies and TV shows.",
      "Complimentary snacks and beverages.",
      "Wi-Fi available on select flights.",
      "Baggage allowance varies by airline.",
    ],
    checkin: `Online check-in opens 24 hours before departure and closes 60 minutes before departure. You can check in via the airline's website or app.`,
    tips: [
      "Book early for the best fares.",
      "Check for special offers on the airline's website.",
      "Be flexible with your travel dates for better prices.",
      "Ensure you have the necessary travel documents for entry into Denmark.",
    ],
  },
  Frankfurt: {
    title: "Flights to Frankfurt Reservations with 24X7",
    about: `Flights to Frankfurt offer a gateway to Germany's financial hub, known for its modern skyline, rich history, and vibrant culture. From the historic Römer to the modern skyscrapers, Frankfurt has something for every traveler.`,
    amenities: [
      "Direct flights to Frankfurt Airport (FRA).",
      "In-flight entertainment options including movies and TV shows.",
      "Complimentary snacks and beverages.",
      "Wi-Fi available on select flights.",
      "Baggage allowance varies by airline.",
    ],
    checkin: `Online check-in opens 24 hours before departure and closes 60 minutes before departure. You can check in via the airline's website or app.`,
    tips: [
      "Book early for the best fares.",
      "Check for special offers on the airline's website.",
      "Be flexible with your travel dates for better prices.",
      "Ensure you have the necessary travel documents for entry into Germany.",
    ],
  },
  UnitedStates: {
    title: "Flights to United States Reservations with 24X7",
    about: `The United States is one of the most visited countries in the world, offering a wide range of experiences from bustling cities like New York and Los Angeles to natural wonders like the Grand Canyon and Yellowstone. Flights to the U.S. are operated by multiple international and domestic airlines, providing travelers with plenty of options.`,
    amenities: [
      "Direct and connecting flights to major U.S. cities.",
      "Onboard entertainment including movies, TV shows, and music.",
      "Meals and beverages provided on long-haul international flights.",
      "Wi-Fi services available on select flights.",
    ],
    checkin: `Online check-in availability depends on the operating airline. Generally, it opens 24 to 48 hours before departure. You can check in via the airline’s website or mobile app.`,
    tips: [
      "Book in advance to get the best airfare deals.",
      "Be flexible with your travel dates to save money.",
      "Subscribe to 24X7’s newsletter for exclusive U.S. flight deals.",
      "Compare airlines and layovers for cheaper options.",
    ],
  },
  Seattle: {
    title: "Flights to Seattle Reservations with 24X7",
    about: `Seattle is a vibrant city in the Pacific Northwest region of the United States, known for its tech industry, coffee culture, and natural beauty. It is home to major companies like Amazon and Microsoft, and landmarks such as the Space Needle, Pike Place Market, and Mount Rainier.`,
    amenities: [
      "Direct flights available from major domestic and international cities.",
      "In-flight entertainment options including movies, music, and games.",
      "Complimentary meals and beverages on long-haul flights.",
      "Wi-Fi services and USB charging ports available on select flights.",
    ],
    checkin: `Most airlines offer online check-in for flights to Seattle. Online check-in usually opens 24 to 48 hours before departure and can be done via the airline’s website or mobile app.`,
    tips: [
      "Book in advance to get cheaper fares to Seattle.",
      "Choose mid-week flights (like Tuesday or Wednesday) for lower prices.",
      "Compare multiple airlines and nearby airports like Portland or Vancouver for better deals.",
      "Subscribe to the 24X7 newsletter to receive offers on Seattle flights.",
    ],
  },
  SanFrancisco: {
    title: "Flights to San Francisco Reservations with 24X7",
    about: `San Francisco, located in Northern California, is one of the most iconic cities in the United States. Known for the Golden Gate Bridge, Alcatraz Island, and its diverse culture and tech-driven economy, it attracts millions of travelers every year. The city is a hub for both business and leisure travel.`,
    amenities: [
      "Direct and connecting flights from major cities around the world.",
      "In-flight meals, snacks, and beverages available depending on the airline.",
      "Personal entertainment systems with movies, music, and TV shows.",
      "Wi-Fi and charging ports on most international and long-haul flights.",
    ],
    checkin: `Online check-in is available 24 to 48 hours before departure for most airlines flying to San Francisco. Use the airline’s official website or mobile app for easy check-in and seat selection.`,
    tips: [
      "Book your flights early to get better deals to San Francisco.",
      "Try flying mid-week for lower fares.",
      "Set fare alerts or subscribe to 24X7 offers for exclusive discounts.",
      "Look for bundle deals that include flight + hotel for extra savings.",
    ],
  },
  Rome: {
    title: "Flights to Rome Reservations with 24X7",
    about: `Rome, the capital city of Italy, is a globally renowned destination known for its rich history, ancient architecture, art, and cuisine. From the Colosseum and the Vatican City to cobblestone streets and piazzas, Rome offers a blend of ancient and modern attractions for travelers from all over the world.`,
    amenities: [
      "Direct and connecting flights from major cities worldwide to Rome Fiumicino Airport (FCO).",
      "In-flight meals featuring international and Italian cuisine on long-haul routes.",
      "Entertainment systems with movies, documentaries, and games.",
      "Wi-Fi availability and USB charging ports on select international flights.",
    ],
    checkin: `Most airlines flying to Rome offer online check-in 24 to 48 hours before scheduled departure. You can use the airline's website or app to check in, choose your seat, and download your boarding pass.`,
    tips: [
      "Book your flight at least 3-4 weeks in advance for better fares.",
      "Avoid peak tourist seasons (like July and August) for cheaper flights and hotel stays.",
      "Subscribe to 24X7 newsletters for exclusive Italy-bound flight offers.",
      "Consider flying mid-week or from alternate airports for more savings.",
    ],
  },
  Paro: {
    title: "Flights to Paro Reservations with 24X7",
    about: `Paro is a picturesque valley town in Bhutan, home to the country's only international airport — Paro International Airport (PBH). Surrounded by the Himalayas, Paro offers a serene travel experience with cultural landmarks such as the iconic Tiger’s Nest Monastery and Paro Dzong.`,
    amenities: [
      "Direct flights available from select international cities such as Delhi, Kathmandu, Bangkok, and Dhaka.",
      "Window views of the Himalayan mountain range, including Mount Everest, on clear days.",
      "Complimentary in-flight snacks and beverages on most regional flights.",
      "Warm Bhutanese hospitality with personalized service on board.",
    ],
    checkin: `Online check-in may not be available for all carriers flying to Paro. It is recommended to arrive at the airport at least 3 hours prior to international departures and 2 hours before domestic ones.`,
    tips: [
      "Book well in advance as seats to Paro are limited and high in demand, especially during spring and autumn.",
      "Try to get a window seat for scenic views during landing — it's one of the world’s most thrilling airport approaches.",
      "Subscribe to 24X7 for early-bird Bhutan flight deals and promotions.",
      "Carry a printed copy of your e-ticket and visa clearance if required.",
    ],
  },
  NewYorkCity: {
    title: "Flights to New York City Reservations with 24X7",
    about: `New York City (NYC) is one of the busiest travel hubs in the world, served by three major airports — John F. Kennedy International (JFK), LaGuardia (LGA), and Newark Liberty International (EWR). Whether you're flying for business or leisure, NYC offers unmatched global connectivity with flights from all major international and domestic airlines.`,
    amenities: [
      "Direct international flights from over 100 countries and all major continents.",
      "Access to world-class airport lounges, shopping, and dining experiences.",
      "Onboard entertainment systems with movies, music, and games on most international routes.",
      "Wi-Fi access, in-seat power, and gourmet meals on long-haul flights.",
      "Multiple cabin options including Economy, Premium Economy, Business, and First Class.",
    ],
    checkin: `Most airlines operating flights to/from NYC offer online check-in starting 24 to 48 hours before departure. Passengers can check in via airline websites or mobile apps and select seats or get boarding passes digitally.`,
    tips: [
      "Book your tickets in advance to avoid last-minute surge pricing, especially during holidays and peak seasons.",
      "Compare prices across JFK, LGA, and EWR airports to find better fares or travel convenience.",
      "Sign up for fare alerts and newsletters on 24X7 for New York City deals.",
      "Use public transportation like AirTrain and subway for easy and affordable airport transfers.",
    ],
  },
  Miami: {
    title: "Flights to Miami Reservations with 24X7",
    about: `Miami is a major international gateway in the southeastern United States, known for its beaches, culture, and tourism. Miami International Airport (MIA) is one of the busiest airports in the U.S., handling hundreds of domestic and international flights daily. It serves as a hub for American Airlines and offers direct connections to Latin America, Europe, and beyond.`,
    amenities: [
      "Direct flights from North America, South America, Europe, and the Caribbean.",
      "Modern airport facilities with luxury lounges, shopping centers, and gourmet dining.",
      "Wide range of seating options from Economy to First Class with onboard entertainment.",
      "Wi-Fi, USB charging ports, and in-flight meals on most international routes.",
      "Airport transport via MIA Mover, MetroRail, taxis, and ride-sharing apps.",
    ],
    checkin: `Most airlines offer online check-in for flights to/from Miami starting 24 to 48 hours before departure. You can use the airline’s website or app to check in, choose your seat, and download your boarding pass.`,
    tips: [
      "Book early for popular travel dates like spring break and holidays.",
      "Compare fares from nearby airports like Fort Lauderdale (FLL) for better deals.",
      "Check baggage policies before flying with low-cost carriers to avoid extra fees.",
      "Subscribe to 24X7’s newsletter for exclusive Miami flight deals and alerts.",
    ],
  },
  Mexico: {
    title: "Flights to Mexico Reservations with 24X7",
    about: `Mexico is one of the most vibrant countries in North America, rich in history, culture, cuisine, and natural beauty. Mexico City International Airport (Aeropuerto Internacional Benito Juárez) is the primary international gateway, connecting travelers to cities across the Americas and beyond. It serves as a major hub for airlines like Aeromexico and Volaris.`,
    amenities: [
      "Direct flights from major cities across the U.S., Canada, Europe, and Latin America.",
      "A range of airlines offering economy, premium, and business class services.",
      "In-flight amenities including entertainment systems, complimentary meals, and Wi-Fi (on select flights).",
      "Modern airport facilities with shops, restaurants, lounges, and local crafts.",
      "Ground transportation including metro, buses, taxis, and app-based ride services.",
    ],
    checkin: `Online check-in for flights to Mexico is available 24–48 hours before departure, depending on the airline. Passengers can check in via the airline's website or mobile app and access boarding passes digitally.`,
    tips: [
      "Book flights in advance to save on fares, especially during peak seasons (December, Easter, and summer).",
      "Compare prices across multiple airlines for better deals.",
      "Travel mid-week for lower fares and fewer crowds.",
      "Sign up for 24X7's fare alerts to get notified of exclusive Mexico deals.",
    ],
  },
  Madrid: {
    title: "Flights to Madrid Reservations with 24X7",
    about: `Madrid, the capital of Spain, is a major European destination known for its elegant boulevards, historic architecture, rich culture, and vibrant nightlife. Madrid-Barajas Adolfo Suárez Airport is the main international airport and one of the busiest in Europe, serving as a hub for Iberia and other global airlines.`,
    amenities: [
      "Direct flights to Madrid from North America, Latin America, Asia, and across Europe.",
      "Wide range of airlines offering Economy, Premium Economy, Business, and First Class cabins.",
      "In-flight services including entertainment systems, Spanish cuisine meals, and beverages.",
      "On-ground facilities like luxury lounges, duty-free shopping, multilingual support, and easy airport transfers.",
      "Wi-Fi and mobile charging stations available at the airport and on many flights.",
    ],
    checkin: `Online check-in for most airlines flying to Madrid opens 24 to 48 hours before departure. Travelers can check in via the airline's website or mobile app, choose seats, and download their boarding passes.`,
    tips: [
      "Book at least 2-3 months in advance to get the best international flight deals.",
      "Consider flying midweek to find lower fares compared to weekends.",
      "Use 24X7’s fare comparison tool to monitor price drops.",
      "Join airline loyalty programs for added perks on long-haul Madrid flights.",
    ],
  },
  LosAngeles: {
    title: "Flights to Los Angeles Reservations with 24X7",
    about: `Los Angeles, often referred to as L.A., is a major city in California and a global hub for entertainment, culture, and business. Los Angeles International Airport (LAX) is one of the busiest airports in the world, offering direct connections to North America, Asia, Europe, and beyond.`,
    amenities: [
      "Direct international and domestic flights to and from LAX by major global airlines.",
      "Multiple travel classes including Economy, Premium Economy, Business, and First Class.",
      "In-flight entertainment systems, complimentary meals, and onboard Wi-Fi on most long-haul routes.",
      "Airport amenities include luxury lounges, restaurants, rental car services, and shuttle options.",
      "24/7 multilingual assistance and accessible services at LAX.",
    ],
    checkin: `Most airlines offer online check-in 24 to 48 hours before your scheduled departure. You can use the airline's website or mobile app to check in, select your seat, and get your boarding pass.`,
    tips: [
      "Book flights 4–6 weeks in advance for the best fares to Los Angeles.",
      "Use 24X7’s fare tracker to monitor ticket prices and receive alerts.",
      "Avoid flying during major U.S. holidays to save on costs.",
      "Consider flying into nearby airports like Burbank or Long Beach if LAX prices are high.",
    ],
  },
  LasVegas: {
    title: "Flights to Las Vegas Reservations with 24X7",
    about: `Las Vegas, located in Nevada, USA, is world-famous for its vibrant nightlife, luxury resorts, casinos, and entertainment shows. McCarran International Airport (LAS), now officially Harry Reid International Airport, serves millions of passengers annually and is a major gateway to this entertainment capital.`,
    amenities: [
      "Multiple domestic and international flights available to and from Las Vegas.",
      "All major airlines operate routes including budget and premium carriers.",
      "Flight options with Economy, Business, and First Class seating.",
      "In-flight entertainment, Wi-Fi, meals, and beverages depending on airline and class.",
      "LAS Airport offers duty-free shopping, dining, lounges, and easy ground transportation.",
    ],
    checkin: `Most airlines allow online check-in starting 24 to 48 hours before departure. You can check in via the airline’s website or app, select your seats, and get your digital boarding pass.`,
    tips: [
      "Book flights on weekdays to get cheaper fares to Las Vegas.",
      "Avoid major events or holiday weekends as prices tend to rise.",
      "Use 24X7’s fare alert system to get notified of flight deals.",
      "Check nearby airports like Los Angeles or Phoenix if flexible with travel.",
    ],
  },
  Dubai: {
    title: "Flights to Dubai Reservations with 24X7",
    about: `Dubai, located in the United Arab Emirates, is a global hub for business, luxury, and tourism. Known for its modern architecture, vibrant nightlife, and world-class shopping, Dubai International Airport (DXB) is one of the busiest airports in the world, connecting the city to hundreds of destinations.`,
    amenities: [
      "Direct flights from major global cities with airlines like Emirates, Etihad, FlyDubai, and more.",
      "Options for Economy, Business, and First Class travel.",
      "In-flight amenities include meals, entertainment systems, Wi-Fi, and premium seating depending on the airline.",
      "Dubai Airport offers luxury lounges, duty-free shopping, gourmet dining, and premium transport services.",
      "Visa-on-arrival and e-visa services available for eligible travelers.",
    ],
    checkin: `Online check-in for most flights to Dubai opens 48 hours before departure and closes 90 minutes before take-off. Check-in is available via airline websites and mobile apps.`,
    tips: [
      "Book your Dubai flight well in advance to find affordable deals.",
      "Consider flying on weekdays to avoid peak weekend prices.",
      "Check nearby airports like Abu Dhabi for alternate routes and better fares.",
      "Subscribe to 24X7's newsletter for exclusive offers on flights to Dubai.",
    ],
  },
  Dallas: {
    title: "Flights to Dallas Reservations with 24X7",
    about: `Dallas, located in Texas, USA, is a major business and cultural hub. Dallas/Fort Worth International Airport (DFW) is among the largest and busiest airports in the United States, serving both domestic and international flights.`,
    amenities: [
      "Frequent flights from major cities across the US and abroad.",
      "Various travel classes available: Economy, Business, and First Class.",
      "Airlines provide meals, entertainment, and Wi-Fi on select flights.",
      "DFW Airport includes lounges, shopping, dining, and business services.",
      "Ground transport includes rental cars, shuttles, and Dallas Area Rapid Transit (DART).",
    ],
    checkin: `Online check-in for Dallas-bound flights opens 24 hours prior to departure. You can check in through your airline’s website or mobile app.`,
    tips: [
      "Book in advance to avoid last-minute fare surges.",
      "Avoid travel during major events or holidays to find cheaper flights.",
      "Subscribe to 24X7 alerts for Dallas flight deals.",
      "Look at alternate airports nearby like Dallas Love Field (DAL) if you're flexible.",
    ],
  },
  Boston: {
    title: "Flights to Boston Reservations with 24X7",
    about: `Boston, Massachusetts, is one of the oldest cities in the U.S. and a major hub for education, technology, and finance. Logan International Airport (BOS) serves domestic and international routes efficiently.`,
    amenities: [
      "Multiple flight options from U.S., Europe, and Canada.",
      "Airlines offer onboard meals, Wi-Fi, and inflight entertainment.",
      "Logan Airport offers lounges, local food, and smooth transit connections.",
      "Ground transport includes the MBTA Silver Line, taxis, and ride-shares.",
    ],
    checkin: `Online check-in starts 24 hours before departure. Available via airline websites and apps.`,
    tips: [
      "Avoid peak times like college move-in weekends and sports finals.",
      "Use alternate airports like Providence or Manchester if you're flexible.",
      "Watch for seasonal deals to Boston on 24X7.",
      "Book red-eye or early morning flights for cheaper prices.",
    ],
  },

  Bangkok: {
    title: "Flights to Bangkok Reservations with 24X7",
    about: `Bangkok, the capital of Thailand, is a top travel destination in Asia known for its temples, street food, and nightlife. Suvarnabhumi Airport (BKK) serves as the primary international gateway.`,
    amenities: [
      "Direct and connecting flights from global cities with multiple travel class options.",
      "Long-haul flights offer entertainment, meals, and Wi-Fi onboard.",
      "BKK Airport includes luxury lounges, local shopping, and quick immigration processes.",
      "Airport Rail Link and taxis provide transport to city areas.",
    ],
    checkin: `Most airlines allow online check-in 24 to 48 hours before departure. Use airline apps or websites for seat selection and boarding pass.`,
    tips: [
      "Travel in the shoulder season for lower fares (May-June, Sept-Oct).",
      "Use 24X7 to compare flights from multiple Asian hubs.",
      "Check for Thai visa requirements based on nationality.",
      "Book flights in advance for festivals like Songkran or Loy Krathong.",
    ],
  },

  Atlanta: {
    title: "Flights to Atlanta Reservations with 24X7",
    about: `Atlanta, Georgia, is a key transportation hub in the southeastern United States. Hartsfield-Jackson Atlanta International Airport (ATL) is the busiest airport in the world by passenger numbers.`,
    amenities: [
      "Frequent domestic and international flights with Economy, Premium, and Business Class options.",
      "In-flight entertainment, meals, and Wi-Fi available on most routes.",
      "ATL Airport features multiple terminals with dining, lounges, and shopping areas.",
      "Well-connected by MARTA trains, taxis, and car rentals from the airport.",
    ],
    checkin: `Online check-in opens 24 hours before departure. Passengers can check in via airline apps or websites.`,
    tips: [
      "Book early, especially around conferences and events in Atlanta.",
      "Consider flexible dates to save on fares.",
      "Check both major and low-cost carriers for domestic connections.",
      "Use 24X7 alerts to track Atlanta flight deals.",
    ],
  },
  Amsterdam: {
    title: "Flights to Amsterdam Reservations with 24X7",
    about: `Amsterdam, the capital of the Netherlands, is known for its canals, historic buildings, and vibrant culture. Schiphol Airport (AMS) is one of the largest and busiest airports in Europe, connecting major cities across the world.`,
    amenities: [
      "Direct flights from major global hubs with Economy, Business, and First Class options.",
      "Onboard meals, entertainment systems, and Wi-Fi available on international carriers.",
      "Schiphol Airport offers shopping, lounges, art exhibits, and efficient transport links.",
      "Accessible public transport including trains and buses from the airport to city center.",
    ],
    checkin: `Online check-in opens 24 to 48 hours before departure depending on the airline. Use airline websites or mobile apps for check-in.`,
    tips: [
      "Fly midweek for better rates.",
      "Check budget airlines operating in and out of Amsterdam.",
      "Plan early during tulip season or festivals as flights sell out quickly.",
      "Subscribe to 24X7 for Europe flight deals.",
    ],
  },
};

function AirlineDetail() {
  const { name } = useParams();
  const details = airlineDetails[name];

  if (!details) {
    return (
      <div className="max-w-2xl mx-auto py-10">
        <p className="text-xl font-semibold  text-red-600">{name} Details</p>
        <p>Details for this airline are not available yet.</p>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen py-10 px-4 max-w-5xl mx-auto text-x leading-6 space-y-4">
      <p className="text-xl  text-center font-bold text-red-500">
        {details.title}
      </p>

      <div>
        <p>
          <strong className="text-red-500">About {name}:</strong>
        </p>
        <p>{details.about}</p>
      </div>

      <div>
        <p>
          <strong className="text-red-500">In-flight Amenities:</strong>
        </p>
        <ul className="list-disc list-inside space-y-1">
          {details.amenities.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>

      <div>
        <p>
          <strong className="text-red-500">Online Check-in Info:</strong>
        </p>
        <p>{details.checkin}</p>
      </div>

      <div>
        <p>
          <strong className="text-red-500">Tips to Save:</strong>
        </p>
        <ul className="list-disc list-inside space-y-1">
          {details.tips.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default AirlineDetail;
