
const items = [
    { name: "Bisiklet", price: 100 },
    { name: "TV", price: 2000 },
    { name: "Kitap", price: 50 },
    { name: "Telefon", price: 3000 },
    { name: "Bilgisayar", price: 6000 },
    { name: "Klavye", price: 200 }
  ];
  
  const filteredItems = items.filter(item => 
     item.price <= 200
  );
  
  console.log(filteredItems);