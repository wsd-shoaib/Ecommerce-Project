import React from "react";
import "./Wishlist.css";

const products = [
  {
    id: 1,
    title: "Essence Mascara Lash Princess",
    description:
      "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
    category: "beauty",
    price: 9.99,
    discountPercentage: 10.48,
    rating: 2.56,
    stock: 99,
    tags: ["beauty", "mascara"],
    brand: "Essence",
    sku: "BEA-ESS-ESS-001",
    weight: 4,
    dimensions: {
      width: 15.14,
      height: 13.08,
      depth: 22.99,
    },
    warrantyInformation: "1 week warranty",
    shippingInformation: "Ships in 3-5 business days",
    availabilityStatus: "In Stock",
    reviews: [
      {
        rating: 3,
        comment: "Would not recommend!",
        date: "2025-04-30T09:41:02.053Z",
        reviewerName: "Eleanor Collins",
        reviewerEmail: "eleanor.collins@x.dummyjson.com",
      },
      {
        rating: 4,
        comment: "Very satisfied!",
        date: "2025-04-30T09:41:02.053Z",
        reviewerName: "Lucas Gordon",
        reviewerEmail: "lucas.gordon@x.dummyjson.com",
      },
      {
        rating: 5,
        comment: "Highly impressed!",
        date: "2025-04-30T09:41:02.053Z",
        reviewerName: "Eleanor Collins",
        reviewerEmail: "eleanor.collins@x.dummyjson.com",
      },
    ],
    returnPolicy: "No return policy",
    minimumOrderQuantity: 48,
    meta: {
      createdAt: "2025-04-30T09:41:02.053Z",
      updatedAt: "2025-04-30T09:41:02.053Z",
      barcode: "5784719087687",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
    images: [
      "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp",
  },
  {
    id: 2,
    title: "Eyeshadow Palette with Mirror",
    description:
      "The Eyeshadow Palette with Mirror offers a versatile range of eyeshadow shades for creating stunning eye looks. With a built-in mirror, it's convenient for on-the-go makeup application.",
    category: "beauty",
    price: 19.99,
    discountPercentage: 18.19,
    rating: 2.86,
    stock: 34,
    tags: ["beauty", "eyeshadow"],
    brand: "Glamour Beauty",
    sku: "BEA-GLA-EYE-002",
    weight: 9,
    dimensions: {
      width: 9.26,
      height: 22.47,
      depth: 27.67,
    },
    warrantyInformation: "1 year warranty",
    shippingInformation: "Ships in 2 weeks",
    availabilityStatus: "In Stock",
    reviews: [
      {
        rating: 5,
        comment: "Great product!",
        date: "2025-04-30T09:41:02.053Z",
        reviewerName: "Savannah Gomez",
        reviewerEmail: "savannah.gomez@x.dummyjson.com",
      },
      {
        rating: 4,
        comment: "Awesome product!",
        date: "2025-04-30T09:41:02.053Z",
        reviewerName: "Christian Perez",
        reviewerEmail: "christian.perez@x.dummyjson.com",
      },
      {
        rating: 1,
        comment: "Poor quality!",
        date: "2025-04-30T09:41:02.053Z",
        reviewerName: "Nicholas Bailey",
        reviewerEmail: "nicholas.bailey@x.dummyjson.com",
      },
    ],
    returnPolicy: "7 days return policy",
    minimumOrderQuantity: 20,
    meta: {
      createdAt: "2025-04-30T09:41:02.053Z",
      updatedAt: "2025-04-30T09:41:02.053Z",
      barcode: "9170275171413",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
    images: [
      "https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/1.webp",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/thumbnail.webp",
  },
  {
    id: 3,
    title: "Powder Canister",
    description:
      "The Powder Canister is a finely milled setting powder designed to set makeup and control shine. With a lightweight and translucent formula, it provides a smooth and matte finish.",
    category: "beauty",
    price: 14.99,
    discountPercentage: 9.84,
    rating: 4.64,
    stock: 89,
    tags: ["beauty", "face powder"],
    brand: "Velvet Touch",
    sku: "BEA-VEL-POW-003",
    weight: 8,
    dimensions: {
      width: 29.27,
      height: 27.93,
      depth: 20.59,
    },
    warrantyInformation: "3 months warranty",
    shippingInformation: "Ships in 1-2 business days",
    availabilityStatus: "In Stock",
    reviews: [
      {
        rating: 4,
        comment: "Would buy again!",
        date: "2025-04-30T09:41:02.053Z",
        reviewerName: "Alexander Jones",
        reviewerEmail: "alexander.jones@x.dummyjson.com",
      },
      {
        rating: 5,
        comment: "Highly impressed!",
        date: "2025-04-30T09:41:02.053Z",
        reviewerName: "Elijah Cruz",
        reviewerEmail: "elijah.cruz@x.dummyjson.com",
      },
      {
        rating: 1,
        comment: "Very dissatisfied!",
        date: "2025-04-30T09:41:02.053Z",
        reviewerName: "Avery Perez",
        reviewerEmail: "avery.perez@x.dummyjson.com",
      },
    ],
    returnPolicy: "No return policy",
    minimumOrderQuantity: 22,
    meta: {
      createdAt: "2025-04-30T09:41:02.053Z",
      updatedAt: "2025-04-30T09:41:02.053Z",
      barcode: "8418883906837",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
    images: [
      "https://cdn.dummyjson.com/product-images/beauty/powder-canister/1.webp",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/product-images/beauty/powder-canister/thumbnail.webp",
  },
  {
    id: 4,
    title: "Red Lipstick",
    description:
      "The Red Lipstick is a classic and bold choice for adding a pop of color to your lips. With a creamy and pigmented formula, it provides a vibrant and long-lasting finish.",
    category: "beauty",
    price: 12.99,
    discountPercentage: 12.16,
    rating: 4.36,
    stock: 91,
    tags: ["beauty", "lipstick"],
    brand: "Chic Cosmetics",
    sku: "BEA-CHI-LIP-004",
    weight: 1,
    dimensions: {
      width: 18.11,
      height: 28.38,
      depth: 22.17,
    },
    warrantyInformation: "3 year warranty",
    shippingInformation: "Ships in 1 week",
    availabilityStatus: "In Stock",
    reviews: [
      {
        rating: 4,
        comment: "Great product!",
        date: "2025-04-30T09:41:02.053Z",
        reviewerName: "Liam Garcia",
        reviewerEmail: "liam.garcia@x.dummyjson.com",
      },
      {
        rating: 5,
        comment: "Great product!",
        date: "2025-04-30T09:41:02.053Z",
        reviewerName: "Ruby Andrews",
        reviewerEmail: "ruby.andrews@x.dummyjson.com",
      },
      {
        rating: 5,
        comment: "Would buy again!",
        date: "2025-04-30T09:41:02.053Z",
        reviewerName: "Clara Berry",
        reviewerEmail: "clara.berry@x.dummyjson.com",
      },
    ],
    returnPolicy: "7 days return policy",
    minimumOrderQuantity: 40,
    meta: {
      createdAt: "2025-04-30T09:41:02.053Z",
      updatedAt: "2025-04-30T09:41:02.053Z",
      barcode: "9467746727219",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
    images: [
      "https://cdn.dummyjson.com/product-images/beauty/red-lipstick/1.webp",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/product-images/beauty/red-lipstick/thumbnail.webp",
  },
];

const wishlistIds = [1, 2, 3, 4];

const Wishlist = () => {
  const wishlistItems = products.filter((product) =>
    wishlistIds.includes(product.id)
  );

  return (
    <section className="wishlist-section">
      <div className="wishlist-title">
        <h2>My Wishlist 💖</h2>
        <p>Here are your favorite picks. Buy them before they’re gone!</p>
      </div>

      <div className="wishlist-grid">
        {wishlistItems.map((product) => (
          <div className="wishlist-item" key={product.id}>
            <div className="wishlist-img-wrapper">
              <img src={product.thumbnail} alt={product.title} />
            </div>
            <div className="wishlist-content">
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <button className="buy-btn">Buy Now</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Wishlist;
