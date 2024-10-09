// Gunakan fungsi di bawah ini untuk menghasilkan id yang unik
function generateUniqueId() {
  return `_${Math.random().toString(36).slice(2, 9)}`;
}

// TODO: buatlah variabel yang menampung data orders
let orders = [];

// TODO: selesaikan fungsi addOrder
function addOrder(customerName, items) {
  const newOrder = {
    id: generateUniqueId(), 
    customerName: customerName,
    items: items, 
    totalPrice: 0, 
    status: 'Menungggu' 
  };

  orders.push(newOrder);
}

// TODO: selesaikan fungsi updateOrderStatus
function updateOrderStatus(orderId, status) {
  const result = orders.find((order) => order.id === orderId);

  if(result) {
    result.status = status
  }
}

// TODO: selesaikan fungsi calculateTotalRevenue dari order yang berstatus Selesai
function calculateTotalRevenue() {
  const result = orders.filter((order) => order.status === "Selesai");

  if(result) {
    return result.reduce((totalPrice, order) => {
      const orderTotal = order.items.reduce((total, item) => total + item.price, 0);
      return totalPrice + orderTotal;
    }, 0);
  }
}

// TODO: selesaikan fungsi deleteOrder
function deleteOrder(id) {
  const result = orders.filter(order => order.id !== id);
  return result;
}

export {
  orders,
  addOrder,
  updateOrderStatus,
  calculateTotalRevenue,
  deleteOrder,
};
