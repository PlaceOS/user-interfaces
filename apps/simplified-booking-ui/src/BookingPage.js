import React, { useState } from "react";
import "./BookingPage.css";
import accelerate from "./assets/accelerate.jpeg";
import s1 from "./assets/S1 Meeting room.jpeg";
import s2 from "./assets/S2 Meeeting room.jpeg";
import collaborate from "./assets/collaborate.jpeg";
import logoPlaceOs from "./assets/KJTech.png";
import logoDff from "./assets/dff_logo.png";
import SearchFilter from "./components/searchFilters";
import RoomCard from "./components/RoomCard";
import NewBookingModal from "./components/NewBookingModal";
import BookingSuccessModal from "./components/BookingSuccessModal";
import FilterModal from "./components/FilterModal";

function BookingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [lastBooking, setLastBooking] = useState(null);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filters, setFilters] = useState({
    date: "",
    time: "",
    roomSize: "",
    onlyFavourites: false,
    meetingRoom: false,
    // collaborateRoom: false,
    // sRoom: false,
    // accelerateRoom: false,
    floor: "",
  });
  const [searchQuery, setSearchQuery] = useState("");

  const roomsData = [
    {
      id: 1,
      name: "S1",
      location: "DFA",
      capacity: 2,
      favourite: false,
      imageUrl: s1,
      availability: [
        { date: "2025-03-01", times: ["08:00", "09:00", "10:00"] },
        { date: "2025-03-02", times: ["09:00", "10:00", "11:00"] },
      ],
      booked: false,
    },
    {
      id: 2,
      name: "S2",
      location: "DFA",
      capacity: 4,
      favourite: false,
      imageUrl: s2,
      availability: [
        { date: "2025-03-11", times: ["12:00", "13:00", "14:00"] },
        { date: "2025-03-03", times: ["08:00", "09:00", "10:00"] },
      ],
      booked: false,
    },
    {
      id: 3,
      name: "Accelerate",
      location: "DFA",
      capacity: 9,
      favourite: false,
      availability: [
        { date: "2025-03-02", times: ["08:00", "09:00", "10:00", "11:00"] },
        { date: "2025-03-04", times: ["14:00", "15:00", "16:00"] },
      ],
      imageUrl: accelerate,
      booked: false,
    },
    {
      id: 4,
      name: "Collaborate",
      location: "DFA",
      capacity: 6,
      favourite: false,
      availability: [
        { date: "2025-03-01", times: ["08:00", "09:00"] },
        { date: "2025-03-05", times: ["10:00", "11:00"] },
      ],
      imageUrl: collaborate,
      booked: false,
    },
    {
      id: 5,
      name: "Collaborate",
      location: "Area 2071",
      capacity: 6,
      favourite: false,
      availability: [
        { date: "2025-03-03", times: ["13:00", "14:00"] },
        { date: "2025-03-06", times: ["08:00", "09:00"] },
      ],
      imageUrl: collaborate,
      booked: false,
    },
  ];

  const [rooms, setRooms] = useState(roomsData);

  const floors = [
    ...new Set(
      rooms
        .map((room) => room.location)
        .filter((location) => location !== undefined)
    ),
  ];

  const handleToggleFavorite = (roomId) => {
    setRooms((prevRooms) =>
      prevRooms.map((room) =>
        room.id === roomId ? { ...room, favourite: !room.favourite } : room
      )
    );
  };

  const filteredRooms = rooms.filter((room) => {
    if (
      searchQuery &&
      !room.name.toLowerCase().includes(searchQuery.toLowerCase())
    ) {
      return false;
    }

    if (filters.date) {
      const availForDate = room.availability.find(
        (avail) => avail.date === filters.date
      );
      if (!availForDate) return false;
      if (filters.time && !availForDate.times.includes(filters.time)) {
        return false;
      }
    } else if (filters.time) {
      if (
        !room.availability.some((avail) => avail.times.includes(filters.time))
      ) {
        return false;
      }
    }

    if (filters.roomSize && room.capacity < parseInt(filters.roomSize, 10)) {
      return false;
    }

    if (filters.onlyFavourites && !room.favourite) {
      return false;
    }

    if (filters.floor && room.location !== filters.floor) {
      return false;
    }

    if (filters.sRoom || filters.collaborateRoom || filters.accelerateRoom) {
      let facilityMatch = false;
      if (filters.sRoom && ["s1", "s2"].includes(room.name.toLowerCase())) {
        facilityMatch = true;
      }
      if (
        filters.collaborateRoom &&
        room.name.toLowerCase() === "collaborate"
      ) {
        facilityMatch = true;
      }
      if (filters.accelerateRoom && room.name.toLowerCase() === "accelerate") {
        facilityMatch = true;
      }
      if (!facilityMatch) {
        return false;
      }
    }

    return true;
  });

  const handleBookClick = (roomId) => {
    console.log("Booking room with ID:", roomId);
    setIsModalOpen(true);
  };

  const handleSaveBooking = (newBooking) => {
    console.log("New Booking:", newBooking);
    setLastBooking(newBooking);
    setIsModalOpen(false);
    setIsSuccessOpen(true);
  };

  const handleCloseSuccess = () => {
    setIsSuccessOpen(false);
  };

  const handleFilterClick = () => {
    setIsFilterOpen(true);
  };

  const handleFilterChange = (newFilters) => {
    setFilters((prevFilters) => ({ ...prevFilters, ...newFilters }));
  };

  return (
    <div className="booking-page">
      <header className="booking-header">
        <div className="header-left">
          <img
            src={logoDff}
            alt="Left Logo"
            className="left-logo"
            width={"200px"}
          />
        </div>
        <div className="header-right">
          <img
            src={logoPlaceOs}
            alt="Right Logo"
            className="right-logo"
            width={"100px"}
          />
        </div>
      </header>

      <div className="content-area">
        <SearchFilter
          searchQuery={searchQuery}
          onSearchChange={(e) => setSearchQuery(e.target.value)}
          handleFilterClick={handleFilterClick}
          onFilterChange={handleFilterChange}
        />

        {filteredRooms.map((room) => (
          <RoomCard
            key={room.id}
            room={room}
            onBook={() => handleBookClick(room.id)}
            onToggleFavorite={handleToggleFavorite}
          />
        ))}
      </div>

      <NewBookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSaveBooking}
      />

      <BookingSuccessModal
        isOpen={isSuccessOpen}
        onClose={handleCloseSuccess}
        bookingDetails={lastBooking}
      />

      <FilterModal
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
        onSave={handleFilterChange}
        defaultValues={filters}
        floors={floors}
      />
    </div>
  );
}

export default BookingPage;
