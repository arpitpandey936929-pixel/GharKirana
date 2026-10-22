// Paste Google Gemini API Key if available (or leave empty for built-in smart AI fallback)
const GOOGLE_GEMINI_API_KEY = "";

// Multi-Category Stores Database with Top Brands
const STORES = [
    {
        id: 1,
        name: "Gupta General Store",
        phone: "919876543210",
        address: "Shop 4, Block C Market, Sector 14",
        lat: 28.6692,
        lng: 77.4538,
        distance: "0.4 km",
        minOrder: 150,
        deliveryTime: "20-30 min",
        isOpen: true,
        items: [
            // Snacks, Biscuits & Top Brands
            {
                id: 101,
                name: "Parle-G Gold Glucose Biscuits",
                brand: "Parle",
                category: "Snacks & Biscuits",
                unit: "1 kg Mega Pack",
                price: 90,
                shelfLife: "6 Months",
                stock: "In Stock",
                description: "Classic crunchy glucose biscuit loaded with wheat and milk energy.",
                image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=500&auto=format&fit=crop&q=60",
                reviews: [{ name: "Suresh P.", rating: 5, comment: "Daily morning tea biscuit." }]
            },
            {
                id: 102,
                name: "Britannia Good Day Butter Cookies",
                brand: "Britannia",
                category: "Snacks & Biscuits",
                unit: "600 g Value Pack",
                price: 130,
                shelfLife: "6 Months",
                stock: "In Stock",
                description: "Rich buttery and crunchy cookies with golden bake.",
                image: "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?w=500&auto=format&fit=crop&q=60",
                reviews: [{ name: "Neha G.", rating: 5, comment: "Kids love this with warm milk." }]
            },
            {
                id: 103,
                name: "Haldiram's Nagpur Bhujia Sev",
                brand: "Haldiram",
                category: "Snacks & Biscuits",
                unit: "400 g",
                price: 110,
                shelfLife: "5 Months",
                stock: "In Stock",
                description: "Crispy fried chickpea strands with authentic spices.",
                image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=500&auto=format&fit=crop&q=60",
                reviews: [{ name: "Vikram R.", rating: 5, comment: "Super crispy and spicy!" }]
            },
            {
                id: 104,
                name: "Haldiram's Aloo Bhujia Namkeen",
                brand: "Haldiram",
                category: "Snacks & Biscuits",
                unit: "400 g",
                price: 115,
                shelfLife: "5 Months",
                stock: "In Stock",
                description: "Spicy potato noodle snack with mint and dry mango powder.",
                image: "https://images.unsplash.com/photo-1621447504864-d8686e12698c?w=500&auto=format&fit=crop&q=60",
                reviews: [{ name: "Pooja S.", rating: 4, comment: "Great tea-time companion." }]
            },
            {
                id: 105,
                name: "Lay's India's Magic Masala Chips",
                brand: "Lay's",
                category: "Snacks & Biscuits",
                unit: "90 g Party Pack",
                price: 40,
                shelfLife: "4 Months",
                stock: "In Stock",
                description: "Crispy potato chips with a zesty Indian spice blend.",
                image: "https://images.unsplash.com/photo-1566478989037-eec170784d0b?w=500&auto=format&fit=crop&q=60",
                reviews: [{ name: "Rohit K.", rating: 5, comment: "Favorite masala chips." }]
            },

            // Beverages
            {
                id: 106,
                name: "Coca-Cola Original Taste",
                brand: "Coca-Cola",
                category: "Cold Drinks & Beverages",
                unit: "750 ml Bottle",
                price: 45,
                shelfLife: "6 Months",
                stock: "In Stock",
                description: "Refreshing carbonated soft drink served chilled.",
                image: "https://images.unsplash.com/photo-1554866585-cd94860890b7?w=500&auto=format&fit=crop&q=60",
                reviews: [{ name: "Amit B.", rating: 5, comment: "Delivered chilled!" }]
            },
            {
                id: 107,
                name: "Thums Up Charged Cola",
                brand: "Thums Up",
                category: "Cold Drinks & Beverages",
                unit: "750 ml Bottle",
                price: 45,
                shelfLife: "6 Months",
                stock: "In Stock",
                description: "Strong carbonated cola taste with real punch.",
                image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=500&auto=format&fit=crop&q=60",
                reviews: [{ name: "Gopal M.", rating: 5, comment: "Real strong punch." }]
            },
            {
                id: 108,
                name: "Wagh Bakri Premium CTC Leaf Tea",
                brand: "Wagh Bakri",
                category: "Cold Drinks & Beverages",
                unit: "500 g",
                price: 260,
                shelfLife: "12 Months",
                stock: "In Stock",
                description: "High-grown Assam tea grains delivering strong color and aroma.",
                image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=500&auto=format&fit=crop&q=60",
                reviews: [{ name: "Ramesh V.", rating: 5, comment: "Kadak chai." }]
            },

            // Personal Care
            {
                id: 109,
                name: "Dettol Original Germ Protection Soap",
                brand: "Dettol",
                category: "Beauty & Personal Care",
                unit: "Pack of 4 (125g each)",
                price: 210,
                shelfLife: "24 Months",
                stock: "In Stock",
                description: "Antibacterial bath soap with iconic pine fragrance.",
                image: "https://images.unsplash.com/photo-1607006314358-005663738596?w=500&auto=format&fit=crop&q=60",
                reviews: [{ name: "Anil K.", rating: 5, comment: "Best hygiene soap." }]
            },
            {
                id: 110,
                name: "Dove Cream Beauty Bathing Bar",
                brand: "Dove",
                category: "Beauty & Personal Care",
                unit: "Pack of 3 (100g each)",
                price: 195,
                shelfLife: "24 Months",
                stock: "In Stock",
                description: "With 1/4th moisturizing cream for soft and glowing skin.",
                image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=500&auto=format&fit=crop&q=60",
                reviews: [{ name: "Meena R.", rating: 5, comment: "Doesn't dry out skin." }]
            },
            {
                id: 111,
                name: "Himalaya Purifying Neem Face Wash",
                brand: "Himalaya",
                category: "Beauty & Personal Care",
                unit: "150 ml Tube",
                price: 180,
                shelfLife: "24 Months",
                stock: "In Stock",
                description: "Herbal soap-free face cleanser to prevent pimples.",
                image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=500&auto=format&fit=crop&q=60",
                reviews: [{ name: "Pooja V.", rating: 5, comment: "Very gentle." }]
            },
            {
                id: 112,
                name: "Head & Shoulders Cool Menthol Shampoo",
                brand: "Head & Shoulders",
                category: "Beauty & Personal Care",
                unit: "340 ml Bottle",
                price: 310,
                shelfLife: "24 Months",
                stock: "In Stock",
                description: "Scalp soothing formula with cooling menthol.",
                image: "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?w=500&auto=format&fit=crop&q=60",
                reviews: [{ name: "Rahul M.", rating: 5, comment: "Removes dandruff." }]
            },

            // Cleaning
            {
                id: 113,
                name: "Surf Excel Easy Wash Detergent Powder",
                brand: "Surf Excel",
                category: "Cleaning & Laundry",
                unit: "1 kg Pack",
                price: 135,
                shelfLife: "24 Months",
                stock: "In Stock",
                description: "Superior stain remover for collar and cuff dirt.",
                image: "https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=500&auto=format&fit=crop&q=60",
                reviews: [{ name: "Neelam B.", rating: 5, comment: "Top quality detergent." }]
            },
            {
                id: 114,
                name: "Vim Dishwash Bar with Lemon Fragrance",
                brand: "Vim",
                category: "Cleaning & Laundry",
                unit: "Pack of 3 (135g each)",
                price: 45,
                shelfLife: "24 Months",
                stock: "In Stock",
                description: "Cuts through oily grease on utensils.",
                image: "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=500&auto=format&fit=crop&q=60",
                reviews: [{ name: "Saroj M.", rating: 5, comment: "Sparkling clean." }]
            },
            {
                id: 115,
                name: "Lizol Citrus Disinfectant Floor Cleaner",
                brand: "Lizol",
                category: "Cleaning & Laundry",
                unit: "1 L Bottle",
                price: 199,
                shelfLife: "24 Months",
                stock: "In Stock",
                description: "Kills 99.9% germs with citrus freshness.",
                image: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=500&auto=format&fit=crop&q=60",
                reviews: [{ name: "Kunal T.", rating: 5, comment: "Must-have cleaner." }]
            },

            // Staples & Ration
            {
                id: 116,
                name: "Aashirvaad Shudh Chakki Atta",
                brand: "Aashirvaad",
                category: "Atta & Flours",
                unit: "10 kg",
                price: 420,
                shelfLife: "3 Months",
                stock: "In Stock",
                description: "100% whole wheat stone-ground atta for fluffy rotis.",
                image: "https://tiimg.tistatic.com/fp/1/007/922/aashirvaad-shudh-chakki-atta-100-pure-and-natural-whole-wheat-0--220.jpg",
                reviews: [{ name: "Pooja S.", rating: 5, comment: "Soft rotis guaranteed." }]
            },
            {
                id: 117,
                name: "Tata Sampann Toor Dal Unpolished",
                brand: "Tata",
                category: "Dals & Rice",
                unit: "1 kg",
                price: 175,
                shelfLife: "12 Months",
                stock: "In Stock",
                description: "High protein unpolished dal directly from farms.",
                image: "https://annachy-prod-assets.annachy.com/pims/products-v1/0306441KG_2.png",
                reviews: [{ name: "Anil K.", rating: 5, comment: "Naturally delicious." }]
            },
            {
                id: 118,
                name: "Fortune Kachi Ghani Mustard Oil",
                brand: "Fortune",
                category: "Oils & Ghee",
                unit: "1 L",
                price: 145,
                shelfLife: "9 Months",
                stock: "In Stock",
                description: "Pungent cold-pressed mustard oil with antioxidants.",
                image: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSrcwyCz5Bk3-HxNmBzuakN2mgiXabZ3aX2PthewwUegWWIkIVTImQIT-1igxIaKuMeonFnBYvdXcizriI",
                reviews: [{ name: "Ramesh V.", rating: 4, comment: "Strong aroma." }]
            },
            {
                id: 119,
                name: "Amul Taaza Toned Milk Pouch",
                brand: "Amul",
                category: "Dairy & Daily",
                unit: "500 ml",
                price: 27,
                shelfLife: "2 Days (Chilled)",
                stock: "In Stock",
                description: "Pasteurised toned milk with 3.0% Fat.",
                image: "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcSBJIJvZtcwvyQCyc2uOzkYzEPF0FfzcyfB-Ii0uxghGMB89gOVyrsI9OMndnNCteGA4K7fsmcJWQz5RmI",
                reviews: [{ name: "Sunita D.", rating: 5, comment: "Delivered cold!" }]
            },
            {
                id: 120,
                name: "Tata Salt Vacuum Evaporated",
                brand: "Tata",
                category: "Spices",
                unit: "1 kg",
                price: 28,
                shelfLife: "24 Months",
                stock: "In Stock",
                description: "Desh ka namak with consistent iodine.",
                image: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQs1xh3cz3EaxoP4pgokQdbb8B9LllGLuw06C96_9wtkdeOeFNWw5X2LEr4vck--tKHIo3uNnqcv7w7bFs",
                reviews: [{ name: "Kavita S.", rating: 5, comment: "Standard staple." }]
            }
        ]
    }
];

// App State
let selectedStoreId = 1;
let cart = {};
let currentCategory = "all";
let searchQuery = "";
let currentSort = "default";
let appliedCouponDiscount = 0;
let appliedCouponCode = "";
let currentDetailItemId = null;
let map = null;
let trackerMap = null;
let riderMarker = null;

// Auth & Persistence
let currentUser = JSON.parse(localStorage.getItem("ghar_current_user")) || null;
let allUsers = JSON.parse(localStorage.getItem("ghar_registered_users")) || [];
let orderHistory = JSON.parse(localStorage.getItem("ghar_orders_history")) || [];

// Speech Recognitions
let catalogRecognition = null;
let aiRecognition = null;

// Initialize
document.addEventListener("DOMContentLoaded", () => {
    populateStoreDropdown();
    updateAuthUI();
    renderProducts();
    setupCatalogVoiceRecognition();
    setupAIVoiceRecognition();
    updateCartUI();
});

// Bottom Dock Navigation Switcher
function navigateToPage(pageId, element = null) {
    document.querySelectorAll('.app-page').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.dock-item').forEach(btn => btn.classList.remove('active'));

    const target = document.getElementById(pageId);
    if (target) target.classList.add('active');

    if (element) {
        element.classList.add('active');
    } else {
        // Sync dock button if called from other interactions
        document.querySelectorAll('.dock-item').forEach(btn => {
            if (btn.getAttribute('onclick') && btn.getAttribute('onclick').includes(pageId)) {
                btn.classList.add('active');
            }
        });
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Brand Filter on Directory
function filterByBrand(brandName) {
    navigateToPage('store-page');
    searchQuery = brandName.toLowerCase();
    document.getElementById('search-input').value = brandName;
    renderProducts();
}

function searchFromDirectory(term) {
    navigateToPage('store-page');
    searchQuery = term.toLowerCase();
    document.getElementById('search-input').value = term;
    renderProducts();
}

// Coupon Voucher Apply
function applyCoupon(code, discount) {
    appliedCouponCode = code;
    appliedCouponDiscount = discount;
    updateCartUI();
    alert(`🎉 Coupon "${code}" Applied Successfully! You saved ₹${discount}`);
    toggleCart();
}

// Scratch Card Simulation
function revealScratchCard() {
    const box = document.getElementById('scratch-box');
    box.style.background = '#16a34a';
    box.innerHTML = '🎉 You Won ₹25 Cashback on next UPI order!';
}

// Khata Payment Simulation
function settleKhataPayment() {
    alert("Redirecting to UPI payment portal to settle pending ₹450.00...");
    document.getElementById('khata-due-amount').innerText = "₹0.00";
    document.getElementById('khata-due-amount').style.color = "#16a34a";
    const list = document.getElementById('khata-transactions');
    list.innerHTML = `
    <div class="khata-row">
      <div><strong>Full Settlement Payment</strong><br><small class="sub-text">Paid via UPI (Success)</small></div>
      <span style="color:#16a34a; font-weight:700;">-₹450 Paid</span>
    </div>
  ` + list.innerHTML;
}

// Subscription Toggle
function toggleSubscription(id) {
    const btn = document.getElementById(`sub-btn-${id}`);
    if (btn.innerText.includes('Active')) {
        btn.innerText = 'Paused';
        btn.className = 'btn btn-secondary';
        alert('Subscription Paused for this item.');
    } else {
        btn.innerText = 'Active (Pause)';
        btn.className = 'btn btn-primary';
        alert('Subscription Activated! Will deliver tomorrow 6:30 AM.');
    }
}

// Parchi Handwritten Slip Processor
function processParchiList() {
    const text = document.getElementById('parchi-input').value.toLowerCase();
    if (!text.trim()) {
        alert('Please enter or paste your list items first.');
        return;
    }

    const store = STORES.find(s => s.id === selectedStoreId);
    const matched = [];

    store.items.forEach(item => {
        const itemName = item.name.toLowerCase();
        if (text.includes(item.category.toLowerCase()) || itemName.split(' ').some(w => w.length > 2 && text.includes(w))) {
            addToCart(item.id);
            matched.push(item.name);
        }
    });

    if (matched.length > 0) {
        alert(`Success! Added ${matched.length} items from your parchi into cart:\n- ${matched.join('\n- ')}`);
        toggleCart();
    } else {
        store.items.slice(0, 3).forEach(i => addToCart(i.id));
        alert('Processed your list and matched closest household staples in basket!');
        toggleCart();
    }
}

// Dropdown Sync
function populateStoreDropdown() {
    const select = document.getElementById("store-select");
    select.innerHTML = STORES.map(store =>
        `<option value="${store.id}" ${store.id === selectedStoreId ? "selected" : ""}>${store.name} (${store.distance})</option>`
    ).join("");
}

function changeStore(storeId = null) {
    if (storeId) {
        selectedStoreId = storeId;
        document.getElementById("store-select").value = storeId;
    } else {
        selectedStoreId = Number(document.getElementById("store-select").value);
    }

    const store = STORES.find(s => s.id === selectedStoreId);
    document.getElementById("current-store-name").innerText = store.name;
    document.getElementById("current-store-address").innerText = `${store.address} (${store.distance} away)`;
    document.getElementById("current-store-status").innerText = `${store.isOpen ? "Open" : "Closed"} • ${store.deliveryTime}`;
    document.getElementById("current-store-min").innerText = `Min Order: ₹${store.minOrder}`;

    cart = {};
    appliedCouponDiscount = 0;
    appliedCouponCode = "";
    updateCartUI();
    renderProducts();
}

// 1. Catalog Voice Search (Navbar Search)
function setupCatalogVoiceRecognition() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) return;

    catalogRecognition = new SpeechRecognition();
    catalogRecognition.lang = "en-IN";
    catalogRecognition.continuous = false;
    catalogRecognition.interimResults = false;

    catalogRecognition.onstart = () => {
        const micBtn = document.getElementById("voice-search-btn");
        if (micBtn) micBtn.classList.add("listening");
        const input = document.getElementById("search-input");
        if (input) input.placeholder = "Listening... Speak now...";
    };

    catalogRecognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript.trim().replace(/[.,!?]/g, "");
        const searchInput = document.getElementById("search-input");
        if (searchInput) {
            searchInput.value = transcript;
            searchQuery = transcript.toLowerCase();
            renderProducts();
        }
    };

    catalogRecognition.onerror = () => stopCatalogVoiceUI();
    catalogRecognition.onend = () => stopCatalogVoiceUI();
}

function startVoiceSearch() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
        alert("Voice Search requires Google Chrome, Edge, or Brave browser.");
        return;
    }
    if (!catalogRecognition) setupCatalogVoiceRecognition();
    try { catalogRecognition.start(); } catch (err) { catalogRecognition.stop(); }
}

function stopCatalogVoiceUI() {
    const micBtn = document.getElementById("voice-search-btn");
    if (micBtn) micBtn.classList.remove("listening");
    const input = document.getElementById("search-input");
    if (input) input.placeholder = "Search Atta, Dal, Cold Drinks, Chips, Shampoo...";
}

// 2. Google AI Voice Assistant
function setupAIVoiceRecognition() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) return;

    aiRecognition = new SpeechRecognition();
    aiRecognition.lang = "en-IN";
    aiRecognition.continuous = false;
    aiRecognition.interimResults = false;

    aiRecognition.onstart = () => {
        const aiMicBtn = document.getElementById("ai-voice-btn");
        if (aiMicBtn) aiMicBtn.classList.add("listening");
        const input = document.getElementById("ai-user-query");
        if (input) input.placeholder = "Google AI is listening... Bolna shuru kijiye...";
    };

    aiRecognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript.trim().replace(/[.,!?]/g, "");
        const input = document.getElementById("ai-user-query");
        if (input) {
            input.value = transcript;
            sendGoogleAIMessage();
        }
    };

    aiRecognition.onerror = () => stopAIVoiceUI();
    aiRecognition.onend = () => stopAIVoiceUI();
}

function startAIVoiceSearch() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
        alert("AI Voice Assistant requires Google Chrome, Edge, or Brave browser.");
        return;
    }
    if (!aiRecognition) setupAIVoiceRecognition();
    try { aiRecognition.start(); } catch (err) { aiRecognition.stop(); }
}

function stopAIVoiceUI() {
    const aiMicBtn = document.getElementById("ai-voice-btn");
    if (aiMicBtn) aiMicBtn.classList.remove("listening");
    const input = document.getElementById("ai-user-query");
    if (input) input.placeholder = "Type or click mic to speak...";
}

// Search, Sort & Category Filters
function handleSearch() {
    searchQuery = document.getElementById("search-input").value.toLowerCase();
    renderProducts();
}

function handleSort() {
    currentSort = document.getElementById("sort-select").value;
    renderProducts();
}

function filterCategory(cat) {
    currentCategory = cat;
    document.querySelectorAll(".chip").forEach(c => c.classList.remove("active"));
    event.target.classList.add("active");
    renderProducts();
}

function getAvgRating(reviews) {
    if (!reviews || reviews.length === 0) return 5.0;
    const sum = reviews.reduce((acc, r) => acc + Number(r.rating), 0);
    return (sum / reviews.length).toFixed(1);
}

// Render Products Grid
function renderProducts() {
    const store = STORES.find(s => s.id === selectedStoreId);
    const grid = document.getElementById("product-grid");

    let list = store.items.filter(item => {
        const matchCat = currentCategory === "all" || item.category === currentCategory;
        const matchSearch = item.name.toLowerCase().includes(searchQuery) || item.category.toLowerCase().includes(searchQuery);
        return matchCat && matchSearch;
    });

    if (currentSort === "price-low") list.sort((a, b) => a.price - b.price);
    if (currentSort === "price-high") list.sort((a, b) => b.price - a.price);
    if (currentSort === "rating") list.sort((a, b) => getAvgRating(b.reviews) - getAvgRating(a.reviews));

    if (list.length === 0) {
        grid.innerHTML = `<p class="sub-text" style="grid-column: 1/-1; text-align:center; padding: 40px;">No items match your search in this category.</p>`;
        return;
    }

    grid.innerHTML = list.map(item => `
    <div class="product-card" onclick="openDetailModal(${item.id})">
      <div class="product-img-wrap">
        <img src="${item.image}" alt="${item.name}" loading="lazy">
      </div>
      <div>
        <div class="product-title">${item.name}</div>
        <div class="product-unit">${item.unit} • ${item.category}</div>
        <div class="product-rating">⭐ ${getAvgRating(item.reviews)} (${item.reviews.length})</div>
      </div>
      <div class="product-bottom" onclick="event.stopPropagation()">
        <span class="product-price">₹${item.price}</span>
        <button class="btn-add" onclick="addToCart(${item.id})">+ Add</button>
      </div>
    </div>
  `).join("");
}

// Cart & Dynamic Delivery Fee
function addToCart(itemId) {
    const store = STORES.find(s => s.id === selectedStoreId);
    const item = store.items.find(i => i.id === itemId);

    if (cart[itemId]) {
        cart[itemId].qty += 1;
    } else {
        cart[itemId] = { ...item, qty: 1 };
    }
    updateCartUI();
}

function updateQty(itemId, change) {
    if (!cart[itemId]) return;
    cart[itemId].qty += change;
    if (cart[itemId].qty <= 0) delete cart[itemId];
    updateCartUI();
}

function calculateDeliveryFee(subtotal) {
    if (subtotal === 0) return 0;
    if (appliedCouponCode === "FREEDELIVERY") return 0;
    if (subtotal >= 500) return 0;
    if (subtotal >= 200) return 15;
    return 30;
}

function updateCartUI() {
    const cartList = document.getElementById("cart-items");
    const cartKeys = Object.keys(cart);
    let count = 0, subtotal = 0;

    if (cartKeys.length === 0) {
        cartList.innerHTML = `<p class="empty-text">Your basket is empty.</p>`;
    } else {
        cartList.innerHTML = cartKeys.map(key => {
            const item = cart[key];
            count += item.qty;
            subtotal += item.price * item.qty;
            return `
        <div class="cart-row">
          <div>
            <strong>${item.name}</strong><br>
            <small>₹${item.price} x ${item.qty}</small>
          </div>
          <div class="qty-controls">
            <button class="qty-btn" onclick="updateQty(${item.id}, -1)">-</button>
            <span>${item.qty}</span>
            <button class="qty-btn" onclick="updateQty(${item.id}, 1)">+</button>
          </div>
        </div>
      `;
        }).join("");
    }

    const deliveryFee = calculateDeliveryFee(subtotal);
    const grandTotal = Math.max(0, subtotal + deliveryFee - appliedCouponDiscount);

    document.getElementById("cart-count").innerText = count;
    document.getElementById("cart-total-nav").innerText = grandTotal;
    document.getElementById("bill-subtotal").innerText = subtotal;
    document.getElementById("bill-grand-total").innerText = grandTotal;

    const couponRow = document.getElementById("coupon-discount-row");
    if (appliedCouponDiscount > 0) {
        couponRow.style.display = "flex";
        document.getElementById("coupon-name").innerText = appliedCouponCode;
        document.getElementById("coupon-discount-val").innerText = appliedCouponDiscount;
    } else {
        couponRow.style.display = "none";
    }

    const deliveryDisplay = document.getElementById("delivery-fee-display");
    const discountNote = document.getElementById("delivery-discount-note");
    if (deliveryFee === 0 && subtotal > 0) {
        deliveryDisplay.innerHTML = `<span style="color:#16a34a;">FREE (Saved ₹30)</span>`;
        discountNote.innerText = "🎉 Unlocked 100% Free Delivery!";
    } else if (deliveryFee === 15) {
        deliveryDisplay.innerText = "₹15 (Saved ₹15)";
        discountNote.innerText = `Add ₹${500 - subtotal} more for completely FREE delivery!`;
    } else {
        deliveryDisplay.innerText = subtotal > 0 ? "₹30" : "₹0";
        discountNote.innerText = subtotal > 0 ? `Add ₹${200 - subtotal} more for reduced delivery!` : "";
    }

    const progressPercent = Math.min((subtotal / 500) * 100, 100);
    document.getElementById("delivery-progress").style.width = `${progressPercent}%`;
    const thresholdMsg = document.getElementById("delivery-threshold-msg");
    if (subtotal >= 500) {
        thresholdMsg.innerHTML = `🎉 Congratulations! You unlocked <strong>FREE Delivery</strong>`;
    } else {
        thresholdMsg.innerHTML = `🚚 Add items worth <strong>₹${500 - subtotal}</strong> more for <strong>FREE Delivery</strong>`;
    }
}

function toggleCart() {
    document.getElementById("cart-drawer").classList.toggle("open");
}

function toggleAIChat() {
    const widget = document.getElementById("ai-chat-widget");
    widget.classList.toggle("active");
}

// Google AI Live Query Handler
async function sendGoogleAIMessage() {
    const input = document.getElementById("ai-user-query");
    const query = input.value.trim();
    if (!query) return;

    const chatContainer = document.getElementById("ai-chat-messages");
    chatContainer.innerHTML += `<div class="ai-msg user">${query}</div>`;
    input.value = "";
    chatContainer.scrollTop = chatContainer.scrollHeight;

    const thinkingId = "ai-thinking-" + Date.now();
    chatContainer.innerHTML += `<div id="${thinkingId}" class="ai-msg bot">✨ <em>Google AI is analyzing recipe and matching store inventory...</em></div>`;
    chatContainer.scrollTop = chatContainer.scrollHeight;

    const store = STORES.find(s => s.id === selectedStoreId);
    const availableItemNames = store.items.map(i => i.name).join(", ");

    let aiResponseText = "";
    let matchedItemIds = [];

    if (GOOGLE_GEMINI_API_KEY) {
        try {
            const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GOOGLE_GEMINI_API_KEY}`;
            const systemPrompt = `You are a helpful Indian grocery and cooking assistant. The user wants to prepare: "${query}".
Our store has these exact inventory items: [${availableItemNames}].
1. Give a warm 2-line cooking suggestion.
2. Select which items from the inventory list are needed.
3. Keep it brief and friendly in Hinglish.`;

            const response = await fetch(endpoint, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    contents: [{ parts: [{ text: systemPrompt }] }]
                })
            });

            const data = await response.json();
            if (data.candidates && data.candidates[0].content.parts[0].text) {
                aiResponseText = data.candidates[0].content.parts[0].text;
            }
        } catch (err) {
            console.warn("Google API call fallback:", err);
        }
    }

    if (!aiResponseText) {
        const qLower = query.toLowerCase();
        const matched = store.items.filter(item => {
            const name = item.name.toLowerCase();
            const cat = item.category.toLowerCase();
            return qLower.split(" ").some(word => word.length > 2 && (name.includes(word) || cat.includes(word)));
        });

        if (matched.length > 0) {
            aiResponseText = `Zaroor! <strong>${query}</strong> ke liye Google AI ne aapke local store se yeh top matching grocery items nikaale hain:`;
            matchedItemIds = matched.map(i => i.id);
        } else {
            const essentials = store.items.slice(0, 3);
            aiResponseText = `Aapke request <strong>"${query}"</strong> ke liye store ke yeh popular staples aur ingredients best rahenge:`;
            matchedItemIds = essentials.map(i => i.id);
        }
    }

    const thinkingElem = document.getElementById(thinkingId);
    if (thinkingElem) thinkingElem.remove();

    const finalItems = store.items.filter(item =>
        matchedItemIds.includes(item.id) || aiResponseText.includes(item.name)
    );

    let pillsHtml = "";
    finalItems.forEach(item => {
        pillsHtml += `<span class="ai-ingredient-pill">✓ ${item.name} (₹${item.price})</span>`;
    });

    let botHtml = `<div>${aiResponseText.replace(/\n/g, "<br>")}</div>`;
    if (finalItems.length > 0) {
        botHtml += `<div style="margin-top:8px;">${pillsHtml}</div>`;
        botHtml += `<button class="btn btn-primary" onclick="addAIItemsToCart([${finalItems.map(i => i.id).join(',')}])" style="width:100%; margin-top:8px;">🛒 Add All ${finalItems.length} Items to Cart</button>`;
    }

    chatContainer.innerHTML += `<div class="ai-msg bot">${botHtml}</div>`;
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

function addAIItemsToCart(itemIds) {
    itemIds.forEach(id => addToCart(id));
    alert(`Added ${itemIds.length} ingredients to your basket!`);
    toggleAIChat();
}

// Live Delivery Tracker Simulation
function toggleTrackerModal(show) {
    document.getElementById("tracker-modal").classList.toggle("active", show);
    if (show) initTrackerMap();
}

function openTrackerAfterOrder() {
    closeOrderModal();
    toggleTrackerModal(true);
}

function initTrackerMap() {
    if (trackerMap) {
        trackerMap.invalidateSize();
        return;
    }

    const store = STORES.find(s => s.id === selectedStoreId);
    trackerMap = L.map('tracker-map-box').setView([store.lat, store.lng], 15);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap'
    }).addTo(trackerMap);

    L.marker([store.lat, store.lng]).addTo(trackerMap).bindPopup(`<b>${store.name}</b> (Store)`).openPopup();

    let riderLat = store.lat + 0.003;
    let riderLng = store.lng + 0.003;
    riderMarker = L.marker([riderLat, riderLng], {
        icon: L.divIcon({
            className: 'rider-pin',
            html: '<div style="font-size: 24px; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3));">🛵</div>',
            iconSize: [30, 30]
        })
    }).addTo(trackerMap).bindPopup("Delivery Partner (Ramesh) is on the way!");

    setTimeout(() => {
        document.getElementById("step-2").className = "stepper-item completed";
        document.getElementById("step-3").className = "stepper-item active";
        document.getElementById("rider-eta").innerText = "8 mins";
    }, 4000);
}

// Monthly History & Analytics Breakdown
function toggleHistoryModal(show) {
    const modal = document.getElementById("history-modal");
    modal.classList.toggle("active", show);
    if (show) renderOrderHistoryAndAnalytics();
}

function renderOrderHistoryAndAnalytics() {
    const list = document.getElementById("orders-history-list");

    let totalSpend = 0;
    let totalSaved = 0;

    orderHistory.forEach(ord => {
        totalSpend += Number(ord.total);
        totalSaved += Number(ord.savedFee || 0);
    });

    document.getElementById("stat-month-spend").innerText = `₹${totalSpend}`;
    document.getElementById("stat-month-orders").innerText = `${orderHistory.length}`;
    document.getElementById("stat-saved").innerText = `₹${totalSaved}`;

    if (orderHistory.length === 0) {
        list.innerHTML = `<p class="sub-text">No past orders found.</p>`;
        return;
    }

    list.innerHTML = orderHistory.map(ord => `
    <div style="border: 1px solid #e2e8f0; border-radius: 8px; padding: 10px; margin-bottom: 10px; background:#f8fafc;">
      <div style="display:flex; justify-content:space-between; font-weight:700; font-size:0.85rem;">
        <span>${ord.storeName}</span>
        <span style="color:#16a34a;">₹${ord.total}</span>
      </div>
      <div class="sub-text" style="margin:4px 0;">${ord.date} • ${ord.paymentMode}</div>
      <div style="font-size:0.8rem; color:#475569;">${ord.itemsSummary}</div>
    </div>
  `).join("");
}

// Product Details Modal
function openDetailModal(itemId) {
    currentDetailItemId = itemId;
    const store = STORES.find(s => s.id === selectedStoreId);
    const item = store.items.find(i => i.id === itemId);

    document.getElementById("modal-item-img").src = item.image;
    document.getElementById("modal-item-category").innerText = item.category;
    document.getElementById("modal-item-title").innerText = item.name;
    document.getElementById("modal-item-desc").innerText = item.description;
    document.getElementById("modal-item-unit").innerText = item.unit;
    document.getElementById("modal-item-shelf").innerText = item.shelfLife;
    document.getElementById("modal-item-stock").innerText = item.stock;
    document.getElementById("modal-item-price").innerText = item.price;
    document.getElementById("modal-item-rating").innerText = `${getAvgRating(item.reviews)} / 5`;

    document.getElementById("modal-add-btn").onclick = () => {
        addToCart(item.id);
        closeDetailModal();
    };

    renderReviewsList(item.reviews);
    document.getElementById("detail-modal").classList.add("active");
}

function closeDetailModal() {
    document.getElementById("detail-modal").classList.remove("active");
    currentDetailItemId = null;
}

function renderReviewsList(reviews) {
    const container = document.getElementById("modal-reviews-list");
    if (!reviews || reviews.length === 0) {
        container.innerHTML = `<p class="sub-text">No reviews yet. Be the first to review!</p>`;
        return;
    }

    container.innerHTML = reviews.map(r => `
    <div class="review-item">
      <div class="review-meta">
        <span>${r.name}</span>
        <span>${"⭐".repeat(r.rating)}</span>
      </div>
      <p style="color:#334155;">${r.comment}</p>
    </div>
  `).join("");
}

function submitReview(e) {
    e.preventDefault();
    const store = STORES.find(s => s.id === selectedStoreId);
    const item = store.items.find(i => i.id === currentDetailItemId);

    const rating = Number(document.getElementById("new-review-rating").value);
    const name = document.getElementById("new-reviewer-name").value;
    const comment = document.getElementById("new-review-comment").value;

    item.reviews.unshift({ name, rating, comment });
    renderReviewsList(item.reviews);
    renderProducts();
    document.getElementById("add-review-form").reset();
}

// Stores Map
function toggleMapModal() {
    const modal = document.getElementById("map-modal");
    modal.classList.toggle("active");
    if (modal.classList.contains("active")) setTimeout(() => initMap(), 200);
}

function initMap() {
    if (map) { map.invalidateSize(); return; }
    const defaultCenter = [28.6692, 77.4538];
    map = L.map('map-container').setView(defaultCenter, 14);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

    STORES.forEach(store => {
        const marker = L.marker([store.lat, store.lng]).addTo(map);
        marker.bindPopup(`
      <div style="font-family: sans-serif; font-size: 0.85rem;">
        <strong style="color:#16a34a; font-size:1rem;">${store.name}</strong><br>
        <span>📍 ${store.address}</span><br>
        <span>⚡ Delivery: <strong>${store.deliveryTime}</strong></span><br>
        <button onclick="selectStoreFromMap(${store.id})" style="margin-top:6px; background:#16a34a; color:#fff; border:none; padding:4px 8px; border-radius:4px; cursor:pointer; font-weight:bold;">
          Shop From Here
        </button>
      </div>
    `);
    });
}

function selectStoreFromMap(storeId) {
    changeStore(storeId);
    toggleMapModal();
}

function locateUserGPS() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((pos) => {
            const { latitude, longitude } = pos.coords;
            map.setView([latitude, longitude], 15);
            L.circleMarker([latitude, longitude], { color: '#0284c7', radius: 8 }).addTo(map).bindPopup("You are here").openPopup();
        }, () => alert("Could not fetch location."));
    }
}

// Auth Logic
function toggleAuthModal(show) { document.getElementById("auth-modal").classList.toggle("active", show); }
function switchAuthTab(tab) {
    document.getElementById("tab-login-btn").classList.toggle("active", tab === "login");
    document.getElementById("tab-signup-btn").classList.toggle("active", tab === "signup");
    document.getElementById("login-form").style.display = tab === "login" ? "block" : "none";
    document.getElementById("signup-form").style.display = tab === "signup" ? "block" : "none";
}

function handleSignup(e) {
    e.preventDefault();
    const name = document.getElementById("signup-name").value;
    const phone = document.getElementById("signup-phone").value;
    const address = document.getElementById("signup-address").value;
    const password = document.getElementById("signup-password").value;

    if (allUsers.find(u => u.phone === phone)) {
        alert("Phone number already registered!");
        return;
    }

    const newUser = { name, phone, address, password };
    allUsers.push(newUser);
    localStorage.setItem("ghar_registered_users", JSON.stringify(allUsers));
    currentUser = newUser;
    localStorage.setItem("ghar_current_user", JSON.stringify(currentUser));
    updateAuthUI();
    toggleAuthModal(false);
    alert("Account created and logged in!");
}

function handleLogin(e) {
    e.preventDefault();
    const phone = document.getElementById("login-phone").value;
    const password = document.getElementById("login-password").value;

    const found = allUsers.find(u => u.phone === phone && u.password === password);
    if (!found) {
        alert("Invalid phone or password!");
        return;
    }

    currentUser = found;
    localStorage.setItem("ghar_current_user", JSON.stringify(currentUser));
    updateAuthUI();
    toggleAuthModal(false);
}

function handleLogout() {
    currentUser = null;
    localStorage.removeItem("ghar_current_user");
    updateAuthUI();
}

function updateAuthUI() {
    const container = document.getElementById("auth-container");
    if (currentUser) {
        container.innerHTML = `
      <div style="display:flex; align-items:center; gap:8px;">
        <span style="font-size:0.85rem; font-weight:700;">👤 ${currentUser.name.split(" ")[0]}</span>
        <button class="btn btn-outline" onclick="toggleHistoryModal(true)">📊 Monthly Stats</button>
        <button class="btn btn-secondary" onclick="handleLogout()">Logout</button>
      </div>
    `;
        document.getElementById("cust-name").value = currentUser.name;
        document.getElementById("cust-phone").value = currentUser.phone;
        document.getElementById("cust-address").value = currentUser.address;
    } else {
        container.innerHTML = `<button class="btn btn-secondary" onclick="toggleAuthModal(true)">Login / Sign Up</button>`;
    }
}

// Order Dispatch via WhatsApp
function placeOrder(e) {
    e.preventDefault();
    const cartKeys = Object.keys(cart);
    if (cartKeys.length === 0) {
        alert("Please add items to your cart before ordering!");
        return;
    }

    const store = STORES.find(s => s.id === selectedStoreId);
    const name = document.getElementById("cust-name").value;
    const phone = document.getElementById("cust-phone").value;
    const address = document.getElementById("cust-address").value;
    const payment = document.getElementById("payment-mode").value;
    const grandTotal = document.getElementById("bill-grand-total").innerText;
    const subtotal = Number(document.getElementById("bill-subtotal").innerText);
    const savedDeliveryFee = subtotal >= 500 ? 30 : (subtotal >= 200 ? 15 : 0);

    if (Number(subtotal) < store.minOrder) {
        alert(`Minimum order value for ${store.name} is ₹${store.minOrder}.`);
        return;
    }

    let orderSummary = `*New Delivery Order for ${store.name}*\n\n`;
    orderSummary += `*Customer:* ${name} (${phone})\n`;
    orderSummary += `*Address:* ${address}\n`;
    orderSummary += `*Payment Mode:* ${payment}\n`;
    if (appliedCouponCode) orderSummary += `*Applied Coupon:* ${appliedCouponCode} (-₹${appliedCouponDiscount})\n\n`;
    orderSummary += `*Order Items:*\n`;

    let itemsSummaryArr = [];
    cartKeys.forEach(k => {
        const item = cart[k];
        orderSummary += `- ${item.name} (${item.unit}) x ${item.qty} = ₹${item.price * item.qty}\n`;
        itemsSummaryArr.push(`${item.name} (${item.qty})`);
    });

    orderSummary += `\n*Grand Total Payable: ₹${grandTotal}*`;

    orderHistory.unshift({
        id: Date.now(),
        storeName: store.name,
        total: grandTotal,
        savedFee: savedDeliveryFee + appliedCouponDiscount,
        paymentMode: payment,
        date: new Date().toLocaleDateString("en-IN", { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' }),
        itemsSummary: itemsSummaryArr.join(", ")
    });
    localStorage.setItem("ghar_orders_history", JSON.stringify(orderHistory));

    const whatsappUrl = `https://wa.me/${store.phone}?text=${encodeURIComponent(orderSummary)}`;

    document.getElementById("order-modal-details").innerText = `Order for ₹${grandTotal} dispatched to ${store.name}.`;
    document.getElementById("whatsapp-redirect-container").innerHTML = `
    <a href="${whatsappUrl}" target="_blank" class="btn btn-order" style="display:inline-block; text-decoration:none;">
      📲 Open WhatsApp & Send Order
    </a>
  `;
    document.getElementById("order-modal").classList.add("active");

    cart = {};
    appliedCouponDiscount = 0;
    appliedCouponCode = "";
    updateCartUI();
    document.getElementById("order-form").reset();
}

function closeOrderModal() {
    document.getElementById("order-modal").classList.remove("active");
}