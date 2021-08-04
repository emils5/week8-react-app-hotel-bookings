use guests;
db.dropDatabase();

db.bookings.insertMany([
    {
        name: "Sarah Johnson",
        email:"sarah.j@codeclan.com",
        status:"checked-in"
    },
    {
        name: "Alex Brown",
        email:"alex@gmail.com",
        status:"booked"
    },    
    {
        name: "Joe Swash",
        email:"swashbuckle@gmail.com",
        checkedin:"booked"
    },
])

