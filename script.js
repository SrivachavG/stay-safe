// script.js

// Mock Data - 20 Diverse Properties with Valid Thumbnails
const MOCK_PROPERTIES = [
    {
        id: "p1",
        name: "Luxe Co-living Hub",
        type: "Co-living",
        price: 12000,
        currency: "₹",
        location: "Koramangala, Bangalore",
        rating: 4.8,
        reviews: 124,
        amenities: ["WiFi", "AC", "Food", "Gym"],
        images: ["https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80"],
        verified: true,
        highDemand: true,
        roomsLeft: 2,
        description: "Premium co-living space designed for young professionals."
    },
    {
        id: "p2",
        name: "Serene Girls PG",
        type: "Girls PG",
        price: 8500,
        currency: "₹",
        location: "HSR Layout, Bangalore",
        rating: 4.5,
        reviews: 89,
        amenities: ["WiFi", "Food", "Washing Machine"],
        images: ["https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800&q=80"],
        verified: true,
        highDemand: false,
        roomsLeft: 5,
        description: "Safe and secure PG for girls with home-cooked meals."
    },
    {
        id: "p3",
        name: "Urban Boys Hostel",
        type: "Boys Hostel",
        price: 7000,
        currency: "₹",
        location: "Andheri West, Mumbai",
        rating: 4.2,
        reviews: 56,
        amenities: ["WiFi", "TV Area"],
        images: ["https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&q=80"],
        verified: false,
        highDemand: false,
        roomsLeft: 8,
        description: "Affordable stay with great connectivity."
    },
    {
        id: "p4",
        name: "Elite Executive Stay",
        type: "Co-living",
        price: 18000,
        currency: "₹",
        location: "Gachibowli, Hyderabad",
        rating: 4.9,
        reviews: 210,
        amenities: ["WiFi", "AC", "Food", "Gym", "Pool"],
        images: ["https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800&q=80"],
        verified: true,
        highDemand: true,
        roomsLeft: 1,
        description: "High-end executive accommodation with resort-like amenities."
    },
    {
        id: "p5",
        name: "Cozy Campus PG",
        type: "Boys PG",
        price: 6000,
        currency: "₹",
        location: "North Campus, Delhi",
        rating: 4.0,
        reviews: 42,
        amenities: ["WiFi", "Food"],
        images: ["https://images.unsplash.com/photo-1502672260266-1c1e525044c7?w=800&q=80"],
        verified: true,
        highDemand: false,
        roomsLeft: 12,
        description: "Budget friendly student accommodation."
    },
    {
        id: "p6",
        name: "Zenith Girls Hostel",
        type: "Girls Hostel",
        price: 9500,
        currency: "₹",
        location: "Viman Nagar, Pune",
        rating: 4.7,
        reviews: 145,
        amenities: ["WiFi", "AC", "Food", "Washing Machine"],
        images: ["https://images.unsplash.com/photo-1554995207-c18c203602cb?w=800&q=80"],
        verified: true,
        highDemand: true,
        roomsLeft: 3,
        description: "Modern facility offering a safe, vibrant community."
    },
    {
        id: "p7",
        name: "The Grand Estate Co-living",
        type: "Co-living",
        price: 22000,
        currency: "₹",
        location: "Indiranagar, Bangalore",
        rating: 4.9,
        reviews: 320,
        amenities: ["WiFi", "AC", "Gym", "Pool"],
        images: ["https://images.unsplash.com/photo-1595526114101-11b01dfc6e39?w=800&q=80"],
        verified: true,
        highDemand: true,
        roomsLeft: 2,
        description: "Luxury co-living experience with high-end architecture."
    },
    {
        id: "p8",
        name: "Metro Central PG",
        type: "Boys PG",
        price: 8000,
        currency: "₹",
        location: "Rajiv Chowk, Delhi",
        rating: 4.1,
        reviews: 67,
        amenities: ["WiFi", "AC", "Washing Machine"],
        images: ["https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=800&q=80"],
        verified: false,
        highDemand: false,
        roomsLeft: 4,
        description: "Centrally located PG for working men."
    },
    {
        id: "p9",
        name: "Heritage Homes",
        type: "Girls PG",
        price: 9000,
        currency: "₹",
        location: "Anna Nagar, Chennai",
        rating: 4.6,
        reviews: 112,
        amenities: ["WiFi", "Food", "AC"],
        images: ["https://images.unsplash.com/photo-1481277542470-605612bd2d61?w=800&q=80"],
        verified: true,
        highDemand: false,
        roomsLeft: 6,
        description: "Classic architecture with modern internal amenities."
    },
    {
        id: "p10",
        name: "Tech-Park Suites",
        type: "Co-living",
        price: 15000,
        currency: "₹",
        location: "Electronic City, Bangalore",
        rating: 4.4,
        reviews: 156,
        amenities: ["WiFi", "AC", "Gym"],
        images: ["https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"],
        verified: true,
        highDemand: true,
        roomsLeft: 1,
        description: "Perfect for IT professionals looking to walk to work."
    },
    {
        id: "p11",
        name: "Ocean View PG",
        type: "Boys PG",
        price: 11000,
        currency: "₹",
        location: "Bandra West, Mumbai",
        rating: 4.8,
        reviews: 95,
        amenities: ["WiFi", "AC", "Food"],
        images: ["https://images.unsplash.com/photo-1502672023488-70e25813eb80?w=800&q=80"],
        verified: true,
        highDemand: true,
        roomsLeft: 3,
        description: "Premium stays with stunning sea views."
    },
    {
        id: "p12",
        name: "Pine Tree Residency",
        type: "Girls PG",
        price: 7500,
        currency: "₹",
        location: "Salt Lake, Kolkata",
        rating: 4.3,
        reviews: 82,
        amenities: ["WiFi", "Washing Machine"],
        images: ["https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80"],
        verified: false,
        highDemand: false,
        roomsLeft: 10,
        description: "Quiet, residential PG with lush green surroundings."
    },
    {
        id: "p13",
        name: "Studio 24 Co-living",
        type: "Co-living",
        price: 14000,
        currency: "₹",
        location: "Hinjewadi, Pune",
        rating: 4.5,
        reviews: 204,
        amenities: ["WiFi", "AC", "Food", "Gym"],
        images: ["https://images.unsplash.com/photo-1524813686514-a57563d77965?w=800&q=80"],
        verified: true,
        highDemand: false,
        roomsLeft: 7,
        description: "Modern, chic studio apartments for individuals or couples."
    },
    {
        id: "p14",
        name: "The Scholar House",
        type: "Boys Hostel",
        price: 5500,
        currency: "₹",
        location: "Jayanagar, Bangalore",
        rating: 4.0,
        reviews: 140,
        amenities: ["WiFi", "Food"],
        images: ["https://images.unsplash.com/photo-1499955085172-a104c9463ece?w=800&q=80"],
        verified: true,
        highDemand: false,
        roomsLeft: 15,
        description: "Affordable basic lodging for university students."
    },
    {
        id: "p15",
        name: "Silver Oak Hostel",
        type: "Girls Hostel",
        price: 6800,
        currency: "₹",
        location: "Kothrud, Pune",
        rating: 4.2,
        reviews: 65,
        amenities: ["WiFi", "Food", "TV Area"],
        images: ["https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800&q=80"],
        verified: false,
        highDemand: false,
        roomsLeft: 8,
        description: "Classic architecture meeting college dorm convenience."
    },
    {
        id: "p16",
        name: "Crescent Luxury Living",
        type: "Co-living",
        price: 26000,
        currency: "₹",
        location: "Jubilee Hills, Hyderabad",
        rating: 5.0,
        reviews: 430,
        amenities: ["WiFi", "AC", "Food", "Gym", "Pool"],
        images: ["https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80"],
        verified: true,
        highDemand: true,
        roomsLeft: 1,
        description: "The pinnacle of high-end shared living."
    },
    {
        id: "p17",
        name: "Garden View PG",
        type: "Girls PG",
        price: 9200,
        currency: "₹",
        location: "Sector 14, Gurgaon",
        rating: 4.6,
        reviews: 190,
        amenities: ["WiFi", "AC", "Food"],
        images: ["https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80"],
        verified: true,
        highDemand: true,
        roomsLeft: 2,
        description: "A tranquil escape right in the middle of corporate Gurgaon."
    },
    {
        id: "p18",
        name: "The Classic Stay",
        type: "Boys PG",
        price: 10500,
        currency: "₹",
        location: "Aundh, Pune",
        rating: 4.7,
        reviews: 130,
        amenities: ["WiFi", "AC", "Washing Machine"],
        images: ["https://images.unsplash.com/photo-1486304873000-235643847519?w=800&q=80"],
        verified: true,
        highDemand: false,
        roomsLeft: 4,
        description: "Fully furnished flats with timeless interior decor."
    },
    {
        id: "p19",
        name: "Aura Premium",
        type: "Co-living",
        price: 16500,
        currency: "₹",
        location: "Whitefield, Bangalore",
        rating: 4.8,
        reviews: 215,
        amenities: ["WiFi", "AC", "Gym"],
        images: ["https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80"],
        verified: true,
        highDemand: true,
        roomsLeft: 3,
        description: "Sleek, minimalist co-living built for focus and networking."
    },
    {
        id: "p20",
        name: "Downtown Hostel",
        type: "Boys Hostel",
        price: 6500,
        currency: "₹",
        location: "Navrangpura, Ahmedabad",
        rating: 4.1,
        reviews: 75,
        amenities: ["WiFi", "Food"],
        images: ["https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=800&q=80"],
        verified: false,
        highDemand: false,
        roomsLeft: 12,
        description: "Right in the heart of the educational hub of Ahmedabad."
    }
];

// Force LocalStorage Update since we changed seed data
localStorage.setItem('1268_properties', JSON.stringify(MOCK_PROPERTIES));

// Initialize System Data (for other objects if not present)
function initSystem() {
    if (!localStorage.getItem('1268_users')) {
        localStorage.setItem('1268_users', JSON.stringify({
            current: { name: "Alice Explorer", role: "user", email: "alice@example.com" }
        }));
    }
    if (!localStorage.getItem('1268_transactions')) {
        localStorage.setItem('1268_transactions', JSON.stringify([]));
    }
    if (!localStorage.getItem('1268_saved')) {
        localStorage.setItem('1268_saved', JSON.stringify([]));
    }
}

// Globals UI Utilities
function showToast(message, type = 'success') {
    let container = document.querySelector('.toast-container');
    if (!container) {
        container = document.createElement('div');
        container.className = 'toast-container';
        document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
        
    toast.innerHTML = `<span style="color: ${type === 'success' ? '#fff' : '#fff'}"></span> <div>${message}</div>`;
    
    container.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateX(100%)';
        toast.style.transition = 'all 0.3s ease';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

function formatCurrency(amount) {
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumSignificantDigits: 3 }).format(amount);
}

function setupNavbarVisibility() {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

    const toggle = document.querySelector('.mobile-toggle');
    const links = document.querySelector('.nav-links');
    if(toggle && links) {
        toggle.addEventListener('click', () => {
            links.classList.toggle('active');
        });
    }
}

// Data fetching helper
function getProperties() {
    return JSON.parse(localStorage.getItem('1268_properties')) || [];
}

function getPropertyById(id) {
    const props = getProperties();
    return props.find(p => p.id === id);
}

// Ensure init on script load
document.addEventListener('DOMContentLoaded', () => {
    initSystem();
    setupNavbarVisibility();
    console.log("STAY SAFE core loaded.");
});
