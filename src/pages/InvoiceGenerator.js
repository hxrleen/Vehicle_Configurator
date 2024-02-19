// InvoiceGenerator.js
import React, { useEffect, useState } from "react";
import jsPDF from "jspdf";

function InvoiceGenerator({ price, orderSize }) {
  const [totalPrice, setTotalPrice] = useState(null);

  useEffect(() => {
    // Calculate total price based on order size and model price
    if (price !== null && orderSize !== null) {
      const basePrice = price * orderSize;
      const taxRate = 0.1;
      const taxAmount = basePrice * taxRate;
      const totalPrice = basePrice + taxAmount;
      setTotalPrice(totalPrice);
    }
  }, [price, orderSize]);

  const generateAndDownloadPDF = () => {
    const doc = new jsPDF();
    const currentDate = new Date().toLocaleDateString();

    // Header
    doc.setFontSize(18);
    doc.text("Vehicle Configurator Invoice", 10, 20);

    // Date
    doc.setFontSize(12);
    doc.text(`Order Date: ${currentDate}`, 10, 30);

    // Table
    const tableData = [
      ["Model Price", `Rs ${price}`],
      ["Order Size", orderSize],
      ["Total Price (Including Tax)", `Rs ${totalPrice} /-`],
    ];
    doc.autoTable({
      startY: 40,
      head: [["Description", "Amount"]],
      body: tableData,
    });

    // Styling
    doc.setLineWidth(0.5);
    doc.line(
      10,
      doc.autoTable.previous.finalY + 10,
      200,
      doc.autoTable.previous.finalY + 10
    ); // Horizontal line

    // Footer
    doc.setFontSize(10);
    doc.text(
      "Thank you for your order!",
      10,
      doc.autoTable.previous.finalY + 20
    );

    // Save the PDF with a filename
    doc.save("invoice.pdf");
  };

  const handleConfirmOrder = () => {
    // Confirm order logic
    alert("Order confirmed!");
    generateAndDownloadPDF();
    // Navigate or perform additional actions if needed
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center" }}>Invoice</h1>
      <div
        style={{
          border: "1px solid #ccc",
          borderRadius: "10px",
          maxWidth: "500px",
          margin: "0 auto",
          padding: "20px",
        }}>
        <table style={{ width: "100%" }}>
          <tbody>
            <tr>
              <td>Model Price:</td>
              <td>Rs {price}</td>
            </tr>
            <tr>
              <td>Order Size:</td>
              <td>{orderSize}</td>
            </tr>
            {/* Add other details as needed */}
            <tr>
              <td>Total Price (Including Tax 10%):</td>
              <td>Rs {totalPrice} /-</td>
            </tr>
          </tbody>
        </table>
      </div>
      <button
        style={{
          display: "block",
          margin: "20px auto",
          padding: "10px 20px",
          borderRadius: "5px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          cursor: "pointer",
        }}
        onClick={handleConfirmOrder}>
        Confirm Order
      </button>
    </div>
  );
}

export default InvoiceGenerator;
