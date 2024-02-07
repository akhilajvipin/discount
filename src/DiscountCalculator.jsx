import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';


function DiscountCalculator() {
  const [originalPrice, setOriginalPrice] = useState('');
  const [discountPercentage, setDiscountPercentage] = useState('');
  const [finalPrice, setFinalPrice] = useState('');

  const calculateFinal = () => {
    const originalPriceFloat = parseFloat(originalPrice);
    const discountPercentageFloat = parseFloat(discountPercentage);

    if (isNaN(originalPriceFloat) || isNaN(discountPercentageFloat)) {
      alert('Please enter valid numbers');
      return;
    }

    const discountAmount = originalPriceFloat * (discountPercentageFloat / 100);
    const finalPriceFloat = originalPriceFloat - discountAmount;
    setFinalPrice(finalPriceFloat.toFixed(2));
  };

  return (
    <div  >     
    <div className="discount-calculator "style={{marginTop:'5%'}}>
        <img style={{marginLeft:'100px'}} className='w-100' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJJXRt2RE-l-pBm1hIdJJAnV0j5vFXL35qnAAF4jBskrLwWSk0zddVGmYjXvxBb6e1MXg&usqp=CAU" alt="" />
      <div className="input-group">
        <label>Original Price:</label>
        <input
          type="number"
          value={originalPrice}
          onChange={(e) => setOriginalPrice(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label>Discount Percentage:</label>
        <input
          type="number"
          value={discountPercentage}
          onChange={(e) => setDiscountPercentage(e.target.value)}
        />
      </div>
      <button  onClick={calculateFinal}>Calculate Price</button>
      {finalPrice && (
        <Card style={{ width: '37rem' }} className='mt-5'>  
        <Card.Body>
          <Card.Title>
            <h1 style={{color:'black', marginLeft:'12%'}}>Final Price: {finalPrice}</h1>
          </Card.Title>
          <Card.Text>
          <h2></h2>
          </Card.Text>
        </Card.Body>
      </Card>
      )}
    </div>
    
    </div>
  );
}

export default DiscountCalculator;
